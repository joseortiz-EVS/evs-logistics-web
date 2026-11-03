// Contenido ampliado de Revisión en Origen para México (borrador para revisión de José).
// Se muestra debajo de "Capacidades" solo en /servicios/revision-en-origen/ con país México.
import { FaClipboardList, FaIndustry, FaBoxOpen, FaTruckLoading, FaWarehouse, FaCheckCircle, FaExclamationTriangle, FaArrowRight, FaCamera } from 'react-icons/fa'
import { T } from '../tema'

const PORQUE = [
  ['Se corrige antes de pagar el saldo', 'Con la mercancía todavía en la fábrica, el proveedor repara, repone o descuenta. Ya en México, nadie te responde.'],
  ['No pagas flete y aduana por producto malo', 'Un contenedor con defectos cuesta lo mismo que uno bueno en flete, maniobras y despacho. Mejor detenerlo en origen.'],
  ['No te detienen por etiquetado', 'Revisamos que la etiqueta, el marcado de cajas y los documentos coincidan con lo que México exige antes de que el barco salga.']
]

const TIPOS = [
  [FaIndustry, 'Antes de producir', 'Verificamos la fábrica, los materiales y la muestra aprobada antes de que arranque la producción. Evita el error más caro: producir mal desde el inicio.'],
  [FaClipboardList, 'Durante la producción', 'Con el pedido entre 20 % y 50 % de avance. Si algo va mal, todavía hay tiempo de corregir sin retrasar el embarque.'],
  [FaBoxOpen, 'Antes del embarque', 'La más solicitada. Con la producción terminada y empacada, revisamos una muestra aleatoria contra la ficha técnica y la muestra aprobada.'],
  [FaTruckLoading, 'Supervisión de carga', 'Presentes al cargar el contenedor: que suba lo revisado, en la cantidad correcta, bien estibado y con el sello registrado.'],
  [FaWarehouse, 'Revisión en nuestra bodega', 'Cuando la mercancía entra a cualquiera de nuestras 8 bodegas en China la contamos, la revisamos y, si hace falta, la reempacamos antes de consolidar.']
]

const REVISAMOS = [
  'Cantidad por modelo y por caja', 'Apariencia y acabados', 'Medidas y peso', 'Materiales y color contra la muestra',
  'Funcionamiento y pruebas básicas', 'Empaque y protección', 'Etiquetado en español y códigos de barras', 'Marcado de cajas y documentos'
]

const DEFECTOS = [
  ['Electrónicos e iluminación', 'No enciende, voltaje o enchufe equivocado para México, cables sueltos, sin manual en español.'],
  ['Textil y calzado', 'Tallas que no corresponden, costuras abiertas, tono distinto a la muestra, etiqueta de composición faltante.'],
  ['Juguetes', 'Piezas sueltas, rebabas, empaque sin advertencias de edad, etiquetado incompleto.'],
  ['Muebles y decoración', 'Rayones, piezas faltantes para armar, empaque que no aguanta el viaje.'],
  ['Maquinaria y refacciones', 'Modelo o medida distinta a la orden, falta de accesorios, sin pruebas de funcionamiento.'],
  ['Cosméticos y cuidado personal', 'Fugas, sellos rotos, lote y caducidad ilegibles, etiqueta sin los datos que pide México.']
]

const PASOS = [
  ['Nos mandas la orden y la ficha técnica', 'Qué compraste, a quién, cuántas piezas y cómo debe ser el producto. Si tenemos la muestra aprobada, mejor.'],
  ['Acordamos qué revisar y cuándo', 'Definimos el tipo de revisión, los puntos críticos de tu producto y el criterio de aceptación antes de ir.'],
  ['Vamos a la fábrica', 'Nuestro equipo en China revisa la muestra aleatoria, prueba, mide y fotografía todo. Si es en nuestra bodega, lo hacemos ahí.'],
  ['Recibes el reporte en 48 horas', 'Resultado claro, lista de hallazgos con fotos y video, y nuestra recomendación: embarcar, corregir o rechazar.'],
  ['Si hay problemas, los resolvemos con la fábrica', 'Retrabajo, reposición, descuento o retener el saldo hasta que quede bien. Negociamos nosotros, en chino.']
]

const FAQ = [
  ['¿Cuándo conviene hacer una revisión en origen?', 'Siempre que no puedas darte el lujo de recibir mal el pedido: primera compra a un proveedor nuevo, pedidos grandes, productos con medidas o funcionamiento críticos, o marca propia. La revisión cuesta una fracción de lo que cuesta un contenedor con defectos.'],
  ['¿Cuántas piezas revisan?', 'Una muestra aleatoria calculada con la norma internacional de muestreo (ISO 2859-1, el sistema AQL). Antes de ir acordamos contigo el nivel: qué tanto defecto es aceptable para tu producto y qué no.'],
  ['¿Cuánto tarda?', 'La visita se programa normalmente en 2 a 3 días hábiles y el reporte lo tienes 48 horas después de la revisión. Si la mercancía está en nuestra bodega, es más rápido.'],
  ['¿Qué pasa si la mercancía no pasa?', 'Te lo decimos con fotos y video antes de que pagues el saldo o se embarque nada. Con eso negociamos con la fábrica la corrección, la reposición o el descuento. Tú decides si se embarca.'],
  ['¿Pueden revisar aunque la compra no la hayan hecho ustedes?', 'Sí. Si ya tienes tu proveedor y solo quieres ojos en la fábrica antes de embarcar, hacemos la revisión y te entregamos el reporte.'],
  ['¿Hacen auditoría de fábrica?', 'Sí, antes de que le compres por primera vez: licencia, instalaciones, capacidad real de producción y control de calidad interno. Es la forma de saber si estás tratando con una fábrica o con una oficina.'],
  ['¿Qué incluye el reporte?', 'Resultado general, cantidades contadas, fotos y video de cada punto revisado, lista de defectos clasificados por gravedad y nuestra recomendación.']
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

const RevisionOrigenMX = ({ isMobile }) => (
  <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '64px' }}>

    {/* Intro */}
    <section>
      <Etiqueta>Inspección en China</Etiqueta>
      <Titulo>Revisión en origen: inspeccionamos tu mercancía en China antes de que se embarque</Titulo>
      <Parrafo>
        Cuando el contenedor zarpa ya no hay nada que corregir. Lo que venga mal llega mal, y además pagas flete, maniobras y aduana
        por ello. Nuestro equipo en China va a la fábrica, revisa una muestra de tu pedido contra lo que compraste y te manda fotos,
        video y un reporte claro antes de que pagues el saldo. Si algo no está bien, lo arreglamos con la fábrica, allá.
      </Parrafo>
    </section>

    {/* Por qué */}
    <section>
      <Etiqueta>Por qué en origen</Etiqueta>
      <Titulo>Por qué revisar en China y no cuando llega a México</Titulo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
        {PORQUE.map(([t, d]) => (
          <Tarjeta key={t}>
            <FaCheckCircle style={{ color: '#48bb78', fontSize: '20px', marginBottom: '12px' }} />
            <div style={{ fontSize: '16px', fontWeight: 700, color: T.texto, marginBottom: '6px' }}>{t}</div>
            <div style={{ fontSize: '14px', color: T.suave, lineHeight: 1.7 }}>{d}</div>
          </Tarjeta>
        ))}
      </div>
    </section>

    {/* Tipos */}
    <section>
      <Etiqueta>Tipos de revisión</Etiqueta>
      <Titulo>En qué momento revisamos</Titulo>
      <Parrafo>
        No todas las compras necesitan lo mismo. Te decimos cuál conviene según el producto, el proveedor y el tamaño del pedido.
      </Parrafo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
        {TIPOS.map(([Icono, t, d]) => (
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

    {/* Qué revisamos + cómo */}
    <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px' }}>
      <div>
        <Etiqueta>Puntos de revisión</Etiqueta>
        <Titulo h="h3">Qué revisamos</Titulo>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {REVISAMOS.map(d => (
            <div key={d} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 16px', background: T.superficie, border: `1px solid ${T.borde}`, borderRadius: '10px' }}>
              <FaCheckCircle style={{ color: '#48bb78', flexShrink: 0 }} />
              <span style={{ fontSize: '14px', color: T.suave, fontWeight: 500 }}>{d}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Etiqueta>Método</Etiqueta>
        <Titulo h="h3">Cómo se revisa y qué recibes</Titulo>
        <Tarjeta style={{ marginBottom: '12px' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, color: T.texto, marginBottom: '6px' }}>Muestreo con norma internacional</div>
          <div style={{ fontSize: '14px', color: T.suave, lineHeight: 1.7 }}>
            Tomamos una muestra aleatoria calculada con la norma ISO 2859-1, el sistema AQL que usa toda la industria. Antes de la visita
            acordamos contigo qué defectos son críticos, mayores o menores y cuántos son aceptables.
          </div>
        </Tarjeta>
        <Tarjeta style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <FaCamera style={{ color: T.acento }} />
            <div style={{ fontSize: '15px', fontWeight: 700, color: T.texto }}>Reporte con fotos y video en 48 horas</div>
          </div>
          <div style={{ fontSize: '14px', color: T.suave, lineHeight: 1.7 }}>
            Resultado general, cantidades, hallazgos con evidencia, defectos clasificados por gravedad y nuestra recomendación:
            embarcar, corregir o rechazar.
          </div>
        </Tarjeta>
        <Tarjeta>
          <div style={{ fontSize: '15px', fontWeight: 700, color: T.texto, marginBottom: '6px' }}>Si no pasa, lo resolvemos con la fábrica</div>
          <div style={{ fontSize: '14px', color: T.suave, lineHeight: 1.7 }}>
            Retrabajo, reposición, descuento o retener el saldo hasta que quede bien. Lo negociamos nosotros, en chino, antes de que
            se embarque nada.
          </div>
        </Tarjeta>
      </div>
    </section>

    {/* Defectos por producto */}
    <section>
      <Etiqueta>Lo que más encontramos</Etiqueta>
      <Titulo>Defectos típicos por tipo de producto</Titulo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '12px' }}>
        {DEFECTOS.map(([t, d]) => (
          <Tarjeta key={t} style={{ padding: '16px 18px', display: 'flex', gap: '12px' }}>
            <FaExclamationTriangle style={{ color: '#d69e2e', flexShrink: 0, marginTop: '3px' }} />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: T.texto, marginBottom: '3px' }}>{t}</div>
              <div style={{ fontSize: '13px', color: T.suave, lineHeight: 1.6 }}>{d}</div>
            </div>
          </Tarjeta>
        ))}
      </div>
    </section>

    {/* Paso a paso */}
    <section>
      <Etiqueta>Cómo trabajamos</Etiqueta>
      <Titulo>Una revisión paso a paso</Titulo>
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
        Si compraste con nuestro servicio de <Enlace href="/servicios/agente-de-compras/">agente de compras</Enlace>, la revisión antes del embarque ya va incluida en el proceso. Y aprobada la mercancía, la embarcamos con nuestro <Enlace href="/servicios/forwarding/">forwarding China–México</Enlace>.
      </p>
    </section>

    {/* FAQ */}
    <section>
      <Etiqueta>Preguntas frecuentes</Etiqueta>
      <Titulo>Lo que nos preguntan sobre la revisión en origen</Titulo>
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
          <div style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>¿Tienes un pedido por embarcar?</div>
          <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)' }}>Mándanos la orden y la ficha técnica. Te decimos qué revisar y programamos la visita a la fábrica.</div>
        </div>
        <a href="/contacto/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 24px', background: T.acento, color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
          Programar revisión <FaArrowRight />
        </a>
      </Tarjeta>
    </section>
  </div>
)

export default RevisionOrigenMX
