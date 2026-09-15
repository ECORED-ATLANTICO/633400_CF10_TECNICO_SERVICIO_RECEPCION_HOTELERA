<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 <em>Schedules and describing places</em> / Horarios y descripción de espacios

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-6.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img01.png", data-aos="zoom-in").mx-auto

      .col-lg-9.order-2.order-lg-2
        p.mb-2(data-aos="fade-right") <em>In hospitality settings, communicating schedules and describing facilities accurately are essential skills for providing clear information and enhancing the guest experience. Whether explaining service hours, giving directions, or describing hotel areas, effective communication helps guests feel informed and comfortable.</em>
        p.mb-4(data-aos="fade-right") <em>In this section, vocabulary and expressions related to hours, schedules, and descriptive adjectives commonly used to describe places will be explored.</em>

        .bg-fondo-3.px-lg-4.py-lg-4.px-4.py-3.br-15.mb-0
          p.mb-2(data-aos="fade-right") En el contexto hotelero, comunicar horarios y describir espacios de manera precisa son habilidades fundamentales para brindar información clara y mejorar la experiencia de los huéspedes. Ya sea para informar horarios de servicio, orientar a las personas dentro de las instalaciones o describir diferentes áreas del establecimiento, una comunicación efectiva favorece una atención de calidad.
          p.mb-0(data-aos="fade-right") En esta sección se abordará el vocabulario y las expresiones relacionadas con horarios, programación de actividades y adjetivos descriptivos utilizados para describir lugares y espacios.

    .titulo-con-imagen_2.mb-4(data-aos="fade-right")
      .titulo-con-imagen__fondo_2
        h3.titulo-con-imagen__texto_2 <em>Hours and schedules</em> / Horas y horarios

    p.mb-3 <em>Expressing the hours in English is essential. Knowing how to say the time is not only useful to answer the possible question “What time is it?” made by a guest, but it will also help you inform about schedules of events, attractions, services, and transportation (trains, planes, buses).</em>
    p.mb-4 Expresar las horas en inglés es fundamental. Saber cómo decir la hora no es solo útil para responder a la eventual pregunta “¿Qué hora es?” hecha por un huésped, sino que además le ayudará a informar acerca de horarios de eventos, atracciones, servicios y medios de transporte (trenes, aviones, buses).



    .titulo-con-imagen_2.mb-4(data-aos="fade-right")
      .titulo-con-imagen__fondo_2
        h3.titulo-con-imagen__texto_2 <em>Descriptive adjectives (places)</em> / Adjetivos descriptivos (lugares)


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img02.png", data-aos="zoom-in").mx-auto

      .col-lg-9.order-2.order-lg-2
        p.mb-3 <em>With absolute certainty, within the job at the front desk, you will have to describe a place in the city, guide the guests through streets, neighborhoods, monuments, emblematic buildings, and locate them in the destination. Below you will find some expressions and qualifiers that will help you with your work.</em>
        P.mb-0 Con absoluta seguridad, dentro del trabajo en la recepción, usted tendrá que describir un lugar de la ciudad, guiar a los huéspedes por calles, barrios, monumentos, edificios emblemáticos, y ubicarlos en el destino. A continuación, encontrará algunas expresiones y calificativos que le ayudarán con su trabajo.

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 4.
          span <em>Descriptive adjectives (places)</em> / Adjetivos descriptivos (lugares)
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th <em>Adjective</em>
                th Adjetivo
            tbody
              tr
                td <em>Something</em>
                td Algo
              tr
                td <em>Some</em>
                td Algo de
              tr
                td <em>Pretty much</em>
                td Bastante
              tr
                td <em>The rest of</em>
                td El resto de
              tr
                td <em>Hall of the</em>
                td La mitad de el /la
              tr
                td <em>More</em>
                td Más
              tr
                td <em>Less</em>
                td Menos
              tr
                td <em>A lot of</em>
                td Mucho (a)
              tr
                td <em>None of</em>
                td Nada de
              tr
                td <em>Not much</em>
                td No mucho
              tr
                td <em>Litle</em>
                td Poco
              tr
                td <em>A litle bit</em>
                td Un poco
              tr
                td <em>Enough</em>
                td Suficiente
</template>

<script>
export default {
  name: 'Tema5',
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
