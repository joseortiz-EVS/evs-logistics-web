// Contenido ampliado de Gestión Aduanal para México (borrador para revisión de José).
// Se muestra debajo de "Capacidades" solo en /servicios/gestion-aduanal/ con país México.
// EVS es forwarder: la gestión aduanal se coordina con agentes aduanales con patente.
import { FaSearch, FaClipboardCheck, FaIdCard, FaFileSignature, FaBoxOpen, FaCheckCircle, FaExclamationTriangle, FaArrowRight } from 'react-icons/fa'
import { T } from '../tema'

const REVISION = [
  ['Fracción arancelaria y NICO', 'Clasificamos tu producto antes de que pagues al proveedor. De la fracción dependen el arancel y los permisos.'],
  ['NOM, COFEPRIS y permisos', 'Te decimos si tu producto necesita Norma Oficial Mexicana, registro sanitario, permiso previo o padrón sectorial.'],
  ['Etiquetado', 'Revisamos qué debe decir la etiqueta en español para que no te detengan la mercancía en la aduana.'],
  ['Documentos del proveedor', 'Validamos que la factura y la lista de empaque de tu proveedor en China digan lo que la aduana mexicana espera.']
]

const INCLUYE = [
  [FaSearch, 'Clasificación arancelaria', 'Fracción y NICO correctos para cada producto, con fundamento. Evitas multas y pagos de más.'],
  [FaClipboardCheck, 'Regulaciones no arancelarias', 'NOM, COFEPRIS, permisos previos, avisos y padrones sectoriales: identificamos cuáles aplican y cómo cumplirlos.'],
  [FaIdCard, 'Padrón de importadores', 'Si aún no estás dado de alta, te orientamos en el trámite ante el SAT y en los padrones sectoriales que necesites.'],
  [FaFileSignature, 'Pedimento y despacho', 'Coordinamos el despacho con agentes aduanales con patente en la aduana de llegada. Ellos elaboran y firman el pedimento; tú tratas con nosotros.'],
  [FaBoxOpen, 'Previo en recinto', 'Revisión física de la mercancía antes del despacho para confirmar cantidades, etiquetado y que todo coincida con los documentos.']
]

const DOCS = [
  'RFC activo y padrón de importadores vigente',
  'Factura comercial del proveedor',
  'Lista de empaque (packing list)',
  'Conocimiento de embarque (BL) o guía aérea (AWB)',
  'Certificado de origen, cuando aplica',
  'Certificados NOM, registros o permisos, cuando aplican',
  'Encargo conferido al agente aduanal en el portal del SAT'
]

const PASOS = [
  ['Revisión previa', 'Antes de comprar: fracción, regulaciones, etiquetado y documentos. Sabes qué necesitas y cuánto vas a pagar antes de embarcar.'],
  ['Alta y encargo conferido', 'Te guiamos para activar tu padrón de importadores y aceptar el encargo conferido al agente aduanal en el portal del SAT.'],
  ['Documentos del embarque', 'Reunimos factura, lista de empaque, BL o AWB, certificados y permisos. Revisamos que todo coincida entre sí.'],
  ['Llegada y previo', 'Con la mercancía en el recinto, se hace el previo físico y se confirma lo declarado contra lo que llegó.'],
  ['Pedimento y pago', 'El agente aduanal con patente elabora el pedimento, se pagan las contribuciones y se presenta la mercancía al despacho.'],
  ['Liberación y entrega', 'Liberada la carga, coordinamos el transporte hasta tu bodega en cualquier parte de México.']
]

const ERRORES = [
  ['Fracción arancelaria incorrecta', 'Pagas aranceles de más o de menos. Si es de menos, la autoridad lo cobra después con multa y recargos.'],
  ['NOM o etiquetado faltante', 'La mercancía se queda detenida en el recinto generando almacenaje hasta que cumples, o no puede entrar.'],
  ['Valor declarado por debajo del real', 'Es la causa más común de embargos y suspensiones del padrón de importadores.'],
  ['Padrón suspendido o RFC con inconsistencias', 'Sin padrón activo no hay pedimento. Lo revisamos antes de que el barco salga.'],
  ['Documentos que no coinciden', 'Factura, lista de empaque y BL con cantidades o descripciones distintas detienen el despacho.']
]

export const FAQ = [
  ['¿Necesito un agente aduanal para importar de China?', 'Sí. En México la importación definitiva se hace a través de un agente aduanal con patente. Nosotros lo coordinamos por ti: tú tratas con un solo contacto y nosotros con el agente, el recinto y el transportista.'],
  ['¿Puedo importar sin padrón de importadores?', 'Para importar con fines comerciales necesitas estar inscrito en el padrón de importadores del SAT. Si aún no lo tienes, te decimos qué requisitos cumplir y te acompañamos en el trámite.'],
  ['¿Qué es la fracción arancelaria y por qué importa tanto?', 'Es el código con el que la aduana identifica tu producto. De ella dependen el arancel, los impuestos, las NOM y los permisos. Una fracción mal elegida es la fuente más frecuente de multas y retrasos.'],
  ['¿Mi producto necesita NOM?', 'Depende del producto: electrónicos, juguetes, textiles, calzado y muchos otros sí la requieren. Lo revisamos antes de que compres y te decimos cómo cumplirla.'],
  ['¿En qué aduanas trabajan?', 'Principalmente Manzanillo, Lázaro Cárdenas, Veracruz, Altamira y el Aeropuerto de la Ciudad de México, que es por donde entra casi todo lo que llega de China.'],
  ['¿Cuánto tarda el despacho?', 'Con los documentos en orden, normalmente de 2 a 5 días hábiles desde que la mercancía está disponible en el recinto. Si toca reconocimiento aduanero puede extenderse algunos días más.'],
  ['¿Qué pasa si me toca reconocimiento aduanero?', 'La autoridad revisa físicamente la mercancía contra el pedimento. Si la clasificación, el valor y los documentos están bien hechos, es solo tiempo. Por eso insistimos en la revisión previa.']
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

const GestionAduanalMX = ({ isMobile }) => (
  <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '64px' }}>

    {/* Intro */}
    <section>
      <Etiqueta>Importación China – México</Etiqueta>
      <Titulo>Gestión aduanal para importar de China a México</Titulo>
      <Parrafo>
        Importar de China no se complica en el barco: se complica en la aduana. Una fracción mal clasificada, una NOM que nadie revisó
        o un padrón suspendido detienen la mercancía y multiplican el costo. Nuestra gestión aduanal empieza antes de que compres y
        termina cuando la carga está en tu bodega, coordinada con agentes aduanales con patente en Manzanillo, Lázaro Cárdenas,
        Veracruz y el Aeropuerto de la Ciudad de México.
      </Parrafo>
      <Parrafo style={{ fontSize: '14px', color: T.tenue }}>
        ¿También necesitas el flete? Mira nuestro servicio de <a href="/servicios/forwarding/" style={{ color: T.acento, fontWeight: 600 }}>forwarding marítimo y aéreo China–México</a>.
      </Parrafo>
    </section>

    {/* Revisión previa */}
    <section>
      <Etiqueta>Antes de comprar</Etiqueta>
      <Titulo>Revisión previa: sabes qué necesitas antes de pagarle al proveedor</Titulo>
      <Parrafo>
        El error más caro es descubrir en la aduana que el producto necesitaba una norma o un permiso. Por eso revisamos todo con la
        ficha técnica y las fotos, antes de que se fabrique o embarque.
      </Parrafo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '16px' }}>
        {REVISION.map(([t, d]) => (
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

    {/* Qué incluye */}
    <section>
      <Etiqueta>Servicio</Etiqueta>
      <Titulo>Qué incluye nuestra gestión aduanal</Titulo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
        {INCLUYE.map(([Icono, t, d]) => (
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

    {/* Clasificador */}
    <section>
      <Tarjeta style={{ background: T.superficieAlta, padding: isMobile ? '24px 20px' : '36px' }}>
        <Etiqueta>Herramienta</Etiqueta>
        <Titulo h="h3">Revisa tu producto con nuestro Clasificador</Titulo>
        <Parrafo style={{ maxWidth: 'none', margin: 0 }}>
          Escribe el producto o la fracción arancelaria en nuestro <a href="/a4/" style={{ color: T.acento, fontWeight: 700, textDecoration: 'underline' }}>Clasificador</a> y
          te decimos qué necesita para entrar a México. Si tienes dudas, un asesor de EVS te contacta.
        </Parrafo>
      </Tarjeta>
    </section>

    {/* Documentos + errores */}
    <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px' }}>
      <div>
        <Etiqueta>Requisitos</Etiqueta>
        <Titulo h="h3">Documentos para el despacho</Titulo>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {DOCS.map(d => (
            <div key={d} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 16px', background: T.superficie, border: `1px solid ${T.borde}`, borderRadius: '10px' }}>
              <FaCheckCircle style={{ color: '#48bb78', flexShrink: 0 }} />
              <span style={{ fontSize: '14px', color: T.suave, fontWeight: 500 }}>{d}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '13px', color: T.tenue, marginTop: '12px' }}>Nosotros te decimos cuáles aplican a tu producto y revisamos cada uno antes de que llegue la carga.</p>
      </div>
      <div>
        <Etiqueta>Lo que evitamos</Etiqueta>
        <Titulo h="h3">Los errores que más cuestan en la aduana</Titulo>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {ERRORES.map(([t, d]) => (
            <Tarjeta key={t} style={{ padding: '14px 16px', display: 'flex', gap: '12px' }}>
              <FaExclamationTriangle style={{ color: '#d69e2e', flexShrink: 0, marginTop: '3px' }} />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: T.texto, marginBottom: '3px' }}>{t}</div>
                <div style={{ fontSize: '13px', color: T.suave, lineHeight: 1.6 }}>{d}</div>
              </div>
            </Tarjeta>
          ))}
        </div>
      </div>
    </section>

    {/* Paso a paso */}
    <section>
      <Etiqueta>Cómo trabajamos</Etiqueta>
      <Titulo>El despacho paso a paso</Titulo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
        {PASOS.map(([t, d], i) => (
          <Tarjeta key={t}>
            <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: T.superficieAlta, border: `1px solid ${T.borde}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: T.acento, marginBottom: '12px' }}>{i + 1}</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: T.texto, marginBottom: '6px' }}>{t}</div>
            <div style={{ fontSize: '14px', color: T.suave, lineHeight: 1.7 }}>{d}</div>
          </Tarjeta>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section>
      <Etiqueta>Preguntas frecuentes</Etiqueta>
      <Titulo>Lo que nos preguntan sobre la aduana</Titulo>
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
          <div style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>Revisa tu producto antes de comprar</div>
          <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)' }}>Mándanos la ficha técnica o las fotos y te decimos qué necesita para entrar a México.</div>
        </div>
        <a href="/contacto/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 24px', background: T.acento, color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
          Solicitar revisión <FaArrowRight />
        </a>
      </Tarjeta>
    </section>
  </div>
)

export default GestionAduanalMX
