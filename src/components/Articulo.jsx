// Un artículo del blog: índice, cuerpo, preguntas frecuentes, cierre y relacionados.
import { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaClock } from 'react-icons/fa'
import { T } from '../tema'
import useIsMobile from '../hooks/useIsMobile'
import { ARTICULOS, TEMAS, articuloPorSlug } from '../blog/indice'
import Marcado, { secciones, irA, Inline } from '../blog/Marcado'
import { aplicarDatosArticulo } from '../seo'

const SERVICIO_RUTA = { forwarding: '/servicios/forwarding/', 'gestion-aduanal': '/servicios/gestion-aduanal/', 'agente-de-compras': '/servicios/agente-de-compras/', 'revision-en-origen': '/servicios/revision-en-origen/', 'transporte-terrestre': '/servicios/transporte-terrestre/', '3pl': '/servicios/3pl/' }
const fechaLarga = (iso) => new Date(iso + 'T12:00:00').toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })

const Articulo = ({ slug, onNavigate }) => {
  const isMobile = useIsMobile()
  const meta = articuloPorSlug(slug)
  const [art, setArt] = useState(null)

  useEffect(() => {
    let vivo = true
    setArt(null)
    if (meta) meta.cargar().then(m => { if (vivo) { setArt(m.default); aplicarDatosArticulo(meta, m.default) } })
    return () => { vivo = false }
  }, [slug])

  const Volver = () => (
    <a href="/blog/" onClick={(e) => { e.preventDefault(); irA('/blog/') }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: T.acento, fontSize: '14px', fontWeight: 500, textDecoration: 'none', marginBottom: isMobile ? '24px' : '36px' }}>
      <FaArrowLeft /> Volver al blog
    </a>
  )

  if (!meta) {
    return (
      <section style={{ minHeight: '100vh', padding: isMobile ? '80px 16px 40px' : '100px 24px 60px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Volver />
          <h1 style={{ fontSize: '28px', fontWeight: 800, color: T.texto }}>No encontramos ese artículo</h1>
          <p style={{ color: T.suave }}>Puede que la dirección haya cambiado. En el blog están todos los artículos publicados.</p>
        </div>
      </section>
    )
  }

  const indice = art ? secciones(art.cuerpo) : []
  const relacionados = art ? (art.relacionados || []).map(articuloPorSlug).filter(Boolean) : []

  return (
    <article style={{ minHeight: '100vh', padding: isMobile ? '80px 16px 40px' : '100px 24px 60px', background: 'transparent' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <Volver />

        <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: T.acento, margin: '0 0 12px' }}>{TEMAS[meta.tema]}</p>
        <h1 style={{ fontSize: 'clamp(28px, 4.6vw, 42px)', fontWeight: 800, color: T.texto, margin: '0 0 16px', lineHeight: 1.15 }}>{meta.titulo}</h1>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center', fontSize: '13px', color: T.tenue, marginBottom: '28px', flexWrap: 'wrap' }}>
          <span>Por EVS Logistics</span><span>·</span><span>{fechaLarga(meta.fecha)}</span><span>·</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}><FaClock style={{ fontSize: '11px' }} /> {meta.lectura} min de lectura</span>
        </div>

        {!art && <p style={{ color: T.tenue }}>Cargando…</p>}

        {art && (
          <>
            <p style={{ fontSize: '19px', lineHeight: 1.75, color: T.texto, margin: '0 0 28px', fontWeight: 500 }}>{art.intro}</p>

            {indice.length > 2 && (
              <nav aria-label="Contenido" style={{ background: T.superficie, border: `1px solid ${T.borde}`, borderRadius: '14px', padding: '18px 22px', marginBottom: '8px' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: T.tenue, marginBottom: '10px' }}>En este artículo</div>
                <ol style={{ margin: 0, paddingLeft: '20px', columns: isMobile ? 1 : 2, columnGap: '28px' }}>
                  {indice.map(s => (
                    <li key={s.id} style={{ fontSize: '14px', lineHeight: 1.5, margin: '0 0 6px', breakInside: 'avoid' }}>
                      <a href={`#${s.id}`} style={{ color: T.acento, textDecoration: 'none', fontWeight: 500 }} onClick={(e) => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }) }}>{s.titulo}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <Marcado cuerpo={art.cuerpo} isMobile={isMobile} />

            {art.faq?.length > 0 && (
              <section style={{ marginTop: '48px' }}>
                <h2 style={{ fontSize: 'clamp(22px, 3.4vw, 30px)', fontWeight: 800, color: T.texto, margin: '0 0 16px' }}>Preguntas frecuentes</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {art.faq.map(([q, a]) => (
                    <details key={q} style={{ background: T.superficie, border: `1px solid ${T.borde}`, borderRadius: '12px', padding: '0 20px' }}>
                      <summary style={{ cursor: 'pointer', padding: '16px 0', fontSize: '15px', fontWeight: 700, color: T.texto, listStyle: 'none' }}>{q}</summary>
                      <p style={{ fontSize: '15px', color: T.suave, lineHeight: 1.75, margin: '0 0 18px' }}><Inline texto={a} /></p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {art.cta && (
              <section style={{ marginTop: '48px' }}>
                <div style={{ background: T.marino, borderRadius: '14px', padding: isMobile ? '28px 22px' : '36px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', gap: '20px' }}>
                  <div>
                    <div style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>{art.cta.titulo}</div>
                    <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{art.cta.texto}</div>
                  </div>
                  <button onClick={() => onNavigate('contacto')} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 24px', background: T.acento, color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    Escríbenos <FaArrowRight />
                  </button>
                </div>
                {art.servicio && SERVICIO_RUTA[art.servicio] && (
                  <p style={{ fontSize: '14px', color: T.tenue, marginTop: '12px' }}>
                    Servicio relacionado: <a href={SERVICIO_RUTA[art.servicio]} onClick={(e) => { e.preventDefault(); irA(SERVICIO_RUTA[art.servicio]) }} style={{ color: T.acento, fontWeight: 600 }}>ver página del servicio</a>
                  </p>
                )}
              </section>
            )}

            {relacionados.length > 0 && (
              <section style={{ marginTop: '48px' }}>
                <h2 style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: T.tenue, margin: '0 0 16px' }}>Sigue leyendo</h2>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '14px' }}>
                  {relacionados.map(r => (
                    <a key={r.slug} href={`/blog/${r.slug}/`} onClick={(e) => { e.preventDefault(); irA(`/blog/${r.slug}/`) }} style={{ display: 'block', background: T.superficie, border: `1px solid ${T.borde}`, borderRadius: '12px', padding: '16px 18px', textDecoration: 'none' }}>
                      <div style={{ fontSize: '11px', color: T.acento, letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '6px' }}>{TEMAS[r.tema]}</div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: T.texto, lineHeight: 1.35 }}>{r.titulo}</div>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </article>
  )
}

export default Articulo
