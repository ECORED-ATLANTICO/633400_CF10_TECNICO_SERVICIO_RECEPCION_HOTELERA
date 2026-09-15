<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5.justify-content-center.align-items-center

      .col-lg-9.mb-4.mb-lg-0
        p.mb-3(data-aos="fade-right") <em>This training component continues the development of communicative skills in English, focusing on the language competencies required in the hospitality and customer service sectors. Through practical and contextualized learning experiences, participants will strengthen their ability to interact effectively in professional environments related to front desk operations and guest assistance.</em>
        p.mb-4(data-aos="fade-right") <em>During the learning process, participants will expand their command of hotel-related technical vocabulary, reinforce intermediate language structures, and develop greater confidence in using English in everyday workplace situations. The component also promotes the use of appropriate expressions and communication strategies for handling common interactions with guests and colleagues.</em>

        .bg-fondo-1.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-0
          p.mb-0 <em>By the end of this training component, participants will be better prepared to communicate clearly and professionally in hospitality settings. These skills will contribute to improved customer service, more efficient workplace interactions, and enhanced performance in front desk and accommodation-related responsibilities.</em>

      .col-lg-3.col-md-8
        figure
          img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in").mx-auto

    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-1(data-aos="fade-right")
        .col-lg-7.p-4.order-1.order-lg-2
          p.mb-0 Este componente formativo da continuidad al desarrollo de las habilidades comunicativas en lengua inglesa, con énfasis en las competencias lingüísticas requeridas en los sectores de hotelería y servicio al cliente. A través de experiencias de aprendizaje prácticas y contextualizadas, los participantes fortalecerán su capacidad para interactuar de manera efectiva en entornos profesionales relacionados con la recepción y la atención de huéspedes.
        .col-lg-5.p-0.order-2.order-lg-1
          img(src="@/assets/curso/intro/img03.png", alt="")

    .row.align-items-center.mb-4.mb-lg-4
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/intro/img04.svg").mx-auto
      .col-lg
        p.mb-0 Durante el proceso, los aprendices ampliarán su dominio del vocabulario técnico propio del ámbito hotelero, reforzarán estructuras lingüísticas de nivel intermedio y desarrollarán mayor confianza en el uso del inglés en situaciones cotidianas del entorno laboral. Asimismo, el componente fomenta el uso de expresiones y estrategias comunicativas adecuadas para gestionar interacciones frecuentes con huéspedes y compañeros de trabajo.

    p.mb-0 Al finalizar este componente formativo, los participantes estarán mejor preparados para comunicarse de manera clara y profesional en contextos de hospitalidad. Estas habilidades contribuirán a brindar un servicio al cliente de mayor calidad, facilitar la interacción en el entorno de trabajo y mejorar el desempeño en funciones relacionadas con la recepción y el alojamiento.
        



</template>

<script>
export default {
  name: 'Introduccion',
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
