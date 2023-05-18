<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Medición de masa y volumen
    
    p Las mediciones de masa y volumen son importantes, ya que pueden determinar de una parte la masa con la finalidad de preparar los reactivos o muestras para el análisis en este caso del agua, y de otro lado el volumen para medir la cantidad que este ocupa. Por lo anterior y con la finalidad de conocer más a fondo sobre estas mediciones, veamos con mayor profundidad el concepto de cada uno de estos elementos:
    
    separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.1 Conceptos generales de masa y peso

    .BGM07.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img01.svg')
        .col-lg-2.col-4(data-aos="flip-up")
          .BG05.py-2.px-4
            .h3.text-center.mb-3 w = mg
            p.text-center.mb-1 #[strong w] = peso
            p.text-center.mb-1 #[strong m] = masa
            p.text-center.mb-0 #[strong g] = gravedad
        .col-lg-6(data-aos="fade-left")
          p Cuando se habla de la masa se hace referencia a la cantidad de materia que contiene un cuerpo. La masa es diferente del peso, ya que este, es el producto de la masa del cuerpo por la fuerza gravitatoria que actúa sobre el mismo, según Alsina, (2015), Su expresión es la siguiente:
          .h4 w=m*g
          p #[strong Dónde]
          p #[strong w] = peso, expresado en kg*m/s2 o newton (N)
          p #[strong m] = masa, expresada en kg
          p #[strong g] = gravedad, expresado en m/s2
          p.mb-0 Así, una muestra con una masa (m) de 1 kg, tendrá un peso (w) en la tierra y otro en la luna debido a la diferencia en la gravedad (g).

    .row.justify-content-start.mb-4
      .col-auto.BGRS06.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Medición de la masa
    
    .row.justify-content-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p En las actividades de muestreo y laboratorio lo más convencional es trabajar la masa en gramos, para lo cual se pueden emplear diferentes tipos de balanzas como: analíticas, de pesas, romanas, entre otras.
        p También es bastante habitual emplear los múltiplos y submúltiplos del gramo; recordando el uso de prefijos se puede trabajar con miligramos (mg) o kilogramos (kg).
        p.mb-0 1000 g = 1 kg
        p 1000 mg = 1 g
        p Así, si se tiene un litro de agua a 4°C su masa será de 1000 g o 1 kg.
        p.mb-0 Ahora vamos a conocer los diversos tipos de instrumentos para medición de la masa que son:
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img02.png')

    .BG09.p-4.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/tema3/img03.svg')
    
    p.mb-5 La diferencia entre las balanzas puede radicar en los principios que se emplean para la medición, criterio de metrología e incluso por su diseño. Sin embargo, es posible agrupar las balanzas en dos grupos: electrónicas y mecánicas según lo menciona la OMS. (2005).Veamos:

    .row.justify-content-center.mb-4
      .col-lg-5.col-10(data-aos="zoom-in")
        img(src='@/assets/curso/tema3/img04.svg')

    separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.2 Conceptos generales de volumen

    p Atendiendo lo que indica Chang, (2002). El volumen se entiende como la cantidad de espacio tridimensional que ocupa un cuerpo. En el Sistema Internacional la unidad de volumen es el metro cúbico (m3) la cual se deriva de la unidad fundamental de longitud que es el metro (m). Sin embargo, es común emplear submúltiplos como el centímetro cúbico (cm3). 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .BGR10.px-5.py-4
          img(src='@/assets/curso/tema3/img05.svg')
      .col-lg-8(data-aos="fade-left")
        p.mb-5 Es posible emplear otras unidades en conjunto con el SI, en este caso para el volumen se emplea el litro (L). Así las cosas, se puede plantear las siguientes equivalencias:
        .row.justify-content-center
          .col-auto
            .BG05.py-2.px-4
              .h5.text-center.mb-0 1 L = 1000 ml = 1000 cm<sup>3</sup> = 1 dm<sup>3</sup>
      
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-4
        .row.justify-content-start.mb-4
          .col-auto.BGRS06.px-5.py-3(data-aos="fade-right")
            .h4.text-white.mb-0 Medición de volumen
        p.mb-0 Para medir el volumen de un líquido teniendo en cuenta lo que dice Brand. (2015), se emplea material volumétrico que puede estar fabricado en plástico o en vidrio; como parte de este material se encuentran los matraces aforados, pipeta aforada, pipeta graduada, probeta graduada y la bureta.
      .col-lg-5.col-10(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img06.png')

    .row.justify-content-start.mb-4
      .col-auto.BGRS06.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Material volumétrico
    
    p #[strong Es posible manejar dos grupos para el material volumétrico:] ajustados por contenido “In” y ajustado por vaciado “Ex”. En el primero el volumen es calculado a partir del llenado del material, mientras que, en el segundo, el volumen es medido mediante el vaciado del contenido inicial. Un ejemplo de aparatos volumétricos ajustados por vertido ‘Ex’ puede ser las pipetas; como ejemplo de aparatos volumétricos ajustados por contenido ‘In’ están los matraces aforados.

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img07.svg')
      .col-lg-4.col-8(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img08.svg')
    
    p.mb-5 Carranza (2013), realiza una descripción de los principales materiales volumétricos así:

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .p-md-4.p-3(titulo="Matraces aforados")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p Son usados principalmente para la preparación de soluciones patrón. Están calibrados “para contener”. Los matraces aforados son indispensables para preparar disoluciones y soluciones medidas. 
            p.mb-0 Para su uso ponga primero el peso exacto del soluto en el matraz. Luego llene el matraz con el solvente hasta casi la mitad del volumen y mezcle el contenido totalmente. Después llene con más solvente justo un poco por debajo del aforo. Añada más solvente para que el menisco esté exactamente a la misma altura que el aforo (línea marcada en la parte superior del cuello). Ponga atención a leer el menisco a la misma altura que el ojo y para no mojar la pared del cuello por encima del aforo.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img09.png')
      .p-md-4.p-3(titulo="Probetas")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p.mb-0 Son usadas para la medida exacta de líquidos y están calibradas “para contener”. Para su uso rellene la probeta hasta que el nivel del menisco llegue a la marca deseada y preste especial atención al posible error de paralaje al leer el menisco. Procure no mojar la pared de la probeta sobre la marca.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img10.png')
      .p-md-4.p-3(titulo="Buretas")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p Se usan para valoraciones y están calibradas “para verter”. Para su uso primero, enjuague la bureta con la solución que vaya a usar como patrón, luego debe llenarse un poco más alto que la marca cero, y llene también la punta de la bureta con la solución patrón.
            p Leyendo el menisco al nivel de su altura, vacíe la solución hasta el punto exacto del cero. En este momento, tiene que retirar las gotas en la punta de la bureta. Tiene que abrir la llave muy despacio y empezar la valoración y también evitar que la punta de la bureta no toque la pared del vaso que use. 
            p.mb-0 Cuando la muestra que esté valorando cambie el color, cierre la llave de la bureta y espere 30 segundos en las buretas con tiempo de espera. 
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img11.png')

    p.mb-5 Otro material utilizado para medir volumen son las conocidas #[strong Pipetas], las cuales están calibradas “para verter”, y su manera de utilización es: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img12.png')
      .col-lg-7(data-aos="fade-left")
        ul.lista-ul--color
          li
            i.fas.fa-check-circle(style="color: #4DB1F0;")
            | #[strong Primer paso.] Llenar la pipeta, para esto debe usar SIEMPRE un pipeteador o pi-pump; llene como máximo hasta 10 mm sobre el aforo o línea de graduación de la pipeta.
        p Limpiar y secar la superficie externa de la pipeta. 
        p Mantenga la pipeta al nivel de su vista y sitúe la punta de la pipeta sobre la pared del recipiente, que esté un poco inclinado. Debe entonces descargar el exceso hasta que el menisco alcance el aforo o la línea de graduación.
        ul.lista-ul--color
          li
            i.fas.fa-check-circle(style="color: #4DB1F0;")
            | #[strong Segundo paso.] Vaciar la pipeta, debe hacerse situando la punta de la pipeta sobre la pared del contenedor, debe tenerse mucha atención al vaciar la pipeta completamente (o hasta el 2º aforo o línea de graduación inferior).

    p.mb-5 Las pipetas pueden dividirse en volumétricas y graduadas, veamos de qué se trata:

    .row.justify-content-center.mb-5
      .col-lg-3.col-6(data-aos="fade-right")
        .BGR05.py-2.px-5
          .h4.text-center.mb-0 Pipeta volumétrica
      .col-lg-3.col-6(data-aos="fade-left")
        .BGR05.py-2.px-5
          .h4.text-center.mb-0 Pipeta graduada

    p.mb-5 Entre estas pipetas se encuentran de diversos tipos como son:

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema3/img13.png' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.tarjeta.color-acento-contenido.p-xl-4.p-lg-3.p-4
            .title.d-flex.justify-content-center.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.text-white.me-3
                i.fas.fa-caret-down.fa-2x.text-white.me-3
              h4.mb-0.text-white Tipo 1
            p.text-center.text-white.mb-0 También llamada pipeta graduada Mohr. Son de vaciado parcial con el punto cero arriba. Estas pipetas están calibradas de tal forma que el volumen, en la punta de la pipeta, no está incluido en la capacidad volumétrica de la pipeta. No se debe transferir este volumen.
      .col-lg-6.col-md-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema3/img14.png' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.tarjeta.color-primario.p-xl-4.p-lg-3.p-4
            .title.d-flex.justify-content-center.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.text-white.me-3
                i.fas.fa-caret-down.fa-2x.text-white.me-3
              h4.mb-0.text-white Tipo 2
            p.text-center.text-white.mb-0 Vaciado total con volumen nominal arriba. Difiere de la pipeta graduada Mohr en que está graduada hasta la misma punta. Este volumen debe ser forzado al descargar la pipeta, ya que es importante en la medida. Se debe transferir todo el volumen.

    .row.justify-content-start.mb-4
      .col-auto.BGRS06.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Lectura del menisco
    
    .BGM07.px-md-5.px-4.py-4.mb-5
      p.mb-5 Durante la medición del volumen de líquidos se debe tener en cuenta la ubicación del menisco en relación con la marca de lectura. El término 'menisco' se utiliza para describir la curvatura de la superficie del líquido. El menisco adopta forma convexa o cóncava. La formación de la curvatura resulta de la relación de fuerzas entre adhesión y cohesión (Brand, 2015, p.10).

      .row.justify-content-center.mb-4
        .col-lg-6(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/tema3/img15.svg')
            figcaption Fuente: <a style="font-weigh: 900">Brand (2015), p. 10.</a>
      
      p.mb-0 La lectura de la medida se debe realizar de tal manera que los ojos de la persona se encuentren a la altura del menisco.
    
    .row.justify-content-start.mb-4
      .col-auto.BGRS06.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Limpieza del material
    
    .BGM07.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7.order-lg-1.order-2
          p Para la limpieza, muchas veces es suficiente una disolución de un detergente común. En caso de que no fuera suficiente, se puede utilizar mezcla crómica o una disolución de hidróxido de potasio en alcohol (esta última no debe dejarse mucho tiempo en contacto con el vidrio porque lo ataca lentamente).
          p Siempre que se utilice una disolución de limpieza, el recipiente se lavará cuidadosamente, primero con agua corriente y después con agua destilada para verificar que las paredes queden uniformemente humedecidas.
          p.mb-0 El material aforado no debe ser secado en estufa ya que puede provocar distorsión del vidrio y causar un cambio en el volumen.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema3/img16.png')
    
    .row.justify-content-start.mb-4
      .col-auto.BGRS06.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Material no calibrado
    
    .BGM07.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img17.png')
        .col-lg-7
          p.mb-0 A diferencia del material que se ha descrito, el material no calibrado es empleado para almacenar, mezclar, realizar pruebas de precipitado, entre otras actividades que no requieran un volumen preciso. No es empleado para medir ya que la medición en este tipo de elementos es inexacta. Como ejemplo de estos es posible mencionar el #[em beaker, erlenmeyer], tubos de ensayo, entre otros. 

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
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
