// Blog: portada con los artículos por tema, o un artículo si la dirección trae su slug.
import { FaArrowRight, FaClock } from 'react-icons/fa'
import { T } from '../tema'
import useIsMobile from '../hooks/useIsMobile'
import { ARTICULOS, TEMAS } from '../blog/indice'
import { irA } from '../blog/Marcado'
import Articulo from './Articulo'

const fechaLarga = (iso) => new Date(iso + 'T12:00:00').toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })

const Tarjeta = ({ a, isMobile }) => (
  <a href={`/blog/${a.slug}/`} onClick={(e) => { e.preventDefault(); irA(`/blog/${a.slug}/`) }}
    style={{ display: 'block', background: T.superficie, border: `1px solid ${T.borde}`, borderRadius: '16px', padding: isMobile ? '20px' : '26px', textDecoration: 'none', transition: 'transform .2s, box-shadow .2s' }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = T.sombra }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px', fontSize: '12px', color: T.tenue, letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600 }}>
      <span style={{ color: T.acento }}>{TEMAS[a.tema]}</span>
      <span>·</span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', textTransform: 'none', letterSpacing: 0 }}><FaClock style={{ fontSize: '11px' }} /> {a.lectura} min</span>
    </div>
    <h3 style={{ fontSize: isMobile ? '19px' : '21px', fontWeight: 800, color: T.texto, margin: '0 0 10px', lineHeight: 1.3 }}>{a.titulo}</h3>
    <p style={{ fontSize: '15px', color: T.suave, lineHeight: 1.7, margin: '0 0 14px' }}>{a.descripcion}</p>
    <span style={{ fontSize: '14px', fontWeight: 700, color: T.acento, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Leer <FaArrowRight style={{ fontSize: '12px' }} /></span>
  </a>
)

const Blog = ({ articulo, onNavigate }) => {
  const isMobile = useIsMobile()
  if (articulo) return <Articulo slug={articulo} onNavigate={onNavigate} />

  const orden = ['basicos', 'productos', 'proveedores', 'aduana']
  const porTema = orden.map(t => [t, ARTICULOS.filter(a => a.tema === t)]).filter(([, lista]) => lista.length)

  return (
    <section style={{ minHeight: '100vh', padding: isMobile ? '80px 16px 40px' : '100px 24px 60px', background: 'transparent' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: T.acento, marginBottom: '12px' }}>Blog</p>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, color: T.texto, marginBottom: '16px', lineHeight: 1.15 }}>
          Guías para importar de China a México
        </h1>
        <p style={{ fontSize: '17px', color: T.suave, lineHeight: 1.8, maxWidth: '720px', marginBottom: '48px' }}>
          Lo que aprendemos todos los días moviendo carga entre China y Latinoamérica, explicado para quien importa:
          qué necesitas, cómo elegir proveedor, cómo viaja tu carga, qué revisa la aduana y los errores que cuestan.
        </p>

        {porTema.map(([tema, lista]) => (
          <div key={tema} style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: T.tenue, margin: '0 0 18px' }}>{TEMAS[tema]}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: '18px' }}>
              {lista.map(a => <Tarjeta key={a.slug} a={a} isMobile={isMobile} />)}
            </div>
          </div>
        ))}

        <p style={{ fontSize: '13px', color: T.tenue }}>Última actualización: {fechaLarga(ARTICULOS.map(a => a.fecha).sort().at(-1))}</p>
      </div>
    </section>
  )
}

export default Blog
