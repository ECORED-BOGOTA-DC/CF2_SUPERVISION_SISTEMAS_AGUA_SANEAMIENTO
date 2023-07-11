<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas de unidades
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img01.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p Un sistema de unidades, es un conjunto de medidas estándar cuyo objetivo es medir las cantidades fundamentales de longitud, masa, tiempo y fuerza. Este sistema contiene unidades básicas y unidades derivadas; entre los sistemas más comunes se encuentran los siguientes:
        .row.justify-content-start.mb-4
          .col-auto.BGRS06.px-5.py-3(data-aos="fade-right")
            .h4.text-white.mb-0 Sistema internacional de unidades
        p.mb-0 La referencia estándar para unidades de medida a nivel mundial es el Sistema Internacional de Unidades (SI) (Mott, 2006, p. 4). Nava et al (2001) indica que este cuenta con siete unidades bases para las magnitudes fundamentales como se muestra en la siguiente tabla:
    
    .row.justify-content-start.align-items-end.mb-5
      .col-lg-3.px-0.col-6.d-lg-flex.d-none(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img02.svg' alt="Imagen decorativa")
      .col-xl-7.col-lg-9.px-0
        .titulo-sexto.color-secundario.mb-4(data-aos="fade-left")
          h5 Tabla 1
          p.mb-0 Magnitudes fundamentales
        .tabla-a.color-primario(data-aos="zoom-in" alt="Muestra Magnitudes fundamentales, teniendo en cuenta magnitud, la unidad y el simbolo")
          table(style="min-width: 600px")
            caption Fuente: <a style="font-weigh: 400">Nava et al. 2001. p. 20.</a>
            thead(style="border-color: #00BCD4")
              tr
                th(style="background-color: #00BCD4; width: 40%; font-size: 18px").text-white.text-center Magnitud
                th(style="background-color: #00BCD4; width: 30%; font-size: 18px").text-white.text-center Unidad
                th(style="background-color: #00BCD4; width: 30%; font-size: 18px").text-white.text-center Símbolo
            tbody
              tr
                td(style="background-color: #F6F6F6;") Longitud
                td(style="background-color: #F6F6F6;").text-center metro
                td(style="background-color: #F6F6F6;").text-center m
              tr
                td(style="background-color: #FFF;") Masa
                td(style="background-color: #FFF;").text-center kilogramo
                td(style="background-color: #FFF;").text-center kg
              tr
                td(style="background-color: #F6F6F6;") Tiempo
                td(style="background-color: #F6F6F6;").text-center segundo
                td(style="background-color: #F6F6F6;").text-center s
              tr
                td(style="background-color: #FFF;") Corriente eléctrica
                td(style="background-color: #FFF;").text-center ampere
                td(style="background-color: #FFF;").text-center A
              tr
                td(style="background-color: #F6F6F6;") Temperatura termodinámica
                td(style="background-color: #F6F6F6;").text-center kelvin
                td(style="background-color: #F6F6F6;").text-center K
              tr
                td(style="background-color: #FFF;") Intensidad luminosa
                td(style="background-color: #FFF;").text-center candela
                td(style="background-color: #FFF;").text-center cd
              tr
                td(style="background-color: #F6F6F6;") Cantidad de sustancia
                td(style="background-color: #F6F6F6;").text-center mol
                td(style="background-color: #F6F6F6;").text-center mol

    .row.justify-content-start.mb-4
      .col-auto.BGRS06.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Prefijos del sistema internacional de unidades
    
    p.mb-5 Los prefijos son representados por símbolos que se anteponen a la unidad, y representan un factor por el que debe ser multiplicada la cantidad. En la siguiente tabla se presentan algunos de los prefijos más usados en este campo de estudio y son:

    .BGM07.px-md-5.px-4.py-4.mb-5
      .row.justify-content-end.align-items-end
        .col-xl-7.col-lg-9.order-lg-1.order-2
          .titulo-sexto.color-secundario.mb-4(data-aos="fade-right")
            h5 Tabla 2
            p.mb-0 Prefijos
          .tabla-a.color-primario(data-aos="zoom-in" alt="Muestra los Prefijos, muestra símbolo, factor y equivalente")
            table(style="min-width: 600px")
              caption Fuente: <a style="font-weigh: 400">modificado de Nava et al. 2001. p. 35.</a>
              thead(style="border-color: #00BCD4")
                tr
                  th(style="background-color: #00BCD4; width: 40%; font-size: 18px").text-white.text-center Prefijo
                  th(style="background-color: #00BCD4; width: 30%; font-size: 18px").text-white.text-center Símbolo
                  th(style="background-color: #00BCD4; width: 30%; font-size: 18px").text-white.text-center Factor
                  th(style="background-color: #00BCD4; width: 30%; font-size: 18px").text-white.text-center Equivalente
              tbody
                tr
                  td(style="background-color: #F6F6F6;").text-center giga
                  td(style="background-color: #F6F6F6;").text-center G
                  td(style="background-color: #F6F6F6;").text-center 10<sup>9</sup>
                  td(style="background-color: #F6F6F6;").text-center 1.000'000.000
                tr
                  td(style="background-color: #FFF;").text-center mega
                  td(style="background-color: #FFF;").text-center M
                  td(style="background-color: #FFF;").text-center 10<sup>6</sup>
                  td(style="background-color: #FFF;").text-center 1'000.000
                tr
                  td(style="background-color: #F6F6F6;").text-center kilo
                  td(style="background-color: #F6F6F6;").text-center k
                  td(style="background-color: #F6F6F6;").text-center 10<sup>3</sup>
                  td(style="background-color: #F6F6F6;").text-center 1.000
                tr
                  td(style="background-color: #FFF;").text-center mili
                  td(style="background-color: #FFF;").text-center m
                  td(style="background-color: #FFF;").text-center 10<sup>-3</sup>
                  td(style="background-color: #FFF;").text-center 0,001
                tr
                  td(style="background-color: #F6F6F6;").text-center micro
                  td(style="background-color: #F6F6F6;").text-center µ
                  td(style="background-color: #F6F6F6;").text-center 10<sup>-6</sup>
                  td(style="background-color: #F6F6F6;").text-center 0,000001
                tr
                  td(style="background-color: #FFF;").text-center nano
                  td(style="background-color: #FFF;").text-center n
                  td(style="background-color: #FFF;").text-center 10<sup>-9</sup>
                  td(style="background-color: #FFF;").text-center 0,000000001
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img03.svg' alt="Imagen decorativa")
    
    p Estos prefijos se emplean para facilitar la expresión de cantidades, veamos los siguientes ejemplos:
    p #[strong Ejemplo 1:] 11500 m = 11,5 * 10<sup>3</sup> m = 11,5 km
    p.mb-5 #[strong Ejemplo 2:] 0,00528 g = 5,28 * 10<sup>-3</sup> g = 5,28 mg

    .BGM07.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center
        .col-lg-8
          .row.justify-content-start.mb-4
            .col-auto.BGRS06.px-5.py-3(data-aos="fade-right")
              .h4.text-white.mb-0 Uso de otras unidades
            
          p Existen otras unidades que se usan con bastante frecuencia y que aun sin hacer parte del Sistema Internacional de Unidades, es posible emplearlas en conjunto. Entre estas se encuentran:
          p #[strong El minuto (m):] 1 m = 60 s
          p #[strong La hora (h):] 1h = 3600 s
          p #[strong El día (d):] 1 d = 24 h = 86400 s
          p #[strong El litro (L,l):] 1 L = 1 dm<sup>3</sup> = 10<sup>-3</sup> m<sup>3</sup>
          p.mb-5 #[strong La tonelada (t):] 1 t = 10<sup>3</sup> kg

          
            .row.justify-content-start.mb-4
              .col-auto.BGRS06.px-5.py-3(data-aos="fade-right")
                .h4.text-white.mb-0 Unidades consistentes   
            p El desarrollo de los protocolos y procedimientos en este y diferentes campos de estudio como lo menciona Mott, (2006), involucra el uso de ecuaciones, cuyos elementos y resultados deben ser expresados empleando las unidades correctas. Por lo que, si las unidades en la ecuación no son consistentes, las respuestas serán erróneas. 
            p Por lo anterior para realizar procedimientos de cancelación de unidades según Mott (2006), se proponen los siguientes pasos:
        .col-lg-4.d-lg-flex.d-none
          img(src='@/assets/curso/tema2/img10.png' alt="Imagen decorativa")

    .BGR08.p-4.mb-4
      LineaTiempoC.color-primario(text-small)
        .row.justify-content-center(titulo="1")
          .col-lg-4.mb-lg-0.mb-4
            p Despejar de la ecuación el término que se desea.
          .col-lg-6
            .tarjeta.tarjeta--blanca.p-4
              p #[strong Ejemplo:] se necesita conocer el tiempo que tardará en llenarse un tanque de 1000 L al usar una manguera por la que fluye un caudal de 0.4 L/s.
              p Se emplea la ecuación:
              .row.mb-4
                .col-auto.BG05.px-4.py-2
                  .h5.mb-0 Q =  v/t
              p Donde Q es caudal, v es volumen y t es tiempo. Luego se aplican los pasos anteriormente propuestos:
              p #[strong 1.] Se despeja t de la ecuación:
              .row
                .col-auto.BG05.px-4.py-2
                  .h5.mb-0 t = v/Q
        .row.justify-content-center(titulo="2")
          .col-lg-4.mb-lg-0.mb-4
            p Definir las unidades que se requieren para el resultado.
          .col-lg-6
            .tarjeta.tarjeta--blanca.p-4
              .row.justify-content-center
                .col-lg-6.mb-lg-0.mb-4
                  p #[strong 2.] Propone las unidades del resultado, para este caso pueden ser minutos, ya que el ejercicio no especifica las unidades finales.
                .col-lg-6
                  img(src='@/assets/curso/tema2/img04.svg' alt="Imagen decorativa")
        .row.justify-content-center(titulo="3")
          .col-lg-4.mb-lg-0.mb-4
            p Sustituir en la ecuación los valores con sus respectivas unidades.
          .col-lg-6
            .tarjeta.tarjeta--blanca.p-4
              p #[strong 3.] Se sustituye en la ecuación
              .row.justify-content-center.mb-4
                .col-lg-6
                  img(src='@/assets/curso/tema2/img05.svg' alt="Imagen decorativa")
              p Simplifica la fracción para
              .row.justify-content-center
                .col-lg-6
                  img(src='@/assets/curso/tema2/img06.svg' alt="Imagen decorativa")
        .row.justify-content-center(titulo="4")
          .col-lg-4.mb-lg-0.mb-4
            p Cancelar las unidades de los términos que parezcan en el numerador y el denominador.
          .col-lg-6
            .tarjeta.tarjeta--blanca.p-4
              p.mt-5 #[strong 4.] Se cancelan las unidades y se aplican los factores de conversión (paso 5).
              .row.justify-content-center.mb-5
                .col-lg-6
                  img(src='@/assets/curso/tema2/img07.svg' alt="Imagen decorativa")
        .row.justify-content-center(titulo="5")
          .col-lg-4.mb-lg-0.mb-4
            p Utilizar los factores de conversión para eliminar las unidades no deseadas, y obtener las que se definieron previamente en el paso dos.
          .col-lg-6
            .tarjeta.tarjeta--blanca.p-4
              p.mt-5 #[strong 5.] Aplica los factores de conversión (y cancelación de unidades).
              .row.justify-content-center.mb-5
                .col-lg-6
                  img(src='@/assets/curso/tema2/img08.svg' alt="Imagen decorativa")
        .row.justify-content-center(titulo="6")
          .col-lg-4.mb-lg-0.mb-4
            p Realizar el cálculo.
          .col-lg-6
            .tarjeta.tarjeta--blanca.p-4
              p.mt-5 #[strong 6.] Se realiza el cálculo para obtener el resultado.
              .row.justify-content-center.mb-5
                .col-lg-8
                  img(src='@/assets/curso/tema2/img09.svg' alt="Imagen decorativa")


</template>

<script>
export default {
  name: 'Tema2',
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
