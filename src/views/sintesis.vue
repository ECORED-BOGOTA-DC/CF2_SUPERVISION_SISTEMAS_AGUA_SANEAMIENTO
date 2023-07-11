<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
    p Para la correcta toma de muestras es importante aclarar los conceptos matemáticos y químicos, con el fin de comprender a profundidad todas las variables que pueden afectar una toma, los diferentes instrumentos que se necesita para esta y el correcto uso de los equipos y con todo esto verificar de manera constante la calidad del agua. 
    p.mb-5 Sabiendo esto y para una breve revisión de los temas vistos, puede observar el siguiente esquema:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Muestra la síntesis del componente formativo, Toma de muestras: Variables estadísticas, mediciones de tendencia central, volumen, SI, disoluciones, muestreo, masa, medidas de dispersión.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
