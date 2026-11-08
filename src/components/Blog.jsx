// Blog: por ahora la portada vacía, lista para recibir los artículos.
import { FaArrowRight } from 'react-icons/fa'
import { T } from '../tema'
import useIsMobile from '../hooks/useIsMobile'

const Blog = ({ onNavigate }) => {
  const isMobile = useIsMobile()
  return (
    <section style={{ minHeight: '100vh', padding: isMobile ? '80px 16px 40px' : '100px 24px 60px', background: 'transparent' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: T.acento, marginBottom: '12px' }}>Blog</p>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, color: T.texto, marginBottom: '16px', lineHeight: 1.15 }}>
          Guías para importar de China a México
        </h1>
        <p style={{ fontSize: '17px', color: T.suave, lineHeight: 1.8, maxWidth: '700px', marginBottom: '40px' }}>
          Lo que aprendemos todos los días moviendo carga entre China y Latinoamérica, explicado para quien importa:
          flete, aduana, proveedores, tiempos y errores que cuestan.
        </p>

        <div style={{ background: T.superficie, border: `1px dashed ${T.bordeFuerte}`, borderRadius: '16px', padding: isMobile ? '28px 22px' : '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '18px', fontWeight: 700, color: T.texto, marginBottom: '8px' }}>Estamos preparando los primeros artículos</div>
          <p style={{ fontSize: '15px', color: T.suave, lineHeight: 1.7, margin: '0 auto 20px', maxWidth: '520px' }}>
            Mientras tanto, cada servicio tiene su guía completa con preguntas frecuentes.
          </p>
          <button onClick={() => onNavigate('servicios')} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 22px', background: T.acento, color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>
            Ver servicios <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog
