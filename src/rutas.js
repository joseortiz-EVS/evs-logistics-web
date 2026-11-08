// Direcciones del sitio público. Cada pantalla de cada país tiene su dirección:
//   /            /nosotros/   /servicios/   /servicios/forwarding/   /galeria/   /contacto/     (México, en la raíz)
//   /co/  /co/nosotros/  ...   (Colombia)      /do/ ...  (Rep. Dominicana)      /ec/ ...  (Ecuador)
// La navegación sigue siendo por pantallas; la dirección solo refleja en cuál estás.

export const PAISES_RUTA = ['co', 'do', 'ec']
export const SERVICIOS_SLUG = ['forwarding', 'gestion-aduanal', 'agente-de-compras', 'revision-en-origen', 'transporte-terrestre', '3pl']
const PANTALLAS = { '': 'inicio', nosotros: 'nosotros', servicios: 'servicios', galeria: 'galeria', contacto: 'contacto', blog: 'blog', curso: 'curso' }

export const prefijo = (pais) => PAISES_RUTA.includes(pais) ? `/${pais}` : ''

// '/co/servicios/forwarding/' → { pais: 'co', page: 'servicios', servicio: 'forwarding' }
export function leerRuta(pathname) {
  const partes = pathname.split('/').filter(Boolean)
  let pais = 'mx'
  if (PAISES_RUTA.includes(partes[0])) pais = partes.shift()
  const page = PANTALLAS[partes[0] || ''] ?? null
  const servicio = page === 'servicios' && SERVICIOS_SLUG.includes(partes[1]) ? partes[1] : null
  const articulo = page === 'blog' && partes[1] ? partes[1] : null
  return { pais, page, servicio, articulo }
}

export function rutaDe(pais, page = 'inicio', servicio = null, articulo = null) {
  const base = prefijo(pais)
  if (!page || page === 'inicio') return base + '/'
  if (page === 'servicios' && servicio) return `${base}/servicios/${servicio}/`
  if (page === 'blog' && articulo) return `/blog/${articulo}/`   // los artículos viven solo en la raíz (México)
  return `${base}/${page}/`
}
