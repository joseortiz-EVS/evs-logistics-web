import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// En desarrollo, /a4/ debe abrir public/a4/index.html como en GitHub Pages
// (si no, cae en la ruta de tarjetas de vendedor y dice "tarjeta no encontrada").
const carpetasEstaticas = () => ({
  name: 'carpetas-estaticas',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/a4' || req.url.startsWith('/a4/') && !req.url.startsWith('/a4/index.html')) {
        const [ruta, query] = req.url.split('?')
        if (ruta === '/a4' || ruta === '/a4/') req.url = '/a4/index.html' + (query ? '?' + query : '')
      }
      next()
    })
  }
})

export default defineConfig({
  plugins: [react(), carpetasEstaticas()],
  server: {
    port: 5173,
    open: true
  }
})
