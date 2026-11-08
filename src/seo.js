// Lo que Google lee de cada dirección: título, descripción, canonical, hreflang y Open Graph.
// Los textos están aquí para poder revisarlos y cambiarlos sin tocar el resto del sitio.
import { PAISES, ORDEN } from './paises'
import { rutaDe } from './rutas'
import { FAQ as FAQ_FORWARDING } from './components/ForwardingMX'
import { FAQ as FAQ_ADUANA } from './components/GestionAduanalMX'
import { FAQ as FAQ_COMPRAS } from './components/AgenteComprasMX'
import { FAQ as FAQ_REVISION } from './components/RevisionOrigenMX'
import { FAQ as FAQ_TERRESTRE } from './components/TransporteTerrestreMX'
import { FAQ as FAQ_3PL } from './components/TresPLMX'
import { articuloPorSlug } from './blog/indice'

export const DOMINIO = 'https://www.evslogist.com'
const IDIOMA = { mx: 'es-MX', co: 'es-CO', do: 'es-DO', ec: 'es-EC' }
const MARCA = ' | EVS Logistics'

const SERVICIOS = {
  'forwarding':           p => ({ title: `Forwarding marítimo y aéreo China–${p.corto}${MARCA}`, desc: `Carga completa (FCL), consolidada (LCL) y aérea de China a ${p.nombre}, coordinada puerta a puerta con seguimiento y documentación completa.` }),
  'gestion-aduanal':      p => ({ title: `Gestión aduanal en ${p.nombre}${MARCA}`, desc: `Despacho de importación y exportación en ${p.nombre}: clasificación arancelaria, permisos, cumplimiento normativo y auditoría aduanera.` }),
  'agente-de-compras':    p => ({ title: `Agente de compras en China para ${p.nombre}${MARCA}`, desc: `Negociamos con proveedores en China en tu nombre: desarrollo de producto, marca propia, control de calidad y asesoría comercial para importadores de ${p.nombre}.` }),
  'revision-en-origen':   p => ({ title: `Revisión en origen antes del embarque a ${p.nombre}${MARCA}`, desc: `Inspección de calidad, cantidad y empaque de tu mercancía en China antes de embarcar a ${p.nombre}, con reporte fotográfico en 48 horas.` }),
  'transporte-terrestre': p => ({ title: `Transporte terrestre en ${p.nombre}${MARCA}`, desc: `Flete terrestre con rastreo GPS, seguro de carga y entregas programadas para tu mercancía en ${p.nombre}.` }),
  '3pl':                  p => ({ title: `3PL: almacenaje y distribución en ${p.nombre}${MARCA}`, desc: `Almacenamiento, gestión de inventarios, preparación de pedidos, cross-docking y última milla en ${p.nombre}.` }),
}

export function metaDe(pais, page, servicio, articulo) {
  const p = PAISES[pais]
  if (page === 'blog' && articulo) {
    const a = articuloPorSlug(articulo)
    if (a) return { title: `${a.titulo}${MARCA}`, desc: a.descripcion }
    return { title: `Artículo no encontrado${MARCA}`, desc: 'Este artículo no existe o cambió de dirección.' }
  }
  switch (page) {
    case 'nosotros': return { title: `Presencia global: México, China, Colombia, Rep. Dominicana y Ecuador${MARCA}`, desc: `Operamos en 5 países conectando Latinoamérica con Asia. En ${p.nombre} desde ${p.desde}.` }
    case 'servicios':
      if (servicio && SERVICIOS[servicio]) return SERVICIOS[servicio](p)
      return { title: `Servicios logísticos en ${p.nombre}${MARCA}`, desc: `Forwarding marítimo y aéreo, gestión aduanal, agente de compras en China, revisión en origen, transporte terrestre y 3PL para importadores de ${p.nombre}.` }
    case 'galeria': return { title: `Galería: nuestra operación${MARCA}`, desc: 'Bodegas, contenedores y embarques de EVS Logistics en China y Latinoamérica.' }
    case 'blog': return { title: `Blog: importar de China a ${p.nombre}${MARCA}`, desc: `Guías y artículos de EVS Logistics sobre importación, flete, aduana y compras en China para ${p.nombre}.` }
    case 'curso': return { title: `Curso para importar de China a ${p.nombre}${MARCA}`, desc: `Aprende a importar de China a ${p.nombre} con el equipo de EVS Logistics.` }
    case 'contacto': return { title: `Contacto y cotización en ${p.nombre}${MARCA}`, desc: `Solicita una cotización para importar de China a ${p.nombre}. Respuesta el mismo día.` }
    default: return { title: `EVS Logistics ${p.corto} | Logística integral China–${p.nombre}`, desc: `Forwarder con presencia en ${p.nombre} desde ${p.desde}. Flete marítimo y aéreo, gestión aduanal, agente de compras en China, transporte terrestre y 3PL.` }
  }
}

function etiqueta(selector, crear) {
  let el = document.head.querySelector(selector)
  if (!el) { el = crear(); document.head.appendChild(el) }
  return el
}
function meta(attr, nombre, contenido) {
  etiqueta(`meta[${attr}="${nombre}"]`, () => { const m = document.createElement('meta'); m.setAttribute(attr, nombre); return m }).setAttribute('content', contenido)
}

// Datos estructurados (schema.org): la "tarjeta de presentación" que leen Google y las IA.
// No cambia nada visible. Preguntas frecuentes solo en los servicios de México, que son los que las tienen.
const FAQS = { 'forwarding': FAQ_FORWARDING, 'gestion-aduanal': FAQ_ADUANA, 'agente-de-compras': FAQ_COMPRAS, 'revision-en-origen': FAQ_REVISION, 'transporte-terrestre': FAQ_TERRESTRE, '3pl': FAQ_3PL }
const NOMBRE_SERVICIO = { 'forwarding': 'Forwarding marítimo y aéreo', 'gestion-aduanal': 'Gestión aduanal', 'agente-de-compras': 'Agente de compras en China', 'revision-en-origen': 'Revisión en origen', 'transporte-terrestre': 'Transporte terrestre', '3pl': '3PL: almacenaje y distribución' }
const PAIS_ISO = { mx: 'MX', co: 'CO', do: 'DO', ec: 'EC' }

const ORGANIZACION = {
  '@type': 'Organization',
  '@id': DOMINIO + '/#organizacion',
  name: 'EVS Logistics',
  url: DOMINIO + '/',
  logo: DOMINIO + '/favicon.png',
  description: 'Forwarder mexicano con bodegas propias en los principales puertos de China. Flete marítimo y aéreo, gestión aduanal coordinada con agentes aduanales con patente, agente de compras, revisión en origen, transporte terrestre y 3PL.',
  foundingDate: '2016',
  address: { '@type': 'PostalAddress', streetAddress: 'Av. Santa Fe 505, Lomas de Santa Fe', addressLocality: 'Cuajimalpa de Morelos', addressRegion: 'Ciudad de México', postalCode: '01219', addressCountry: 'MX' },
  contactPoint: { '@type': 'ContactPoint', telephone: '+52 55 5576 4581', email: 'Fernanda.Rios@evslogist.com', contactType: 'sales', availableLanguage: ['es'] },
  areaServed: ['MX', 'CO', 'DO', 'EC', 'CN'],
  sameAs: ['https://www.facebook.com/profile.php?id=100080143248684', 'https://www.instagram.com/evslogistic', 'https://www.linkedin.com/company/evs-logistic/']
}

function datosEstructurados(pais, page, servicio, title, desc, url) {
  const p = PAISES[pais]
  const grafo = [ORGANIZACION, { '@type': 'WebSite', '@id': DOMINIO + '/#sitio', url: DOMINIO + '/', name: 'EVS Logistics', publisher: { '@id': DOMINIO + '/#organizacion' }, inLanguage: 'es' }]
  grafo.push({ '@type': 'WebPage', '@id': url, url, name: title, description: desc, isPartOf: { '@id': DOMINIO + '/#sitio' }, inLanguage: IDIOMA[pais] || 'es' })
  if (page === 'servicios' && servicio) {
    grafo.push({ '@type': 'Service', '@id': url + '#servicio', name: NOMBRE_SERVICIO[servicio] || servicio, serviceType: NOMBRE_SERVICIO[servicio] || servicio, description: desc, provider: { '@id': DOMINIO + '/#organizacion' }, areaServed: { '@type': 'Country', name: p.nombre, identifier: PAIS_ISO[pais] }, url })
    if (pais === 'mx' && FAQS[servicio]) {
      grafo.push({ '@type': 'FAQPage', '@id': url + '#faq', mainEntity: FAQS[servicio].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) })
    }
  }
  return { '@context': 'https://schema.org', '@graph': grafo }
}

export function aplicarMeta(pais, page, servicio, articulo = null) {
  const { title, desc } = metaDe(pais, page, servicio, articulo)
  const url = DOMINIO + rutaDe(pais, page, servicio, articulo)
  document.title = title
  document.documentElement.lang = IDIOMA[pais] || 'es'
  meta('name', 'description', desc)
  meta('property', 'og:title', title); meta('property', 'og:description', desc)
  meta('property', 'og:url', url); meta('property', 'og:type', 'website'); meta('property', 'og:image', DOMINIO + '/fotos/hero-port.jpg')
  etiqueta('link[rel="canonical"]', () => { const l = document.createElement('link'); l.rel = 'canonical'; return l }).href = url
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach(l => l.remove())
  const paisesConVersion = articulo ? ['mx'] : ORDEN   // los artículos solo existen en México
  for (const k of paisesConVersion) {
    const l = document.createElement('link'); l.rel = 'alternate'; l.hreflang = IDIOMA[k]; l.href = DOMINIO + rutaDe(k, page, servicio); document.head.appendChild(l)
  }
  const xd = document.createElement('link'); xd.rel = 'alternate'; xd.hreflang = 'x-default'; xd.href = DOMINIO + rutaDe('mx', page, servicio, articulo); document.head.appendChild(xd)
  const ld = etiqueta('script[type="application/ld+json"]', () => { const sc = document.createElement('script'); sc.type = 'application/ld+json'; return sc })
  ld.textContent = JSON.stringify(datosEstructurados(pais, page, servicio, title, desc, url))
  if (page === 'blog') meta('property', 'og:type', articulo ? 'article' : 'website')
}

// Datos estructurados de un artículo, cuando ya se cargó su contenido (incluye sus preguntas frecuentes).
export function aplicarDatosArticulo(meta, art) {
  const url = DOMINIO + rutaDe('mx', 'blog', null, meta.slug)
  const grafo = [ORGANIZACION,
    { '@type': 'WebSite', '@id': DOMINIO + '/#sitio', url: DOMINIO + '/', name: 'EVS Logistics', publisher: { '@id': DOMINIO + '/#organizacion' }, inLanguage: 'es' },
    { '@type': 'Article', '@id': url + '#articulo', headline: meta.titulo, description: meta.descripcion, datePublished: meta.fecha, dateModified: meta.fecha, inLanguage: 'es-MX', mainEntityOfPage: url, author: { '@id': DOMINIO + '/#organizacion' }, publisher: { '@id': DOMINIO + '/#organizacion' }, image: DOMINIO + '/fotos/hero-port.jpg' },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: DOMINIO + '/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: DOMINIO + '/blog/' },
      { '@type': 'ListItem', position: 3, name: meta.titulo, item: url }
    ] }
  ]
  if (art.faq?.length) grafo.push({ '@type': 'FAQPage', '@id': url + '#faq', mainEntity: art.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') } })) })
  const ld = document.head.querySelector('script[type="application/ld+json"]')
  if (ld) ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': grafo })
}
