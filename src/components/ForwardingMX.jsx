// Contenido ampliado de Forwarding para México (borrador para revisión de José).
// Se muestra debajo de "Capacidades" solo en /servicios/forwarding/ con país México.
import { FaShip, FaPlane, FaWarehouse, FaArrowRight } from 'react-icons/fa'
import { T } from '../tema'

const BODEGAS = [
  ['Shanghái', 'Pudong'], ['Ningbo', 'Beilun'], ['Shenzhen', 'Yantian'], ['Guangzhou', 'Nansha'],
  ['Qingdao', 'Huangdao'], ['Tianjin', 'Binhai'], ['Xiamen', 'Haicang'], ['Hebei', 'Caofeidian']
]

const RUTAS_MAR = [
  ['Shanghái / Ningbo', 'Manzanillo', '22 – 28 días'],
  ['Shenzhen / Guangzhou', 'Manzanillo', '20 – 26 días'],
  ['Qingdao / Tianjin', 'Manzanillo · Lázaro Cárdenas', '25 – 35 días'],
  ['Cualquier puerto', 'Veracruz · Altamira', '35 – 45 días']
]

const PASOS = [
  ['Cotización y reserva', 'Nos mandas qué compras, cuánto y de dónde sale. Te decimos opción marítima o aérea y reservamos el espacio.'],
  ['Recepción en nuestra bodega en China', 'Tu proveedor entrega en la bodega del puerto más cercano, o recolectamos en su fábrica.'],
  ['Revisión, consolidación y documentos', 'Contamos bultos, revisamos empaque y etiquetado, consolidamos con otras compras y preparamos la documentación de embarque.'],
  ['Embarque y seguimiento', 'Sale en la naviera o aerolínea reservada. Te avisamos cada movimiento hasta la llegada.'],
  ['Llegada a México', 'Te avisamos la llegada a puerto o aeropuerto y entregamos la documentación del embarque lista para su liberación.'],
  ['Entrega en tu bodega', 'Transporte desde el puerto o aeropuerto hasta tu dirección, en cualquier parte de México.']
]

export const FAQ = [
  ['¿Puedo importar aunque sea mi primera vez?', 'Sí. Te explicamos cómo funciona el embarque antes de que compres y te acompañamos en todo el proceso. La mayoría de nuestros clientes empezó con un envío consolidado pequeño.'],
  ['¿Qué tan chico puede ser mi envío?', 'Desde 1 m³ en consolidado marítimo (LCL) y desde unos kilos en aéreo. Pagas solo por el espacio que ocupa tu mercancía.'],
  ['¿Mi carga va asegurada?', 'Te ofrecemos seguro de carga por el valor de tu mercancía. Te recomendamos contratarlo siempre; es un porcentaje mínimo del valor del embarque.'],
  ['¿Cómo sé dónde va mi carga?', 'Te avisamos en cada etapa: recepción en bodega, salida, llegada a puerto, despacho y entrega. Además tienes acceso al portal de clientes con el estatus de cada embarque.'],
  ['¿Manejan carga peligrosa, refrigerada o sobredimensionada?', 'Sí, con cotización especial. Dinos de qué producto se trata y te confirmamos naviera, documentos y tiempos.'],
  ['¿Qué pasa si el barco se retrasa?', 'Te avisamos en cuanto la naviera publica el cambio y reajustamos la entrega en México. Los retrasos en puerto no generan cobros adicionales de nuestra parte.']
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

const ForwardingMX = ({ isMobile }) => (
  <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '64px' }}>

    {/* Intro */}
    <section>
      <Etiqueta>Envíos China – México</Etiqueta>
      <Titulo>Forwarding puerta a puerta de China a México</Titulo>
      <Parrafo>
        Operamos desde 2016 en los dos extremos de la ruta: bodegas propias en los ocho principales puertos de China y equipo en México.
        Recibimos la carga de tus proveedores, la consolidamos, la embarcamos por mar o por aire y la coordinamos hasta tu bodega.
        Un solo contacto de principio a fin.
      </Parrafo>
    </section>

    {/* Bodegas */}
    <section>
      <Etiqueta>Origen</Etiqueta>
      <Titulo>Bodega propia al pie de los 8 principales puertos de China</Titulo>
      <Parrafo>
        Tu proveedor entrega en la bodega del puerto que le quede más cerca, o nosotros recolectamos en su fábrica.
        Ahí revisamos la mercancía, la juntamos con tus otras compras y preparamos el embarque. Puedes comprar a varios proveedores
        en distintas ciudades y recibir todo en un solo envío.
      </Parrafo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '12px' }}>
        {BODEGAS.map(([puerto, zona]) => (
          <Tarjeta key={puerto} style={{ padding: '16px 18px', display: 'flex', gap: '12px', alignItems: 'center' }}>
            <FaWarehouse style={{ color: T.acento, fontSize: '18px', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: T.texto }}>{puerto}</div>
              <div style={{ fontSize: '12px', color: T.tenue }}>{zona}</div>
            </div>
          </Tarjeta>
        ))}
      </div>
    </section>

    {/* Marítimo */}
    <section>
      <Etiqueta>Marítimo</Etiqueta>
      <Titulo>Flete marítimo China – México</Titulo>
      <Parrafo>
        Más del 90 % de lo que México importa de China llega por barco, casi todo por el Pacífico. Trabajamos con las principales
        navieras de la ruta y elegimos contigo el puerto de llegada según dónde esté tu bodega: Manzanillo y Lázaro Cárdenas para el
        centro y occidente del país, Veracruz y Altamira para el Golfo y el noreste.
      </Parrafo>
      <Tarjeta style={{ padding: 0, overflow: 'hidden', marginBottom: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: T.superficieAlta }}>
              {['Salida', 'Llegada', 'Tránsito aproximado'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '12px 18px', color: T.tenue, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RUTAS_MAR.map(([de, a, dias]) => (
              <tr key={de + a} style={{ borderTop: `1px solid ${T.borde}` }}>
                <td style={{ padding: '14px 18px', color: T.texto, fontWeight: 600 }}>{de}</td>
                <td style={{ padding: '14px 18px', color: T.suave }}>{a}</td>
                <td style={{ padding: '14px 18px', color: T.acento, fontWeight: 700, whiteSpace: 'nowrap' }}>{dias}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Tarjeta>
      <p style={{ fontSize: '13px', color: T.tenue, margin: '0 0 28px' }}>
        Tiempos de puerto a puerto. Suma los días de liberación en puerto y de entrega terrestre.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
        <Tarjeta>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <FaShip style={{ color: T.acento }} />
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: T.texto, margin: 0 }}>Contenedor completo (FCL)</h3>
          </div>
          <p style={{ fontSize: '14px', color: T.suave, lineHeight: 1.7, margin: 0 }}>
            Contenedores de 20', 40' y 40' HQ. Conviene a partir de unos 15 m³ o cuando tu mercancía no debe viajar mezclada.
            Libera más rápido en destino y tiene menos manipulación.
          </p>
        </Tarjeta>
        <Tarjeta>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <FaShip style={{ color: T.acento }} />
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: T.texto, margin: 0 }}>Consolidado (LCL)</h3>
          </div>
          <p style={{ fontSize: '14px', color: T.suave, lineHeight: 1.7, margin: 0 }}>
            Pagas solo por el volumen que ocupa tu carga, desde 1 m³. Ideal para primeras importaciones, muestras grandes y
            reposiciones. Salidas semanales desde nuestras bodegas.
          </p>
        </Tarjeta>
      </div>
    </section>

    {/* Aéreo */}
    <section>
      <Etiqueta>Aéreo</Etiqueta>
      <Titulo>Flete aéreo China – México</Titulo>
      <Parrafo>
        Para cuando el tiempo vale más que el flete: muestras, reposición urgente, electrónicos, refacciones y mercancía de alto valor
        y poco peso. Salimos de Shanghái, Guangzhou, Shenzhen y Hong Kong y llegamos al Aeropuerto de la Ciudad de México (AICM) y a
        Guadalajara, con entrega a cualquier punto del país.
      </Parrafo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
        {[
          ['3 – 5 días', 'Aéreo directo', 'Aeropuerto a aeropuerto. Para urgencias.'],
          ['5 – 10 días', 'Aéreo consolidado', 'Compartes espacio con otros importadores y bajas el costo por kilo.'],
          ['Desde pocos kilos', 'Sin mínimo', 'Cobramos por peso real o volumétrico, el que resulte mayor.']
        ].map(([n, t, d]) => (
          <Tarjeta key={t}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <FaPlane style={{ color: T.acento, fontSize: '14px' }} />
              <div style={{ fontSize: '22px', fontWeight: 800, color: T.acento }}>{n}</div>
            </div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: T.texto, marginBottom: '4px' }}>{t}</div>
            <div style={{ fontSize: '13px', color: T.suave, lineHeight: 1.6 }}>{d}</div>
          </Tarjeta>
        ))}
      </div>
    </section>

    {/* Paso a paso */}
    <section>
      <Etiqueta>Cómo trabajamos</Etiqueta>
      <Titulo>Tu envío paso a paso</Titulo>
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

    {/* Calendario */}
    <section>
      <Etiqueta>Calendario</Etiqueta>
      <Titulo>Fechas que mueven la ruta</Titulo>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
        {[
          ['Año Nuevo Chino · enero – febrero', 'Las fábricas cierran de 2 a 4 semanas. Lo que quieras recibir en marzo debe embarcar antes de mediados de enero.'],
          ['Temporada alta · agosto – octubre', 'Los barcos van llenos por las compras de fin de año. Reserva con 2 a 3 semanas de anticipación.'],
          ['Semana Dorada · primera semana de octubre', 'China para una semana. Conviene tener la carga en nuestra bodega antes.']
        ].map(([t, d]) => (
          <Tarjeta key={t}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: T.texto, marginBottom: '6px' }}>{t}</div>
            <div style={{ fontSize: '14px', color: T.suave, lineHeight: 1.7 }}>{d}</div>
          </Tarjeta>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section>
      <Etiqueta>Preguntas frecuentes</Etiqueta>
      <Titulo>Lo que nos preguntan antes de embarcar</Titulo>
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
          <div style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>Cotiza tu envío de China a México</div>
          <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)' }}>Dinos qué compras, cuánto y de dónde sale. Te respondemos el mismo día.</div>
        </div>
        <a href="/contacto/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 24px', background: T.acento, color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
          Solicitar cotización <FaArrowRight />
        </a>
      </Tarjeta>
    </section>
  </div>
)

export default ForwardingMX
