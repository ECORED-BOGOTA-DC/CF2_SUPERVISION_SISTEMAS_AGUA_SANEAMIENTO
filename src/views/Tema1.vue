<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estadística
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img01.svg' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        .bloque-texto-d.color-secundario.p-4(style="border-top: initial")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style="color: #FFA031")
            .h4 Es la ciencia que se encarga de la recolección, ordenamiento, representación, análisis e interpretación de datos generados en una investigación sobre hechos, individuos o grupos de los mismos, para deducir de ello conclusiones precisas o estimaciones futuras
            i.fas.fa-quote-right(style="color: #FFA031")
          .bloque-texto-d__autor 
            p.mb-0 Castillo y Salazar, 2018. p. 13
    
    p.mb-5 Atendiendo lo que dicen los autores mencionados anteriormente, la estadística se divide en dos ramas que son: estadística descriptiva y estadística Inferencial, veamos ambas estadísticas a mayor detalle a continuación:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta--boton.color-secundario.BGR02.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema1/img02.svg' alt="Imagen decorativa")
        h4.text-center Estadística descriptiva
        p.text-center.mb-0 Permite analizar todo un conjunto de datos, de los cuales se extraen conclusiones valederas, únicamente para ese conjunto. Un ejemplo sería el número de goles de un determinado jugador o el número de muestras rechazadas en un laboratorio.
      .col-md.tarjeta--boton.color-primario.BGR01.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema1/img03.svg' alt="Imagen decorativa")
        h4.text-center Estadística inferencial
        p.text-center.mb-0 Busca obtener conclusiones generales de una determinada población, mediante el estudio de una muestra representativa sacada de ella. Un ejemplo sería la percepción de inseguridad en una ciudad, o la calidad de un cuerpo de agua.

    separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 Variables en la estadística
    
    p Cuando se habla de variable se hace referencia a unas propiedades o características que puede variar, y que son susceptibles de medición. Algunos ejemplos pueden ser la edad, color de ojos, potencial de Hidrógeno (pH), temperatura y conductividad, entre otras.
    p.mb-5 Atendiendo lo que dicen Castillo y Salazar (2018), estas variables están categorizadas en dos grandes grupos que se describen a continuación:

    .row.justify-content-center.mb-4
      .col-xl-10.BG03.px-0
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
            .BGR18.hg-02.pe-4.py-4
              .BG20.hg-01.p-4.mb-2
                .row.justify-content-center
                  .col-5.mb-lg-0.mb-4
                    img(src='@/assets/curso/tema1/img18.svg' alt="Imagen decorativa")
                  .col-lg-7
                    p.mb-0 #[strong Variables cuantitativas]: expresan valores numéricos. Pueden ser discretas (se determinan mediante conteos) o continuas (se determinan mediante medición).
              .BG20.hg-01.p-4
                .row.justify-content-center
                  .col-5.mb-lg-0.mb-4
                    img(src='@/assets/curso/tema1/img19.svg' alt="Imagen decorativa")
                  .col-lg-7
                    p.mb-0 #[strong Variables cualitativas]: expresan atributos o características. Algunos ejemplos pueden ser: nacionalidad, idioma, color de ojos, entre otras.
          .col-lg-6(data-aos="fade-left")
            .BGR19.hg-02.pe-4.py-4
              .BG20.hg-01.px-4.pt-4.mb-2
                .row.justify-content-center
                  .col-lg-5.d-lg-flex.d-none.order-lg-1
                  .col-lg-7.order-lg-2.order-2
                    p.mb-0 #[strong Variables discretas]: son aquellas que no admiten valores intermedios entre dos números.
                  .col-6.img-03.mb-lg-0.order-lg-3.order-1.mb-lg-0.mb-4
                    img(src='@/assets/curso/tema1/img20.svg' alt="Imagen decorativa")
                  .col-lg-6.d-lg-flex.d-none.order-lg-4
              .BG20.hg-01.p-4.mb-2
                .row.justify-content-center
                  .col-lg-5.d-lg-flex.d-none.order-lg-1
                  .col-lg-7.order-lg-2.order-2
                    p.mb-0 #[strong Variables continuas]: son aquellas que puede tomar valores comprendidos entre dos números.
                  .col-7.img-04.mb-lg-0.order-lg-3.order-1.mb-lg-0.mb-4
                    img(src='@/assets/curso/tema1/img21.svg' alt="Imagen decorativa")
                  .col-lg-5.d-lg-flex.d-none.order-lg-4

    separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Medidas de tendencia central
    
    p Las medidas de posición o de tendencia central permiten determinar la posición de un valor respecto a un conjunto de datos, el cual se considera como representativo o típico para el total de las observaciones, a continuación, se detallará de manera más profunda el tipo de medidas de tendencia central, esto es:

    .BGR04.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            .h4 Media aritmética  
            .bloque-texto-b.color-primario.mb-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left(style="font-size: 2em")
                p Busca el valor central del recorrido de la variable según la cantidad de observaciones, en otras palabras, es el promedio de los valores de la muestra.
                i.fas.fa-quote-right(style="font-size: 2em")
            .h5.text-end Castillo y Salazar, 2018. p. 50.
            p Su cálculo para datos desagrupados se efectúa mediante la siguiente ecuación:
            .row.justify-content-start
              .col-lg-7.BG05.py-2.px-4
                img(src='@/assets/curso/tema1/img06.svg' alt="Imagen decorativa")
          .col-lg-6
            .tarjeta.tarjeta--blanca.pt-4.px-4
              p.mt-5 #[strong Ejemplo:] hallar el caudal promedio a partir de las siguientes mediciones realizadas en un período de tiempo determinado: 1,8 l/s, 2,4 l/s, 2 l/s, 1,6 l/s, 1,4 l/s
              img(src='@/assets/curso/tema1/img07.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.mb-lg-0.mb-4
            .h4 Mediana
            p Busca determinar el valor que tiene aquella observación que divide la cantidad de las mismas en dos mitades iguales.
            p Su cálculo para datos desagrupados se efectúa mediante las siguientes ecuaciones: 
            p En caso de que el número de datos sea par:
            .row.justify-content-start.mb-4
              .col-lg-7.BG05.py-2.px-4
                img(src='@/assets/curso/tema1/img08.svg' alt="Imagen decorativa")
            p En caso de que el número de datos sea impar:
            .row.justify-content-start.mb-4
              .col-lg-7.BG05.py-2.px-4
                img(src='@/assets/curso/tema1/img09.svg' alt="Imagen decorativa")
            .bloque-texto-b.color-primario.mb-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left(style="font-size: 2em")
                p En los dos casos es necesario primero ordenar los datos de menor a mayor o viceversa.
                i.fas.fa-quote-right(style="font-size: 2em")
            .h5.text-end Castillo y Salazar, 2018. pp. 52-53
          .col-lg-7
            .tarjeta.tarjeta--blanca.pt-4.px-4
              p.mt-5 #[strong Ejemplo:] se realizaron 12 mediciones de caudal obteniendo los siguientes resultados: <br>1,8 - 2,4 - 2 - 1,6 - 1,4 - 1,3 - 1,6 - 1,9 - 2,5 - 2,3 - 2,1 - 1,7
              hr
              .row.justify-content-center.align-items-end.mb-4
                .col-lg-4.col-6.mb-lg-0.mb-4
                  img(src='@/assets/curso/tema1/img10.svg' alt="Imagen decorativa")
                .col-lg-8
                  p 1,3 - 1,4 - 1,6 - 1,6 - 1,7 - 1,8 -1,9 - 2 - 2,1 - 2,3 - 2,4 - 2,5
                  .row.justify-content-start.mb-4
                    .col-lg.BG05.py-2.px-4
                      img(src='@/assets/curso/tema1/img11.svg' alt="Imagen decorativa")
                  p.mb-0 1,3 - 1,4 - 1,6 - 1,6 - 1,7 - 1,8 - <a style="color: #FF0B0B">1,85</a> - 1,9 - 2 - 2,1 - 2,3 - 2,4 - 2,5
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            .h4 Moda 
            .bloque-texto-b.color-primario.mb-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left(style="font-size: 2em")
                p Es el valor de la variable que más se repite. Un conjunto de datos puede ser unimodal (una sola moda), bimodal (dos modas) o multimodal (más de dos modas).
                i.fas.fa-quote-right(style="font-size: 2em")
            .h5.text-end Castillo y Salazar, 2018. p. 54
          .col-lg-6
            .tarjeta.tarjeta--blanca.pt-4.px-4
              p.mt-5 #[strong Ejemplo:] se realizaron mediciones de caudal obteniendo los siguientes resultados: <br>1,8 - 2,4 - 2 - 1,8 - 1,4 - 1,3 - 1,6 - 1,8 - 2,5 - 2,3 - 2,1 - 1,7
              p Al ordenar los datos se obtiene:
              p.text-center 1,3 - 1,4 - 1,6 - 1,7 - <a style="color: #FF0B0B">1,8 - 1,8 - 1,8</a> - 2 - 2,1 - 2,3 - 2,4 - 2,5
              .row.justify-content-between
                .col-lg-6
                  p El valor que más se repite es 1,8
                .col-lg-4
                  img(src='@/assets/curso/tema1/img13.svg' alt="Imagen decorativa")

    separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.3 Medidas de dispersión

    .BGM07.px-md-5.px-4.py-4.mb-5
      p.mb-5 Las medidas de dispersión son las que se usan para obtener información sobre el grado de variabilidad de una variable, en otras palabras, los datos indican si una variable cambia drásticamente o más bien su cambio es muy poco con respecto a un número específico (variable de estudio). A continuación, se revisa con mayor detenimiento la llamada desviación típica.

      .row.justify-content-start.mb-4
        .col-auto.BGRS06.px-5.py-3(data-aos="fade-right")
          .h4.text-white.mb-0 Desviación típica
      
      p Proporciona el valor promedio de las desviaciones de los datos con relación a la media aritmética. Su cálculo para datos desagrupados se puede realizar mediante la siguiente ecuación:

      .row.justify-content-center.mb-4
        .col-lg-2.col-md-4.col-6(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img14.svg' alt="Imagen decorativa")
      
      p.mb-5 #[strong Ejemplo:] en una práctica de laboratorio cinco personas diferentes realizaron la medición de pH a la misma muestra de agua obteniendo los siguientes resultados:

      .row.justify-content-around.align-items-end.mb-4
        .col-lg-8.px-0.order-lg-1.order-2(data-aos="fade-right")
          .titulo-sexto.color-secundario(data-aos="fade-right")
            h5 Tabla 1.
            span Resultados obtenidos
          .tabla-a.mb-4(alt="Muestra una práctica de laboratorio cinco personas diferentes realizaron la medición de pH a la misma muestra de agua")
            table(style="min-width: 600px")
              thead(style="border-color: #00BCD4")
                tr
                  th(style="background-color: #00BCD4; font-size: 18px").text-white.text-center Medición
                  th(style="background-color: #00BCD4; font-size: 18px").text-white.text-center pH #[em (x<sub>i</sub>)]
                  th(style="background-color: #00BCD4; font-size: 18px").text-white.text-center #[em (x<sub>i</sub> - x̄ )<sup>2</sup>]
              tbody
                tr
                  td(style="background-color: #F1F1F1;").text-center 1
                  td(style="background-color: #F1F1F1;").text-center 6,8
                  td(style="background-color: #F1F1F1;").text-center 0,2116
                tr
                  td(style="background-color: #FFFFFF;").text-center 2
                  td(style="background-color: #FFFFFF;").text-center 5,8
                  td(style="background-color: #FFFFFF;").text-center 0,2916
                tr
                  td(style="background-color: #F1F1F1;").text-center 3
                  td(style="background-color: #F1F1F1;").text-center 6,2
                  td(style="background-color: #F1F1F1;").text-center 0,0196
                tr
                  td(style="background-color: #FFFFFF;").text-center 4
                  td(style="background-color: #FFFFFF;").text-center 6,9
                  td(style="background-color: #FFFFFF;").text-center 0,3136
                tr
                  td(style="background-color: #F1F1F1;").text-center 5
                  td(style="background-color: #F1F1F1;").text-center 6
                  td(style="background-color: #F1F1F1;").text-center 0,1156
                tr
                  td(style="background-color: #FFFFFF;" colspan="2").text-center Total
                  td(style="background-color: #FFFFFF;").text-center 0,952
          .row.justify-content-end
            .col-lg-6
              figure.text-end.mb-4
                img(src='@/assets/curso/tema1/img15.svg' alt="Imagen decorativa")
              figure.mb-4
                img(src='@/assets/curso/tema1/img16.svg' alt="Imagen decorativa")
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img17.svg' alt="Imagen decorativa")
    
    .row.justify-content-center
      .col-lg-8(data-aos="flip-up")
        .cajon.color-acento-botones.p-4
          p La desviación indica que los datos varían en promedio +/- 0,43 en relación con la media (#[em x̄]).
          p.mb-0 En todos los casos revisados anteriormente, es necesario tener presente que el uso de herramientas ofimáticas, como las hojas de cálculo, permiten el procesamiento rápido y sencillo de cantidades significativas de datos. Por lo que resulta necesario su estudio y práctica.  
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
