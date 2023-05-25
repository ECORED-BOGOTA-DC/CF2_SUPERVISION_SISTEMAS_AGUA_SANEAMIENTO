<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Preparación de soluciones
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img01.svg')
      .col-lg-7
        p.mb-0 Como ya se ha mencionado el muestreo involucra el uso de diferentes reactivos que son empleados para la preservación de muestras, por lo que es necesario abordar el siguiente tema sobre la preparación de soluciones, brindando de esta manera los conceptos generales que más adelante serán puestos en práctica durante el desempeño en el laboratorio.
    
    separador
    #t_5_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.1 Disoluciones
    
    .BGM07.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2
          p La disolución es una mezcla homogénea de dos o más sustancias. Donde la que se encuentra en mayor cantidad es denominada solvente o disolvente, y la que se encuentra en menor cantidad es denominada soluto. Las disoluciones pueden ser gaseosas (como aire), sólida (como una aleación) o líquida (como el agua de mar) (Chang, 2010, p. 106).
          .row.justify-content-center
            .col-auto.BG05.py-2.px-4
              .h4.text-center.mb-0  Disolución = soluto + solvente
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema5/img02.svg')

      .row.justify-content-start.mb-4
        .col-auto.BGRS06.px-5.py-3(data-aos="fade-right")
          .h4.text-white.mb-0 Clasificación
    
    p Una alternativa de clasificar las soluciones mencionadas anteriormente es por su estado de agregación (sólidas, líquidas y gaseosas). Otra manera puede ser según su solubilidad, de acuerdo a Cova (2018) estas pueden ser:

    .row.justify-content-center.mb-5
      .col-xxl-3.col-lg-4.col-md-5.col-sm-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/img03.svg')})`}")
            .tarjeta-flip__contenido.p-xl-5.p-sm-4.p-3
              .text-white.text-center
                .h4.mt-5 Insaturadas
                p.mb-xxl-0.mb-lg-5.mb-md-0.mb-5 Es aquella disolución que en un volumen solvente dado contiene menor cantidad de soluto de la que es capaz de disolver.
      .col-xxl-3.col-lg-4.col-md-5.col-sm-6.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/img04.svg')})`}")
            .tarjeta-flip__contenido.p-xl-5.p-sm-4.p-3
              .text-white.text-center
                .h4.mt-4 Saturadas
                p.mb-xxl-0.mb-lg-5.mb-md-0.mb-5 Es la disolución que contiene la mayor cantidad de soluto posible en un volumen de disolvente dado y para una cierta temperatura. En ellas el soluto disuelto y no disuelto están en equilibrio dinámico entre sí. 
      .col-xxl-3.col-lg-4.col-md-5.col-sm-6.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/img05.svg')})`}")
            .tarjeta-flip__contenido.p-xl-5.p-md-4.p-3
              .text-white.text-center
                .h4 Sobresaturadas
                p.mb-xxl-0.mb-lg-5.mb-md-0 Es la disolución que contiene más soluto del que puede ser disuelto en el disolvente a una temperatura dada. Normalmente se consigue al bajar la temperatura o por evaporación del disolvente en una solución saturada. En este caso, la adición de cristales de soluto puede provocar un precipitado.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .BGR11.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.px-3
              img(src="@/assets/curso/temas/img01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 Unidades de concentración
                  p.text-white.mb-0 Para ampliar más este tema, diríjase al anexo Unidades de concentración y descargue el documento.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/Anexo_Unidades_de_Concentración.pdf')" target="_blank" type="application/pdf")
                    span(style="color: #000; font-weight: 400") Descargar
                    i.fas.fa-file-download(style="color: #000")

    separador
    #t_5_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.2 Diluciones 

    .BGM07.px-md-5.px-4.py-4.mb-5
      p Una dilución es diferente a una disolución. Cuando se habla de diluciones se hace referencia a la adición de solvente a una solución (Cova, 2018, p. 12). Por lo anterior una dilución tiene como objetivo disminuir la concentración de una solución.
      .row.justify-content-center.align-items-center
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema5/img06.svg')
        .col-lg-5
          p Su expresión matemática es la siguiente:
          .BG05.py-2.px-4.mb-4
            p.mb-0 C<sub>1</sub> * V<sub>1</sub> = C<sub>2</sub> *V<sub>2</sub>
          p.mb-1 Donde,
          p.mb-1 #[strong C<sub>1</sub>] es concentración inicial.
          p.mb-1 #[strong C<sub>2</sub>] es concentración final.
          p.mb-1 #[strong V<sub>1</sub>] es volumen inicial.
          p.mb-0 #[strong V<sub>2</sub>] es volumen final.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    indicadorTarjetaFlip: true,
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
