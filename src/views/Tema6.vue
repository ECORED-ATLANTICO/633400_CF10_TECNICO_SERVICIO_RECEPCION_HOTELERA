<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 <em>Service situations and instructions</em> / Atención de situaciones especiales e instrucciones

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-6.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema6/img01.png", data-aos="zoom-in").mx-auto

      .col-lg-9.order-2.order-lg-2
        p.mb-2(data-aos="fade-right") <em>Hospitality professionals frequently interact with guests who may have specific requests, require additional assistance, or need guidance in different situations. Responding effectively to these needs requires clear communication, problem-solving skills, and the ability to provide accurate instructions.</em>
        p.mb-2(data-aos="fade-right") <em>In this section, common service situations, special guest requirements, and the use of imperatives to give instructions, recommendations, and guidance in hospitality settings will be explored.</em>
        p.mb-2(data-aos="fade-right") Las personas que trabajan en el sector hotelero interactúan constantemente con huéspedes que pueden presentar solicitudes específicas, requerir apoyo adicional o necesitar orientación en diferentes situaciones. Responder de manera efectiva a estas necesidades exige una comunicación clara, capacidad para resolver situaciones y habilidad para proporcionar instrucciones precisas.
        p.mb-2(data-aos="fade-right") En esta sección se abordarán situaciones frecuentes de atención, requerimientos especiales de los huéspedes y el uso de los imperativos para brindar instrucciones, recomendaciones y orientaciones en contextos hoteleros.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
          h3.titulo-con-imagen__texto <em>Special requirements and difficult situations</em> / Requerimientos especiales y situaciones difíciles

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p(style="margin-bottom: 0.5rem !important;")
          em Providing excellent hospitality service involves understanding and responding effectively to the diverse needs, questions, and requests of guests. Every interaction represents an opportunity to deliver a positive experience and strengthen guest satisfaction.
        p.mb-3 
          em During daily hotel operations, guests may approach the reception desk seeking information, assistance, or support with specific requests. Some situations may require special attention, adaptability, and effective communication.


    p.mb-3 <em>Recognizing the different types of guest interactions helps hospitality professionals respond appropriately and provide service that is respectful, efficient, and guest-centered.</em>
    p.mb-5 <em>The following resource presents some of the most common requests and situations encountered in hospitality settings.</em>


    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-6.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema6/img03.png", data-aos="zoom-in").mx-auto

      .col-lg-9.order-2.order-lg-2
        .bg-fondo-3.px-lg-4.py-lg-4.px-4.py-3.br-15.mb-3
          p.mb-0 Brindar un servicio de excelencia en el sector hotelero implica comprender y responder de manera efectiva a las diversas necesidades, inquietudes y solicitudes de los huéspedes. Cada interacción representa una oportunidad para generar una experiencia positiva y fortalecer la satisfacción de quienes reciben el servicio.
        p.mb-3 Durante la operación diaria de un establecimiento de alojamiento, las personas huéspedes pueden acercarse a la recepción para solicitar información, apoyo o atención frente a requerimientos específicos. Algunas situaciones pueden demandar una atención especial, capacidad de adaptación y una comunicación efectiva.
        p.mb-3 Reconocer los diferentes tipos de interacciones permite responder de manera adecuada y ofrecer un servicio respetuoso, eficiente y centrado en las necesidades de cada huésped.
        p.mb-0 A continuación, se presentan algunos de los requerimientos y situaciones más comunes que pueden presentarse en el contexto hotelero.


    .bg-full-width.bg-fondo-2.tarjeta.mb-5
      .px-1.py-4.py-md-4.p-lg-4.px-lg-2(data-aos="fade-right")
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2 <em><b>Requests</b>: requests are the interactions that a user makes in a respectful manner, requests the company for an intervention in a specific and punctual matter related to the service. The petition can be a request or information.</em>
              p.mb-0 <b>Peticiones</b>: las peticiones son las interacciones que un usuario hace de manera respetuosa, solicita a la empresa una intervención en un asunto puntual y concreto relacionado con el servicio. La petición puede ser una solicitud o una información.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema6/img04.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2 <em><b>Complaints</b>: complaints are the expression made by the user to the company due to non-conformity generated in the provision of the service.</em>
              p.mb-0 <b>Quejas</b>: son la expresión que hace el usuario a la empresa por inconformidad generada en la prestación del servicio.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema6/img05.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2 <em><b>Claims:</b> these are a dissatisfaction or disagreement presented by the user, referring to the provision of the service or product marketed that does not comply with a right in which the user feels harmed or threatened, with the purpose of reviewing and evaluating a compensation in economic terms.</em>
              p.mb-0 <b>Reclamos</b>: son una disconformidad o contrariedad presentada por el usuario, referida a la prestación del servicio o producto comercializado que incumple un derecho en el cual el usuario se siente perjudicado o amenazado, con el objeto de que se revise y evalúe una contraprestación en términos económicos.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema6/img06.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2 <em><b>Suggestions:</b> these are verbal, written or digital expressions, in which the user presents a proposal to influence the improvement of a company process related to the provision of the service.</em>
              p.mb-0 <b>Sugerencias</b>: son expresiones verbales, escritas o digitales, en las que el usuario presenta una propuesta para incidir en el mejoramiento de un proceso de la empresa que está relacionado con la prestación del servicio.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema6/img07.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2 <em><b>Congratulations</b>: these are expressions in which a user expresses his/her gratitude or pleasure for a service that has been provided to him/her and that has made a great impression on him/her. In general, congratulations are addressed to a particular person.</em>
              p.mb-0 <b>Felicitaciones</b>: son expresiones en las que un usuario manifiesta su gratitud o agrado por un servicio que se le ha prestado y que ha causado una gran impresión en él. Por lo general, las felicitaciones van dirigidas a una persona en particular.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema6/img08.png", alt="").img-fluid.mx-auto


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-4.mb-lg-0.col-md-12.order-2.order-lg-1
        p.mb-3 <em>The following are some basic recommendations for the effective management of these situations that may arise on a day-to-day basis:</em>


        .bg-color-5.p-4.br-15.mb-0(data-aos="fade-right")
          ul.lista-ul.mb-0
            li.mb-3
              i.lista-ul__vineta
              span <em>Take the initiative to serve prospects and customers. In customer service, it is relevant to have a genuine desire to serve and help with the highest possible quality.</em>
            li.mb-3
              i.lista-ul__vineta
              span <em>Understand the customer for what he is: a human being, who has desires, expectations, and aspirations. Hotels should aim to get to know them and, as far as possible, anticipate them.</em>
            li.mb-0
              i.lista-ul__vineta
              span <em>Listen actively. Whatever the situation, what the customer values most is to be heard and to perceive that you are really interested in what he/she is saying and that you understand him/her.</em>


      .col-lg-2.col-md-4.mb-4.mb-lg-0.order-1.order-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema6/img09.png", alt="", width="").img-fluid.mx-auto

      .col-lg-5.col-md-12.order-3.order-lg-3
        .bg-color-5.p-4.br-15.mb-0(data-aos="fade-left")
          ul.lista-ul.mb-0
            li.mb-3
              i.lista-ul__vineta
              span
                em Generate empathy with the client. This will help you especially with people who are upset or exalted. Empathy involves putting yourself in the other person’s place to understand him/her.
            li.mb-3
              i.lista-ul__vineta
              span
                em Once you hear and process the customer’s message, try to be assertive, that is, try to give your answer or point of view to the customer considering the best time, the concrete words, and the most appropriate tone.
            li.mb-3
              i.lista-ul__vineta
              span
                em Try to be decisive. The client will be able to perceive that you want to help him/her.
            li.mb-0
              i.lista-ul__vineta
              span
                em Follow these simple steps and you will surely get ahead in any situation that may arise.

    p.mb-4 A continuación, se sugieren algunas recomendaciones básicas para dar un manejo efectivo a estas situaciones que se pueden presentar en el día a día:
    ul.lista-ul.mb-4
      li.mb-3
        i.lista-ul__vineta
        span Tome la iniciativa de servir a los prospectos y clientes. En servicio al cliente, es relevante tener el deseo genuino de servir y ayudar con la mayor calidad posible.
      li.mb-0
        i.lista-ul__vineta
        span Entienda al cliente como lo que es: un ser humano, que tiene deseos, expectativas y aspiraciones. Los hoteles deben propender por conocerlos y, en la medida de lo posible, anticiparse a ellos.


    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-2.mb-4.mb-lg-0.col-md-6.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema6/img10.png", data-aos="zoom-in").mx-auto

      .col-lg-10.order-2.order-lg-2
        .bg-fondo-9.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-4
          ul.lista-ul.mb-0
            li.mb-3
              i.lista-ul__vineta
              span Escuche de forma activa. Sea cual sea la situación, lo que el cliente más valora es ser escuchado y percibir que usted realmente está interesado en lo que le dice y que lo entiende.
            li.mb-0
              i.lista-ul__vineta
              span Genere empatía con el cliente. Esto le ayudará especialmente con personas que estén molestas o exaltadas. La empatía implica ponerse en lugar de la otra persona para entenderla.
           
        ul.lista-ul.mb-0
          li.mb-3
            i.lista-ul__vineta
            span Una vez escuche y procese el mensaje del cliente, trate de ser asertivo, es decir, procure dar su respuesta o punto de vista al cliente considerando el mejor momento, las palabras concretas y el tono más adecuado.
          li.mb-3
            i.lista-ul__vineta
            span Trate de ser resolutivo. El cliente podrá percibir que usted lo quiere ayudar.
          li.mb-0
            i.lista-ul__vineta
            span Siga estos sencillos pasos y seguro saldrá adelante en cualquier situación que se pueda presentar.



    .titulo-con-imagen_2.mb-4(data-aos="fade-right")
      .titulo-con-imagen__fondo_2
        h3.titulo-con-imagen__texto_2 <em>Imperatives for basic instructions</em> / Imperativos para instrucciones básicas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.col-md-12.mb-4.mb-lg-0
        p.mb-3 <em>Imperatives are verb forms used to give instructions, provide guidance, make requests, offer advice, issue warnings, or indicate actions that should or should not be performed. They are commonly used in everyday communication and professional environments, especially when giving directions or explaining procedures.</em>
        p.mb-3 <em>Imperative forms can be affirmative, negative, or exhortative, depending on the intention of the message and the context in which they are used.</em>
        p.mb-0 <em>The following resource presents the main characteristics of each type of imperative, along with examples frequently used in communication settings.</em>

      .col-lg-3
        .bg-color-23.p-4.br-15
          p.mb-3.text-bold <em>Examples:</em>
          ul.lista-ul.mb-0
            li
              i.lista-ul__vineta
              em Be friendly.
            li
              i.lista-ul__vineta
              em Look at people when you talk to them.
            li
              i.lista-ul__vineta
              em Don’t interrupt people who are busy.

    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-5(data-aos="fade-right")
        .col-lg-7.p-4.order-2.order-lg-2
          p.mb-3 Los imperativos son formas verbales que se utilizan para dar instrucciones, orientar acciones, realizar solicitudes, ofrecer consejos, emitir advertencias o indicar comportamientos que deben o no deben realizarse. Son de uso frecuente tanto en la comunicación cotidiana como en contextos profesionales, especialmente cuando se explican procedimientos o se brindan indicaciones.
          p.mb-0 Las formas imperativas pueden ser afirmativas, negativas o exhortativas, según la intención del mensaje y el contexto en el que se emplean.
        .col-lg-5.p-0.order-1.order-lg-1
          img(src="@/assets/curso/tema6/img12.png", alt="")

    p.mb-4 A continuación, se presentan las principales características de cada tipo de imperativo, junto con ejemplos de uso frecuente en diferentes situaciones comunicativas.

    
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        .bg-color-22.p-4.br-15.mb-0
          p.mb-2.text-bold Ejemplos:
          ul.lista-ul.mb-0
            li.mb-1
              i.lista-ul__vineta
              em Sea amable.
            li.mb-1
              i.lista-ul__vineta
              em Mire a las personas cuando converse con ellas.
            li.mb-0
              i.lista-ul__vineta
              em No interrumpa a las personas que están ocupadas.
      .col-lg-7
        figure
          img(src="@/assets/curso/tema6/img25.png", alt="").img-fluid.mx-auto

    .titulo-con-imagen_2.mb-4(data-aos="fade-right")
      .titulo-con-imagen__fondo_2
        h3.titulo-con-imagen__texto_2 <em>Affirmative imperative</em> / Imperativo afirmativo


    .row.align-items-center.mb-5
      .col-lg-6.col-md-12.mb-3.mb-lg-0
        p.mb-3 <em>This is the most common usage. Imperative sentences do not have a grammatical subject, but they do have a subject that is inferred, the singular and plural second person, “you”. In that way, the basic form of imperative sentences is.</em>
        .bg-color-9.p-3.mb-3(style="width: max-content !important;")
          p.mb-0 <em>verb (infinitive without to) + object (if needed).</em>
      .col-lg-6.col-md-12
        p.mb-3 Este es el uso más común. Las oraciones imperativas no tienen un sujeto gramatical, pero sí tienen un sujeto que se infiere, la segunda persona del singular y del plural, “tú”, “usted” o “ustedes”. De esa manera, la forma básica de las oraciones imperativas es.
        .bg-color-22.p-3(style="width: max-content !important;")
          p.mb-0 verbo (infinitivo sin “to”) + objeto (si es necesario).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 5.
          span <em>Affirmative imperative</em> / Imperativo afirmativo
        .tabla-a.color-acento-contenido 
          table
            thead
              tr
                th <em>Base (verbal form)</em>
                th -
            tbody
              tr
                td <em>Smile</em>
                td <em>And be helpful</em>
              tr
                td <em>Look</em>
                td <em>At people when you talk to them</em>


    .titulo-con-imagen_2.mb-4(data-aos="fade-right")
      .titulo-con-imagen__fondo_2
        h3.titulo-con-imagen__texto_2 <em>Negative imperative</em> / Imperativo negativo

    .row.align-items-center.mb-5
      .col-lg-4.col-md-12.mb-4.mb-lg-0
        .row.align-items-center.mb-0
          .col-lg-12.d-none.d-lg-block.mb-3
            img(src="@/assets/curso/tema6/img13.svg", style="max-width: 80px")
          .col-lg-12
            p.mb-3 <em>The negative imperative sentence has the same structure, plus “do not” or “don’t”.</em>
            p.mb-0 La oración negativa imperativa tiene la misma estructura, más “<em>do not</em>” o “<em>don’t</em>”.

      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 6.
          span <em>Negative imperative</em> / Imperativo negativo
        .tabla-a.color-acento-contenido 
          table
            thead
              tr
                th <em>Do + not</em>
                th <em>Base (verbal form)</em>
                th <em>Complement</em>
            tbody
              tr
                td <em>Do not / don’t</em>
                td <em>Interrupt</em>
                td <em>Busy people</em>
              tr
                td <em>Do not / don’t</em>
                td <em>Do</em>
                td <em>This in the beginning</em>


    .titulo-con-imagen_2.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo_2
        h3.titulo-con-imagen__texto_2 <em>Exhortative imperative</em> / Exhortación imperativa
        

    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-23(data-aos="fade-right")
        .col-lg-7.p-4.order-2.order-lg-1
          p.mb-3 <em>The exhortative way is used to make suggestions: Let’s (Let + us) + verb. It is used in the first-person plural only, especially when you are trying to encourage someone to do something with you, including both the speaker and the hearer, so the subject that is inferred is represented by the plural “we”.</em>
          p.mb-0 La forma exhortativa se utiliza para hacer sugerencias: Let’s (Let + us) + verbo. Se utiliza solo en primera persona del plural, especialmente cuando se trata de animar a alguien a hacer algo con usted, incluyendo tanto el hablante como el oyente, por lo que la persona que se infiere está representada por el plural “nosotros”.

        .col-lg-5.p-0.order-1.order-lg-2
          img(src="@/assets/curso/tema6/img14.png", alt="")

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 7.
          span <em>Exhortative imperative</em> / Exhortación imperativa
        .tabla-a.color-acento-contenido 
          table
            thead
              tr
                th <em>Let + us</em>
                th <em>Base (verbal form)</em>
                th <em>Complement</em>
            tbody
              tr
                td <em>Let us / let’s</em>
                td <em>Go</em>
                td <em>To the restaurant</em>
              tr
                td <em>Let us / let’s</em>
                td <em>Visit</em>
                td <em>The national museum</em>


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema6/img15.png", data-aos="zoom-in").mx-auto

      .col-lg-9.order-2.order-lg-2
        p.mb-2(data-aos="fade-right") <em>The front office clerk welcomes and attends guests upon arrival at the hotel and throughout their stay. One of his/her functions is to answer the requests and questions of the guests and try to solve their concerns. He/She is also the one who reflects the public image of the establishment.</em>
        p.mb-0(data-aos="fade-right") <em>The receptionist makes guests feel well attended to, answers their queries and deals with their complaints, seeking effective solutions in the shortest possible time, when necessary, and always demonstrating a friendly and respectful attitude.</em>
        

        

    .row.mb-5.justify-content-center
      .col-lg-6.mb-4.mb-lg-0.col-md-12
        .bg-color-5.p-4.br-15.h-100
          p.mb-2 <em>His/Her functions also include to:</em>
          
          ul.lista-ul.mb-0
            li.mb-3
              i.lista-ul__vineta
              em Promote all the services offered by the hotel, inform about the established schedules, and make reservations for some external services, such as tourist visits through the city, car rental, taxi service, among others.
            li.mb-3
              i.lista-ul__vineta
              em Report on meeting rooms and manage their use.
            li.mb-3
              i.lista-ul__vineta
              em Take care of the correspondence, courier, and alarm services when the guest requests it.
            li.mb-3
              i.lista-ul__vineta  
              em Inform guests about local attractions and landmarks.
            li.mb-3
              i.lista-ul__vineta
              em Report loss prevention or safety.
            li
              i.lista-ul__vineta
              em Ensure that requests or issues that have remained pending from the previous day are prioritized and resolved effectively.


      .col-lg-6.col-md-12
        .bg-color-24.p-4.br-15.h-100
            p.mb-2 <em>Communicating with the guest in a professional and friendly manner, considering to:</em>
            ul.lista-ul.mb-0
              li
                i.lista-ul__vineta
                em Be the link between the hotel and the guests.
              li
                i.lista-ul__vineta
                em Ensure that the information provided is current and accurate.
              li
                i.lista-ul__vineta
                em Thank guests for their stay with genuine appreciation.
              li
                i.lista-ul__vineta
                em Respond to all concerns and doubts of guests.
              li
                i.lista-ul__vineta
                em Generate quality care to anticipate the needs and expectations of guests, so that they consider staying again at the hotel in the future.
              li
                i.lista-ul__vineta
                em To be the mediator of the communications between the guests and the corresponding departments so that the requirements are carried out in a timely and effective manner.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema6/img16.png", data-aos="zoom-in").mx-auto

      .col-lg-9.order-2.order-lg-1
        p.mb-2(data-aos="fade-right") El recepcionista da la bienvenida y atiende a los huéspedes a su llegada al hotel y durante toda su estadía. Una de sus funciones es atender las solicitudes y preguntas de los huéspedes y tratar de resolver sus inquietudes. Son quienes reflejan la imagen pública del establecimiento.
        p.mb-0(data-aos="fade-right") El recepcionista hace que los huéspedes se sientan bien atendidos, responde a sus consultas y atiende sus reclamos, buscando soluciones efectivas en el menor tiempo posible, cuando sea necesario, y demostrando siempre una actitud amable y respetuosa.


        

    .row.mb-5.justify-content-center
      .col-lg-6.mb-4.mb-lg-0.col-md-12
        .bg-color-23.p-4.br-15.h-100
          p.mb-2 Entre sus funciones también están:
          ul.lista-ul.mb-0
            li
              i.lista-ul__vineta
              | Promocionar todos los servicios que ofrece el hotel, informar sobre los horarios establecidos y realizar reservas para algunos servicios externos, como visitas turísticas por la ciudad, alquiler de autos, servicio de taxi, entre otros.
            li
              i.lista-ul__vineta
              | Informar sobre salas de reunión y gestionar su uso.
            li
              i.lista-ul__vineta
              | Cuidar los servicios de correspondencia, mensajería y alarma cuando el huésped lo solicite.
            li
              i.lista-ul__vineta
              | Informar a los huéspedes sobre las atracciones y lugares de interés locales.
            li
              i.lista-ul__vineta
              | Informar sobre prevención de pérdidas o seguridad.
            li
              i.lista-ul__vineta
              | Asegurarse de que las solicitudes o problemas que han quedado pendientes desde el día anterior se prioricen y se resuelvan de manera eficaz.



      .col-lg-6.col-md-12
        .bg-color-5.p-4.br-15.h-100
          p.mb-2 Comunicarse con el huésped de manera profesional y amigable, considerando:
          ul.lista-ul.mb-0
            li
              i.lista-ul__vineta
              | Ser el enlace entre el hotel y los huéspedes.
            li
              i.lista-ul__vineta
              | Asegurarse de que la información proporcionada es actual y precisa.
            li
              i.lista-ul__vineta
              | Agradecer a los huéspedes por su estadía con aprecio genuino.
            li
              i.lista-ul__vineta
              | Responder a todas las inquietudes y dudas de los huéspedes.
            li
              i.lista-ul__vineta
              | Generar una atención de calidad para anticipar las necesidades y expectativas de los huéspedes, para que consideren volver a hospedarse en el hotel en el futuro.
            li
              i.lista-ul__vineta
              | Ser el mediador de las comunicaciones entre los huéspedes y los departamentos correspondientes para que los requerimientos se lleven a cabo de manera oportuna y efectiva.
          p.mb-0 Aquí hay algunas palabras que se pueden usar para estas labores en forma imperativa:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema3/img10.svg", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-7.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-2 <em>Download this resource<br> Here you will find some words that can be used for these tasks in the imperative form.</em> 
                p.mb-0 Descarga este recurso <br> Aquí encontrarás algunas palabras que puedes utilizar para estas labores en forma imperativa.
              .col-lg-2.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexos/Anexo_02_Verbos_en_ingles.pdf')" target="_blank")
                  span Ir al recurso


    .titulo-con-imagen_2.mb-4(data-aos="fade-right")
      .titulo-con-imagen__fondo_2
        h3.titulo-con-imagen__texto_2 <em>Using imperative in writing</em>


        
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-6.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema6/img17.png", data-aos="zoom-in").mx-auto

      .col-lg-9.order-2.order-lg-2
        p.mb-2(data-aos="fade-right") <em>Imperatives are common in texts that tell people what to do and what not to do. They appear:</em>
        ul.lista-ul.mb-3
          li.mb-1
            i.lista-ul__vineta
            span <em>On public signs and advertisements.</em>
          li.mb-1
            i.lista-ul__vineta
            span <em>On forms and websites.</em>
          li.mb-1
            i.lista-ul__vineta
            span <em>In texts with instructions (like manuals, recipes and labels).</em>
          li.mb-0
            i.lista-ul__vineta
            span <em>In texts with advices (e.g., magazine articles, leaflets).</em>

        p.mb-2 Los imperativos son comunes en los textos que le dicen a las personas qué hacer y qué no hacer. Ellos aparecen:
        ul.lista-ul.mb-0
          li.mb-1
            i.lista-ul__vineta
            | En carteles y anuncios públicos.
          li.mb-1
            i.lista-ul__vineta
            | En formularios y sitios web.
          li.mb-1
            i.lista-ul__vineta
            | En textos con instrucciones (como manuales, recetas y etiquetas).
          li.mb-0
            i.lista-ul__vineta
            | En textos con consejos (por ejemplo, artículos de revistas, folletos).


    .bg-full-width.bg-fondo-2.tarjeta.mb-2
      .px-1.py-4.py-md-4.p-lg-4.px-lg-2(data-aos="fade-right")
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-6.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 <em>1. On public signs and advertisements</em>
              ul.lista-ul.mb-3
                li.mb-1
                  i.lista-ul__vineta
                  span <em>Do not enter.</em>
                li.mb-1
                  i.lista-ul__vineta
                  span <em>Stand behind the yellow line.</em>
                li.mb-0
                  i.lista-ul__vineta
                  span <em>Buy now and save 4.99.</em>

              h4.mb-3 En carteles y anuncios públicos
              ul.lista-ul.mb-0
                li.mb-1
                  i.lista-ul__vineta
                  span No entre.
                li.mb-1
                  i.lista-ul__vineta
                  span Párese detrás de la línea amarilla.
                li.mb-0
                  i.lista-ul__vineta
                  span Compre ahora y ahorre 4,99.
            .col-lg-6.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema6/img18.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-6.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 <em>2. On forms and websites</em>
              ul.lista-ul.mb-3
                li.mb-1
                  i.lista-ul__vineta
                  span <em>Log in. Enter your password. Search.</em>
                li.mb-1
                  i.lista-ul__vineta
                  span <em>Restart your computer after you install a new program.</em>
                li.mb-0
                  i.lista-ul__vineta
                  span <em>Please write in CAPITAL LETTERS.</em>

              h4.mb-3 En formularios y sitios web
              ul.lista-ul.mb-0
                li.mb-1
                  i.lista-ul__vineta
                  span Inicie sesión. Introduzca su contraseña. Busque.
                li.mb-1
                  i.lista-ul__vineta
                  span Reinicie su computadora después de instalar un nuevo programa.
                li.mb-0
                  i.lista-ul__vineta
                  span Por favor escriba en MAYÚSCULAS.
            .col-lg-6.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema6/img19.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-6.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 <em>3. In texts with instructions (like manuals, recipes and labels)</em>
              ul.lista-ul.mb-3
                li.mb-1
                  i.lista-ul__vineta
                  span <em>Add hot water and stir.</em>
                li.mb-0
                  i.lista-ul__vineta
                  span <em>Lift here to open.</em>

              h4.mb-3 En textos con instrucciones (como manuales, recetas y etiquetas)
              ul.lista-ul.mb-0
                li.mb-1
                  i.lista-ul__vineta
                  span Agregue agua caliente y revuelva.
                li.mb-0
                  i.lista-ul__vineta
                  span Levante aquí para abrir.
            .col-lg-6.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema6/img20.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-6.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 <em>4. In texts with advice (e.g., magazine articles, leaflets)</em>
              ul.lista-ul.mb-3
                li.mb-1
                  i.lista-ul__vineta
                  span <em>Wait until you know people a little.</em>
                li.mb-0
                  i.lista-ul__vineta
                  span <em>Show that you want to learn and work hard.</em>

              h4.mb-3 En textos con consejos (por ejemplo, artículos de revistas, folletos)
              ul.lista-ul.mb-0
                li.mb-1
                  i.lista-ul__vineta
                  span Espere hasta que conozca un poco a la gente.
                li.mb-0
                  i.lista-ul__vineta
                  span Demuestre que quiere aprender y trabajar duro.
            .col-lg-6.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema6/img21.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-6.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 <em>5. Using imperative in speaking</em>
              p.mb-2 <em>Imperatives are common in classrooms and demonstrations:</em>
              ul.lista-ul.mb-3
                li.mb-1
                  i.lista-ul__vineta
                  span <em>Listen to the conversation.</em>
                li.mb-1
                  i.lista-ul__vineta
                  span <em>Don’t open your books.</em>
                li.mb-0
                  i.lista-ul__vineta
                  span <em>Turn on the computer and enter the password.</em>

              h4.mb-3 Los imperativos son comunes en las aulas y demostraciones
              ul.lista-ul.mb-0
                li.mb-1
                  i.lista-ul__vineta
                  span Escuche la conversación.
                li.mb-1
                  i.lista-ul__vineta
                  span No abra sus libros.
                li.mb-0
                  i.lista-ul__vineta
                  span Encienda la computadora e ingrese la contraseña.
            .col-lg-6.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema6/img22.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-6.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 <em>6. You can use imperatives to give directions</em>
              ul.lista-ul.mb-3
                li.mb-1
                  i.lista-ul__vineta
                  span <em>Make a left at the next traffic light.</em>
                li.mb-0
                  i.lista-ul__vineta
                  span <em>Don’t turn right.</em>

              h4.mb-3 Puede usar imperativos para dar instrucciones
              ul.lista-ul.mb-0
                li.mb-1
                  i.lista-ul__vineta
                  span Gire a la izquierda en el siguiente semáforo.
                li.mb-0
                  i.lista-ul__vineta
                  span No gire a la derecha.
            .col-lg-6.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema6/img23.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-6.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 <em>7. You can use imperatives in common social expressions or offers</em>
              ul.lista-ul.mb-3
                li.mb-1
                  i.lista-ul__vineta
                  span <em>Have a good day.</em>
                li.mb-1
                  i.lista-ul__vineta
                  span <em>Take care.</em>
                li.mb-0
                  i.lista-ul__vineta
                  span <em>Have a cookie.</em>

              h4.mb-3 Puede utilizar imperativos en expresiones sociales u ofertas comunes
              ul.lista-ul.mb-0
                li.mb-1
                  i.lista-ul__vineta
                  span Que tenga un buen día.
                li.mb-1
                  i.lista-ul__vineta
                  span Cuídate.
                li.mb-0
                  i.lista-ul__vineta
                  span Ten una galleta.
            .col-lg-6.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema6/img24.png", alt="").img-fluid.mx-auto

</template>

<script>
export default {
  name: 'Tema6',
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
