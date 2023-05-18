<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Realización del muestreo
    <br><br>
    .row.justify-content-end.align-items-center.mb-5
      .col-xxl-5.col-xl-6.col-lg-7.col-10.img-02.z-index-1.mb-lg-0.p-2.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema6/img01.png')
      .col-lg-5.z-index-2(data-aos="fade-left")
        .BGR12.py-5.px-4
          p.mb-0 La importancia de realizar muestras constantes de agua, permite identificar de primera mano la calidad de esta y los procedimientos a seguir para mejorarla, esto es un procedimiento que debe hacerse de manera constante y con los rigores establecidos para esto a través de los manuales de procedimiento y normativa vigente.
      .col-1.d-lg-none.d-flex
    <br><br>
    p A continuación, se detallan los elementos a tener en cuenta para la realización de este muestreo:

    separador
    #t_6_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.1 Localización del muestreo

    .BGM07.px-md-5.px-4.py-4.mb-4
      .row.align-items-center
        .col-lg-7.order-lg-1.order-2
          p El muestreo de aguas puede tener diferentes fines que van desde conocer las características de la fuente de suministro, hasta determinar las condiciones que presenta un vertimiento. Para localizar el sitio de muestreo debe especificarse concretamente el fin de la muestra y el tipo de agua que se quiere muestrear, ya dependiendo de esto se especifica el lugar exacto y protocolo aplicable para la actividad.
          p En cualquier caso, siempre es necesario dejar registro detallado del lugar de la toma, incluso si se dispone de GPS se puede posicionar satelitalmente la ubicación. 
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema6/img02.svg')
      
    .BGM07.px-md-5.px-4.py-4.mb-5
      .row.justify-content-end.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema6/img03.svg')
        .col-lg-7
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Identificación de la muestra (nombre, código, etc.).
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Identificación del sitio de muestreo (georreferenciación: latitud, longitud).
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Tipo de fuente y características de esta (pozo calzado, perforación, canal, río, represa, aljibe, profundidad del nivel estático y total si fuera pozo o perforación, diámetro de la perforación o pozo, cercanía a pozos negros o industrias, existencia de pozos abandonados, etc.).
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Destino (consumo humano, animal, riego, etc.).
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Información acerca del establecimiento y nombre del propietario o encargado (con datos de dirección, e-mail y/o teléfono) donde se ha muestreado e información adicional acerca de problemas que detecta el personal que puede atribuirse al agua.
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Nombre de quien realizó el muestreo.
            li 
              .lista-ol--cuadro__vineta
                span 7
              | Tipo de análisis a efectuar (fisicoquímico y/o microbiológico). 
            li 
              .lista-ol--cuadro__vineta
                span 8
              | Reactivo empleado para su preservación, en caso de ser utilizado.
            li 
              .lista-ol--cuadro__vineta
                span 9
              | Cualquier otra observación que se considere de importancia.

    p Igualmente, dependiendo del fin de la muestra es posible que se requiera previamente a la actividad, realizar el lavado y desinfección del punto de muestreo para reducir el riesgo de contaminación por presencia de agentes, elementos o compuestos que puedan estar presentes en la estructura debido a su entorno. Para esto es común emplear diferentes agentes como hipoclorito de sodio o calcio tal como lo menciona Ortiz (2011).

    separador
    #t_6_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.2 Frecuencia del muestreo
    
    p.mb-5 La frecuencia con la que se tomarán las muestras puede variar en función de las necesidades de esta. Así mismo dependiendo de su fin es posible que existan tiempos definidos por las autoridades competentes por lo que resulta necesario indagar al respecto.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.bloque-inv.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/img04.jpg')})`}" data-aos="fade-left"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-right")
            p.mb-0 En todo caso es posible establecer la frecuencia de muestreo a partir de directrices dadas por organizaciones no gubernamentales, que brindan orientaciones con el objetivo de promover la obtención de resultados confiables. Este es el caso de Icontec y la NTC-ISO 5667-1, Directrices para el diseño de programas y técnicas de muestreo. Disponible en la base de datos de la Biblioteca SENA.
    
    .row.justify-content-center.mb-4
      .col-lg(data-aos="flip-up")
        .BGR05.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.px-2
              img(src="@/assets/curso/temas/img02.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  .h4 NTC 5667-1:2010
                  p.mb-0 Para conocer más sobre esto tan importante, puede apoyarse de la ISO 5667-1 Gestión ambiental. Calidad del agua. Muestreo. Directrices para el diseño de programas de muestreo. Ir a Icontec y buscar norma NTC 5667-1 y escoger NTC 5667-1:2010.
                .col-sm-auto
                  a.boton.color-acento-botones(href="http://biblioteca.SENA.edu.co/paginas/bases.html" target="_blank")
                    span Ir a página
                    i.fas.fa-link

    separador
    #t_6_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.3 Alistamiento de materiales e insumos
    
    p Dentro de las actividades previas al muestreo es necesario realizar el alistamiento y verificación de todo lo necesario para salir a campo. Esto involucra un proceso riguroso y detallado para:

    .BGM07.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7.order-lg-1.order-2
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span a
              | Verificación del tipo de muestra y fin (parámetros que se analizaran a estas).
            li 
              .lista-ol--cuadro__vineta
                span b
              | Aplicación de listas de verificación de implementos requeridos. Los cuales se encuentran previamente definidos en los protocolos de muestreo y contemplan recipientes, contenedores, preservantes, equipos de muestreo, formatos para registro, implementos para aforo, elementos de protección, entre otros.
            li 
              .lista-ol--cuadro__vineta
                span c
              | Verificación de las condiciones del material y funcionamiento de equipos, incluida su calibración.

        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema6/img05.svg')
    
    p En el tema tamaño de la muestra, es posible verificar el volumen mínimo de muestra, preservantes y tipos de recipientes requerido, consultado en el #[em Standard Methods for the Examination of Water and Wastewater], capítulo correspondiente a recolección y preservación de muestras (#[em Collection and preservation of samples]) o en los protocolos de monitoreo del Ideam.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .BGR11.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.px-3
              img(src="@/assets/curso/temas/img01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 Preparación de implementos
                  p.text-white.mb-0 Con el fin de ampliar esta información, se incluye a manera de ejemplo una lista de verificación para la preparación de implementos, por lo que le invitamos a descargar el documento denominado. Lista de verificación materiales e insumos.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/Preparación_de_Implementos.pdf')" target="_blank" type="application/pdf")
                    span(style="color: #000; font-weight: 400") Descargar
                    i.fas.fa-file-download(style="color: #000")

    separador
    #t_6_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.4 Recolección de muestras 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema6/img06.png')
      .col-lg-7
        p.mb-0 Las actividades de potabilización y saneamiento involucran la recolección de muestras para la determinación de las características de una fuente o verificar la conformidad en el proceso de tratamiento. Particularmente las actividades de monitoreo de agua potable en Colombia y otros países se encuentran reglamentadas, por lo que es necesario como se mencionaba en temas anteriores, realizar la consulta y verificación con las autoridades competentes para desarrollar las actividades de seguimiento acorde al marco normativo vigente.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2
        p En el caso de aguas residuales existe una normativa principalmente enfocada a garantizar que las descargas se realicen acorde a unos criterios establecidos, por lo que el muestreo durante el proceso de tratamiento es realizado siguiendo protocolos que garanticen resultados confiables y con altos estándares. 
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema6/img07.png')

    p.mb-5 A continuación, se presentan unos ejemplos de muestras de agua y la norma que se debe tener en cuenta, veamos:

    AcordionA.mb-5(tipo="a" clase-tarjeta="BGR13" data-aos="zoom-in")
      .row.justify-content-center(titulo="Recolección de agua potable")
        .col-lg-6.order-lg-1.order-2
          p Garantizar la calidad del agua para consumo humano es un tema que en el país es controlado y supervisado por diferentes autoridades territoriales como el Ministerios de Protección Social y el Ministerio de Ambiente, Vivienda y Desarrollo Territorial.
          p.mb-0 Este tipo de recolección utiliza la Norma Técnica Colombiana NTC-ISO 5667-5, propuesta por el Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC] (2008).
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema6/img08.png')
      .row.justify-content-center(titulo="Recolección en ríos y corrientes")
        .col-lg-6.order-lg-1.order-2
          p La recolección de muestras en ríos y corrientes resulta bastante sencilla, consistiendo en sumergir directamente los recipientes en el cuerpo de agua para su llenado, o hacerlo a través de la recolección mediante un balde, para posteriormente verter el volumen necesario en las botellas.
          p.mb-0 Este tipo de recolección utiliza la Norma Técnica Colombiana NTC-ISO 5667-6, ICONTEC (2003, p.8).
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema6/img09.png')

    separador
    #t_6_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.5 Medición de parámetros de campo

    .BG14.p-4.mb-4
      .row.justify-content-center
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema6/img10.jpg')
        .col-lg-5.col-10(data-aos="fade-left")
          img(src='@/assets/curso/tema6/img11.jpg')
    
    .BGM07.px-md-5.px-4.py-4.mb-5
      p Existen algunos parámetros que por sus características o inestabilidad deben ser medidos en el lugar de la recolección (in situ). Entre estos, dependiendo del tipo de agua y su fin es posible encontrar la temperatura, olor, color, pH, cloro, conductividad, entre otros.
      p.mb-5 La medición de los parámetros in situ se puede hacer directamente en el cuerpo de agua o extrayendo una muestra mediante el uso de los recipientes adecuados. Siendo necesario tener en cuenta las siguientes recomendaciones:
      .row.justify-content-center.align-items-end
        .col-lg-7.order-lg-1.order-2
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span a
              | Los equipos de medición deben ser calibrados y verificados antes de la medición.
            li 
              .lista-ol--cuadro__vineta
                span b
              | El uso de equipos y kits de medición se debe hacer acorde instrucciones y manuales de operación.
            li 
              .lista-ol--cuadro__vineta
                span c
              | En el caso de equipos que hacen uso de electrodos para medición, posterior a su uso este debe ser lavado con agua destilada y conservado acorde a los protocolos del proveedor para garantizar su tiempo de vida útil.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema6/img12.svg')

    .row.justify-content-center.mb-4
      .col-lg-8.cajon.color-acento-botones.p-4(data-aos="flip-up")
        p.mb-0 Tenga en cuenta que las técnicas de medición en campo, recolección de muestras, rotulado, entre otros temas que conforman el presente componente formativo. Serán profundizados y reforzados mediante las prácticas presenciales programadas para este resultado.

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
