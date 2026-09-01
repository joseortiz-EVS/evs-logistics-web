// Llamadas del portal de clientes.
//
// 1-sep-2026: el portal ya no tiene base propia. Le habla al ERP (mi-erp), que es
// donde viven los embarques, las facturas y los cobros. La forma de las
// respuestas es la misma de siempre; sólo cambió a quién se le pregunta.
import { solicitar, guardarToken, leerToken, borrarToken, MODO_DEMO, PORTAL_SLUG } from './http'

const P = '/api/portal-cliente'

export { MODO_DEMO }

export const guardarTokenCliente = (token) => guardarToken('cliente', token)
export const leerTokenCliente = () => leerToken('cliente')
export const borrarTokenCliente = () => borrarToken('cliente')

const conSesion = (ruta, opciones = {}) => solicitar(ruta, { ...opciones, sesion: 'cliente' })

export const entrar = (numero, password) =>
  solicitar(`${P}/${PORTAL_SLUG}/login`, { method: 'POST', body: JSON.stringify({ numero, password }) })

export const verificarCliente = () => conSesion(`${P}/yo`)

export const misEnvios = () => conSesion(`${P}/envios`)

export const detalleEnvio = (id) => conSesion(`${P}/envios/${id}`)

export const misFacturas = () => conSesion(`${P}/facturas`)

export const subirComprobante = (facturaId, archivo, nota = '') => {
  const datos = new FormData()
  datos.append('archivo', archivo)
  if (nota) datos.append('nota', nota)
  return conSesion(`${P}/facturas/${facturaId}/comprobante`, { method: 'POST', body: datos })
}

// Pago con tarjeta: pide a la API una sesión de Stripe Checkout y devuelve la
// URL a la que el portal debe redirigir al cliente para pagar.
export const pagarFactura = (facturaId) =>
  conSesion(`${P}/facturas/${facturaId}/pagar`, { method: 'POST' })

export const cambiarPasswordCliente = (actual, nueva) =>
  conSesion(`${P}/cambiar-password`, { method: 'POST', body: JSON.stringify({ actual, nueva }) })

export const guardarCorreoSeguridad = (correo) =>
  conSesion(`${P}/seguridad`, { method: 'POST', body: JSON.stringify({ correo_seguridad: correo }) })

// La puerta de desarrollador vivía en la API vieja. En el ERP el soporte se da
// desde el módulo "Portal de clientes" (accesos, bitácora), no suplantando al
// cliente. Se conserva la función para no romper el import; siempre rechaza.
export const verClienteDev = () =>
  Promise.reject(new Error('El modo desarrollador ya no existe: consulta al cliente desde el ERP.'))

// --- Perfil del cliente ---
export const actualizarPerfil = (datos) =>
  conSesion(`${P}/perfil`, { method: 'PATCH', body: JSON.stringify(datos) })

// --- Direcciones de envío ---
export const misDirecciones = () => conSesion(`${P}/direcciones`)

export const crearDireccion = (datos) =>
  conSesion(`${P}/direcciones`, { method: 'POST', body: JSON.stringify(datos) })

export const actualizarDireccion = (id, datos) =>
  conSesion(`${P}/direcciones/${id}`, { method: 'PATCH', body: JSON.stringify(datos) })

export const eliminarDireccion = (id) =>
  conSesion(`${P}/direcciones/${id}`, { method: 'DELETE' })

// Catálogo de etapas y servicios tal como los define la empresa en el ERP.
export const catalogosPortal = () => solicitar(`${P}/${PORTAL_SLUG}/catalogos`)

// Descarga del PDF / XML de una factura (redirige al archivo).
export const urlArchivoFactura = (facturaId, tipo = 'pdf') => `${P}/facturas/${facturaId}/archivo/${tipo}`
