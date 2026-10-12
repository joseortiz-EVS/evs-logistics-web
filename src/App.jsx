import { useState, useEffect } from 'react'
import NavbarV1 from './components/NavbarV1'
import HeroV1 from './components/HeroV1'
import About from './components/About'
import ServicesV1 from './components/ServicesV1'
import PhotoCarousel from './components/PhotoCarousel'
import Contact from './components/Contact'
import FooterV1 from './components/FooterV1'
import Marquee from './components/Marquee'
import { T } from './tema'
import { PAIS, LLEGO_POR_UBICACION } from './paises'
import { leerRuta, rutaDe } from './rutas'
import { aplicarMeta } from './seo'

const pages = {
  inicio: HeroV1,
  nosotros: About,
  servicios: ServicesV1,
  galeria: PhotoCarousel,
  contacto: Contact
}

const pagesWithMarquee = ['inicio', 'nosotros', 'servicios', 'galeria', 'contacto']

const App = () => {
  const inicial = leerRuta(window.location.pathname)
  const [currentPage, setCurrentPage] = useState(inicial.page || 'inicio')
  const [servicio, setServicio] = useState(inicial.servicio)
  const [aviso, setAviso] = useState(LLEGO_POR_UBICACION)

  // Misma navegación por pantallas; la dirección solo refleja dónde estás
  const ir = (page, serv = null, empujar = true) => {
    setCurrentPage(page)
    setServicio(serv)
    if (empujar) window.history.pushState(null, '', rutaDe(PAIS.cod, page, serv))
    window.scrollTo(0, 0)
  }
  const handleNavigate = (page) => ir(page)

  useEffect(() => {
    const alVolver = () => { const r = leerRuta(window.location.pathname); ir(r.page || 'inicio', r.servicio, false) }
    window.addEventListener('popstate', alVolver)
    return () => window.removeEventListener('popstate', alVolver)
  }, [])

  // Título, descripción y etiquetas para Google de la pantalla actual
  useEffect(() => { aplicarMeta(PAIS.cod, currentPage, servicio) }, [currentPage, servicio])

  const PageComponent = pages[currentPage]

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Fondo fijo: fotografía del puerto con velo azul marino */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0,
        backgroundImage: 'url(/fotos/hero-port.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, background: T.velo }} />
      {/* Líneas curvas de acento */}
      <svg style={{ position: 'fixed', inset: 0, zIndex: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <path d="M0,600 Q360,300 720,400 T1440,200" fill="none" stroke={T.lineas} strokeWidth="0.8" />
        <path d="M0,200 Q400,500 800,350 T1440,650" fill="none" stroke={T.lineas} strokeWidth="0.7" opacity="0.8" />
        <path d="M0,450 Q350,250 720,300 T1440,450" fill="none" stroke={T.lineas} strokeWidth="0.6" opacity="0.7" />
      </svg>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <style>{'.sel-pais summary::-webkit-details-marker{display:none}'}</style>
        <NavbarV1 currentPage={currentPage} onNavigate={handleNavigate} />
        {aviso && (
          <div style={{ position: 'fixed', left: 0, right: 0, top: 60, zIndex: 999, background: '#FFF4D6', color: '#5A3E00', fontSize: 14, padding: '10px 16px', textAlign: 'center', borderBottom: '1px solid #F3D48A' }}>
            Te mostramos la versión de <b>{PAIS.nombre}</b> según tu ubicación. &nbsp;
            <a href="#" onClick={e => { e.preventDefault(); setAviso(false); document.querySelector('.sel-pais')?.setAttribute('open', '') }} style={{ fontWeight: 700, textDecoration: 'underline', color: 'inherit' }}>Cambiar país</a>
            &nbsp;·&nbsp; <a href="#" onClick={e => { e.preventDefault(); setAviso(false) }} style={{ opacity: .7, color: 'inherit' }}>Cerrar</a>
          </div>
        )}
        <PageComponent onNavigate={handleNavigate} servicio={servicio} onServicio={(slug) => ir('servicios', slug)} />
        {pagesWithMarquee.includes(currentPage) && <Marquee />}
        <FooterV1 onNavigate={handleNavigate} />
      </div>
    </div>
  )
}

export default App
