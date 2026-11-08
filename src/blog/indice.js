// Índice del blog. Cada artículo vive en ./articulos/<slug>.js y se carga solo cuando alguien lo abre,
// así el resto del sitio no pesa más. Este archivo no debe importar nada de React ni del navegador:
// también lo lee scripts/prerender.mjs para saber qué direcciones generar.

export const TEMAS = {
  basicos: 'Básicos para importar',
  productos: 'Guías por producto',
  proveedores: 'Proveedores y compras en China',
  aduana: 'Aduana y requisitos'
}

export const ARTICULOS = [
  {
    slug: 'como-importar-de-china-a-mexico',
    titulo: 'Cómo importar de China a México: la guía completa',
    descripcion: 'Paso a paso para importar de China a México: qué necesitas, cómo elegir proveedor, cómo viaja tu carga, qué revisa la aduana y los errores que más cuestan.',
    tema: 'basicos', fecha: '2026-11-08', lectura: 12,
    cargar: () => import('./articulos/como-importar-de-china-a-mexico.js')
  },
  {
    slug: 'cuanto-cuesta-importar-de-china',
    titulo: 'Cuánto cuesta importar de China: de qué se compone el costo real',
    descripcion: 'El precio del proveedor no es lo que te cuesta la mercancía. Flete, aduana, impuestos, cumplimiento y transporte: qué incluye cada parte y por qué cambia.',
    tema: 'basicos', fecha: '2026-11-08', lectura: 9,
    cargar: () => import('./articulos/cuanto-cuesta-importar-de-china.js')
  },
  {
    slug: 'como-encontrar-proveedor-en-china',
    titulo: 'Cómo encontrar, verificar y pagarle a un proveedor en China',
    descripcion: 'Alibaba, 1688 o Taobao; cómo saber si la fábrica es real, qué pedirle antes de pagar, cómo pagar sin riesgo y las señales de estafa que vemos cada semana.',
    tema: 'proveedores', fecha: '2026-11-08', lectura: 11,
    cargar: () => import('./articulos/como-encontrar-proveedor-en-china.js')
  },
  {
    slug: 'como-importar-ropa-de-china',
    titulo: 'Cómo importar ropa y telas de China a México',
    descripcion: 'Padrón sectorial de textiles, etiquetado NOM-004, telas en rollo, pacas y lo que la aduana revisa en la ropa. Todo lo que preguntan los clientes que más importan.',
    tema: 'productos', fecha: '2026-11-08', lectura: 10,
    cargar: () => import('./articulos/como-importar-ropa-de-china.js')
  },
  {
    slug: 'como-importar-maquinaria-de-china',
    titulo: 'Cómo importar maquinaria de China a México',
    descripcion: 'CNC, láser, envasadoras, montacargas o retroexcavadoras: cómo viaja una máquina, qué permisos piden, qué pasa con la usada y cómo evitar que llegue dañada.',
    tema: 'productos', fecha: '2026-11-08', lectura: 10,
    cargar: () => import('./articulos/como-importar-maquinaria-de-china.js')
  },
  {
    slug: 'como-importar-calzado-de-china',
    titulo: 'Cómo importar calzado de China a México',
    descripcion: 'Padrón sectorial de calzado, etiquetado NOM-020, clasificación por corte y suela, precios estimados y lo que la aduana revisa en tenis, zapatos y botas.',
    tema: 'productos', fecha: '2026-11-08', lectura: 10,
    cargar: () => import('./articulos/como-importar-calzado-de-china.js')
  },
  {
    slug: 'como-importar-celulares-y-electronica-de-china',
    titulo: 'Cómo importar celulares y electrónica de China a México',
    descripcion: 'Qué NOM aplican, la homologación del IFT para todo lo que emite señal, cómo viajan las baterías de litio, voltaje, marcas y lo que debe decir el empaque.',
    tema: 'productos', fecha: '2026-11-08', lectura: 10,
    cargar: () => import('./articulos/como-importar-celulares-y-electronica-de-china.js')
  },
  {
    slug: 'marca-propia-y-replicas-importar-de-china',
    titulo: 'Marca propia y réplicas: qué se puede importar de China y qué no',
    descripcion: 'Por qué las réplicas no entran a México y qué pasa cuando alguien lo intenta; y cómo hacer tu propia marca en China: registro, OEM y ODM, muestra, empaque y código de barras.',
    tema: 'proveedores', fecha: '2026-11-08', lectura: 9,
    cargar: () => import('./articulos/marca-propia-y-replicas-importar-de-china.js')
  },
  {
    slug: 'como-importar-cosmeticos-de-china',
    titulo: 'Cómo importar cosméticos y productos de belleza de China a México',
    descripcion: 'Qué es cosmético y qué no, lo que pide COFEPRIS, etiquetado NOM-141, perfumes y esmaltes como mercancía peligrosa y cómo hacer maquillaje con tu marca.',
    tema: 'productos', fecha: '2026-11-08', lectura: 10,
    cargar: () => import('./articulos/como-importar-cosmeticos-de-china.js')
  },
  {
    slug: 'como-importar-juguetes-de-china',
    titulo: 'Cómo importar juguetes y artículos de fiesta de China a México',
    descripcion: 'Normas de seguridad NOM-015 y NOM-252, etiquetado, juguetes con pilas y control remoto, personajes con licencia, artículos de fiesta y cuándo embarcar para tu temporada.',
    tema: 'productos', fecha: '2026-11-08', lectura: 10,
    cargar: () => import('./articulos/como-importar-juguetes-de-china.js')
  },
  {
    slug: 'como-importar-muebles-y-hogar-de-china',
    titulo: 'Cómo importar muebles, decoración y materiales de China a México',
    descripcion: 'Dónde se fabrica cada cosa, por qué el volumen manda, cómo evitar que llegue roto, qué pide la aduana por producto y cómo amueblar un proyecto completo.',
    tema: 'productos', fecha: '2026-11-08', lectura: 9,
    cargar: () => import('./articulos/como-importar-muebles-y-hogar-de-china.js')
  },
  {
    slug: 'se-pueden-importar-vehiculos-de-china',
    titulo: '¿Se pueden importar vehículos de China a México? Autos, motos, scooters y más',
    descripcion: 'Qué pasa con los usados, qué requieren los nuevos, scooters y bicicletas eléctricas, cuatrimotos y carritos de golf, y cómo viaja un vehículo con su batería.',
    tema: 'productos', fecha: '2026-11-08', lectura: 9,
    cargar: () => import('./articulos/se-pueden-importar-vehiculos-de-china.js')
  },
  {
    slug: 'como-importar-autopartes-y-llantas-de-china',
    titulo: 'Cómo importar autopartes y llantas de China a México',
    descripcion: 'Clasificación por parte y vehículo, la norma de seguridad de llantas, cuotas compensatorias, piratería en refacciones y lo que debe decir la etiqueta.',
    tema: 'productos', fecha: '2026-11-08', lectura: 9,
    cargar: () => import('./articulos/como-importar-autopartes-y-llantas-de-china.js')
  },
  {
    slug: 'como-importar-equipo-de-gimnasio-de-china',
    titulo: 'Cómo importar equipo de gimnasio de China a México',
    descripcion: 'Comercial o para casa, dónde se fabrica, peso y volumen en el contenedor, qué norma aplica a lo eléctrico, calidad, marca propia e instalación.',
    tema: 'productos', fecha: '2026-11-08', lectura: 9,
    cargar: () => import('./articulos/como-importar-equipo-de-gimnasio-de-china.js')
  },
  {
    slug: 'como-importar-quimicos-y-liquidos-de-china',
    titulo: 'Cómo importar químicos y líquidos de China a México',
    descripcion: 'La hoja de seguridad lo define todo: mercancía peligrosa, padrón sectorial de químicos, permisos de COFEPRIS, SEMARNAT y SEDENA, lo que no entra y el etiquetado.',
    tema: 'productos', fecha: '2026-11-08', lectura: 9,
    cargar: () => import('./articulos/como-importar-quimicos-y-liquidos-de-china.js')
  },
  {
    slug: 'como-importar-baterias-de-litio-de-china',
    titulo: 'Cómo importar baterías de litio de China: lo que vuela y lo que no',
    descripcion: 'Por qué son mercancía peligrosa, los cuatro casos, el certificado UN38.3, reglas para avión y barco, embalaje, etiquetado y lo que pide la aduana.',
    tema: 'productos', fecha: '2026-11-08', lectura: 9,
    cargar: () => import('./articulos/como-importar-baterias-de-litio-de-china.js')
  },
  {
    slug: 'como-importar-equipo-medico-de-china',
    titulo: 'Cómo importar equipo médico e insumos para la salud de China a México',
    descripcion: 'Qué es dispositivo médico, las clases de riesgo, el registro sanitario, lo que necesita el importador, equipo de estética y lo que entra con menos trámite.',
    tema: 'productos', fecha: '2026-11-08', lectura: 10,
    cargar: () => import('./articulos/como-importar-equipo-medico-de-china.js')
  },
  {
    slug: 'como-importar-alimentos-y-suplementos-de-china',
    titulo: 'Cómo importar alimentos, bebidas y suplementos de China a México',
    descripcion: 'COFEPRIS y SENASICA, lo que requiere origen autorizado, el etiquetado frontal NOM-051, las reglas de los suplementos y cómo viajan los alimentos.',
    tema: 'productos', fecha: '2026-11-08', lectura: 10,
    cargar: () => import('./articulos/como-importar-alimentos-y-suplementos-de-china.js')
  },
  {
    slug: 'como-importar-paneles-solares-de-china',
    titulo: 'Cómo importar paneles solares, inversores y baterías de China a México',
    descripcion: 'Los cuatro componentes de un sistema solar y sus reglas, cómo lograr que un contenedor de vidrio llegue completo, homologación de inversores y baterías por barco.',
    tema: 'productos', fecha: '2026-11-08', lectura: 9,
    cargar: () => import('./articulos/como-importar-paneles-solares-de-china.js')
  },
  {
    slug: 'vapeadores-y-encendedores-se-pueden-importar',
    titulo: 'Vapeadores y encendedores: qué se puede importar de China y qué no',
    descripcion: 'Por qué los vapeadores están prohibidos y no hay zona gris, cómo se importan los encendedores como mercancía peligrosa, y la lista de lo que no entra a México.',
    tema: 'aduana', fecha: '2026-11-08', lectura: 7,
    cargar: () => import('./articulos/vapeadores-y-encendedores-se-pueden-importar.js')
  },
  {
    slug: 'como-importar-drones-de-china',
    titulo: 'Cómo importar drones de China a México',
    descripcion: 'Tres regulaciones en un producto: homologación del IFT, batería de litio y reglas de vuelo. Tipos de dron, cómo viajan, accesorios y qué revisar antes de embarcar.',
    tema: 'productos', fecha: '2026-11-08', lectura: 8,
    cargar: () => import('./articulos/como-importar-drones-de-china.js')
  },
  {
    slug: 'que-es-cbm-y-peso-volumetrico',
    titulo: 'Qué es un CBM y qué es el peso volumétrico: cómo se mide tu carga',
    descripcion: 'Cómo calcular el volumen de tu pedido, la regla de tonelada por metro cúbico, el peso volumétrico en aéreo, el aire que te cuesta y cuánto cabe en un contenedor.',
    tema: 'basicos', fecha: '2026-11-08', lectura: 8,
    cargar: () => import('./articulos/que-es-cbm-y-peso-volumetrico.js')
  },
  {
    slug: 'cuanto-tarda-importar-de-china-aereo-vs-maritimo',
    titulo: 'Cuánto tarda importar de China a México: aéreo contra marítimo',
    descripcion: 'Las seis etapas de un embarque, tiempos por tramo en barco y en avión, las fechas del año que lo alargan todo y qué modo conviene según tu caso.',
    tema: 'basicos', fecha: '2026-11-08', lectura: 9,
    cargar: () => import('./articulos/cuanto-tarda-importar-de-china-aereo-vs-maritimo.js')
  },
  {
    slug: 'padron-de-importadores-rfc-y-pedimento',
    titulo: 'Padrón de importadores, RFC y pedimento: lo que necesitas para importar legalmente',
    descripcion: 'Qué es cada uno, qué necesitas para tenerlo, el padrón sectorial, por qué lo suspenden y cómo empezar a importar a través de una comercializadora.',
    tema: 'aduana', fecha: '2026-11-08', lectura: 9,
    cargar: () => import('./articulos/padron-de-importadores-rfc-y-pedimento.js')
  },
  {
    slug: 'incoterms-para-importar-de-china',
    titulo: 'Incoterms para importar de China: EXW, FOB, CIF y DDP explicados',
    descripcion: 'Qué define cada Incoterm, por qué FOB es el más usado, qué esconde un CIF barato, por qué un DDP de China casi nunca es legal y cómo comparar cotizaciones.',
    tema: 'basicos', fecha: '2026-11-08', lectura: 9,
    cargar: () => import('./articulos/incoterms-para-importar-de-china.js')
  },
  {
    slug: 'contenedor-20-40-o-consolidado',
    titulo: 'Contenedor de 20, de 40 o consolidado: cuál conviene para tu carga',
    descripcion: 'Medidas y capacidades reales de cada contenedor, cómo funciona el consolidado, a partir de qué volumen conviene el completo, los especiales y cómo llenarlo bien.',
    tema: 'basicos', fecha: '2026-11-08', lectura: 9,
    cargar: () => import('./articulos/contenedor-20-40-o-consolidado.js')
  },
  {
    slug: 'puertos-de-entrada-a-mexico-desde-china',
    titulo: 'Puertos y aeropuertos de entrada a México desde China: cuál conviene',
    descripcion: 'De qué puerto sale tu carga en China, Manzanillo, Lázaro Cárdenas, Veracruz y los demás, qué puerto conviene según tu bodega y los aeropuertos de carga.',
    tema: 'basicos', fecha: '2026-11-08', lectura: 9,
    cargar: () => import('./articulos/puertos-de-entrada-a-mexico-desde-china.js')
  },
  {
    slug: 'que-pasa-en-la-aduana-mexicana',
    titulo: 'Qué pasa en la aduana mexicana: paso a paso desde que llega tu carga',
    descripcion: 'Quién es quién, lo que debe estar listo antes de que llegue el barco, el despacho paso a paso, el reconocimiento aduanero, qué es un embargo y cómo evitarlo.',
    tema: 'aduana', fecha: '2026-11-08', lectura: 10,
    cargar: () => import('./articulos/que-pasa-en-la-aduana-mexicana.js')
  },
  {
    slug: 'nom-y-cofepris-que-son-y-cuando-aplican',
    titulo: 'NOM, COFEPRIS y las demás regulaciones: qué son y cuándo aplican',
    descripcion: 'Todo empieza por la fracción arancelaria: qué es una NOM, qué regula COFEPRIS, qué otras autoridades intervienen, cuotas compensatorias y permisos previos.',
    tema: 'aduana', fecha: '2026-11-08', lectura: 10,
    cargar: () => import('./articulos/nom-y-cofepris-que-son-y-cuando-aplican.js')
  },
  {
    slug: 'lo-mas-raro-que-nos-piden-importar-de-china',
    titulo: 'Lo más raro que nos piden importar de China: qué sí, qué no y por qué',
    descripcion: 'Máquinas de garra, casas prefabricadas, animatrónicos, sillones de masaje, semillas, armas de utilería. Lo que sí se puede, lo que se puede con condiciones y lo que no.',
    tema: 'basicos', fecha: '2026-11-08', lectura: 8,
    cargar: () => import('./articulos/lo-mas-raro-que-nos-piden-importar-de-china.js')
  }
]

export const SLUGS = ARTICULOS.map(a => a.slug)
export const articuloPorSlug = (slug) => ARTICULOS.find(a => a.slug === slug) || null
