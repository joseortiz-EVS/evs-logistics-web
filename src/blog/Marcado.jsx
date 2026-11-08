// Convierte el texto de un artículo (marcado ligero) en elementos de React con el estilo del sitio.
//   ## Título de sección      → h2 con ancla para el índice
//   ### Subtítulo             → h3
//   - punto                   → lista
//   1. paso                   → lista numerada
//   | col | col |             → tabla (primera fila es encabezado)
//   > texto                   → recuadro destacado
//   [texto](/ruta/)           → enlace (los internos navegan sin recargar)
//   **negritas**
import { T } from '../tema'

export const idDe = (texto) => texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// Navegación interna sin recargar: empuja la dirección y deja que App la lea.
export function irA(href) {
  window.history.pushState(null, '', href)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

const estiloEnlace = { color: T.acento, fontWeight: 600, textDecoration: 'underline', textDecorationColor: 'rgba(49,130,206,0.35)', textUnderlineOffset: '3px' }

export function Inline({ texto }) {
  const partes = []
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g
  let ultimo = 0, m, i = 0
  while ((m = re.exec(texto))) {
    if (m.index > ultimo) partes.push(texto.slice(ultimo, m.index))
    if (m[1]) {
      const href = m[2]
      const interno = href.startsWith('/') && !href.startsWith('/a4')
      const externo = !href.startsWith('/')
      partes.push(
        <a key={i++} href={href} style={estiloEnlace} target={externo ? '_blank' : undefined} rel={externo ? 'noopener' : undefined}
          onClick={interno ? (e) => { e.preventDefault(); irA(href) } : undefined}>{m[1]}</a>
      )
    } else {
      partes.push(<strong key={i++} style={{ color: T.texto, fontWeight: 700 }}>{m[3]}</strong>)
    }
    ultimo = m.index + m[0].length
  }
  if (ultimo < texto.length) partes.push(texto.slice(ultimo))
  return <>{partes}</>
}

const p = { fontSize: '17px', lineHeight: 1.85, color: T.suave, margin: '0 0 20px' }

export function secciones(cuerpo) {
  // Devuelve [{ id, titulo }] de los encabezados ## para armar el índice
  return cuerpo.split('\n').filter(l => l.startsWith('## ')).map(l => { const t = l.slice(3).trim(); return { id: idDe(t), titulo: t } })
}

export default function Marcado({ cuerpo, isMobile }) {
  const lineas = cuerpo.split('\n')
  const out = []
  let i = 0, k = 0
  while (i < lineas.length) {
    const l = lineas[i]
    if (!l.trim()) { i++; continue }
    if (l.startsWith('## ')) {
      const t = l.slice(3).trim()
      out.push(<h2 key={k++} id={idDe(t)} style={{ fontSize: 'clamp(22px, 3.4vw, 30px)', fontWeight: 800, color: T.texto, margin: '48px 0 16px', lineHeight: 1.25, scrollMarginTop: '90px' }}>{t}</h2>)
      i++; continue
    }
    if (l.startsWith('### ')) {
      out.push(<h3 key={k++} style={{ fontSize: '19px', fontWeight: 700, color: T.texto, margin: '28px 0 10px' }}>{l.slice(4).trim()}</h3>)
      i++; continue
    }
    if (l.startsWith('> ')) {
      const buf = []
      while (i < lineas.length && lineas[i].startsWith('> ')) { buf.push(lineas[i].slice(2)); i++ }
      out.push(<div key={k++} style={{ background: T.superficieAlta, border: `1px solid ${T.borde}`, borderLeft: `4px solid ${T.acento}`, borderRadius: '12px', padding: '16px 20px', margin: '0 0 22px', fontSize: '16px', lineHeight: 1.75, color: T.texto }}><Inline texto={buf.join(' ')} /></div>)
      continue
    }
    if (l.startsWith('- ')) {
      const items = []
      while (i < lineas.length && lineas[i].startsWith('- ')) { items.push(lineas[i].slice(2)); i++ }
      out.push(<ul key={k++} style={{ margin: '0 0 22px', paddingLeft: '22px' }}>{items.map((it, j) => <li key={j} style={{ ...p, margin: '0 0 8px' }}><Inline texto={it} /></li>)}</ul>)
      continue
    }
    if (/^\d+\. /.test(l)) {
      const items = []
      while (i < lineas.length && /^\d+\. /.test(lineas[i])) { items.push(lineas[i].replace(/^\d+\. /, '')); i++ }
      out.push(<ol key={k++} style={{ margin: '0 0 22px', paddingLeft: '22px' }}>{items.map((it, j) => <li key={j} style={{ ...p, margin: '0 0 10px' }}><Inline texto={it} /></li>)}</ol>)
      continue
    }
    if (l.startsWith('|')) {
      const filas = []
      while (i < lineas.length && lineas[i].startsWith('|')) { filas.push(lineas[i].split('|').slice(1, -1).map(c => c.trim())); i++ }
      const [cab, ...resto] = filas.filter(f => !f.every(c => /^-+$/.test(c)))
      out.push(
        <div key={k++} style={{ background: T.superficie, border: `1px solid ${T.borde}`, borderRadius: '12px', overflow: 'auto', margin: '0 0 24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: isMobile ? '13px' : '14px' }}>
            <thead><tr style={{ background: T.superficieAlta }}>{cab.map((c, j) => <th key={j} style={{ textAlign: 'left', padding: '11px 14px', color: T.tenue, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>{c}</th>)}</tr></thead>
            <tbody>{resto.map((f, r) => <tr key={r} style={{ borderTop: `1px solid ${T.borde}` }}>{f.map((c, j) => <td key={j} style={{ padding: '11px 14px', color: j === 0 ? T.texto : T.suave, fontWeight: j === 0 ? 600 : 400, lineHeight: 1.5 }}><Inline texto={c} /></td>)}</tr>)}</tbody>
          </table>
        </div>
      )
      continue
    }
    // párrafo: junta líneas hasta la siguiente en blanco
    const buf = []
    while (i < lineas.length && lineas[i].trim() && !/^(## |### |- |> |\||\d+\. )/.test(lineas[i])) { buf.push(lineas[i]); i++ }
    out.push(<p key={k++} style={p}><Inline texto={buf.join(' ')} /></p>)
  }
  return <>{out}</>
}
