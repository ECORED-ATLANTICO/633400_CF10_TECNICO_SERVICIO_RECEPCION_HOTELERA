export default {
  global: {
    Name: '<em>Check-in: process complementary services</em>',
    Description:
      'Este componente formativo fortalece las competencias comunicativas en inglés aplicadas al sector hotelero. Desarrolla habilidades para gestionar reservas, atender huéspedes, brindar información, manejar procesos de alojamiento, utilizar expresiones numéricas y responder a situaciones de servicio, favoreciendo una comunicación efectiva y profesional en contextos de hospitalidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          '<em>Rates and customer transactions</em> / Tarifas y transacciones con clientes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          '<em>Guest information and reservations</em> / Información del huésped y reservas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          '<em>Clients, accommodation and payments</em> / Atención al cliente y procesos de alojamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          '<em>Dates, seasons and numerical expressions</em> / Manejo de fechas y expresiones numéricas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          '<em>Schedules and describing places</em> / Horarios y descripción de espacios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          '<em>Service situations and instructions</em> / Atención de situaciones especiales e instrucciones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/633400_CF10_CFA.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: '<em>BAR</em> / Mejor Tarifa Disponible',
      significado:
        '<em>this is an acronym for Best Available Rate, a rate created by hoteliers to confront the competency against the OTAs.</em>  Es el acrónimo de Best Available Rate (Mejor Tarifa Disponible). Corresponde a una tarifa creada por los establecimientos hoteleros para competir con las tarifas ofrecidas por las OTA (Agencias de Viajes en Línea).',
    },
    {
      termino: '<em>Equinox</em> / Equinoccio',
      significado:
        '<em>the time or date (twice each year) at which the sun crosses the celestial equator, when day and night are of approximately equal length (about 22 September and 20 March).</em> Momento o fecha del año (dos veces al año) en el que el Sol cruza el ecuador celeste, haciendo que el día y la noche tengan aproximadamente la misma duración. Ocurre alrededor del 20 de marzo y del 22 de septiembre.',
    },
    {
      termino: '<em>Job</em> / Trabajo',
      significado:
        '<em>it is a regular remunerative position.</em> Es una ocupación o empleo remunerado que una persona desempeña de manera regular.',
    },
    {
      termino: '<em>Position</em> / Cargo',
      significado:
        '<em>in the context of human resources, it is an employment for which one has been hired. Example: I have been contracted as a receptionist.</em> En el contexto de los recursos humanos, es el puesto de trabajo para el cual una persona ha sido contratada. Ejemplo: He sido contratado como recepcionista.',
    },
    {
      termino: '<em>Solstice</em> / Solsiticio',
      significado:
        '<em>the time or date (twice each year) at which the sun reaches its maximum or minimum declination, marked by the longest and shortest days (about 21 June and 22 December).</em> Momento o fecha del año (dos veces al año) en el que el Sol alcanza su máxima o mínima declinación, dando lugar al día más largo y al día más corto del año. Ocurre alrededor del 21 de junio y del 22 de diciembre.',
    },
  ],
  referencias: [
    {
      referencia:
        'Martin, J. (1990). <em>Miss Manners’ Guide for the Turn-of-the-Millennium</em>. Touchstone.',
    },
    {
      referencia:
        'Merriam-Webster Dictionary. (s. f.). <em>equinox</em>. <em>The Merriam-Webster.Com Dictionary</em>.',
      link: 'https://www.merriam-webster.com/dictionary/equinox#note-1',
    },
    {
      referencia:
        'Sila Inglés. (2021). Lista de países en inglés-español (con pronunciación y PDF). Aprende Inglés Sila.',
      link:
        'https://www.aprendeinglessila.com/2014/01/lista-de-paises-en-ingles-espanol-con-pronunciacion-y-pdf-para-imprimir/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Harbey Castelblanco',
          cargo: 'Experto temático',
          centro: 'Centro Nacional Colombo Alemán',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñadora web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validadora y vinculadora de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
