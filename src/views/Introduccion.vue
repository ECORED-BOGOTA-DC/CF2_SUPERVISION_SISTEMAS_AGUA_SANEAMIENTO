<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .BGM07.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/intro/img01.svg')
        .col-lg-8(data-aos="fade-left")
          .BGIMG01.ps-5.pe-4.py-4
            p.ms-4 Estimado aprendiz, bienvenido a este momento de aprendizaje, orientado a conocer todo sobre conocimientos teóricos y habilidades prácticas necesarias para la toma de muestras y preparación de reactivos requeridas para el desarrollo de este procedimiento. Podrá comprender la importancia de conocer las características químicas, físicas, radiológicas, biológicas y microbiológicas de la muestra que se tome de agua, profundizando en temas como son las actividades asociadas con el manejo de medidas de tendencia central y de dispersión.
            p.ms-4.mb-0 <a style="color: #3076B6; font-weigh: 900">Se abordarán temas como:</a> estadística, sistemas de medición, fichas técnicas, preparación de reactivos, realización y rotulado de muestras, entre otros. Aprenderá a determinar la calidad del agua, saber si es apta para el consumo humano o si es viable utilizarla para los procesos industriales. Esta información le permitirá tomar mejores decisiones frente al uso y utilización del agua.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
