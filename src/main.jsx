import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import SellerCard from './components/SellerCard'
import Admin from './admin/Admin'
import Portal from './portal/Portal'
import { PAISES_RUTA } from './rutas'

// Sitio público: una ruta por pantalla y por país (/, /nosotros, /servicios/forwarding, /co/..., /do/..., /ec/...)
const PANTALLAS = ['', 'nosotros', 'servicios', 'servicios/:servicio', 'galeria', 'contacto']
const RUTAS_SITIO = ['', ...PAISES_RUTA.map(p => '/' + p)].flatMap(pre => PANTALLAS.map(pan => `${pre}/${pan}`.replace(/\/+$/, '') || '/'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Sitio principal */}
        {RUTAS_SITIO.map(r => <Route key={r} path={r} element={<App />} />)}
        {/* Panel interno de rastreo. Va antes de /:slug para que no lo capture. */}
        <Route path="/admin" element={<Admin />} />
        {/* Portal de clientes. También antes de /:slug. */}
        <Route path="/portal" element={<Portal />} />
        {/* Tarjeta digital de cada vendedor: /nombre-apellido */}
        <Route path="/:slug" element={<SellerCard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
