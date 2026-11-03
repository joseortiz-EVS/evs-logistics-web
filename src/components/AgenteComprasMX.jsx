// Contenido ampliado de Agente de Compras para México (borrador para revisión de José).
// Se muestra debajo de "Capacidades" solo en /servicios/agente-de-compras/ con país México.
import { FaSearch, FaIndustry, FaHandshake, FaVial, FaClipboardCheck, FaWarehouse, FaCheckCircle, FaExclamationTriangle, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa'
import { T } from '../tema'

const CUANDO = [
  ['Es tu primera importación', 'No sabes a quién comprarle ni cómo saber si la fábrica es real. Nosotros ya lo hicimos cientos de veces.'],
  ['Compras a varios proveedores', 'Juntamos todo en nuestra bodega en China y lo mandamos en un solo embarque.'],
  ['Quieres marca propia', 'Desarrollamos el producto, el empaque y el etiquetado con tu marca directamente con la fábrica.'],
  ['No puedes viajar ni hablas chino', 'Nuestro equipo en China visita la fábrica, negocia en su idioma y te reporta en español.']
]

const HACEMOS = [
  [FaSearch, 'Búsqueda y comparación de proveedores', 'Localizamos fábricas reales para tu producto, pedimos cotizaciones comparables y te presentamos las mejores opciones con precio, cantidad mínima y plazo.'],
  [FaIndustry, 'Verificación de fábrica', 'Revisamos licencia comercial, que el beneficiario del pago sea la misma empresa y, cuando hace falta, visitamos la planta antes de que pagues.'],
  [FaHandshake, 'Negociación en origen', 'Negociamos precio, cantidad mínima, tiempos de producción y condiciones de pago directamente con la fábrica, en chino.'],
  [FaVial, 'Muestras y preproducción', 'Gestionamos muestras, las revisamos contigo y dejamos una muestra aprobada como referencia para toda la producción.'],
  [FaClipboardCheck, 'Control de calidad', 'Inspección durante la producción y antes del embarque: cantidades, acabados, empaque y etiquetado contra la muestra aprobada.'],
  [FaWarehouse, 'Consolidación y embarque', 'Recibimos la mercancía en nuestra bodega del puerto más cercano, la juntamos con tus otras compras y la embarcamos a México.']
]

const DONDE = [
  ['Yiwu', 'El mercado mayorista más grande del mundo: hogar, regalos, papelería, accesorios, juguetes.'],
  ['Guangzhou y Foshan', 'Sede de la Feria de Cantón. Iluminación, muebles, textil, calzado, cosméticos.'],
  ['Shenzhen', 'Electrónica, gadgets, celulares y accesorios, LED.'],
  ['Ningbo y Shanghái', 'Maquinaria, herramienta, autopartes, plásticos y productos industriales.'],
  ['Qingdao y Tianjin', 'Químicos, neumáticos, acero y materiales de construcción.'],
  ['Xiamen', 'Piedra, sanitarios, deportes y productos para exterior.']
]

const SENALES = [
  ['Precio muy por debajo del mercado', 'Casi siempre es una comercializadora que no fabrica, o una estafa.'],
  ['Cambio de cuenta bancaria a última hora', 'El clásico fraude por correo. Nosotros solo pagamos a la razón social verificada.'],
  ['La "fábrica" es una oficina', 'Muchos perfiles de Alibaba son intermediarios. Lo comprobamos con licencia y visita.'],
  ['Pago por Western Union o cuenta personal', 'Ningún fabricante serio cobra así. Pagos por hitos y a empresa.'],
  ['La muestra no se parece a la producción', 'Por eso inspeccionamos antes del embarque, no cuando ya llegó a México.']
]

const PASOS = [
  ['Nos cuentas qué quieres comprar', 'Producto, cantidad aproximada, presupuesto y para qué mercado. Si tienes fotos o una liga de referencia, mejor.'],
  ['Te presentamos proveedores', 'Fábricas verificadas con cotización comparable: precio, cantidad mínima, plazo y condiciones.'],
  ['Muestras', 'Pedimos muestras, las revisamos y aprobamos juntos la referencia de producción.'],
  ['Pedido y pago por hitos', 'Cerramos el pedido con la fábrica. Pagas por etapas, a la empresa verificada, nunca a cuentas personales.'],
  ['Producción e inspección', 'Seguimos la producción y hacemos inspección antes de embarcar contra la muestra aprobada.'],
  ['Consolidación y envío a México', 'Recibimos en nuestra bodega, consolidamos y embarcamos. El flete y la aduana los coordinamos nosotros mismos.']
]

const FAQ = [
  ['¿Qué diferencia hay entre comprar directo en Alibaba y comprar con ustedes?', 'En Alibaba tratas tú solo con un proveedor que no conoces, en otro idioma y a 14 mil kilómetros. Con nosotros tienes un equipo en China que verifica la fábrica, negocia, revisa la mercancía antes de que salga y la trae hasta tu bodega. Tú tratas con un solo contacto en México.'],
  ['¿Me dicen quién es la fábrica?', 'Sí. Trabajamos con transparencia: conoces el nombre y los datos del proveedor, y los pagos van directo a esa empresa.'],
  ['¿Cómo se paga al proveedor?', 'Por hitos: normalmente un anticipo para arrancar producción y el resto contra inspección aprobada, antes del embarque. Siempre a la razón social verificada de la fábrica.'],
  ['¿Cuál es el pedido mínimo?', 'Depende del producto y de la fábrica. Hay productos que se consiguen desde unas cuantas cajas en Yiwu y otros que requieren cantidades mayores. Te lo decimos en la primera propuesta.'],
  ['¿Puedo comprar a varios proveedores y recibir un solo envío?', 'Sí. Recibimos todo en nuestra bodega en China, lo consolidamos y lo embarcamos junto. Es una de las razones principales por las que nos contratan.'],
  ['¿Hacen marca propia?', 'Sí. Desarrollamos producto, empaque, etiquetado en español y logotipo con la fábrica, y cuidamos que el etiquetado cumpla lo que pide México.'],
  ['¿Qué pasa si la mercancía llega con defectos?', 'La inspección antes del embarque existe justamente para que eso no pase. Si aun así hay un problema, lo reclamamos nosotros directamente con la fábrica en China.']
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

const AgenteComprasMX = ({ isMobile }) => (
  <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '64px' }}>

    {/* Intro */}
    <section>
      <Etiqueta>Compras en China</Etiqueta>
      <Titulo>Agente de compras en China para importadores mexicanos</Titulo>
      <Parrafo>
        Comprar en China desde México es fácil hasta que algo sale mal: la fábrica no existe, la muestra no se parece al producto,
        o el pago se fue a una cuenta que no era. Desde 2016 tenemos equipo y bodegas propias en China. Buscamos la fábrica, la
        verificamos, negociamos en chino, revisamos la mercancía antes de que salga y la traemos hasta tu bodega. Tú tratas con
        un solo contacto, en español.
      </Parrafo>
    </section>

    {/* Cuándo conviene */}
    <section>
      <Etiqueta>Para quién</Etiqueta>
      <Titulo>Cuándo te conviene un agente de compras</Titulo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '16px' }}>
        {CUANDO.map(([t, d]) => (
          <Tarjeta key={t} style={{ display: 'flex', gap: '14px' }}>
            <FaCheckCircle style={{ color: '#48bb78', fontSize: '18px', flexShrink: 0, marginTop: '3px' }} />
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: T.texto, marginBottom: '6px' }}>{t}</div>
              <div style={{ fontSize: '14px', color: T.suave, lineHeight: 1.7 }}>{d}</div>
            </div>
          </Tarjeta>
        ))}
      </div>
    </section>

    {/* Qué hacemos */}
    <section>
      <Etiqueta>Servicio</Etiqueta>
      <Titulo>Qué hacemos por ti en China</Titulo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
        {HACEMOS.map(([Icono, t, d]) => (
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

    {/* Dónde compramos */}
    <section>
      <Etiqueta>Origen</Etiqueta>
      <Titulo>Dónde compramos: los polos de fabricación de China</Titulo>
      <Parrafo>
        Cada producto tiene su ciudad en China. Saber dónde se fabrica de verdad es la mitad de conseguir buen precio.
        Tenemos bodega propia en los puertos de todas estas zonas, así que la mercancía se recibe y consolida ahí mismo.
      </Parrafo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
        {DONDE.map(([t, d]) => (
          <Tarjeta key={t} style={{ padding: '18px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <FaMapMarkerAlt style={{ color: T.acento, fontSize: '14px' }} />
              <div style={{ fontSize: '16px', fontWeight: 700, color: T.texto }}>{t}</div>
            </div>
            <div style={{ fontSize: '14px', color: T.suave, lineHeight: 1.6 }}>{d}</div>
          </Tarjeta>
        ))}
      </div>
    </section>

    {/* Señales de estafa */}
    <section>
      <Etiqueta>Lo que evitamos</Etiqueta>
      <Titulo>Cómo comprar en China sin que te estafen</Titulo>
      <Parrafo>
        Estas son las señales que vemos una y otra vez en importadores que llegan con nosotros después de una mala experiencia.
      </Parrafo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '12px' }}>
        {SENALES.map(([t, d]) => (
          <Tarjeta key={t} style={{ padding: '14px 16px', display: 'flex', gap: '12px' }}>
            <FaExclamationTriangle style={{ color: '#d69e2e', flexShrink: 0, marginTop: '3px' }} />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: T.texto, marginBottom: '3px' }}>{t}</div>
              <div style={{ fontSize: '13px', color: T.suave, lineHeight: 1.6 }}>{d}</div>
            </div>
          </Tarjeta>
        ))}
      </div>
    </section>

    {/* Marca propia */}
    <section>
      <Tarjeta style={{ background: T.superficieAlta, padding: isMobile ? '24px 20px' : '36px' }}>
        <Etiqueta>Marca propia</Etiqueta>
        <Titulo h="h3">Tu producto, con tu marca, fabricado en China</Titulo>
        <Parrafo style={{ maxWidth: 'none', margin: 0 }}>
          Si ya vendes un producto y quieres dejar de depender de la marca de otro, desarrollamos contigo la versión propia:
          especificaciones, empaque, etiquetado en español y logotipo, directamente con la fábrica. Nos encargamos de que las muestras
          queden como las quieres antes de producir, y de que el etiquetado cumpla lo que México exige para que no haya sorpresas en la
          aduana. Si tu producto es nuevo, también lo desarrollamos desde cero con proveedores OEM.
        </Parrafo>
      </Tarjeta>
    </section>

    {/* Paso a paso */}
    <section>
      <Etiqueta>Cómo trabajamos</Etiqueta>
      <Titulo>De la idea a tu bodega, paso a paso</Titulo>
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
        El último paso lo hacemos con nuestros propios servicios de <Enlace href="/servicios/forwarding/">forwarding China–México</Enlace> y <Enlace href="/servicios/gestion-aduanal/">gestión aduanal</Enlace>, así que no cambias de proveedor a medio camino.
      </p>
    </section>

    {/* FAQ */}
    <section>
      <Etiqueta>Preguntas frecuentes</Etiqueta>
      <Titulo>Lo que nos preguntan antes de comprar en China</Titulo>
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
          <div style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>Cuéntanos qué quieres comprar en China</div>
          <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)' }}>Producto, cantidad aproximada y una foto o liga de referencia. Te regresamos opciones de fábricas verificadas.</div>
        </div>
        <a href="/contacto/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 24px', background: T.acento, color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
          Pedir propuesta <FaArrowRight />
        </a>
      </Tarjeta>
    </section>
  </div>
)

export default AgenteComprasMX
