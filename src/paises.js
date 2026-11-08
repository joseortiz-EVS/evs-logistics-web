// País del visitante. El país lo manda la dirección: /co/... es Colombia, la raíz es México.
// La primera visita se detecta por IP y se manda a la dirección de su país; después se recuerda.
// Para probar sin viajar: /?pais=co  (o do, ec, mx)
import { leerRuta, rutaDe } from './rutas'

export const PAISES = {
  mx: { cod: 'mx', nombre: 'México', corto: 'México', bandera: '🇲🇽', desde: 2016 },
  co: { cod: 'co', nombre: 'Colombia', corto: 'Colombia', bandera: '🇨🇴', desde: 2020 },
  do: { cod: 'do', nombre: 'República Dominicana', corto: 'Rep. Dominicana', bandera: '🇩🇴', desde: 2021 },
  ec: { cod: 'ec', nombre: 'Ecuador', corto: 'Ecuador', bandera: '🇪🇨', desde: 2022 }
}
export const ORDEN = ['mx', 'co', 'do', 'ec']
const ANIO = new Date().getFullYear()

const q = new URLSearchParams(window.location.search)
const ruta = leerRuta(window.location.pathname)
const forzado = q.get('pais')
let guardado = null
try { guardado = localStorage.getItem('evs_pais') } catch {}
const esBot = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit/i.test(navigator.userAgent) || navigator.webdriver

const cod = ruta.pais
export const PAIS = { ...PAISES[cod], anios: ANIO - PAISES[cod].desde }
export const LLEGO_POR_UBICACION = q.get('auto') === '1'
const esSitio = ruta.page !== null   // fuera del sitio público (/portal, /admin, tarjetas de vendedor) no se toca nada

if (!esSitio) {
  // nada
} else if (forzado && PAISES[forzado] && forzado !== cod) {
  // Atajo ?pais=co: ir a la dirección de ese país, misma pantalla
  try { localStorage.setItem('evs_pais', forzado) } catch {}
  window.location.replace(rutaDe(forzado, ruta.page, ruta.servicio) + (LLEGO_POR_UBICACION ? '?auto=1' : ''))
} else if (cod === 'mx' && guardado && guardado !== 'mx' && PAISES[guardado] && !forzado && !esBot && !ruta.articulo) {
  // (los artículos del blog solo existen en la raíz: ahí no se redirige)
  // Quien ya eligió país y entra por la raíz, va a su país (salvo que pida México con ?pais=mx)
  window.location.replace(rutaDe(guardado, ruta.page, ruta.servicio))
} else {
  try { localStorage.setItem('evs_pais', cod) } catch {}
}

export function cambiarPais(k) {
  try { localStorage.setItem('evs_pais', k) } catch {}
  const r = leerRuta(window.location.pathname)
  window.location.href = rutaDe(k, r.page, r.servicio) + (k === 'mx' ? '?pais=mx' : '')
}

// Primera visita sin elección previa: detectar por IP y mandar a su país. Nunca con robots.
if (esSitio && !forzado && !guardado && !esBot && cod === 'mx') {
  fetch('https://ipapi.co/json/').then(r => r.json()).then(j => {
    const k = (j.country_code || '').toLowerCase()
    if (PAISES[k] && k !== 'mx') {
      try { localStorage.setItem('evs_pais', k) } catch {}
      window.location.replace(rutaDe(k, ruta.page, ruta.servicio) + '?auto=1')
    }
  }).catch(() => {})
}
