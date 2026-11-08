// Curso: por ahora la portada, lista para recibir el contenido del curso.
import { FaArrowRight } from 'react-icons/fa'
import { T } from '../tema'
import useIsMobile from '../hooks/useIsMobile'

const Curso = ({ onNavigate }) => {
  const isMobile = useIsMobile()
  return (
    <section style={{ minHeight: '100vh', padding: isMobile ? '80px 16px 40px' : '100px 24px 60px', background: 'transparent' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: T.acento, marginBottom: '12px' }}>Curso</p>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, color: T.texto, marginBottom: '16px', lineHeight: 1.15 }}>
          Aprende a importar de China a México
        </h1>
        <p style={{ fontSize: '17px', color: T.suave, lineHeight: 1.8, maxWidth: '700px', marginBottom: '40px' }}>
          Un curso práctico con el equipo de EVS Logistics: cómo elegir producto y proveedor, qué pide la aduana,
          cuánto cuesta y cuánto tarda traer tu mercancía, y cómo evitar los errores que más dinero cuestan.
        </p>

        <div style={{ background: T.superficie, border: `1px dashed ${T.bordeFuerte}`, borderRadius: '16px', padding: isMobile ? '28px 22px' : '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '18px', fontWeight: 700, color: T.texto, marginBottom: '8px' }}>Próximamente</div>
          <p style={{ fontSize: '15px', color: T.suave, lineHeight: 1.7, margin: '0 auto 20px', maxWidth: '520px' }}>
            Si quieres que te avisemos cuando abra, escríbenos.
          </p>
          <button onClick={() => onNavigate('contacto')} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 22px', background: T.acento, color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>
            Quiero que me avisen <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Curso
