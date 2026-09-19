<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <em>Rates and customer transactions</em> / Tarifas y transacciones con clientes
  
    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-5(data-aos="fade-right")
        .col-lg-7.p-4.order-1.order-lg-2
          p.mb-3 <em>Understanding rates and customer transactions is essential in the hospitality industry, as it enables professionals to provide accurate information, explain service options, and support guests throughout the booking and payment processes. Effective communication in these situations contributes to customer satisfaction and strengthens the quality of service provided.</em>
          p.mb-0 Comprender las tarifas y las transacciones con los clientes es fundamental en la industria hotelera, ya que permite brindar información precisa, explicar las diferentes opciones de servicio y acompañar a los huéspedes durante los procesos de reserva y pago. Una comunicación efectiva en estas situaciones contribuye a la satisfacción del cliente y fortalece la calidad del servicio ofrecido.
        .col-lg-5.p-0.order-2.order-lg-1
          img(src="@/assets/curso/tema1/img01.png", alt="")

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
          h3.titulo-con-imagen__texto <em>Rates</em> / Tarifas



    .row.mb-5.justify-content-center.align-items-center
      .col-lg-9.mb-4.mb-lg-0
        p.mb-3(data-aos="fade-right") <em>Rates are the amounts paid by hotel guests in exchange for the products or services they receive. They are determined by the base price and other additional charges and may vary according to supply and demand conditions within the tourism market. Hotels offer different types of rates based on the needs and characteristics of the market segments they serve.</em>
        p.mb-3(data-aos="fade-right") <em>The following section presents some of the most common rate types used in the hospitality industry.</em>
        p.mb-3(data-aos="fade-right") Las tarifas corresponden a los valores que pagan las personas usuarias de los servicios hoteleros a cambio de los productos o servicios recibidos. Estas se componen del precio base y de otros conceptos adicionales, y pueden variar de acuerdo con las condiciones de oferta y demanda del mercado turístico. Los establecimientos de alojamiento manejan diferentes tipos de tarifas según las necesidades y características de los segmentos de mercado a los que orientan sus servicios.
        p.mb-0(data-aos="fade-right") A continuación, se presentan algunos de los tipos de tarifas más utilizados en el sector hotelero.

      .col-lg-3.col-md-8
        figure
          img(src="@/assets/curso/tema1/img02.png", data-aos="zoom-in").mx-auto

    .bg-full-width.bg-fondo-2.tarjeta.mb-5
      .px-1.py-4.py-md-4.p-lg-4.px-lg-2(data-aos="fade-right")
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 <em>Rack rate</em> / Tarifa <em>rack</em>
              p.mb-2 <em>It is the official rate charged by the hotel, to which no discount applies. It serves as a reference for rate management.</em>
              p.mb-0 Es la tarifa oficial que cobra el hotel, a la cual no se aplica ningún descuento. Sirve de referencia para el manejo de tarifas.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema1/img04.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 <em>Net or floor rate</em> / Tarifa neta o de piso
              p.mb-2 <em>This is the fee that is assigned to intermediaries, such as travel agencies, bed banks and marketing platforms, on which they can generate their profit or markup.</em>
              p.mb-0 Esta es la tarifa que se asigna a intermediarios como agencias de viaje, bancos de camas y plataformas de <em>marketing</em>, sobre la cual ellos pueden generar su utilidad o sobreprecio.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema1/img05.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 <em>Confirmed rate</em> / Tarifa confirmada
              p.mb-2 <em>It is the rate that was communicated to the guest at the time of booking. If, upon the guest's arrival, there is no room available at the confirmed rate, a room in a higher category is usually provided at the same price. This is known as an upgrade.</em>
              p.mb-0 Es la tarifa que se le informó al cliente al momento de la reserva. Si al llegar el huésped no hay disponible una habitación acorde con la tarifa confirmada, se suele dar otra de mejor categoría por el mismo precio, lo que significa hacer una mejora.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema1/img06.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 <em>Negotiated rate</em> / Tarifa negociada
              p.mb-2 <em>This one has a discount on the rack rate and some conditions on its granting. It usually occurs only in negotiations with companies, agencies, associations, among others, based on a minimum production of nights per month.</em>
              p.mb-0 Esta tiene un descuento sobre la tarifa <em>rack</em> y unas condiciones en su otorgamiento. Por lo general, se da solo en negociaciones con empresas, agencias, asociaciones, entre otras, con base en una producción mínima de noches por mes.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema1/img07.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 <em>Complementary</em> / Tarifa complementaria
              p.mb-2 <em>They are the rates granted to certain entities or people who represent some interest for the hotel. For example: other hotels, associations, conglomerates with defined conditions, hotel employees, friends and family, etc.</em>
              p.mb-0 Son las tarifas que se otorgan a determinadas entidades o personas que representan algún interés para el hotel. Por ejemplo: otros hoteles, asociaciones, conglomerados con condiciones delimitadas, empleados del hotel, amigos y familiares, etc.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema1/img07.png", alt="").img-fluid.mx-auto
              

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        TabsA.color-acento-botones()
          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Promotional rates</em> / Tarifas promocionales")
            p.mb-3 <em>They are discounts that are applied for hotel promotion purposes, following some policies and restrictions. Example: non-refundable rates, children under 12 do not pay, pay 3 nights and stay 4.</em>
            p.mb-0 Son los descuentos que se aplican para fines de promoción del hotel, siguiendo unas políticas y restricciones. Ejemplo: tarifas no reembolsables, menores de 12 años no pagan, pague 3 noches y hospédese 4.

          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>BAR rate</em> / Tarifa BAR")
            p.mb-3 <em>With the increase in distribution channels, there was a time when the hotelier lost control over his price. It was common to see clients arriving at the hotel who had found, through an intermediary, a lower rate than the one offered directly by the hotel. To solve this problem, strengthen direct sales, and increase rate transparency; hoteliers began to publish the BAR (Best Available Rate) on their websites. The Best Available Rate guarantees that a lower rate will not be found in any distribution channel. The management of this type of rate is not only about price but also about the value of the rate.</em>
            p.mb-0 Con el aumento de los canales de distribución, hubo un momento en que el hotelero perdió el control sobre su precio. Era usual que llegaran clientes al hotel que habían encontrado, a través de un intermediario, una tarifa inferior que la ofrecida directamente por el hotel. Para dar solución a esta problemática, fortalecer la venta directa y aumentar la transparencia de las tarifas, los hoteleros comenzaron a publicar en sus webs la BAR (<em>Best Available Rate</em>, en inglés). La mejor tarifa disponible garantiza que no se va a encontrar una tarifa inferior en ningún canal de distribución. El manejo de este tipo de tarifas no tiene que ver solo con el precio, sino con el valor de la tarifa.

          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Group rates</em> / Tarifa grupo o evento")
            p.mb-3 <em>These rates are created based on availability and market conditions at the time the quote is requested. And they apply to groups or special events, for example, fairs, concerts, congresses.</em>
            p.mb-0 Estas tarifas se crean con base en la disponibilidad y las condiciones de mercado del momento en que se pide la cotización. Y aplican para grupos o eventos especiales, por ejemplo, ferias, conciertos, congresos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Long stay rate</em> / Tarifa larga estadía")
            p.mb-3 <em>It applies for a minimum number of nights a month. With some frequency, there are people who decide to live in hotels, due to the advantages that this provides them, and are classified as permanent guests.</em>
            p.mb-0 Aplica para un número mínimo de noches al mes. Con alguna frecuencia, hay personas que deciden vivir en hoteles, debido a las ventajas que ello les proporciona, y se catalogan como huéspedes permanentes.

          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Packages or plans</em> / Paquetes o planes")
            p.mb-3 <em>Packages are a way to market hotel products, to provide customers with more services, for more attractive prices. It can be packaged with its own or third-party products. Example: wedding night plan, package with food and tour included.</em>
            p.mb-0 Los paquetes son una forma de comercializar productos hoteleros, para brindar a los clientes más servicios, por precios más atractivos. Se puede empaquetar con productos propios o de terceros. Ejemplo: plan noche de bodas, paquete con alimentación y excursiones incluidas.


    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-4.mb-lg-0.col-md-12.order-2.order-lg-1
        .bg-color-5.p-4.br-15.mb-0(data-aos="fade-right")
          h5.mb-2 <em>Many elements influence the rate setup:</em>
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              span <em>Hotel category.</em>
            li.mb-0
              i.lista-ul__vineta
              span <em>Type of hotel.</em>
            li.mb-0
              i.lista-ul__vineta
              span <em>Season.</em>
            li.mb-0
              i.lista-ul__vineta
              span <em>Day of the week.</em>
            li.mb-0
              i.lista-ul__vineta
              span <em>Stay Length.</em>
            li.mb-0
              i.lista-ul__vineta
              span <em>Hotel location.</em>
            li.mb-0
              i.lista-ul__vineta
              span <em>Location within the hotel.</em>
            li.mb-0
              i.lista-ul__vineta
              span <em>Room type.</em>
            li.mb-0
              i.lista-ul__vineta
              span <em>Meal plan.</em>
            li.mb-0
              i.lista-ul__vineta
              span <em>Discounts.</em>
            li.mb-0
              i.lista-ul__vineta
              span <em>Individual or group client.</em>

      .col-lg-2.col-md-4.mb-4.mb-lg-0.order-1.order-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img08.png", alt="").img-fluid.mx-auto

      .col-lg-5.col-md-12.order-3.order-lg-3
        .bg-color-24.p-4.br-15.mb-0(data-aos="fade-left")
          h5.mb-2 Muchos elementos influyen en la configuración de las tarifas:
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              span Categoría del hotel.
            li.mb-0
              i.lista-ul__vineta
              span Tipo de hotel.
            li.mb-0
              i.lista-ul__vineta
              span Temporada.
            li.mb-0
              i.lista-ul__vineta
              span Día de la semana.
            li.mb-0
              i.lista-ul__vineta
              span Duración de la estancia.
            li.mb-0
              i.lista-ul__vineta
              span Ubicación del hotel.
            li.mb-0
              i.lista-ul__vineta
              span Ubicación dentro del hotel.
            li.mb-0
              i.lista-ul__vineta
              span Tipo de habitación.
            li.mb-0
              i.lista-ul__vineta
              span Plan de comidas.
            li.mb-0
              i.lista-ul__vineta
              span Descuentos.
            li.mb-0
              i.lista-ul__vineta
              span Cliente individual o grupal.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img09.png", data-aos="zoom-in").mx-auto

      .col-lg-9
        h4.mb-3 <em>Meal plans</em> / Planes de alimentación
        p.mb-3(data-aos="fade-right") <em>Hotels offer plans in addition to the accommodation, with the purpose of promoting the second line of the hotel industry, which is the sale of food and beverage services.</em>
        p.mb-3(data-aos="fade-right") Los hoteles ofrecen planes junto al alojamiento con el propósito de promover el segundo renglón de la industria hotelera, que es la venta de servicios de alimentos y bebidas.
        p.mb-3(data-aos="fade-right") <em>Generally, hotels offer the client several plans that are determined by the basic price of the room and the most suitable food option for the client.</em>
        p.mb-0(data-aos="fade-right") Generalmente, los hoteles ponen a disposición del cliente varios planes, que están determinados por el precio básico de la habitación y la opción de alimentación más adecuada para el cliente.

    p.mb-5 <em>There are different types of plans</em> / Existen diferentes tipos de planes


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        SlyderF(columnas="col-lg-6 col-xl-4 col-md-6 col-sm-12")
          .tarjeta.bg-fondo-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8  
                img(src='@/assets/curso/tema1/img11.svg' alt="", style="width: 90px;").mx-auto
            h5.text-center.mb-2 <em>European plan</em>
            p.mb-2.text-center <em>Includes room rate without any food.</em>
            h5.text-center Plan europeo
            p.mb-0.text-center Incluye la tarifa de habitación sin ningún alimento.

          .tarjeta.bg-fondo-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8  
                img(src='@/assets/curso/tema1/img12.svg' alt="", style="width: 90px;").mx-auto
            h5.text-center.mb-2 <em>Continental plan</em>
            p.mb-2.text-center <em>Includes room rate plus continental breakfast.</em>
            h5.text-center Plan continental
            p.mb-0.text-center Incluye habitación y un desayuno continental.

          .tarjeta.bg-fondo-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8  
                img(src='@/assets/curso/tema1/img13.svg' alt="", style="width: 90px;").mx-auto
            h5.text-center.mb-2 <em>American plan</em>
            p.mb-2.text-center <em>Includes room rate plus american breakfast + lunch + dinner.</em>

            p.text-center.mb-2 <em>Modified American Plan (PAM): It includes the room and two meals a day, usually breakfast and one of the meals (lunch or dinner).</em>

            h5.text-center Plan Americano
            p.mb-0.text-center Incluye la habitación y tres alimentos.
            p.mb-0.text-center Plan Americano Modificado (PAM): Incluye la habitación y dos alimentos diarios, generalmente el desayuno y una de las comidas (almuerzo o cena).

          .tarjeta.bg-fondo-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8  
                img(src='@/assets/curso/tema1/img14.svg' alt="", style="width: 90px;").mx-auto
            h5.text-center.mb-2 <em>All inclusive</em>
            p.mb-2.text-center <em>Includes room rate plus american breakfast + lunch + dinner.</em>
            h5.text-center Plan todo incluido
            p.mb-0.text-center Incluye tarifa de habitación, desayuno, almuerzo y comida, y actividades programadas.

          .tarjeta.bg-fondo-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8  
                img(src='@/assets/curso/tema1/img15.svg' alt="", style="width: 90px;").mx-auto
            h5.text-center.mb-2 <em>Bed & breakfast</em>
            p.mb-2.text-center <em>Includes room rate plus full breakfast.</em>
            h5.text-center <em>Bed & Breakfast</em>
            p.mb-0.text-center Incluye cama y desayuno. Ofrecen habitación con desayuno completo.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
          h3.titulo-con-imagen__texto <em>Discounts</em> / Descuentos
    
    p.mb-4(data-aos="fade-right") <em>Discounts are a way of promotion. Through this practice, among other things, the hotels can:</em>

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-9.order-2.order-lg-2
        .bg-fondo-3.px-lg-4.py-lg-3.px-4.py-3.br-15.mb-3
          ul.lista-ul
            li
              i.lista-ul__vineta
              span <em>Promote the brand.</em>
            li
              i.lista-ul__vineta
              span <em>Increase the frequency of purchase.</em>
            li
              i.lista-ul__vineta
              span <em>Increase sales at certain times.</em>
            li
              i.lista-ul__vineta
              span <em>Increase revenue at peak times.</em>

          p.mb-0 <em>Normally, to access a discount, the client must comply with some rules, which are known as “Terms and conditions”.</em>

        p.mb-3 <em>In the market you can find different types of discounts:</em>
    
        .row.justify-content-center
          .col-xl-6.col-md-6.col-12.mb-3
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img17.svg' alt='AvatarTop')
              .tarjeta.bg-color-24.align-content-center
                .p-3
                  p.mb-0 <b><em>Promotional codes: </em></b><em>these are codes made up of numbers or letters and that, when applied to payment, generate a reduction in value. Example: “GET10”. The instruction would show something like: “By entering the code, get a 10% discount on selected items.”</em>

          .col-xl-6.col-md-6.col-12.mb-3
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img18.svg' alt='AvatarTop')
              .tarjeta.bg-color-24.align-content-center
                .p-3
                  p.mb-0 <b><em>Discount plans: </em></b><em>here the discount promotes packaged products: stay 3 nights for $300 and get all meals for free.</em>

      .col-lg-3.col-md-8.order-1.order-lg-1.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img21.png", data-aos="zoom-in").mx-auto


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.mb-0.mb-lg-0
        .row.justify-content-center
          .col-xl-5.col-md-6.col-12.mb-3
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img19.svg' alt='AvatarTop')
              .tarjeta.bg-color-24.align-content-center
                .p-3
                  p.mb-0 <b><em>Discounts on nights: </em></b><em>this type of discount is intended to increase occupancy on dates with low demand: Pay 3 nights’ accommodation and get the fourth night for free.</em>

          .col-xl-7.col-md-6.col-12.mb-3
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img20.svg' alt='AvatarTop')
              .tarjeta.bg-color-24.align-content-center
                .p-3
                  p.mb-0 <b><em>Direct discounts: </em></b><em>this type of discount uses the strategy of showing the discount and the original price crossed out, to give the customer the perception that they are benefiting. Before $250,000 - Today $187,500. Save 25%.</em>

    p.mb-5 Los descuentos son una forma de promoción. Por medio de esta práctica, se logra, entre otras cosas:

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul.mb-3
          li
            i.lista-ul__vineta
            span Promover la marca.
          li
            i.lista-ul__vineta
            span Aumentar la frecuencia de compra.
          li
            i.lista-ul__vineta
            span Aumentar las ventas en momentos determinados.
          li
            i.lista-ul__vineta
            span Aumentar los ingresos en los momentos pico.
        p.mb-2 Normalmente, para acceder a un descuento, el cliente debe cumplir unas reglas, que se conocen como “Términos y condiciones”. <br>
        p.mb-0 En el mercado, se pueden encontrar diferentes tipos de descuentos:


    .bg-full-width.bg-fondo-4.px-5.py-4.mb-5(data-aos="fade-right")
      .container
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-8.mb-4.mb-lg-0
            img(src='@/assets/curso/tema1/img24.png', alt="").mx-auto
          .col-lg-9.col-md-12
            SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12").p-0.p-lg-4
              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema1/img25.svg' alt="", style="width: 100px;").mx-auto
                h5.text-center.mb-2 Códigos promocionales
                p.text-center.mb-0 Estos son códigos compuestos por números o letras y que, al aplicarse al pago, generan una reducción del valor. Ejemplo: “GET10”. La instrucción mostraría algo como: “Al ingresar el código, obtenga un 10 % de descuento en artículos seleccionados”.

              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema1/img26.svg' alt="", style="width: 100px;").mx-auto
                h5.text-center.mb-2 Planes con descuento
                p.text-center.mb-0 Aquí el descuento promueve productos empaquetados: Alójese 3 noches x $300 y obtenga todas las comidas gratis.

              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema1/img27.svg' alt="", style="width: 100px;").mx-auto
                h5.text-center.mb-2 Descuentos en noches
                p.text-center.mb-0 Este tipo de descuentos busca aumentar la ocupación en fechas con baja concurrencia: pague 3 noches de alojamiento y obtenga la cuarta noche gratis.

              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema1/img28.svg' alt="", style="width: 100px;").mx-auto
                h5.text-center.mb-2 Descuentos directos
                p.text-center.mb-0 Este tipo de descuentos usa la estrategia de mostrar el descuento y el precio original tachado, para dar la percepción al cliente de que se está beneficiando. Antes $250.000 - hoy $187.500. Ahorre 25 %.



    .container
      .titulo-con-imagen_2.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 <em>Comparatives</em> / Comparativos

    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-4.mb-lg-0.col-md-12.order-2.order-lg-1
        p.mb-3 <em>The comparative adjectives are used in English to highlight the differences between two objects that they modify.</em>
        p.mb-3 <em>The grammatical structure to form the comparison is as follows:</em>

        .bg-color-5.p-4.br-15.mb-0(data-aos="fade-right")
          p.mb-3 <em>Subject + verb + comparative adjective + than + object.</em>
          p.mb-3 <em>Examples:</em>
          p.mb-0 <em>Pedro + is + faster + than + me.</em>


      .col-lg-2.col-md-4.mb-4.mb-lg-0.order-1.order-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img29.png", alt="").img-fluid.mx-auto

      .col-lg-5.col-md-12.order-3.order-lg-3
        p.mb-3 Los adjetivos comparativos se utilizan en inglés para resaltar las diferencias entre dos objetos a los que modifican.
        p.mb-3 La estructura gramatical para formar la comparación es la siguiente:

        .bg-color-24.p-4.br-15.mb-0(data-aos="fade-left")
          p.mb-3 Sujeto + verbo + adjetivo comparativo + que + objeto.
          p.mb-3 Ejemplos:
          p.mb-0 Pedro + es + más rápido + que + yo.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-1.p-4.br-15
          .row.justify-content-center
            .col-lg-auto.d-none.d-lg-block.mb-4.mb-lg-4.mb-xl-0
              figure
                img(src="@/assets/curso/tema1/img30.svg", alt="").img-fluid.mx-auto
            .col-lg-12.col-md-12.col-xl-10
              p.mb-3 <em>The following video series is available to enrich the learning experience and provide additional perspectives on the topics addressed. The videos complement the information presented and support a deeper understanding of the content.</em>
              p.mb-3 La siguiente serie de videos está disponible para enriquecer la experiencia de aprendizaje y aportar perspectivas complementarias sobre los temas abordados. Los videos complementan la información presentada y favorecen una comprensión más profunda de los contenidos.

              .row.mt-4
                .col-md-6.mb-3.mb-lg-0(style="justify-items: center;")
                  .row.align-items-center.mb-3
                    .col-auto
                      p.mb-0.text-bold Lección 1:
                    .col
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=oBytkylSufw&t=169s" target="_blank")
                        span Ir al recurso
                        

                  .row.align-items-center.mb-3
                    .col-auto
                      p.mb-0.text-bold Lección 2:
                    .col
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=eA46BhGhp9Q" target="_blank")
                        span Ir al recurso
                        

                  .row.align-items-center.mb-0
                    .col-auto
                      p.mb-0.text-bold Lección 3:
                    .col
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=YWLCZU5Jsbc" target="_blank")
                        span Ir al recurso
                        

                .col-md-6(style="justify-items: center;")
                  .row.align-items-center.mb-3
                    .col-auto
                      p.mb-0.text-bold Lección 4:
                    .col
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=pL9GTpg9UDo&t=4s" target="_blank")
                        span Ir al recurso
                        

                  .row.align-items-center.mb-3
                    .col-auto
                      p.mb-0.text-bold Lección 5:
                    .col
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=7lmjKN6Sh4s" target="_blank")
                        span Ir al recurso
                        

                  .row.align-items-center.mb-3
                    .col-auto
                      p.mb-0.text-bold Lección 6:
                    .col
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=TEHj5a1n_Z8" target="_blank")
                        span Ir al recurso
              
  

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        TabsA.color-acento-botones()
          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Adjectives</em>")
            .row.align-items-center
              p.mb-3 <em>Adjectives are words that qualify, providing additional information or expressing qualities of a noun. There are several kinds of adjectives:</em>
              ul.lista-ul.mb-3
                li
                  i.lista-ul__vineta
                  span <em>Qualitative.</em>
                li
                  i.lista-ul__vineta
                  span <em>Demonstrative.</em>
                li
                  i.lista-ul__vineta
                  span <em>Quantitative.</em>
                li
                  i.lista-ul__vineta
                  span <em>Possessive.</em>
                li
                  i.lista-ul__vineta
                  span <em>Interrogatives.</em>
                li
                  i.lista-ul__vineta
                  span <em>Numeric.</em>
          .tarjeta.color-acento-botones--borde.p-4(titulo="Adjetivos")
            .row.align-items-center

              p.mb-3 Los adjetivos son palabras que califican, aportando información adicional o expresando las cualidades de un sustantivo. Existen varias clases de adjetivos:
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta
                  span Calificativos.
                li
                  i.lista-ul__vineta
                  span Demostrativos.
                li
                  i.lista-ul__vineta
                  span Cuantitativos.
                li
                  i.lista-ul__vineta
                  span Posesivos.
                li
                  i.lista-ul__vineta
                  span Interrogativos.
                li
                  i.lista-ul__vineta
                  span Numéricos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Adverbs</em>")
            .row.align-items-center
              p.mb-3 <em>Adverbs are words that complement a verb, an adjective, or another adverb. These complement the meaning of the verb that they modify, indicating the form, the frequency, or the place where things happen.</em>

          .tarjeta.color-acento-botones--borde.p-4(titulo="Adverbios")
            .row.align-items-center
              p.mb-3 Los adverbios son palabras que complementan un verbo, un adjetivo u otro adverbio. Estos complementan el significado del verbo que modifican, indicando la forma, la frecuencia o el lugar donde suceden las cosas.

    
    .container
      .titulo-con-imagen_2.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 <em>Superlatives</em> / Superlativos

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-4.mb-lg-0.col-md-12.order-2.order-lg-1
        p.mb-3.mb-lg-4 <em>The adjective when is used in the superlative form to describes an object that is at the upper or lower end of a quality. Like the comparative, it is used in sentences in which a subject is compared to a group, according to the following structure:</em>

        .bg-color-5.p-4.br-15.mb-0(data-aos="fade-right")
          p.mb-3 <em>Noun (subject) + verb + the + adjective in superlative degree + noun (object).</em>
          p.mb-3 <em>Examples:</em>
          p.mb-0 <em>Peter + is + the + highest + of the classroom.</em>



      .col-lg-2.col-md-4.mb-4.mb-lg-0.order-1.order-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img31.png", alt="").img-fluid.mx-auto

      .col-lg-5.col-md-12.order-3.order-lg-3
        p.mb-3.mb-lg-4 Cuando un adjetivo se utiliza en forma superlativa, describe un objeto que se encuentra en el extremo superior o inferior de una cualidad. Al igual que el comparativo, se utiliza en oraciones en las que comparamos un sujeto con un grupo, de acuerdo con la siguiente estructura:

        .bg-color-24.p-4.br-15.mb-0(data-aos="fade-left")
          p.mb-3 Sustantivo (sujeto) + verbo + el (la) + adjetivo en grado superlativo + sustantivo (objeto).
          p.mb-3 Ejemplos:
          p.mb-0 Pedro + es + el + más alto + del salón.



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-1.p-4.br-15
          .row.justify-content-center
            .col-lg-auto.d-none.d-lg-block.mb-4.mb-lg-3.mb-xl-0
              figure
                img(src="@/assets/curso/tema1/img30.svg", alt="").img-fluid.mx-auto
            .col-lg-12.col-md-12.col-xl-10
              p.mb-3 <em>The following video series complements the information presented in this learning experience and provides additional insights into the topics addressed.</em>
              p.mb-3 La siguiente serie de videos complementa la información presentada en esta experiencia de aprendizaje y aporta elementos adicionales para profundizar en los temas abordados.

              .row.mt-4
                .col-md-6(style="justify-items: center;")
                  .row.align-items-center.mb-3
                    .col-auto
                      p.mb-0.text-bold Lección 1:
                    .col
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=WALXkZx78GQ&t=36s" target="_blank")
                        span Ir al recurso

                  .row.align-items-center.mb-3
                    .col-auto
                      p.mb-0.text-bold Lección 2:
                    .col
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=a-GEGiqDnKY" target="_blank")
                        span Ir al recurso

                  .row.align-items-center.mb-3
                    .col-auto
                      p.mb-0.text-bold Lección 3:
                    .col
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=5xjSUPczYEY" target="_blank")
                        span Ir al recurso

                  .row.align-items-center.mb-3
                    .col-auto
                      p.mb-0.text-bold Lección 4:
                    .col
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=enOQ_V5H5sU" target="_blank")
                        span Ir al recurso

                .col-md-6(style="justify-items: center;")
                  .row.align-items-center.mb-3
                    .col-auto
                      p.mb-0.text-bold Lección 5:
                    .col
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=fJnnhyDM6f4" target="_blank")
                        span Ir al recurso

                  .row.align-items-center.mb-3
                    .col-auto
                      p.mb-0.text-bold Lección 6:
                    .col
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=HCyYePYxy0I" target="_blank")
                        span Ir al recurso

                  .row.align-items-center.mb-3
                    .col-auto
                      p.mb-0.text-bold Lección 7:
                    .col
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=2fqHjsDiqyk" target="_blank")
                        span Ir al recurso
              
              
    .container
      .titulo-con-imagen_2.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 <em>Numbers</em> / Números

    .bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img32.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 <em>Knowing how to express numbers in English is an important skill at the front desk. You will have to give dates, show billing statements, explain the value of the currency, and many other interactions that involve talking about numbers. The following resource provides a deeper explanation of the concepts addressed in this section and offers additional context to support the learning process.</em>
        <br>
        <br>
        p.mb-0 Saber expresar los números en inglés es una habilidad importante en la recepción. Usted tendrá que dar fechas, mostrar estados de cuenta, explicar el valor de la moneda y muchas otras interacciones que implican hablar de números. A continuación, se presenta un recurso que amplía la explicación de los conceptos abordados en esta sección y aporta elementos complementarios para fortalecer el proceso de aprendizaje.
            
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.col-md-12.mb-4.mb-lg-0
        h4.mb-3 <em>The ordinal numbers</em> / Los números ordinales
        p.mb-3 <em>They are used to indicate order. That is, they point to the place of the indicated object within a series, to establish the position of the object in the middle of an ordered set of elements of the same class. Ordinals are generally used as adjectives before the noun.</em>
        p.mb-3 <em>Example:</em>
        p.mb-3 <em>Your room is on the fourth floor to the left of the elevator.</em>
        p.mb-3 Se utilizan para indicar orden. Es decir, señalan el lugar del objeto indicado dentro de una serie, para establecer la posición de este en medio de un conjunto ordenado de elementos de la misma clase. Los ordinales generalmente se utilizan como adjetivos antes del sustantivo.
        p.mb-3 Ejemplo:
        p.mb-0 Su habitación está en el cuarto piso a la izquierda del ascensor.

      .col-lg-3.col-md-6
        figure
          img(src="@/assets/curso/tema1/img33.png", alt="").img-fluid.mx-auto
            
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-7.mb-4.mb-lg-0
        .bg-fondo-3.px-lg-5.py-lg-4.px-4.py-4.br-15
          h4.mb-4 <em>The cardinal numbers</em> / Los números cardinales
          p.mb-3 <em>They represent the amount of elements in a set. This quantity can be finite or infinite. They are the numbers used on a day-to-day basis to count and do mathematical operations.</em>
          p.mb-0 <em>In general, cardinal numbers are a generality of the natural number, allowing comparison of the number of elements of sets.</em>
      
      .col-lg-5.mb-4.mb-lg-0
        .row
          .col-12.col-lg-12.d-none.d-lg-block.mb-2
            figure
              img(src="@/assets/curso/tema1/img35.svg", alt="", style="max-width: 80px;").img-fluid
          .col-lg.col-md-12
            p.mb-2 Representan la cantidad de elementos de un conjunto. Esta cantidad puede ser finita o infinita. Son los números empleados en el día a día para contar y hacer operaciones matemáticas.
            p.mb-0 En general, los números cardinales son una generalidad del número natural, permitiendo comparar la cantidad de elementos de conjuntos.

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/img30_1.svg", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0 Para conocer más sobre números cardinales consulte el archivo Los_Numeros_Cardinales.pdf:
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexos/Anexo_03_The_cardinal_numbers.pdf')" target="_blank")
                  span Ir al recurso

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.col-md-12.order-2.order-lg-2
        h4.mb-3 <em>Expressing quantities in English</em> / Expresando cantidades en inglés
        p.mb-0 <em>In customer service, hospitality, and administrative settings, you may need to express amounts when referring to bills, accounts, prices, or payments. The following examples illustrate how amounts can be expressed correctly in English.</em>
        p.mb-0 <em>Example:</em>
        p.mb-0 <em>Mr. Pedroza, your total account is $254.325 Colombian pesos (two hundred and fifty-four thousand three hundred and twenty-five Colombian pesos).</em>
        p.mb-3 <em>It would be $72,66 dollars (seventy-two dollars and sixty-six cents).</em>
        p.mb-0 En contextos de atención al cliente, hospitalidad y servicios administrativos, es posible que deba expresar cantidades al referirse a cuentas, precios, facturas o pagos. Los siguientes ejemplos muestran cómo pueden expresarse correctamente las cantidades en inglés.
        p.mb-0 Ejemplo:
        p.mb-0 Sr. Pedroza, su cuenta total es $254.325 pesos colombianos (doscientos cincuenta y cuatro mil trescientos veinticinco pesos colombianos).
        p.mb-0 Serían $72,66 dólares (setenta y dos dólares con sesenta y seis centavos).


      .col-lg-3.col-md-6.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img37.png", alt="").img-fluid.mx-auto
            
    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/img30.svg", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-3 <em>You are invited to review the following video to supplement the information.</em>
                p.mb-0 Se invita a revisar el siguiente video para complementar la información.
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=9MzsJd2j7Vc" target="_blank")
                  span Ir al recurso


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
