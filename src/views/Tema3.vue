<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Clients, accommodation and payments</em> / Atención al cliente y procesos de alojamiento

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema3/img01.png", data-aos="zoom-in").mx-auto

      .col-lg-9
        p.mb-0(data-aos="fade-right") <em>Providing quality service in the hospitality industry requires understanding guest needs, managing accommodation processes efficiently, and handling payment procedures accurately. These elements contribute to a positive guest experience and support the smooth operation of hospitality establishments.</em>
        p.mb-2(data-aos="fade-right") <em>In this section, topics related to client types, accommodation services, and commonly used payment methods in hospitality settings will be explored.</em>
        p.mb-0(data-aos="fade-right") Brindar un servicio de calidad en la industria hotelera requiere comprender las necesidades de los huéspedes, gestionar eficientemente los procesos de alojamiento y realizar de manera adecuada los procedimientos de pago. Estos elementos contribuyen a generar experiencias positivas y favorecen el buen funcionamiento de los establecimientos de alojamiento.
        p.mb-0(data-aos="fade-right") En esta sección se abordarán temas relacionados con los tipos de clientes, los servicios de alojamiento y las formas de pago más utilizadas en el contexto hotelero.



    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
          h3.titulo-con-imagen__texto <em>Types of clients</em> / Tipos de Clientes
      
      
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-2.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img02.png", data-aos="zoom-in").mx-auto

      .col-lg-10.order-2.order-lg-1
        p.mb-3(data-aos="fade-right") <em>Every guest is unique, and each travel experience is motivated by different needs, interests, and expectations. For this reason, providing quality service requires professionalism, empathy, and a willingness to understand the specific needs of each person.</em>
        p.mb-3(data-aos="fade-right") <em>In hospitality operations, recognizing the characteristics of different guest profiles helps create positive experiences, strengthen communication, and deliver services that meet expectations.</em>
        p.mb-0(data-aos="fade-right") <em>The following resource presents some of the most common types of guests encountered in the hospitality industry.</em>

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-2.mb-4.mb-lg-0.col-md-6
        figure
          img(src="@/assets/curso/tema3/img03.png", data-aos="zoom-in").mx-auto

      .col-lg-10
        .bg-fondo-3.px-lg-4.py-lg-4.px-4.py-3.br-15.mb-3
          p.mb-0 Cada huésped es una persona única, y las motivaciones de viaje pueden variar según sus necesidades, intereses y expectativas. Por esta razón, brindar un servicio de calidad requiere profesionalismo, empatía y disposición para comprender las particularidades de cada persona.
        p.mb-3(data-aos="fade-right") En el contexto hotelero, reconocer las características de los diferentes perfiles de huéspedes contribuye a generar experiencias positivas, fortalecer la comunicación y ofrecer servicios acordes con sus expectativas.
        p.mb-0(data-aos="fade-right") A continuación, se presentan algunos de los tipos de huéspedes más comunes en la industria de la hospitalidad.

      

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        TabsA.color-acento-botones()
          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Corporate</em> / Corporativo")
            p.mb-3 <em>They are customers who travel for work or business reasons; their stay usually does not exceed one week. They tend to be very demanding with service and are usually less price sensitive.</em>
            p.mb-0 Son los clientes que viajan por motivos de trabajo o negocios; su permanencia generalmente no excede una semana. Suelen ser muy exigentes con el servicio, y por lo general son menos sensibles al precio.
        

          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Senior citizens</em> / Tercera edad")
            p.mb-3 <em>Older adults who, due to their availability of time and resources, generally travel for leisure purposes. They are known as the “Boomer” generation.</em>
            p.mb-0 Los adultos mayores que, por su disponibilidad de tiempo y recursos, viajan generalmente con fines de esparcimiento. Se les conoce como la generación “<em>Boomer</em>”.
              

          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Families</em> / Familias")
            p.mb-3 <em>This type of traveler now occurs more frequently, and hotels face the request for the accommodation service for families in holiday seasons or weekends. In this group, the availability of money is tighter, so they are open to listening to all-inclusive offers and multiple accommodations.</em>
            p.mb-0 Este tipo de viajero ahora se ve con más frecuencia, y los hoteles afrontan la solicitud del servicio de alojamiento para las familias en temporadas de vacaciones o fines de semana. En este grupo, la disponibilidad de dinero es más ajustada, por lo que son abiertos a escuchar ofertas de todo incluido y a las acomodaciones múltiples.
          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Diplomats – government</em> / Diplomáticos - gobierno")
            p.mb-3 <em>They are people who work with the state and travel for work, but they have an additional nuance and that is that usually and by the position they hold or the rank they have, their treatment may require a specific protocol, mainly for their safety.</em>
            p.mb-0 Son personas que trabajan con el Estado y viajan por trabajo, pero tienen un matiz adicional y es que, por lo general y en virtud del cargo que desempeñan o del rango que tienen, su tratamiento puede requerir un protocolo específico, principalmente por su seguridad.

          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Groups</em> / Grupos")
            p.mb-3 <em>This type of guests is a congregation of people traveling on the same dates and with similar travel motivations (a convention, a tour, etc.). They have certain specific treatments and services common to all of them.</em>
            p.mb-0 Esta tipología de huéspedes es una congregación de personas que viajan en las mismas fechas y con motivaciones de viaje similares (una convención, un <em>tour</em>, etc.). Poseen ciertos tratamientos y servicios específicos comunes a todos ellos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Luxury travelers</em> / Viajeros de lujo")
            p.mb-3 <em>These travelers are the ones who have the highest expectations and are willing to pay for the experience. Usually, the price is not a problem for them. They are sophisticated and pay a lot of attention to the value of what they get (value for money).</em>
            p.mb-0 Estos viajeros son los que tienen mayores expectativas y están dispuestos a pagar por la experiencia. Por lo general, el precio no es problema para ellos. Son sofisticados y se fijan mucho en el valor de lo que obtienen (relación calidad/precio).
           

    p.mb-3(data-aos="fade-right") <em>By identifying these types of travelers, it will be easier for you to address them properly.</em>
    p.mb-5(data-aos="fade-right") Si logra identificar estos tipos de viajeros, le será más fácil dirigirse a ellos de una forma adecuada.



    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
          h3.titulo-con-imagen__texto <em>Guest Information</em> / Información del huésped
      


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema3/img05.png", data-aos="zoom-in").mx-auto

      .col-lg-9
        p.mb-2(data-aos="fade-right") <em>During the reservation process and the check-in of international guests, it is important to collect, verify, and provide relevant information clearly and accurately. Effective communication contributes to a positive guest experience and supports the efficient delivery of hospitality services.</em>
        p.mb-2(data-aos="fade-right") <em>The following resource presents some of the information commonly requested and shared during these interactions.</em>

        p.mb-2(data-aos="fade-right") Durante el proceso de reservación y el <em>check-in</em> de huéspedes internacionales, es importante recopilar, verificar y proporcionar información relevante de manera clara y precisa. Una comunicación efectiva contribuye a una experiencia positiva y favorece la adecuada prestación de los servicios hoteleros.
        p.mb-2(data-aos="fade-right") A continuación, se presenta información que suele solicitarse y compartirse durante estas interacciones.

    .bg-full-width.bg-fondo-2.tarjeta.mb-5
      .px-1.py-4.py-md-4.p-lg-4.px-lg-2(data-aos="fade-right")
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 <em>Countries</em> / Países
              p.mb-2 <em>During check-in and because of the migration information process, the origin and destination of the passenger are inquired. A person will identify himself but will not necessarily come from or go to his or her country of origin.</em>
              p.mb-0 Durante el <em>check-in</em> y de cara al proceso de información migratoria, se indaga sobre la procedencia y el destino del pasajero. Una persona se identificará, pero no necesariamente vendrá o se dirigirá a su país de origen.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema3/img06.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 <em>Nationalities</em> / Nacionalidades
              p.mb-2 <em>In the same way, at check-in you must enter the nationality information. At this point, the recommendation is to check if the person has dual nationality, as this can affect the management of billing and taxes.</em>
              p.mb-0 De la misma forma, durante el registro usted deberá ingresar la información de nacionalidad. En este punto, la recomendación es revisar si la persona cuenta con doble nacionalidad, ya que esto puede afectar la gestión de facturación e impuestos.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema3/img07.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 <em>Personal information</em> / Información personal
              p.mb-2 <em>The personal information of guests is sensitive. Remember that this is protected by confidentiality and privacy laws, so you should only inquire about the necessary and relevant data for your work. (Address, phone number, e-mail, marital status).</em>
              p.mb-0 La información personal de los huéspedes es delicada. Recuerde que esta está protegida por leyes de confidencialidad y privacidad, por lo que solo debe indagar por los datos necesarios y relevantes para su trabajo. (Dirección, número de teléfono, correo electrónico, estado civil).
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema3/img08.png", alt="").img-fluid.mx-auto



    .row.mb-5.justify-content-center.align-items-center
      .col-lg-9.col-md-12.order-1.order-lg-2
        
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-23")
          div(titulo="<em>Documents</em> / Documentos")
            p.ms-5.mb-3 <em>The identity documents must comply with the current rules of identification and acceptance by the hotel. You must keep abreast of developments in this regard. Always be attentive to the originality of the documentation presented, and if you have any news about it, be prudent with the handling of this.</em>
            p.ms-5.mb-0 Los documentos de identidad deben cumplir con las normas vigentes de identificación y aceptación por parte del hotel. Su deber es mantenerse al tanto de las novedades en este sentido. Esté siempre atento a la originalidad de la documentación presentada y, si tiene alguna novedad al respecto, sea prudente con el manejo de esta.

          div(titulo="<em>Purpose of the trip</em> / Propósito del viaje")
            p.ms-5.mb-3 <em>It will help you reveal what type of traveler is the one in front of you, and meet the requirements and requests accordingly.</em>
            p.ms-5.mb-0 Le ayudará a develar el tipo de viajero que tiene enfrente y, de esta forma, atender los requerimientos y solicitudes adecuadamente.

          div(titulo="<em>Credit card number</em> / Número de tarjeta de crédito")
            p.ms-5.mb-3 <em>This is another extremely sensitive item. Taking the data correctly can make the difference between being able to collect an account or not. On the other hand, keeping financial data secure is a very high responsibility. The recommendation is to follow the management protocols.</em>
            p.ms-5.mb-0 Este es otro elemento extremadamente sensible. Tomar los datos de manera correcta puede hacer la diferencia entre poder cobrar una cuenta o no. Por otro lado, mantener los datos financieros seguros es una responsabilidad muy grande. La recomendación es seguir los protocolos de manejo.

          div(titulo="<em>Schedules</em> / Horarios")
            p.ms-5.mb-3 <em>Reporting schedules is also a common activity, so knowing how to express the time will be useful.</em>
            p.ms-5.mb-0 Informar horarios es también una actividad común, por lo que conocer la forma de expresar el tiempo le será útil.


      .col-lg-3.col-md-6.order-2.order-lg-1.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img09.png", alt="").img-fluid.mx-auto

              
    .titulo-con-imagen_2.mb-4(data-aos="fade-right")
      .titulo-con-imagen__fondo_2
        h3.titulo-con-imagen__texto_2 <em>Countries and nationalities in English</em> / Países y nacionalidades en inglés

    p.mb-5 <em>The following document presents a list of countries and nationalities commonly used in hospitality and tourism contexts. This resource supports the development of vocabulary and communication skills required when interacting with guests from different parts of the world.</em>

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema3/img10.svg", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-7.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0 El siguiente documento presenta una lista de países y nacionalidades de uso frecuente en contextos hoteleros y turísticos. Este recurso favorece el desarrollo del vocabulario y las habilidades de comunicación necesarias para interactuar con huéspedes provenientes de diferentes partes del mundo.
              .col-lg-2.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexos/Anexo_01_Lista_de_paises.pdf')" target="_blank")
                  span Ir al recurso



    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
          h3.titulo-con-imagen__texto <em>Accommodation</em> / Alojamiento

    .row.mb-5.align-items-center.justify-content-center
      .col-lg-10
        p.mb-3(data-aos="fade-right") <em>In the hotel industry, accommodation refers to the type of rooms and beds that lodging properties have. You are going to learn what types are these.</em>
        p.mb-0(data-aos="fade-right") En la industria hotelera, el alojamiento se refiere al tipo de habitaciones y camas que tienen las propiedades de hospedaje. A continuación, aprenderá cuáles son estos tipos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 1.
          span <em>Accommodation</em> / alojamiento
        .tabla-a.color-acento-contenido 
          table
            thead
              tr
                th <em>Bed types</em>
                th Tipos de camas
                th <em>Measurements</em> / Medidas
            tbody
              tr
                td <em>Single bed</em>
                td Cama sencilla
                td 1.00 m x 1.90 m
              tr
                td <em>Semi-double bed</em>
                td Cama semidoble
                td 1.20 m x 1.90 m
              tr
                td <em>Full-size bed</em>
                td Cama doble o matrimonial
                td 1.40 m x 1.90 m
              tr
                td <em>Queen-size bed</em>
                td Cama <em>queen</em>
                td 1.80 m x 1.90 m
              tr
                td <em>King-size bed</em>
                td Cama <em>king</em>
                td 2.00 m x 2.00 m
              

    .bg-full-width.bg-fondo-4.px-5.py-4.mb-5(data-aos="fade-right")
      .container
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-8.mb-4.mb-lg-0
            img(src='@/assets/curso/tema3/img11.png', alt="").mx-auto
          .col-lg-9.col-md-12
            SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12").p-4
              .tarjeta.bg-white.p-2.h-100
                img.mb-2(src='@/assets/curso/tema3/img12.svg' alt="", style="width: 250px; height: 250px;").mx-auto
                h5.text-center.mb-2 <em>Single bed</em>

              .tarjeta.bg-white.p-2.h-100
                img.mb-2(src='@/assets/curso/tema3/img13.svg' alt="", style="width: 250px; height: 250px;").mx-auto
                h5.text-center.mb-2 <em>Semi-double bed</em>

              .tarjeta.bg-white.p-2.h-100
                img.mb-2(src='@/assets/curso/tema3/img14.svg' alt="", style="width: 250px; height: 250px;").mx-auto
                h5.text-center.mb-2 <em>Full-size bed</em>

              .tarjeta.bg-white.p-2.h-100
                img.mb-2(src='@/assets/curso/tema3/img15.svg' alt="", style="width: 250px; height: 250px;").mx-auto
                h5.text-center.mb-2 <em>Queen-size bed</em>

              .tarjeta.bg-white.p-2.h-100
                img.mb-2(src='@/assets/curso/tema3/img16.svg' alt="", style="width: 250px; height: 250px;").mx-auto
                h5.text-center.mb-2 <em>King-size bed</em>

      
    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
          h3.titulo-con-imagen__texto <em>Room types</em> / Tipos de habitación

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-2 <em>Understanding the different room types offered by a hotel is essential for providing accurate information and ensuring that guests' needs and preferences are met. Each room category is designed to accommodate different travel purposes, occupancy levels, and comfort expectations.</em>
        <br>
        p.mb-0 <em>The following resource presents the most common room types used in the hospitality industry and their main characteristics.</em>

    p.mb-3 Conocer los diferentes tipos de habitación que ofrece un establecimiento hotelero es fundamental para brindar información precisa y responder adecuadamente a las necesidades y preferencias de los huéspedes. Cada categoría de habitación está diseñada para atender distintos propósitos de viaje, niveles de ocupación y expectativas de comodidad.
    p.mb-5 A continuación, se presentan los tipos de habitación más comunes en la industria hotelera y sus principales características.


    .row.mb-5.justify-content-center
      .col-lg-4.mb-4.mb-lg-0.col-md-6
        .bg-color-23.p-4.br-15.h-100
          .col-lg-auto.d-none.d-lg-flex.mb-2.justify-content-end
            img(src="@/assets/curso/tema3/img18.svg", style="max-width: 90px; height: 90px;")
          .col-lg
            p.mb-2 <em><b>Single room:</b> room for one person, usually with a single or semi-double bed.</em>
            p.mb-0 <b>Habitación individual:</b> habitación para una persona, generalmente con cama sencilla o semidoble.

      .col-lg-4.mb-4.mb-lg-0.col-md-6
        .bg-color-24.p-4.br-15.h-100
          .col-lg-auto.d-none.d-lg-flex.mb-2.justify-content-end
            img(src="@/assets/curso/tema3/img19.svg", style="max-width: 90px; height: 90px;")
          .col-lg
            p.mb-2 <em><b>Double room:</b> room for two guests, has a double or a queen bed.</em>
            p.mb-0 <b>Habitación doble:</b> habitación para dos personas, tiene una cama doble o extra doble.

      .col-lg-4.mb-4.mb-lg-0.col-md-6
        .bg-color-5.p-4.br-15.h-100
          .col-lg-auto.d-none.d-lg-flex.mb-2.justify-content-end
            img(src="@/assets/curso/tema3/img20.svg", style="max-width: 90px; height: 90px;")
          .col-lg
            p.mb-2 <em><b>Double room (twin beds):</b> room for two guests in two separate beds.</em>
            p.mb-0 <b>Habitación doble (dos camas individuales):</b> habitación para dos personas en camas separadas.


    .bg-full-width.bg-fondo-2.tarjeta.mb-5
      .px-1.py-4.py-md-4.p-lg-4.px-lg-2(data-aos="fade-right")
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2 <em><b>Triple room:</b> room for three (3) people, has a double bed and a single bed, or any other combination of 3 beds.</em>
              p.mb-0 <b>Habitación triple:</b> habitación para tres (3) personas, cuenta con una cama doble y una cama individual, o cualquier otra combinación de 3 camas.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema3/img21.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2 <em><b>Suite:</b> it is larger than a normal room. In the most luxurious hotels, the suites can even have multiple rooms. There are business or family class suites.</em>
              p.mb-0 <b>Suite:</b> es más grande que una habitación normal. En los hoteles más lujosos, las suites pueden incluso tener varias habitaciones. Hay suites de clase empresarial o familiar.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema3/img22.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2 <em><b>Connecting rooms:</b> this means that two rooms are connected by a door through which you can go from one room to another. Large groups or families often ask for this type of room.</em>
              p.mb-0 <b>Habitación comunicada:</b> habitación para dos o más personas que están conectadas por una puerta a través de la cual se puede pasar de una habitación a otra. Los grupos grandes o las familias suelen solicitar este tipo de habitación.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema3/img23.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2 <em><b>Adjoining room:</b> rooms that are next to each other but are not internally connected.</em>
              p.mb-0 <b>Habitación contigua:</b> habitaciones que están una al lado de la otra, pero que no están conectadas internamente.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema3/img24.png", alt="").img-fluid.mx-auto



    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
          h3.titulo-con-imagen__texto <em>Payment forms</em> / Formas de pago

    .row.align-items-center.mb-5
      .col-lg-2.d-none.d-lg-flex
        img(src="@/assets/curso/tema3/img25.png").mx-auto
      .col-lg-10.col-md-12
        p.mb-3 <em>Whenever you close an account and issue an invoice, you must receive a payment. In this section, you will study the payment forms legally accepted and guaranteed by the Colombian state and the accommodation establishment.</em>
        p.mb-0 Siempre que se va a cerrar una cuenta y a expedir una factura, se debe recibir un pago. En este apartado, se estudiarán las formas de pago legalmente aceptadas y avaladas por el Estado colombiano y el establecimiento de alojamiento.

    

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        TabsA.color-acento-botones()
          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Official currency in Colombia</em> / Moneda oficial en Colombia")
            p.mb-2 <em>In the Republic of Colombia, including its islands of San Andrés and Providencia, the national currency is the Colombian peso, identified by the sign of the same name ($) and whose abbreviation is COP. The national currency is presented in notes and coins.</em>
            p.mb-3 <em>The official currency is the Colombian peso (COP). These are the bills and coins.</em>
            p.mb-2 En la República de Colombia, incluyendo sus islas de San Andrés y Providencia, la moneda nacional es el peso colombiano, identificado con el signo del mismo nombre ($) y cuya abreviatura es COP. La moneda nacional se presenta en billetes y monedas.
            p.mb-3 La moneda oficial es el peso colombiano (COP). Estos son los billetes y las monedas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Foreign currency payments</em> / Pagos en moneda extranjera")
            p.mb-3 <em>In Colombia, by regulation, it is forbidden to invoice in foreign currencies. And those who receive foreign currency as a form of payment must operate as professional money exchangers. Beyond this consideration, the currencies that are accepted in Colombia are: U.S. dollars and euros.</em>
            p.mb-0 En Colombia, por normatividad, está prohibido facturar en moneda extranjera. Y quienes reciben moneda extranjera como forma de pago deben operar como cambistas profesionales. Más allá de esta consideración, las monedas que se aceptan en Colombia son: dólares americanos y euros.

          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Debit and credit cards</em> / Tarjetas débito y crédito")
            p.mb-3 <em>This is the most widespread form of payment, for its ease of use and immediate confirmation since what the cards do is to debit from the cardholder’s account and deposit into the hotel account. In this section, the important thing is to comply with the security regulations about the use of cards and identification of cardholders to avoid fraud.</em>
            p.mb-0 Esta es la forma de pago más extendida, por su facilidad de uso y confirmación inmediata, ya que las tarjetas lo que hacen es debitar de la cuenta del tarjetahabiente y depositar en la cuenta del hotel. En este apartado, lo importante es cumplir las normativas de seguridad en el uso de tarjetas e identificación de tarjetahabientes para evitar los fraudes.

          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Money collectors</em> / Recaudadores de dinero")
            p.mb-3 <em>This form of payment is becoming increasingly relevant, since they are the forms of payment used by e-commerce companies. Here can be mentioned:</em>
            ul.lista-ul.mb-3
              li
                i.lista-ul__vineta
                span <em>Collect terminals, such as Baloto, Efecty, Todopagos, etc.</em>
              li
                i.lista-ul__vineta
                span <em>Digital wallets: Nequi, Daviplata, Mercado Pago.</em>
            p.mb-3 Esta forma de pago se está tornando cada vez más relevante, ya que son las formas de pago usadas por las compañías de comercio electrónico. Aquí se pueden mencionar:
            ul.lista-ul.mb-0
              li
                i.lista-ul__vineta
                span Terminales de recaudo, como Baloto, Efecty, Todopagos, etc.
              li
                i.lista-ul__vineta
                span Billeteras digitales: Nequi, Daviplata, Mercado Pago.

          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Payment gateways</em> / Pasarelas de pago")
            p.mb-3 <em>These forms of payment are made available to customers through:</em>
            ul.lista-ul.mb-3
              li
                i.lista-ul__vineta
                span <em>Payment links.</em>
              li
                i.lista-ul__vineta
                span <em>QR Codes.</em>
              li
                i.lista-ul__vineta
                span <em>Payment buttons.</em>
              li
                i.lista-ul__vineta
                span <em>Integration to payment gateways.</em>
            p.mb-3 <em>Finally, there are also companies that receive payments using Bitcoin and other virtual currencies.</em>
            p.mb-3 Estas formas de pago se brindan a los clientes mediante:
            ul.lista-ul.mb-3
              li
                i.lista-ul__vineta
                span Enlaces de pago.
              li
                i.lista-ul__vineta
                span Códigos QR.
              li
                i.lista-ul__vineta
                span Botones de pago.
              li
                i.lista-ul__vineta
                span Integración a pasarelas de pago.
            p.mb-0 Para finalizar, hay también compañías que ofrecen pagos mediante Bitcoin y otras monedas virtuales.
        



</template>

<script>
export default {
  name: 'Tema3',
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
