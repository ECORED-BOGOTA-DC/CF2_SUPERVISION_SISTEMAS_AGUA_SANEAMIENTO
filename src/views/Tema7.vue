<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Rotulado del muestreo
    
    p.mb-5 A continuación, se encuentra el proceso de rotulado del muestreo:
    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zS7TEBlaWy4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Ahora es importante llevar a cabo la revisión de conceptos de química básica y preparación de soluciones en el laboratorio, por lo que su desarrollo se presenta como un componente teórico-práctico, siendo la parte práctica desarrollada de manera presencial en el laboratorio.
    
    .h4 Dentro de las prácticas presenciales se puede encontrar:

    .BGM07.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center.align-items-end
        .col-lg-6.order-lg-1.order-2
          ul.lista-ul--color
            li
              i.fas.fa-check-circle(style="color: #4DB1F0;")
              | Práctica de reconocimiento de materiales y equipos de laboratorio: en esta práctica se realizará todo un recorrido por el espacio de laboratorio donde podrá interactuar con los diferentes materiales (vidrio, plástico), los diferentes instrumentos y equipos con los que se puede trabajar en el mismo y los riesgos que debe tener claros antes de realizar cualquier práctica. A continuación, podrá profundizar dicha información.
          .BGR11.p-3.mb-4(data-aos="flip-up")
            .row.justify-content-around.align-items-center
              .col-4.col-sm-3.col-lg-2
                img(src="@/assets/curso/temas/img01.svg")
              .col
                .row.justify-content-between.align-items-center
                  h4.text-white.mb-1 Práctica de laboratorio reconocimiento del material de laboratorio
                  .col.mb-3.mb-sm-0
                    p.text-white.mb-0 A continuación, podrá profundizar dicha información descargando el documento.
                  .col-sm-auto
                    a.boton.color-primario(:href="obtenerLink('/downloads/Practica_de_Laboratorio_Reconocimiento_de_Material_de_Laboratorio.pdf')" target="_blank" type="application/pdf")
                      span(style="color: #000; font-weight: 400") Descargar
                      i.fas.fa-file-download(style="color: #000")
          .BGR11.p-3.mb-4(data-aos="flip-up")
            .row.justify-content-around.align-items-center
              .col-4.col-sm-3.col-lg-2
                img(src="@/assets/curso/temas/img01.svg")
              .col
                h4.text-white.mb-1 Práctica de laboratorio alistamiento de materiales para muestreo
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.text-white.mb-0 A continuación, podrá profundizar dicha información descargando el documento.
                  .col-sm-auto
                    a.boton.color-primario(:href="obtenerLink('/downloads/Practica_de_Laboratorio_Alistamiento_de_Materiales_para_Muestreo.pdf')" target="_blank" type="application/pdf")
                      span(style="color: #000; font-weight: 400") Descargar
                      i.fas.fa-file-download(style="color: #000")
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema7/img01.svg')

    ul.lista-ul--color.mb-4
      li(style="margin-bottom: 15px")
        i.fas.fa-check-circle(style="color: #4DB1F0;")
        p.mb-0 #[strong Práctica de medición de masa y volumen:] con base en el material teórico se iniciará su aplicación en laboratorio. Su finalidad es aprender a utilizar los equipos e instrumentos del laboratorio que son requeridos para la determinación de masa y volumen de diferentes elementos según indicaciones de su instructor.
      li(style="margin-bottom: 15px")
        i.fas.fa-check-circle(style="color: #4DB1F0;")
        p.mb-0 #[strong Práctica de preparación de soluciones:] su instructor le brindará el apoyo requerido para que pueda realizar diferentes soluciones en el laboratorio.
 
    .BGR11.p-3.mb-4(data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.px-3
          img(src="@/assets/curso/temas/img01.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.text-white.mb-1 Procedimiento para desarrollar acciones de formación profesional titulada
              p.text-white.mb-0 A continuación, podrá profundizar dicha información descargando el documento denominado. Práctica laboratorio soluciones.
            .col-sm-auto
              a.boton.color-primario(:href="obtenerLink('/downloads/Practica_Laboratorio_Soluciones.pdf')" target="_blank" type="application/pdf")
                span(style="color: #000; font-weight: 400") Descargar
                i.fas.fa-file-download(style="color: #000")

</template>

<script>
export default {
  name: 'Tema7',
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
