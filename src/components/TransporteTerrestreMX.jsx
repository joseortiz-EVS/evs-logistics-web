// Contenido ampliado de Transporte Terrestre para México (borrador para revisión de José).
// Se muestra debajo de "Capacidades" solo en /servicios/transporte-terrestre/ con país México.
import { FaShippingFast, FaTruck, FaTruckLoading, FaBoxes, FaMapMarkedAlt, FaShieldAlt, FaCheckCircle, FaArrowRight, FaSatelliteDish } from 'react-icons/fa'
import { T } from '../tema'

const SERVICIOS = [
  [FaShippingFast, 'Arrastre de contenedor', 'Del puerto a tu bodega con contenedor de 20\', 40\' y 40\' HC. Coordinamos la cita en la terminal, el retiro, la entrega y el regreso del vacío a la naviera.'],
  [FaTruck, 'Carga completa (FTL)', 'Una unidad solo para ti: tráiler caja seca, tortón, rabón o 3.5 según lo que muevas. Sale cuando cargas y llega directo, sin paradas.'],
  [FaBoxes, 'Carga consolidada (LTL)', 'Pagas solo el espacio que ocupas. Para tarimas y pedidos parciales entre ciudades, con salidas programadas.'],
  [FaTruckLoading, 'Plataforma y carga especial', 'Maquinaria, materiales de construcción, bobinas y carga que no cabe en una caja. Plataforma, lowboy y permisos cuando se requieren.'],
  [FaMapMarkedAlt, 'Distribución y última milla', 'Reparto a varias direcciones en una misma ciudad o región, y entrega en tiendas, centros de distribución y bodegas de marketplaces.'],
  [FaShieldAlt, 'Custodia y carga de alto valor', 'Escolta, candados satelitales y rutas seguras para electrónica, farmacia y mercancía que necesita cuidado extra.']
]

const UNIDADES = [
  ['Camioneta 3.5 t', 'Hasta 3.5 ton · ~16 m³', 'Reparto urbano, entregas parciales, última milla.'],
  ['Rabón', 'Hasta 8 ton · ~35 m³', 'Pedidos medianos y rutas regionales.'],
  ['Tortón', 'Hasta 15 ton · ~50 m³', 'Carga pesada en ciudades y carreteras con restricción a tráiler.'],
  ['Tráiler caja seca 48\' / 53\'', 'Hasta 25 ton · ~100 m³', 'Carga completa entre ciudades y centros de distribución.'],
  ['Portacontenedor', 'Contenedor 20\', 40\', 40\' HC', 'Arrastre de puerto a bodega y regreso del vacío.'],
  ['Plataforma y lowboy', 'Carga larga, alta o pesada', 'Maquinaria, estructuras, bobinas, sobredimensionado.']
]

const RUTAS_NACIONALES = [
  ['Ciudad de México', 'Guadalajara', '1 día'],
  ['Ciudad de México', 'Monterrey', '1 – 2 días'],
  ['Ciudad de México', 'Bajío (Querétaro, León, Aguascalientes)', 'Mismo día – 1 día'],
  ['Ciudad de México', 'Puebla y Veracruz', 'Mismo día – 1 día'],
  ['Guadalajara', 'Monterrey', '1 – 2 días'],
  ['Ciudad de México', 'Tijuana y frontera norte', '3 – 4 días'],
  ['Ciudad de México', 'Mérida y sureste', '2 – 3 días']
]

const RUTAS_PUERTO = [
  ['Manzanillo', 'Guadalajara', '1 día'],
  ['Manzanillo', 'Ciudad de México y Bajío', '1 – 2 días'],
  ['Manzanillo', 'Monterrey', '2 días'],
  ['Lázaro Cárdenas', 'Ciudad de México', '1 – 2 días'],
  ['Veracruz / Altamira', 'Ciudad de México', '1 día'],
  ['AICM', 'Área metropolitana', 'Mismo día']
]

const INCLUYE = [
  'Rastreo satelital y avisos en cada etapa',
  'Seguro de carga por el valor de tu mercancía',
  'Cita programada de carga y descarga',
  'Documentación: carta porte y evidencias de entrega',
  'Operadores verificados y unidades en regla',
  'Un solo contacto para cotizar, programar y resolver'
]

const PASOS = [
  ['Nos dices qué mueves', 'Origen, destino, tipo de mercancía, peso, volumen y fecha. Si es un contenedor, el número y la naviera.'],
  ['Te proponemos la unidad', 'Elegimos el tipo de unidad y la ruta que te conviene por costo y tiempo, y programamos la cita.'],
  ['Cargamos y salimos', 'Recogemos en puerto, aeropuerto, fábrica o bodega. Te confirmamos la salida con placas y operador.'],
  ['Sigues la carga', 'Rastreo satelital y avisos en cada punto hasta la llegada.'],
  ['Entregamos y cerramos', 'Descarga programada, evidencia de entrega y, si fue contenedor, regreso del vacío a la terminal.']
]

export const FAQ = [
  ['¿Solo mueven lo que importan con ustedes?', 'No. La mayoría de nuestros fletes son nacionales: carga entre ciudades, distribución a clientes, maquinaria, tarimas consolidadas. También movemos un contenedor que ya tienes en puerto con otro forwarder.'],
  ['¿Qué pasa con los días libres del contenedor en puerto?', 'Programamos el retiro dentro de los días libres de la naviera y la terminal para que no pagues demoras ni almacenaje. Si el despacho se atrasa, te avisamos antes de que venza el plazo.'],
  ['¿Cuánto tarda de Manzanillo a la Ciudad de México?', 'Normalmente entre 1 y 2 días desde que el contenedor sale de la terminal. Al Bajío y Guadalajara, un día. A Monterrey, dos.'],
  ['¿Qué unidad necesito?', 'Depende del peso, el volumen y el destino. Hasta 3.5 toneladas, camioneta; pedidos medianos, rabón o tortón; carga completa, tráiler. Nosotros te lo decimos con tu lista de empaque.'],
  ['¿Mi carga va asegurada?', 'Sí. Toda carga viaja con seguro por el valor declarado de la mercancía y con rastreo satelital. Para carga de alto valor ofrecemos custodia.'],
  ['¿Entregan en Amazon, Mercado Libre o tiendas de autoservicio?', 'Sí. Conocemos los requisitos de cita, etiquetado y tarima de los principales centros de distribución y marketplaces, y entregamos conforme a ellos.'],
  ['¿Hacen fletes locales o solo carretera?', 'Los dos: reparto dentro de la ciudad con unidades de 3.5 y rabón, y carretera con tortón y tráiler a todo el país.']
]

const Etiqueta = ({ children }) => (
  <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: T.acento, margin: '0 0 10px' }}>{children}</p>
)
const Titulo = ({ children, h = 'h2' }) => {
  const H = h
  return <H style={{ fontSize: h === 'h2' ? 'clamp(24px, 4vw, 34px)' : 'clamp(20px, 3vw, 26px)', fontWeight: 800, color: T.texto, margin: '0 0 14px', lineHeight: 1.2 }}>{children}</H>
}
const Parrafo = ({ children, style }) => (
  <p style={{ fontSize: '16px', color: T.suave, lineHeight: 1.8, margin: '0 0 18px', maxWidth: '720px', ...style }}>{children}</p>
)
const Tarjeta = ({ children, style }) => (
  <div style={{ background: T.superficie, border: `1px solid ${T.borde}`, borderRadius: '14px', padding: '22px', ...style }}>{children}</div>
)
const Enlace = ({ href, children }) => <a href={href} style={{ color: T.acento, fontWeight: 600 }}>{children}</a>

const TransporteTerrestreMX = ({ isMobile }) => (
  <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '64px' }}>

    {/* Intro */}
    <section>
      <Etiqueta>Fletes en México</Etiqueta>
      <Titulo>Transporte terrestre de carga en México: del contenedor completo a la camioneta de 3.5</Titulo>
      <Parrafo>
        Fletes por carretera en todo México, importes o no con nosotros: el tráiler completo entre ciudades, las tarimas que van
        consolidadas, el reparto de última milla en camioneta, la maquinaria en plataforma y también el contenedor que llega a
        Manzanillo o Veracruz. Una sola empresa para cotizar, programar, rastrear y resolver, con la unidad correcta para cada carga.
      </Parrafo>
    </section>

    {/* Servicios */}
    <section>
      <Etiqueta>Servicio</Etiqueta>
      <Titulo>Qué movemos y cómo</Titulo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
        {SERVICIOS.map(([Icono, t, d]) => (
          <Tarjeta key={t}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(49,130,206,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Icono style={{ color: T.acento, fontSize: '18px' }} />
            </div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: T.texto, marginBottom: '6px' }}>{t}</div>
            <div style={{ fontSize: '14px', color: T.suave, lineHeight: 1.7 }}>{d}</div>
          </Tarjeta>
        ))}
      </div>
    </section>

    {/* Unidades */}
    <section>
      <Etiqueta>Unidades</Etiqueta>
      <Titulo>La unidad correcta para cada carga</Titulo>
      <Parrafo>
        Pagar un tráiler para mover tres tarimas es tirar dinero, y meter 12 toneladas en un rabón es un problema en la báscula.
        Con tu lista de empaque te decimos qué unidad conviene.
      </Parrafo>
      {isMobile ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {UNIDADES.map(([u, c, p]) => (
            <Tarjeta key={u} style={{ padding: '14px 16px' }}>
              <div style={{ fontSize: '15px', fontWeight: 700, color: T.texto }}>{u}</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: T.acento, margin: '2px 0 4px' }}>{c}</div>
              <div style={{ fontSize: '13px', color: T.suave, lineHeight: 1.6 }}>{p}</div>
            </Tarjeta>
          ))}
        </div>
      ) : (
      <Tarjeta style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: T.superficieAlta }}>
              {['Unidad', 'Capacidad aproximada', 'Para qué se usa'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '12px 18px', color: T.tenue, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {UNIDADES.map(([u, c, p]) => (
              <tr key={u} style={{ borderTop: `1px solid ${T.borde}` }}>
                <td style={{ padding: '14px 18px', color: T.texto, fontWeight: 600, whiteSpace: 'nowrap' }}>{u}</td>
                <td style={{ padding: '14px 18px', color: T.acento, fontWeight: 700, whiteSpace: 'nowrap' }}>{c}</td>
                <td style={{ padding: '14px 18px', color: T.suave }}>{p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Tarjeta>
      )}
    </section>

    {/* Rutas */}
    <section>
      <Etiqueta>Rutas</Etiqueta>
      <Titulo>Fletes entre ciudades y desde los puertos</Titulo>
      <Parrafo>
        Cubrimos toda la república. Estos son los tiempos habituales de carretera en los corredores que más movemos.
        Si tu ruta no está aquí, la cotizamos igual.
      </Parrafo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
        {[['Entre ciudades', RUTAS_NACIONALES], ['Desde puerto y aeropuerto', RUTAS_PUERTO]].map(([titulo, filas]) => (
          <Tarjeta key={titulo} style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '12px 18px', background: T.superficieAlta, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: T.tenue }}>{titulo}</div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <tbody>
                {filas.map(([de, a, d]) => (
                  <tr key={de + a} style={{ borderTop: `1px solid ${T.borde}` }}>
                    <td style={{ padding: isMobile ? '12px 10px 12px 18px' : '12px 18px', color: T.texto, fontWeight: 600 }}>{de}</td>
                    <td style={{ padding: isMobile ? '12px 10px' : '12px 18px', color: T.suave }}>{a}</td>
                    <td style={{ padding: isMobile ? '12px 18px 12px 10px' : '12px 18px', color: T.acento, fontWeight: 700, whiteSpace: isMobile ? 'normal' : 'nowrap', textAlign: 'right' }}>{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Tarjeta>
        ))}
      </div>
    </section>

    {/* Incluye + seguridad */}
    <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px' }}>
      <div>
        <Etiqueta>Incluido</Etiqueta>
        <Titulo h="h3">Qué incluye cada flete</Titulo>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {INCLUYE.map(d => (
            <div key={d} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 16px', background: T.superficie, border: `1px solid ${T.borde}`, borderRadius: '10px' }}>
              <FaCheckCircle style={{ color: '#48bb78', flexShrink: 0 }} />
              <span style={{ fontSize: '14px', color: T.suave, fontWeight: 500 }}>{d}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Etiqueta>Seguridad</Etiqueta>
        <Titulo h="h3">Tu carga, vigilada todo el camino</Titulo>
        <Tarjeta style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <FaSatelliteDish style={{ color: T.acento }} />
            <div style={{ fontSize: '15px', fontWeight: 700, color: T.texto }}>Rastreo satelital</div>
          </div>
          <div style={{ fontSize: '14px', color: T.suave, lineHeight: 1.7 }}>Sabes dónde va tu unidad en todo momento y recibes aviso de salida, paradas y llegada.</div>
        </Tarjeta>
        <Tarjeta style={{ marginBottom: '12px' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, color: T.texto, marginBottom: '6px' }}>Seguro de carga</div>
          <div style={{ fontSize: '14px', color: T.suave, lineHeight: 1.7 }}>Cobertura por el valor declarado de la mercancía en cada viaje.</div>
        </Tarjeta>
        <Tarjeta>
          <div style={{ fontSize: '15px', fontWeight: 700, color: T.texto, marginBottom: '6px' }}>Custodia para alto valor</div>
          <div style={{ fontSize: '14px', color: T.suave, lineHeight: 1.7 }}>Escolta, candados satelitales y rutas seguras para electrónica, farmacia y carga sensible.</div>
        </Tarjeta>
      </div>
    </section>

    {/* Paso a paso */}
    <section>
      <Etiqueta>Cómo trabajamos</Etiqueta>
      <Titulo>Un flete paso a paso</Titulo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
        {PASOS.map(([t, d], i) => (
          <Tarjeta key={t}>
            <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: T.superficieAlta, border: `1px solid ${T.borde}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: T.acento, marginBottom: '12px' }}>{i + 1}</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: T.texto, marginBottom: '6px' }}>{t}</div>
            <div style={{ fontSize: '14px', color: T.suave, lineHeight: 1.7 }}>{d}</div>
          </Tarjeta>
        ))}
      </div>
      <p style={{ fontSize: '14px', color: T.tenue, marginTop: '16px' }}>
        Si tu carga viene de China con nosotros, el arrastre desde el puerto ya forma parte del <Enlace href="/servicios/forwarding/">forwarding puerta a puerta</Enlace>. Si necesitas guardarla antes de distribuirla, mira nuestro servicio de <Enlace href="/servicios/3pl/">3PL y almacenaje</Enlace>.
      </p>
    </section>

    {/* FAQ */}
    <section>
      <Etiqueta>Preguntas frecuentes</Etiqueta>
      <Titulo>Lo que nos preguntan sobre fletes</Titulo>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {FAQ.map(([q, a]) => (
          <details key={q} style={{ background: T.superficie, border: `1px solid ${T.borde}`, borderRadius: '12px', padding: '0 20px' }}>
            <summary style={{ cursor: 'pointer', padding: '16px 0', fontSize: '15px', fontWeight: 700, color: T.texto, listStyle: 'none' }}>{q}</summary>
            <p style={{ fontSize: '14px', color: T.suave, lineHeight: 1.75, margin: '0 0 18px' }}>{a}</p>
          </details>
        ))}
      </div>
    </section>

    {/* Cierre */}
    <section>
      <Tarjeta style={{ background: T.marino, border: 'none', padding: isMobile ? '28px 22px' : '40px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', gap: '20px' }}>
        <div>
          <div style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>Cotiza tu flete</div>
          <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)' }}>Origen, destino, qué mueves y cuándo. Te respondemos el mismo día con la unidad y el tiempo.</div>
        </div>
        <a href="/contacto/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 24px', background: T.acento, color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
          Solicitar cotización <FaArrowRight />
        </a>
      </Tarjeta>
    </section>
  </div>
)

export default TransporteTerrestreMX
