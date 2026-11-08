export default {
  servicio: 'forwarding',
  cta: { titulo: '¿Quieres saber cuánto espacio ocupa tu pedido?', texto: 'Mándanos la lista de empaque con medidas y peso por caja. Te calculamos el volumen, te decimos si conviene consolidado o contenedor y qué modo te sirve.' },
  relacionados: ['contenedor-20-40-o-consolidado', 'cuanto-cuesta-importar-de-china', 'cuanto-tarda-importar-de-china-aereo-vs-maritimo'],
  intro: 'La primera pregunta que te va a hacer cualquier forwarder es "¿cuántos CBM son?", y la primera que te va a hacer la aerolínea es "¿cuánto pesa, real o volumétrico?". Si no sabes contestarlas, no te pueden cotizar, y si contestas mal, la cotización no sirve. Este artículo explica en diez minutos lo que hay que saber de volumen y peso para importar: qué es un CBM, cómo se calcula, qué es el peso volumétrico y por qué el aire que viaja en tus cajas te cuesta.',
  cuerpo: `
## Qué es un CBM

CBM es **metro cúbico**, por sus siglas en inglés (cubic meter). Es la unidad en la que se mide el espacio que ocupa la carga, y es la base para cotizar el flete marítimo en consolidado y para saber cuántos contenedores necesitas. Un metro cúbico es un cubo de un metro por lado.

## Cómo se calcula

Para cada caja: **largo por ancho por alto, en metros**. Y después multiplicas por el número de cajas.

Ejemplo: una caja de 60 centímetros de largo, 40 de ancho y 50 de alto mide 0.60 por 0.40 por 0.50, que da **0.12 metros cúbicos**. Si son 50 cajas iguales, el pedido ocupa **6 metros cúbicos**.

Si las cajas no son iguales, se calcula cada tipo y se suman. Si el proveedor te da las medidas en centímetros, conviértelas a metros antes de multiplicar; si te da el volumen directamente, pídele también las medidas para verificarlo.

Lo que necesitas del proveedor para esto es la **lista de empaque**: cuántas cajas, medidas de cada una, peso bruto de cada una, y piezas por caja. Sin lista de empaque no hay cotización seria.

## Peso bruto, peso neto y la relación con el volumen

El **peso neto** es el del producto; el **peso bruto** incluye el empaque. Para el flete importa el bruto.

En marítimo consolidado, el flete se cobra por lo que resulte mayor entre el volumen en metros cúbicos y el peso en toneladas, con la regla de que **una tonelada equivale a un metro cúbico**. Casi toda la mercancía de consumo es más voluminosa que pesada, así que normalmente se cobra por volumen. Las excepciones son productos muy densos: discos de gimnasio, herramientas, azulejos, metal.

## Peso volumétrico: el concepto del aéreo

En avión el espacio es lo que falta, así que las aerolíneas cobran por **peso volumétrico** cuando la carga es ligera y ocupa mucho. El peso volumétrico se calcula dividiendo el volumen en centímetros cúbicos entre un factor; el estándar en carga aérea es **6,000**.

Ejemplo: la caja de 60 por 40 por 50 centímetros tiene 120,000 centímetros cúbicos. Entre 6,000 da **20 kilos** de peso volumétrico. Si la caja pesa 12 kilos reales, la aerolínea cobra 20. Si pesa 30, cobra 30. Siempre el mayor.

Por eso la ropa, los peluches, los empaques grandes y las cajas medio vacías salen caros por avión aunque pesen poco. Y por eso un buen empaque, compacto, sin aire, es dinero.

## El aire que viaja te cuesta

En todos los modos, el espacio vacío dentro de las cajas se paga igual que el producto. Lo que funciona:

- Pedir al proveedor **cajas a la medida** del producto, no cajas estándar medio vacías.
- Productos **desarmados** o anidados cuando se puede: muebles, racks, cubetas, sillas.
- **Cajas máster** uniformes que se apilen bien en la tarima y en el contenedor.
- Para consolidado, cajas que no excedan el tamaño de una tarima estándar.
- Preguntar si el producto se puede **comprimir** (textiles al vacío, por ejemplo) sin dañarlo.

## Cuánto cabe en un contenedor

Las capacidades reales, con carga bien acomodada, son aproximadas: un contenedor de **20 pies** carga alrededor de 28 metros cúbicos de carga útil; uno de **40 pies** alrededor de 58; y uno de **40 pies alto** (high cube) alrededor de 68. La capacidad teórica es mayor, pero la carga nunca se acomoda sin huecos. A partir de cierto volumen el contenedor completo conviene más que el consolidado; lo explicamos en [contenedor de 20, 40 o consolidado](/blog/contenedor-20-40-o-consolidado/).

Y el peso también tiene límite: un contenedor tiene un peso máximo de carga, y las carreteras mexicanas tienen el suyo. Con carga muy densa se llena de peso antes que de volumen.

## Cómo lo usamos para cotizarte

Con la lista de empaque calculamos el volumen y el peso, decidimos contigo si conviene consolidado, contenedor, aéreo directo o consolidado aéreo, y de ahí sale una cotización que no cambia al llegar al puerto. Lo que cambia las cotizaciones es que las medidas reales no coincidan con las declaradas; por eso en la [revisión en origen](/servicios/revision-en-origen/) también se miden y pesan las cajas. Más en [forwarding China–México](/servicios/forwarding/).

## Los errores que más vemos

- Pedir cotización sin lista de empaque.
- Confundir centímetros con metros al calcular.
- Olvidar que el flete se cobra por el mayor entre peso y volumen.
- Mandar ropa por avión en cajas con aire.
- Creer que en un contenedor cabe la capacidad teórica.
- Medidas declaradas distintas a las reales.
`,
  faq: [
    ['¿Qué es un CBM?', 'Un metro cúbico, la unidad en que se mide el espacio que ocupa la carga. Se calcula multiplicando largo por ancho por alto en metros, caja por caja.'],
    ['¿Cómo calculo el volumen de mi pedido?', 'Largo por ancho por alto de cada caja, en metros, por el número de cajas. Si hay cajas distintas, calcula cada tipo y suma. Necesitas la lista de empaque del proveedor.'],
    ['¿Qué es el peso volumétrico?', 'El peso que la aerolínea asigna a una carga ligera que ocupa mucho espacio: el volumen en centímetros cúbicos entre 6,000. Se cobra el mayor entre peso real y volumétrico.'],
    ['¿Cuántos CBM caben en un contenedor?', 'Aproximadamente 28 en uno de 20 pies, 58 en uno de 40 y 68 en uno de 40 alto, con carga bien acomodada. La capacidad teórica es mayor pero nunca se alcanza.'],
    ['¿Por qué la ropa sale cara por avión?', 'Porque pesa poco y ocupa mucho: se cobra por peso volumétrico. Comprimida y en cajas a la medida mejora, pero casi siempre conviene barco.'],
    ['¿Qué pasa si las medidas reales no coinciden con las declaradas?', 'Cambia la cotización al llegar al puerto. Por eso en la revisión en origen también medimos y pesamos las cajas antes de embarcar.']
  ]
}
