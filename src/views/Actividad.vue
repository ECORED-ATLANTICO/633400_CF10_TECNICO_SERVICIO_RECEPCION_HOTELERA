<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        '<em>English for hospitality services: Guest service challenge</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la apropiación de vocabulario y expresiones en inglés relacionadas con reservas, alojamiento, pagos y atención al huésped.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: '¡VUELVA A INTENTARLO!',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué tipo de tarifa corresponde al precio estándar de una habitación sin descuentos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '<em>Promotional Rate.</em>', esCorrecta: false },
            { id: 'b', texto: '<em>Negotiated Rate.</em>', esCorrecta: false },
            { id: 'c', texto: '<em>Rack Rate.</em>', esCorrecta: true },
            { id: 'd', texto: '<em>Group Rate.</em>', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha identificado adecuadamente el concepto evaluado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué significa <em>BAR Rate</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Basic Accommodation Rate.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Best Available Rate.</em>',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Booking Administration Rate.</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>Business Account Rate.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto! BAR Rate corresponde a la mejor tarifa disponible para una fecha determinada.',
          mensaje_incorrecto:
            'Repase el significado de las tarifas utilizadas en establecimientos hoteleros.',
        },
        {
          id: 3,
          texto: '¿Qué información se confirma durante una reserva?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Clima.', esCorrecta: false },
            { id: 'b', texto: 'Nombre y fechas de estadía.', esCorrecta: true },
            { id: 'c', texto: 'Menú.', esCorrecta: false },
            { id: 'd', texto: 'Atractivos turísticos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Los datos básicos de una reserva incluyen identificación y fechas de alojamiento.',
          mensaje_incorrecto:
            'Revise el proceso de toma y confirmación de reservas.',
        },
        {
          id: 4,
          texto: '¿Para qué sirve deletrear nombres?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Calcular tarifas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Evitar errores en el registro.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Gestionar pagos.', esCorrecta: false },
            { id: 'd', texto: 'Reducir atención.', esCorrecta: false },
          ],
          mensaje_correcto:
            'El deletreo permite registrar correctamente la información del huésped.',
          mensaje_incorrecto:
            'Repase la importancia de la información del huésped durante el check-in y las reservas.',
        },
        {
          id: 5,
          texto: '¿Qué título se usa para un hombre adulto?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '<em>Mrs.</em>', esCorrecta: false },
            { id: 'b', texto: '<em>Miss.</em>', esCorrecta: false },
            { id: 'c', texto: '<em>Mr.</em>', esCorrecta: true },
            { id: 'd', texto: '<em>Ms.</em>', esCorrecta: false },
          ],
          mensaje_correcto:
            'Mr. es el título de cortesía utilizado para hombres adultos.',
          mensaje_incorrecto:
            'Revise los títulos de cortesía utilizados en inglés.',
        },
        {
          id: 6,
          texto: '¿Quién es un huésped corporativo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Viaja por negocios.', esCorrecta: true },
            { id: 'b', texto: 'Viaja por ocio.', esCorrecta: false },
            { id: 'c', texto: 'Estudiante.', esCorrecta: false },
            { id: 'd', texto: 'Residente.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Los huéspedes corporativos viajan generalmente por motivos laborales.',
          mensaje_incorrecto:
            'Repase los tipos de clientes más comunes en hotelería.',
        },
        {
          id: 7,
          texto: '¿Qué habitación es para una persona?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '<em>Twin.</em>', esCorrecta: false },
            { id: 'b', texto: '<em>Double.</em>', esCorrecta: false },
            { id: 'c', texto: '<em>Single Room.</em>', esCorrecta: true },
            { id: 'd', texto: '<em>Family.</em>', esCorrecta: false },
          ],
          mensaje_correcto:
            'La Single Room está diseñada para alojar a una sola persona.',
          mensaje_incorrecto:
            'Revise los tipos de habitaciones y su capacidad.',
        },
        {
          id: 8,
          texto: '¿Cuál es la moneda oficial de Colombia?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Euro.', esCorrecta: false },
            { id: 'b', texto: 'USD.', esCorrecta: false },
            { id: 'c', texto: 'COP.', esCorrecta: true },
            { id: 'd', texto: 'Libra.', esCorrecta: false },
          ],
          mensaje_correcto:
            'El peso colombiano (COP) es la moneda oficial del país.',
          mensaje_incorrecto:
            'Repase las formas de pago y la moneda oficial utilizada en Colombia.',
        },
        {
          id: 9,
          texto: '¿Cuál es una billetera digital?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Nequi.', esCorrecta: true },
            { id: 'b', texto: '<em>Visa.</em>', esCorrecta: false },
            { id: 'c', texto: '<em>Mastercard.</em>', esCorrecta: false },
            { id: 'd', texto: '<em>Amex.</em>', esCorrecta: false },
          ],
          mensaje_correcto:
            'Nequi es una de las billeteras digitales más utilizadas en Colombia.',
          mensaje_incorrecto:
            'Revise los medios de pago digitales abordados en el componente.',
        },
        {
          id: 10,
          texto: '¿Qué medio usa códigos QR?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Pasarela de pago.', esCorrecta: true },
            { id: 'b', texto: 'Cheque.', esCorrecta: false },
            { id: 'c', texto: 'Efectivo.', esCorrecta: false },
            { id: 'd', texto: 'Vale.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Las pasarelas de pago permiten transacciones mediante QR y enlaces.',
          mensaje_incorrecto:
            'Repase las opciones de pago electrónico y digital.',
        },
        {
          id: 11,
          texto: '¿Cómo se escribe una fecha en inglés?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '<em>July 15th, 2026.</em>', esCorrecta: true },
            { id: 'b', texto: '<em>15 Julys.</em>', esCorrecta: false },
            { id: 'c', texto: '<em>Julys 15.</em>', esCorrecta: false },
            { id: 'd', texto: '<em>2026 July.</em>', esCorrecta: false },
          ],
          mensaje_correcto:
            'Esa es una forma adecuada de expresar fechas en inglés.',
          mensaje_incorrecto:
            'Revise la estructura utilizada para expresar fechas en inglés.',
        },
        {
          id: 12,
          texto: '¿Cuál es una estación del año?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '<em>Reservation.</em>', esCorrecta: false },
            { id: 'b', texto: '<em>Summer.</em>', esCorrecta: true },
            { id: 'c', texto: '<em>Lobby.</em>', esCorrecta: false },
            { id: 'd', texto: '<em>Check-in.</em>', esCorrecta: false },
          ],
          mensaje_correcto:
            'Summer corresponde a una de las estaciones del año.',
          mensaje_incorrecto:
            'Repase el vocabulario relacionado con las estaciones.',
        },
        {
          id: 13,
          texto: '¿Cuál es una expresión matemática?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '<em>Check-in.</em>', esCorrecta: false },
            {
              id: 'b',
              texto: '<em>Two plus three equals five.</em>',
              esCorrecta: true,
            },
            { id: 'c', texto: '<em>Double room.</em>', esCorrecta: false },
            { id: 'd', texto: '<em>Credit card.</em>', esCorrecta: false },
          ],
          mensaje_correcto:
            'La expresión representa una operación matemática básica en inglés.',
          mensaje_incorrecto:
            'Revise las expresiones numéricas y matemáticas estudiadas.',
        },
        {
          id: 14,
          texto: '¿Qué significa <em>Half past eight</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '8:30.', esCorrecta: true },
            { id: 'b', texto: '8:15.', esCorrecta: false },
            { id: 'c', texto: '7:30.', esCorrecta: false },
            { id: 'd', texto: '8:45.', esCorrecta: false },
          ],
          mensaje_correcto: 'Half past eight equivale a las 8:30.',
          mensaje_incorrecto:
            'Repase las formas de expresar la hora en inglés.',
        },
        {
          id: 15,
          texto: '¿Qué adjetivo describe un lugar tranquilo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '<em>Peaceful.</em>', esCorrecta: true },
            { id: 'b', texto: '<em>Crowded.</em>', esCorrecta: false },
            { id: 'c', texto: '<em>Busy.</em>', esCorrecta: false },
            { id: 'd', texto: '<em>Expensive.</em>', esCorrecta: false },
          ],
          mensaje_correcto: 'Peaceful describe un lugar tranquilo y agradable.',
          mensaje_incorrecto:
            'Revise los adjetivos descriptivos utilizados para lugares.',
        },
        {
          id: 16,
          texto: '¿Qué debe hacer ante un requerimiento especial?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ignorar.', esCorrecta: false },
            { id: 'b', texto: 'Escuchar y apoyar.', esCorrecta: true },
            { id: 'c', texto: 'Cancelar reserva.', esCorrecta: false },
            { id: 'd', texto: 'Remitir siempre.', esCorrecta: false },
          ],
          mensaje_correcto:
            'La atención efectiva comienza escuchando las necesidades del huésped.',
          mensaje_incorrecto:
            'Repase las estrategias de atención en situaciones especiales.',
        },
        {
          id: 17,
          texto: '¿Cuál está en imperativo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>The guest is arriving.</em>',
              esCorrecta: false,
            },
            { id: 'b', texto: '<em>Be friendly.</em>', esCorrecta: true },
            { id: 'c', texto: '<em>She works.</em>', esCorrecta: false },
            { id: 'd', texto: '<em>They have.</em>', esCorrecta: false },
          ],
          mensaje_correcto:
            'Be friendly es una instrucción expresada en modo imperativo.',
          mensaje_incorrecto:
            'Revise el uso de los imperativos para dar instrucciones.',
        },
        {
          id: 18,
          texto: '¿Cuál es un imperativo negativo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Check the reservation.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Welcome the guest.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: "<em>Don't interrupt people who are busy.</em>",
              esCorrecta: true,
            },
            { id: 'd', texto: '<em>Speak English.</em>', esCorrecta: false },
          ],
          mensaje_correcto:
            'Los imperativos negativos indican acciones que no deben realizarse.',
          mensaje_incorrecto:
            'Repase las estructuras afirmativas y negativas del imperativo.',
        },
        {
          id: 19,
          texto: '¿Qué habilidad es importante en servicio al huésped?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Comunicación efectiva.', esCorrecta: true },
            { id: 'b', texto: 'Arquitectura.', esCorrecta: false },
            { id: 'c', texto: 'Programación.', esCorrecta: false },
            { id: 'd', texto: 'Mecánica.', esCorrecta: false },
          ],
          mensaje_correcto:
            'La comunicación efectiva favorece una experiencia positiva para el huésped.',
          mensaje_incorrecto:
            'Revise las competencias de servicio y atención al cliente.',
        },
        {
          id: 20,
          texto: '¿Cuál es el propósito del CF?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diseñar hoteles.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Fortalecer competencias comunicativas en inglés.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Administrar finanzas.', esCorrecta: false },
            { id: 'd', texto: 'Crear <em>software.</em>', esCorrecta: false },
          ],
          mensaje_correcto:
            'El componente busca fortalecer la comunicación en inglés aplicada a la hotelería.',
          mensaje_incorrecto:
            'Revise el propósito y alcance general del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Ha demostrado una apropiación adecuada de los contenidos relacionados con la comunicación en inglés aplicada a los servicios hoteleros.',
      mensaje_final_reprobado:
        'Le recomendamos revisar nuevamente el componente formativo y reforzar los temas relacionados con reservas, alojamiento, pagos, horarios y atención al huésped.',
    },
  }),
}
</script>
