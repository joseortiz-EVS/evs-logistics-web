// Contenido ampliado de 3PL para México (borrador para revisión de José).
// Se muestra debajo de "Capacidades" solo en /servicios/3pl/ con país México.
import { FaWarehouse, FaPallet, FaTags, FaBoxOpen, FaStore, FaTruck, FaCheckCircle, FaArrowRight, FaAmazon, FaShippingFast, FaShoppingBag, FaBuilding } from 'react-icons/fa'
import { T } from '../tema'

const HACEMOS = [
  [FaWarehouse, 'Recepción y almacenaje', 'Recibimos tu contenedor o tus tarimas, contamos pieza por pieza, revisamos daños y damos de alta el inventario en rack o piso, según el producto.'],
  [FaPallet, 'Armado de tarimas', 'Paletizamos a la medida que pide tu cliente: tarima estándar o de intercambio, altura máxima, emplayado, esquineros y etiqueta de tarima.'],
  [FaTags, 'Etiquetado y maquila', 'Etiquetas en español, códigos de barras, etiqueta de marketplace, armado de kits, reempaque, cambio de caja e inserción de manuales o garantías.'],
  [FaBoxOpen, 'Preparación de pedidos', 'Surtimos por pieza, por caja o por tarima. Picking, empaque, lista de empaque y guía lista para salir el mismo día.'],
  [FaStore, 'Entregas con requisitos', 'Amazon, Mercado Libre, cadenas de autoservicio y departamentales, y paqueterías: cada uno pide su etiqueta, su tarima y su cita. Lo conocemos y lo cumplimos.'],
  [FaTruck, 'Distribución y última milla', 'Entrega en tu bodega, en la de tu cliente o al consumidor final, con nuestras propias unidades de transporte terrestre.']
]

const DESTINOS = [
  [FaAmazon, 'Amazon FBA', 'Etiqueta FNSKU por pieza, cajas y tarimas conforme a su plan de envío, cita en el centro de distribución que te asignen.'],
  [FaShoppingBag, 'Mercado Libre Full', 'Preparación conforme a los requisitos de ingreso de Full: etiquetado, empaque y entrega en su centro con cita.'],
  [FaBuilding, 'Autoservicio y departamentales', 'Tarima a su estándar, etiqueta de embarque, documentación y cita en CEDIS para las cadenas que te compran.'],
  [FaShippingFast, 'Paqueterías', 'Generamos guías, empacamos conforme a cada paquetería y entregamos o programamos recolección en nuestra bodega.']
]

const PARA_QUIEN = [
  ['Importas y no quieres bodega propia', 'Tu contenedor llega del puerto directo a nuestra bodega. No pagas renta, personal ni montacargas por un espacio que usas a medias.'],
  ['Vendes en línea', 'Guardamos tu inventario, surtimos cada pedido y lo mandamos por paquetería o a los centros de Amazon y Mercado Libre.'],
  ['Le vendes a cadenas', 'Preparamos la orden de compra como la cadena la exige, con su tarima, su etiqueta y su cita, para que no te rechacen la entrega.'],
  ['Estás fuera de la Ciudad de México', 'Necesitas un punto en el centro del país para distribuir sin mover toda tu operación.']
]

const INCLUYE = [
  'Inventario controlado por producto y lote',
  'Reporte de entradas, salidas y existencias',
  'Bodega con vigilancia y acceso controlado',
  'Seguro de mercancía en almacén',
  'Evidencia de entrega de cada salida',
  'Un solo contacto para importación, bodega y entregas'
]

const PASOS = [
  ['Llega tu mercancía', 'Del puerto, del aeropuerto o de tu proveedor nacional. Si importaste con nosotros, ni siquiera tienes que coordinar el flete.'],
  ['Recepción y conteo', 'Contamos, revisamos y damos de alta el inventario. Te mandamos el reporte de recepción con cualquier diferencia o daño.'],
  ['Almacenaje', 'Tu producto queda ubicado y disponible. Ves existencias y movimientos en cada reporte.'],
  ['Nos mandas las órdenes', 'Por correo, por archivo o directo de tu tienda en línea. Nos dices qué, cuánto y a dónde.'],
  ['Preparamos y entregamos', 'Surtimos, etiquetamos, paletizamos y entregamos: a tu cliente, a la cadena, al marketplace o a la paquetería.']
]

const FAQ = [
  ['¿Necesito un volumen mínimo?', 'No. Trabajamos desde unas cuantas tarimas hasta contenedores completos. La cotización se ajusta al espacio que ocupas y a los movimientos que haces.'],
  ['¿Cómo cobran el servicio?', 'Por espacio ocupado y por movimiento: recepción, almacenaje, preparación y entrega. Con tu volumen aproximado te damos una cotización clara, sin cargos escondidos.'],
  ['¿Pueden mandar mi inventario a Amazon o Mercado Libre?', 'Sí. Preparamos los envíos conforme a los requisitos de cada uno, con su etiquetado y su cita, y los entregamos en sus centros de distribución.'],
  ['¿Hacen etiquetado para cumplir con la NOM?', 'Sí. Si tu producto llegó de China sin la etiqueta en español que México exige, la aplicamos en bodega antes de que salga a venta.'],
  ['¿Cuánto tarda en salir un pedido?', 'Los pedidos recibidos en horario de operación salen el mismo día o al día siguiente hábil, según el destino y el tipo de preparación.'],
  ['¿Puedo visitar la bodega?', 'Claro. Agenda una visita y te mostramos dónde y cómo está tu mercancía.'],
  ['¿Dónde está la bodega?', 'En la zona metropolitana de la Ciudad de México, con salida a las principales carreteras del país y cerca de los centros de distribución de los marketplaces.']
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

const TresPLMX = ({ isMobile }) => (
  <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '64px' }}>

    {/* Intro */}
    <section>
      <Etiqueta>Almacenaje y distribución</Etiqueta>
      <Titulo>3PL en México: recibimos, guardamos, preparamos y entregamos tu mercancía</Titulo>
      <Parrafo>
        Tu producto llega a nuestra bodega en la Ciudad de México, lo guardamos, lo etiquetamos, armamos las tarimas o los pedidos
        como los pide cada cliente y lo entregamos: a tu bodega, a una cadena, a Amazon o Mercado Libre, o a la paquetería. Tú vendes;
        de mover cajas nos encargamos nosotros.
      </Parrafo>
    </section>

    {/* Qué hacemos */}
    <section>
      <Etiqueta>Servicio</Etiqueta>
      <Titulo>Qué hacemos en bodega</Titulo>
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

    {/* Destinos con requisitos */}
    <section>
      <Etiqueta>Entregas especiales</Etiqueta>
      <Titulo>Entregas que piden requisitos, y los cumplimos</Titulo>
      <Parrafo>
        Una entrega rechazada en un centro de distribución cuesta flete doble, cita nueva y a veces la orden. Conocemos lo que pide
        cada destino y preparamos la mercancía exactamente así.
      </Parrafo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '16px' }}>
        {DESTINOS.map(([Icono, t, d]) => (
          <Tarjeta key={t} style={{ display: 'flex', gap: '14px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(49,130,206,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icono style={{ color: T.acento, fontSize: '18px' }} />
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: T.texto, marginBottom: '6px' }}>{t}</div>
              <div style={{ fontSize: '14px', color: T.suave, lineHeight: 1.7 }}>{d}</div>
            </div>
          </Tarjeta>
        ))}
      </div>
    </section>

    {/* Para quién */}
    <section>
      <Etiqueta>Para quién</Etiqueta>
      <Titulo>Cuándo te conviene un 3PL</Titulo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '16px' }}>
        {PARA_QUIEN.map(([t, d]) => (
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

    {/* Del puerto a la bodega */}
    <section>
      <Tarjeta style={{ background: T.superficieAlta, padding: isMobile ? '24px 20px' : '36px' }}>
        <Etiqueta>Todo con un solo proveedor</Etiqueta>
        <Titulo h="h3">Del puerto directo a nuestra bodega</Titulo>
        <Parrafo style={{ maxWidth: 'none', margin: 0 }}>
          Si importas con nosotros, el contenedor sale de la aduana y entra a nuestra bodega sin que tengas que coordinar nada: el
          <Enlace href="/servicios/forwarding/"> forwarding</Enlace>, la <Enlace href="/servicios/gestion-aduanal/">gestión aduanal</Enlace>, el
          <Enlace href="/servicios/transporte-terrestre/"> flete</Enlace> y el almacenaje son el mismo equipo. Desde ahí distribuimos como tú nos digas.
        </Parrafo>
      </Tarjeta>
    </section>

    {/* Incluye + pasos */}
    <section>
      <Etiqueta>Cómo trabajamos</Etiqueta>
      <Titulo>De la llegada a la entrega, paso a paso</Titulo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', marginBottom: '28px' }}>
        {PASOS.map(([t, d], i) => (
          <Tarjeta key={t}>
            <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: T.superficieAlta, border: `1px solid ${T.borde}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: T.acento, marginBottom: '12px' }}>{i + 1}</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: T.texto, marginBottom: '6px' }}>{t}</div>
            <div style={{ fontSize: '14px', color: T.suave, lineHeight: 1.7 }}>{d}</div>
          </Tarjeta>
        ))}
      </div>
      <Titulo h="h3">Qué incluye</Titulo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '10px' }}>
        {INCLUYE.map(d => (
          <div key={d} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 16px', background: T.superficie, border: `1px solid ${T.borde}`, borderRadius: '10px' }}>
            <FaCheckCircle style={{ color: '#48bb78', flexShrink: 0 }} />
            <span style={{ fontSize: '14px', color: T.suave, fontWeight: 500 }}>{d}</span>
          </div>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section>
      <Etiqueta>Preguntas frecuentes</Etiqueta>
      <Titulo>Lo que nos preguntan sobre almacenaje y distribución</Titulo>
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
          <div style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>¿Cuántas tarimas mueves al mes?</div>
          <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)' }}>Dinos qué producto es, cuánto espacio ocupa y a dónde lo entregas. Te cotizamos almacenaje y movimientos el mismo día.</div>
        </div>
        <a href="/contacto/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 24px', background: T.acento, color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
          Solicitar cotización <FaArrowRight />
        </a>
      </Tarjeta>
    </section>
  </div>
)

export default TresPLMX
