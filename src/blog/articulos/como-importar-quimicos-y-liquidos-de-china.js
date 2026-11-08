export default {
  servicio: 'gestion-aduanal',
  cta: { titulo: '¿Vas a importar químicos, líquidos o mercancía peligrosa?', texto: 'Mándanos la hoja de seguridad y la ficha técnica de cada producto. Te decimos si es viable, qué permiso requiere y cómo debe viajar.' },
  relacionados: ['como-importar-cosmeticos-de-china', 'como-importar-baterias-de-litio-de-china', 'que-pasa-en-la-aduana-mexicana'],
  intro: 'Materias primas para producción, productos de limpieza, pinturas, adhesivos, solventes, aerosoles, fertilizantes, aditivos, resinas, tintas. Los químicos se importan de China todos los días, pero no como cualquier mercancía: tienen reglas de transporte, a veces permisos previos y un padrón sectorial, y hay sustancias que no se pueden importar o que requieren autorizaciones especiales. Esta guía explica cómo saber en cuál caso estás antes de comprar.',
  cuerpo: `
## La hoja de seguridad lo define todo

Antes de cotizar un químico necesitamos su **hoja de datos de seguridad** (la SDS o MSDS) y su ficha técnica. De ahí salen las tres cosas que definen la importación:

- La **clasificación de peligro** para el transporte: si es inflamable, corrosivo, tóxico, oxidante, o no peligroso, y su número UN.
- La **composición**: qué sustancias contiene y en qué concentración, porque hay sustancias controladas.
- La **fracción arancelaria**, que define arancel, padrón y permisos.

Sin la hoja de seguridad no se puede cotizar flete, no se puede clasificar y no se puede saber si el producto entra. Pídela al proveedor en el primer correo.

## Mercancía peligrosa: cómo viaja

Buena parte de los químicos son **mercancía peligrosa** para el transporte, lo que significa:

- **Por barco**, bajo el código marítimo internacional de mercancías peligrosas, con declaración, etiquetas de peligro en los bultos, embalaje homologado y separación de otras cargas. Es la vía normal.
- **Por avión**, con restricciones mucho mayores: muchos químicos simplemente no vuelan, y los que sí, en cantidades limitadas y con embalaje especial.
- **Envases**: tambores, cubetas, contenedores intermedios (IBC) o isotanques según el volumen. El envase debe estar homologado para el producto.
- **En México**, el transporte terrestre de materiales peligrosos requiere unidades y operadores autorizados y la documentación de la norma correspondiente.

Lo coordinamos desde nuestras bodegas en China, con proveedores de transporte especializados en peligrosos. Más en [forwarding China–México](/servicios/forwarding/).

## Padrón sectorial y permisos

Muchos químicos requieren inscripción en el **padrón de importadores de sectores específicos**, sector de productos químicos, además del padrón general. Y según la sustancia, pueden requerir **permisos o avisos previos** de distintas autoridades:

- **Salud** (COFEPRIS): plaguicidas, nutrientes vegetales, sustancias tóxicas, y los **precursores químicos** y químicos esenciales, que están controlados y requieren permiso previo.
- **Medio ambiente** (SEMARNAT): materiales y residuos peligrosos, sustancias agotadoras de la capa de ozono, ciertos gases refrigerantes.
- **Defensa** (SEDENA): explosivos, pólvora y sustancias relacionadas, y ciertos químicos de uso dual.
- **Economía**: permisos previos para algunas fracciones.
- **Agricultura** (SENASICA): fertilizantes, agroquímicos y productos de uso agrícola.

Cuál aplica lo define la fracción y la composición. Lo revisamos con la hoja de seguridad como parte de la [gestión aduanal](/servicios/gestion-aduanal/), coordinado con agentes aduanales con patente, y puedes empezar tú en nuestro [Clasificador](/a4/).

## Lo que no entra o requiere autorización especial

Hay sustancias con importación **prohibida** o sujeta a autorizaciones que en la práctica no están al alcance de un importador comercial: ciertos plaguicidas, sustancias psicotrópicas y sus precursores sin permiso, algunos solventes y químicos controlados, y productos con sustancias agotadoras de la capa de ozono fuera de cuota. Si el producto está en una de esas listas, te lo decimos antes de que compres. No hay forma de "pasarlo"; hay forma de no comprarlo.

## Etiquetado

Los químicos para uso industrial deben venir etiquetados conforme al sistema armonizado de clasificación y etiquetado de productos químicos, con pictogramas de peligro, palabra de advertencia, indicaciones de peligro y consejos de prudencia, en español, más los datos del importador. Los productos de limpieza y de consumo tienen además su norma de información comercial. Y la hoja de seguridad en español debe acompañar al producto.

## Líquidos que no son peligrosos

No todo líquido es mercancía peligrosa: muchos productos de limpieza, aditivos, aceites y soluciones viajan como carga general. Pero sí tienen reglas: envases que no fuguen, tarimas con película, cajas que resistan humedad, y en algunos casos control de temperatura. Un contenedor con una cubeta rota contamina todo lo demás. La [revisión en origen](/servicios/revision-en-origen/) verifica sellado, etiquetado y acomodo antes de cerrar el contenedor.

## Los errores que más vemos

- Cotizar sin hoja de seguridad.
- Comprar un precursor controlado sin saber que lo es.
- Querer traer por avión lo que no vuela.
- No estar en el padrón sectorial de químicos.
- Envases no homologados.
- Etiqueta sin pictogramas ni español.
`,
  faq: [
    ['¿Qué necesito para cotizar la importación de un químico?', 'La hoja de datos de seguridad y la ficha técnica. De ahí sale si es mercancía peligrosa, qué sustancias contiene, su fracción y los permisos que requiere.'],
    ['¿Los químicos pueden viajar por avión?', 'Muchos no. Los que sí, en cantidades limitadas y con embalaje especial. La vía normal para mercancía peligrosa es el barco.'],
    ['¿Necesito un padrón especial para importar químicos?', 'Muchas fracciones de químicos requieren el padrón sectorial de productos químicos, además del padrón de importadores general.'],
    ['¿Qué son los precursores químicos y por qué importa?', 'Son sustancias controladas porque pueden usarse para fabricar drogas o explosivos. Requieren permiso previo de la autoridad y hay productos industriales comunes que los contienen.'],
    ['¿Qué debe decir la etiqueta de un químico?', 'Pictogramas de peligro, palabra de advertencia, indicaciones de peligro y consejos de prudencia en español, más los datos del importador, y la hoja de seguridad en español.'],
    ['¿Pueden transportar materiales peligrosos dentro de México?', 'Sí, con unidades y operadores autorizados para materiales peligrosos y la documentación que marca la norma.']
  ]
}
