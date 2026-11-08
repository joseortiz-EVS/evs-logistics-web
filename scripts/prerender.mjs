// Prerenderizado. Después de `vite build`, abre cada dirección del sitio en Chrome, espera a que
// React la pinte y guarda el HTML resultante en dist/<ruta>/index.html. Google recibe el texto
// completo de cada pantalla; el visitante ve exactamente el mismo sitio.
// También escribe dist/sitemap.xml y dist/robots.txt.      Uso:  npm run build:seo
import { spawn, spawnSync } from 'node:child_process'
import { writeFileSync, mkdirSync, readFileSync, existsSync, statSync, mkdtempSync } from 'node:fs'
import { createServer } from 'node:http'
import { join, extname, dirname } from 'node:path'
import { tmpdir } from 'node:os'
import { fileURLToPath } from 'node:url'

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(RAIZ, 'dist')
const DOMINIO = 'https://www.evslogist.com'
const CHROME = process.env.CHROME || process.env.CHROME_BIN || ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium-browser', '/usr/bin/chromium'].find(existsSync)
const conTiempo = (promesa, ms, que) => Promise.race([promesa, new Promise((_, rechazar) => setTimeout(() => rechazar(new Error(`tiempo agotado: ${que}`)), ms))])
const CDP = 9339   // el puerto del servidor estático se elige libre
const sleep = ms => new Promise(r => setTimeout(r, ms))

// Mismas direcciones que src/rutas.js
const PAISES = ['mx', 'co', 'do', 'ec']
const SERVICIOS = ['forwarding', 'gestion-aduanal', 'agente-de-compras', 'revision-en-origen', 'transporte-terrestre', '3pl']
const pre = p => p === 'mx' ? '' : `/${p}`
import { SLUGS as ARTICULOS } from '../src/blog/indice.js'
const RUTAS = [...ARTICULOS.map(a => `/blog/${a}/`), ...PAISES.flatMap(p => [`${pre(p)}/`, `${pre(p)}/nosotros/`, `${pre(p)}/servicios/`, ...SERVICIOS.map(s => `${pre(p)}/servicios/${s}/`), `${pre(p)}/galeria/`, `${pre(p)}/contacto/`, `${pre(p)}/blog/`, `${pre(p)}/curso/`])]

console.log('→ vite build')
const b = spawnSync(join(RAIZ, 'node_modules/.bin/vite'), ['build'], { cwd: RAIZ, stdio: 'inherit' })
if (b.status !== 0) process.exit(b.status)

// Servidor estático con fallback a index.html (como GitHub Pages con 404.html)
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp' }
const srv = createServer((req, res) => {
  let f = join(DIST, decodeURIComponent(req.url.split('?')[0]))
  if (!existsSync(f) || statSync(f).isDirectory()) f = join(DIST, 'index.html')
  res.writeHead(200, { 'Content-Type': MIME[extname(f)] || 'application/octet-stream' })
  res.end(readFileSync(f))
}).listen(0)
const PUERTO = srv.address().port

let n = 0, chrome, ws
try {
if (!CHROME) throw new Error('No encuentro Chrome. Indícalo con la variable CHROME=/ruta/a/chrome')
let errorChrome = null
chrome = spawn(CHROME, ['--headless=new', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', `--remote-debugging-port=${CDP}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), 'prer-'))}`, '--no-first-run', '--hide-scrollbars', '--window-size=1440,900', 'about:blank'], { stdio: 'ignore' })
chrome.on('error', e => { errorChrome = e })
let ok = false
for (let i = 0; i < 50 && !ok; i++) { if (errorChrome) throw new Error(`no pude abrir Chrome en ${CHROME}: ${errorChrome.message}`); try { await fetch(`http://127.0.0.1:${CDP}/json/version`); ok = true } catch { await sleep(200) } }
if (!ok) throw new Error('Chrome no respondió')
const tgt = await (await fetch(`http://127.0.0.1:${CDP}/json/new?about:blank`, { method: 'PUT' })).json()
ws = new WebSocket(tgt.webSocketDebuggerUrl); await conTiempo(new Promise(r => ws.onopen = r), 15000, 'conectar con Chrome')
let id = 0; const pend = new Map()
ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pend.has(m.id)) { pend.get(m.id)(m.result); pend.delete(m.id) } }
const cdp = (method, params = {}) => new Promise(r => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })) })
await cdp('Page.enable'); await cdp('Runtime.enable')
await cdp('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false })
const ev = async x => (await cdp('Runtime.evaluate', { expression: x, returnByValue: true, awaitPromise: true })).result.value

for (const ruta of RUTAS) {
  try {
    await conTiempo((async () => {
      await cdp('Page.navigate', { url: `http://127.0.0.1:${PUERTO}${ruta}` })
      await sleep(4500)
      await ev(`try{localStorage.clear()}catch(e){}`)
      const html = await ev('"<!DOCTYPE html>" + document.documentElement.outerHTML')
      const titulo = await ev('document.title')
      const palabras = (await ev('document.getElementById("root").innerText')).split(/\s+/).filter(Boolean).length
      if (!html.includes('id="root"') || palabras < 30) throw new Error(`salió vacía (${palabras} palabras)`)
      mkdirSync(join(DIST, ruta), { recursive: true })
      writeFileSync(join(DIST, ruta, 'index.html'), html)
      n++; console.log(`✓ ${ruta.padEnd(36)} ${String(palabras).padStart(4)} palabras  ${titulo}`)
    })(), 30000, ruta)
  } catch (e) { console.error(`✗ ${ruta}: ${e.message}`) }
}
} catch (e) {
  console.error(`\n⚠ Prerenderizado no disponible (${e.message}). El sitio se publica igual que antes, sin HTML pregenerado.`)
} finally {
  try { ws && ws.close() } catch {}
  try { chrome && chrome.kill() } catch {}
  srv.close()
}

const urls = RUTAS.map(r => `  <url><loc>${DOMINIO}${r}</loc><changefreq>monthly</changefreq></url>`).join('\n')
writeFileSync(join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
writeFileSync(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /portal\nSitemap: ${DOMINIO}/sitemap.xml\n`)
console.log(`\n${n}/${RUTAS.length} páginas prerenderizadas + sitemap.xml + robots.txt → dist/`)
if (n < RUTAS.length) console.warn(`⚠ ${RUTAS.length - n} páginas sin prerenderizar: Google las verá como hoy (vacías) hasta la siguiente publicación.`)
