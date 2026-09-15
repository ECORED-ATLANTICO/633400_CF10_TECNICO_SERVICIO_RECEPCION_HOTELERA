<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/intro/img05.png", data-aos="zoom-in").mx-auto

      .col-lg-9
        p.mb-3 Este componente formativo fortalece las competencias comunicativas en inglés aplicadas al sector hotelero y de atención al cliente. Su propósito es desarrollar habilidades para interactuar con huéspedes, gestionar reservas, atender solicitudes, manejar procesos de alojamiento y utilizar vocabulario técnico propio de la recepción hotelera.
        p.mb-0 Al finalizar el componente, la persona participante estará en capacidad de comunicarse de manera efectiva en inglés en contextos hoteleros, brindando una atención profesional, gestionando información de huéspedes y apoyando procesos operativos de recepción.



    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual jerárquico del componente formativo “English for Hospitality Services”. En la parte superior se ubica el tema central, del cual se desprenden seis componentes principales organizados en el mismo nivel jerárquico. De izquierda a derecha, los componentes son: “Rates and Customer Transactions”, “Guest Information and Reservations”, “Clients, Accommodation and Payments”, “Dates, Seasons and Numerical Expressions”, “Schedules and Describing Places” y “Service Situations and Instructions”. La estructura representa la organización general de los contenidos del componente formativo relacionados con la comunicación en inglés aplicada al sector hotelero y de atención al cliente.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
