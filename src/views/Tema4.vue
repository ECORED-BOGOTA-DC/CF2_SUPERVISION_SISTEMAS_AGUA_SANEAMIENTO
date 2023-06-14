<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Fichas de seguridad, manuales y calibración de equipos
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.bloque-inv.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.jpg')})`}" data-aos="fade-left"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-right")
            p.mb-0 En las fichas técnicas se exponen todas las especificaciones de lo que se espera recoger con la información al proporcionar descripciones técnicas objetivas que permitan una información veraz y real. De otra parte, se presentan los manuales que establecen el procedimiento a seguir o los diferentes protocolos a tener en cuenta para operación de equipos, su calibración, entre otros.

    p Por lo anterior a continuación se explica de manera más detallada estos temas, esto es:

    separador
    #t_4_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.1 Hojas de seguridad de productos químicos 

    .BGM07.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7.order-lg-1.order-2
          p.mb-0 El manejo de diferentes sustancias químicas para el procesamiento de muestras de agua tanto en campo como en laboratorio, implica un riesgo para el personal que las manipula, este riesgo debe ser controlado, desde el almacenamiento, compra y transporte de la sustancia hasta el momento en el cual se materialice un accidente relacionado a ese producto; es por esto que debe existir un instrumento que le permita a las personas involucradas empleados o comunidad) o al personal de asistencia médica (o de servicios de respuesta ante emergencias), saber los compuestos, el tipo de manipulación, como almacenarla y cómo reaccionar ante un accidente con la misma.  
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img02.png')
    
    p Ese instrumento de gestión se denomina Hojas de seguridad de producto, en Colombia este es un elemento fundamental para toda la cadena de manipulación de las sustancias químicas y se convirtió en un eje estratégico para los sistemas de seguridad y salud en el trabajo en cualquier entidad (pública y privada).
    p.mb-5 La estructura de las hojas de seguridad y su uso obligatorio en las organizaciones fue impuesta por diferentes bases normativas como son:

    .row.justify-content-center.mb-4
      .col-lg-6(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema4/img03.svg')
    
    p Estas hojas de seguridad son un instrumento que cuenta con 16 ítems o secciones, o también conocidas como fichas de seguridad [FDS], es importante aclarar que según el Ministerio de Trabajo en la Resolución 1486 (2008) en el artículo 8º y 9º asigna a los fabricantes e importadores la responsabilidad de elaborar, revisar y actualizar las FDS. 
    p.mb-5 Sin embargo, es responsabilidad de todos los que van a manipular estas sustancias, conocer la FDS y apropiar sus 16 ítems básicos que según la Organización de las Naciones Unidas para el Desarrollo Industrial [ONUDI] (2020), son:

    .row.justify-content-start.mb-4
      .col-lg-5.order-lg-1.order-2
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Identificación del producto.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Identificación de peligros.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Composición (información sobre los componentes).
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Primeros auxilios.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Medidas de lucha contra incendios.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Medidas que deben tomarse en caso de vertido accidental.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Manipulación y almacenamiento.
          li 
            .lista-ol--cuadro__vineta
              span 8
            | Controles de exposición.
          li 
            .lista-ol--cuadro__vineta
              span 9
            | Propiedades físicas y químicas.
          li 
            .lista-ol--cuadro__vineta
              span 10
            | Estabilidad y reactividad.
          li 
            .lista-ol--cuadro__vineta
              span 11
            | Información toxicológica.
          li 
            .lista-ol--cuadro__vineta
              span 12
            | Información ecotoxicológica.
          li 
            .lista-ol--cuadro__vineta
              span 13
            | Información relativa a la eliminación del producto.
          li 
            .lista-ol--cuadro__vineta
              span 14
            | Información relativa a transporte.
          li 
            .lista-ol--cuadro__vineta
              span 15
            | Información sobre la reglamentación.
          li 
            .lista-ol--cuadro__vineta
              span 16
            | Otras informaciones (pp. 16-17).

      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img04.svg')

    .row.justify-content-start.mb-4
      .col-auto.BGRS06.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Beneficios de FDS
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.p-2.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img05.svg')
      .col-lg-8
        p.mb-0 Para la Organización de las Naciones Unidas para el Desarrollo Industrial [ONUDI] (2020), el uso de estas FDS otorgan beneficios  para garantizar la protección de la salud humana y del medio ambiente como lo es: conocer las características de la sustancia, comunicar los peligros, brindar información sobre elementos de protección, condiciones de almacenamiento, transporte, medidas en caso de emergencia, disposición o eliminación de la sustancia y su envase y por último es una herramienta que permite brindar información a entes de vigilancia y control de productos químicos (p.20).

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .BGR11.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.px-3
              img(src="@/assets/curso/temas/img01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 Ficha de Seguridad Reactivos Laboratorio Ambiental
                  p.text-white.mb-0 Para conocer más de fichas de seguridad y ampliar esta información a través de un ejemplo, le invitamos a consultar el enlace que se presenta a continuación
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/Ficha_de_Seguridad_Acido_Sulfurico.pdf')" target="_blank" type="application/pdf")
                    span(style="color: #000; font-weight: 400") Descargar
                    i.fas.fa-file-download(style="color: #000")

    separador
    #t_4_2.titulo-segundo.color-acento-botones.mb-5(data-aos="fade-right")
      h2 4.2 Manual de operación de equipos

    .row.justify-content-end.align-items-center.mb-5
      .col-xxl-5.col-lg-7.col-10.img-01.z-index-1.mb-lg-0.p-2.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img06.png')
      .col-lg-7.z-index-2(data-aos="fade-left")
        .BGR12.p-4
          p Para todas las empresas de hoy en día la capacitación de nuevo personal para la operación de un determinado equipo implica un gran reto y responsabilidad. Para ello es importante mantener actualizados los procedimientos. 
          p En este apartado se habla exclusivamente de los procedimientos de los equipos y los aspectos a tener en cuenta para realizar un manual de operación (Castañeda, 2017).
          p.mb-0 En cualquier equipo que se compra siempre viene un manual que dice sus funciones específicas. Cuando este equipo llega a una compañía conlleva un desafío para el personal que la opera por primera vez, ya que no ha tenido contacto con la máquina. Tiene que familiarizarse y sobre el camino monitorear su funcionamiento.

    p La mejor forma de realizar un manual de operaciones es hacerlo de la forma más sencilla, visual y amigable posible para despertar el interés y nutrir el conocimiento del personal.
    p Entonces, ¿Cuál es el objetivo de un manual de operación? Su respuesta se define como: obtener resultados consistentes en el desarrollo de nuevo personal, estandarizando el conocimiento de forma más rápida y sencilla posible.

    .BGM07.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7.order-lg-1.order-2
          p Los beneficios de un manual de operaciones son:
          ul.lista-ul--color
            li
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Brinda el conocimiento de operación.
            li
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | La información está al alcance para el desarrollo de nuevo personal.
            li
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Desarrolla al personal de una forma más rápida y minimiza los errores.
            li
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Es la base para mantener la forma de trabajar o en su caso mejorarla.
          p Un manual debe tener una estructura formal, para ello es muy importante que cuente elementos como:
          ul.lista-ul--color
            li
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Portada.
            li
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Índice.
            li
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Desarrollo de la información.
            li
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Apoyo visual.
          p El editor debe tener en cuenta que la persona que leerá este manual es alguien quien no ha tenido contacto con el equipo por lo que es de vital importancia:
          ul.lista-ul--color
            li
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Identificar los procedimientos de operación. Con base en ellos se debe separar las actividades que se realizan y asignar una secuencia.
            li
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Redactar de forma sencilla. No utilizar palabras demasiado técnicas, ya que la mayoría de los operadores no son personas con conocimientos de expertos.
            li
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Utilizar imágenes. La imagen deberá identificar el área de trabajo y cada una de las actividades. Esto ayuda al operador a interpretar la información de una manera más sencilla y recordarla posteriormente.
            li
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Es muy importante integrar cualquier información que directamente está ligada a la operación, por ejemplo, equipo de seguridad necesario, qué hacer en casos de emergencia etcétera.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img07.svg')

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="flip-up")
        .cajon.color-acento-botones.p-4
          p Este documento deberá estar aprobado por él o los operadores quienes fueron la fuente de información y por quienes autorizan su publicación.
          p.mb-0 El manual puede ser tan detallado como se quiera. Hay que tener en cuenta que, si es lo más específico posible, no se dará pauta a la duda.

    p Por lo anterior es importante que antes de operar cualquier equipo se reciba la capacitación inicial y se disponga del manual de operación, reduciendo los errores de operación e incluso evitando su avería por una mala manipulación.
    p.mb-5 A continuación, se presentan a manera de ejemplo algunos manuales de operación para equipos que muy seguramente usted emplea durante las actividades prácticas:

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .BGR11.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.px-3
              img(src="@/assets/curso/temas/img01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 Manual para uso de la balanza #[em Ohaus Discovery]
                  p.text-white.mb-0 A continuación, se presentan a manera de ejemplo algunos manuales de operación para equipos por lo que le invitamos a descargar el siguiente documento.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/Manual_Balanza_Analitica_Ohaus_Discovery.pdf')" target="_blank" type="application/pdf")
                    span(style="color: #000; font-weight: 400") Descargar
                    i.fas.fa-file-download(style="color: #000")

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="flip-up")
        .BGR11.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.px-3
              img(src="@/assets/curso/temas/img01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 Manual para uso balanza con analizador de humedad #[em Lexus Dexter]
                  p.text-white.mb-0 A continuación, se presentan a manera de ejemplo algunos manuales de operación para equipos por lo que le invitamos a descargar el siguiente documento.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/Manual_Balanza_con_Analizador_de_Humedad_Lexus_Dexter.pdf')" target="_blank" type="application/pdf")
                    span(style="color: #000; font-weight: 400") Descargar
                    i.fas.fa-file-download(style="color: #000")

    separador
    #t_4_3.titulo-segundo.color-acento-botones.mb-5(data-aos="fade-right")
      h2 4.3 Calibración de equipos

    .BGM07.px-md-5.px-4.py-4.mb-5
      p En los procesos experimentales y técnicos, el fin es obtener resultados que puedan arrojar el estado de una muestra, pero estos resultados deben tener total validez científica para que los estudios realizados sean aprobados tanto nacional como internacionalmente.
      .row.justify-content-center.align-items-center
        .col-lg-7.order-lg-1.order-2
          p De lo anteriormente expuesto, se obtiene la importancia de los procesos de calibración de los equipos e instrumentos usados, de acuerdo con el Instituto Colombiano de Normas Técnicas y Certificación [Icontec] (2017), en su Norma Técnica Colombiana [NTC] 17025 sobre requisitos generales para la competencia de los laboratorios de ensayo y calibración. En su ítem 6.4.6 especifica que se requiere calibración del equipo para establecer la trazabilidad metrológica de los resultados informados.
          p.mb-0 Es por esto que usualmente los laboratorios certificados deben mantener un programa de calibración en el cual especifique los procedimientos para mantener cada equipo o instrumento que requiera de este proceso en óptimas condiciones y la documentación pertinente.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img08.png')

    .BGM07.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img09.png')
        .col-lg-7
          p Como este proceso puede variar entre las marcas y el tipo de instrumento, siempre es aconsejable que dependiendo del laboratorio donde se van a realizar los ensayos o del cual provengan los equipos de campo, se estudie los procedimientos, protocolos o instructivos de calibración con anterioridad. Es importante realizar siempre esta actividad según lo establecido en la documentación del equipo.
          p.mb-0 De igual forma, al ser un paso tan importante en materia de prácticas y ensayos de laboratorio, existen entidades que se dedican exclusivamente al desarrollo de actividades de calibración de equipos, que han sido certificadas para la misma y que ofrecen además un documento de soporte denominado certificados de calibración o informes de calibración.

    .row.justify-content-start.mb-4
      .col-auto.BGRS06.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Contenido de los certificados
    
    p.mb-5 De acuerdo con el Instituto Colombiano de Normas Técnicas y Certificación [Icontec] (2017), en su Norma Técnica Colombiana [NTC] 17025 sobre requisitos generales para la competencia de los laboratorios de ensayo y calibración, indica que el contenido mínimo necesario que debe contener un certificado de calibración se encuentra establecido en la norma internacional ISO 17025 en su numeral 7.8.2.1. Este incluye:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            | Identificación del informe de ensayo, el nombre y dirección del laboratorio.
          li 
            .lista-ol--cuadro__vineta
              span b
            | El lugar en que se realizan las actividades del laboratorio.
          li 
            .lista-ol--cuadro__vineta
              span c
            | Nombre del cliente o quien solicita el certificado.
          li 
            .lista-ol--cuadro__vineta
              span d
            | Método utilizado.
          li 
            .lista-ol--cuadro__vineta
              span e
            | Descripción del instrumento bajo calibración.  
          li 
            .lista-ol--cuadro__vineta
              span f
            | Identificación del dueño del instrumento.
          li 
            .lista-ol--cuadro__vineta
              span g
            | Fecha de calibración y próximas calibraciones.
          li 
            .lista-ol--cuadro__vineta
              span h
            | Referencia al plan y método de muestreo usados para laboratorio.
          li 
            .lista-ol--cuadro__vineta
              span i
            | Método de calibración.
          li 
            .lista-ol--cuadro__vineta
              span j
            | Las condiciones relevantes observadas durante la calibración.
          li 
            .lista-ol--cuadro__vineta
              span k
            | El método de calibración.
          li 
            .lista-ol--cuadro__vineta
              span l
            | Las desviaciones o exclusiones del método.
          li 
            .lista-ol--cuadro__vineta
              span m
            | Una identificación clara cuando los resultados provengan de proveedores externos.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img10.svg')

    .row.justify-content-center.mb-4
      .col-lg(data-aos="flip-up")
        .BGR05.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.px-2
              img(src="@/assets/curso/temas/img02.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-3 Norma NTC 17025:2017
                  p.mb-0 Para ampliar más este tema, diríjase a la base de datos del SENA/Icontec/ ISO 17025.
                .col-sm-auto
                  a.boton.color-acento-botones(href="http://biblioteca.SENA.edu.co/paginas/bases.html" target="_blank")
                    span Ir a página
                    i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema4',
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
