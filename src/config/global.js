export default {
  global: {
    componenteFormativo: 'Toma de la muestra',
    descripcionCurso:
      'Uno de los elementos más importantes en los programas del control del agua, es la recolección de muestras, cuyo objetivo primordial es compilar datos reales de las características químicas, físicas, radiológicas, biológicas y microbiológicas de una determinada porción de agua, y con esto determinar su calidad e identificar qué elementos la componen para finalmente establecer su apta utilización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Variables en la estadística',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Medidas de tendencia central',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Medidas de dispersión',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistemas de unidades',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Medición, masa y volumen',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conceptos generales de masa y peso',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Conceptos generales de volumen',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Fichas de seguridad, manuales y calibración de equipos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Hojas de seguridad de productos químicos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Manual de operación de equipos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Calibración de equipos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Preparación de soluciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Disoluciones',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Diluciones',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Realización del muestreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Localización del muestreo',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Frecuencia del muestreo',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Alistamiento de materiales e insumos',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Recolección de muestras',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Medición de parámetros de campo',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Rotulado del muestreo',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '4. Fichas técnicas, manuales y calibración de equipos',
      referencia:
        'Centro de Gestión Industrial. (2020). Servicio Nacional de Aprendizaje SENA. Ficha de seguridad del ácido sulfúrico',
      tipo: 'Ficha de seguridad',
      descarga: '/downloads/Ficha_de_Seguridad_Acido_Sulfurico.pdf',
    },
    {
      tema: '6. Realización de muestreo',
      referencia:
        'Centro de Gestión Industrial. (2020). Servicio Nacional de Aprendizaje SENA. Práctica de laboratorio. Alistamiento y esterilización de materiales para el muestreo de agua para análisis microbiológico.',
      tipo: 'Práctica de laboratorio Alistamiento microbiológico',
      descarga:
        '/downloads/Practica_de_Laboratorio_Alistamiento_de_Materiales_para_Muestreo.pdf',
    },
    {
      tema: '6. Realización de muestreo',
      referencia:
        'Centro de Gestión Industrial. (2020). Servicio Nacional de Aprendizaje SENA. Propuesta de práctica de laboratorio.',
      tipo: 'Práctica de laboratorio Instrumentación',
      descarga:
        '/downloads/Practica_de_Laboratorio_Reconocimiento_de_Material_de_Laboratorio.pdf',
    },
    {
      tema: '6. Realización de muestreo',
      referencia:
        'Centro de Gestión Industrial. (2020). Servicio Nacional de Aprendizaje SENA. Propuesta de práctica de laboratorio.',
      tipo: 'Práctica de laboratorio soluciones',
      descarga: '/downloads/Practica_Laboratorio_Soluciones.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Análisis físico y químico del agua',
      significado:
        'son aquellos procedimientos de laboratorio que se efectúan a una muestra de agua para evaluar sus características físicas, químicas o ambas (Resolución 2115, 2007, p.1).',
    },
    {
      termino: 'Cadena de custodia',
      significado:
        'proceso por medio del cual se mantiene una muestra bajo posesión física o control durante su ciclo de vida completo, es decir, desde que se toma hasta que se desecha.  (INS, 2011, p.9).',
    },
    {
      termino: 'Muestra',
      significado:
        'toma puntual de agua en los puntos de muestreo concertados, que refleja la composición física, química y microbiológica representativa del momento, para el proceso de vigilancia de la Autoridad Sanitaria (INS, 2011, p.9).',
    },
    {
      termino: 'Muestreo',
      significado:
        'proceso de toma de muestras que son analizadas en laboratorios para obtener información sobre la calidad del agua del sitio concertado en que fueron tomadas (INS, 2011, p.9).',
    },
    {
      termino: 'Parámetro',
      significado:
        'variable que, en una familia de elementos, sirve para identificar cada uno de ellos mediante su valor numérico. (Decreto 1076/2015).',
    },
    {
      termino: 'Potabilización',
      significado:
        'el agua es una sustancia que se rehúsa de forma constante; “es reciclada por el ciclo hidrológico”. La potabilización es un proceso mediante el cual el agua se convierte en apta para el consumo humano, liberándola de tóxicos y patógenos que podrían causar daños a la salubridad. La potabilización del agua es un asunto que siempre ha ocupado a las civilizaciones humanas, pero que adquiere nuevos desafíos en la era contemporánea, si se tiene en cuenta la contaminación de las fuentes hídricas debido al actual desarrollo económico, así como al acelerado aumento de la población mundial. Este proceso de potabilización consta de varias etapas y su grado de complejidad varía según la técnica utilizada: puede hacerse uso de plantas de tratamiento o de otras tecnologías “que van desde el simple desbaste o filtración gruesa, los filtros de arena y la desinfección, hasta procesos químicos y mecánicos de gran complejidad”. (Casero Rodríguez, 2010 - Potabilización del agua).',
    },
    {
      termino: 'Río',
      significado:
        'corriente de agua de grandes dimensiones que sirve de canal natural en una cuenca de drenaje (IDEAM, sf).',
    },
  ],
  referencias: [
    {
      referencia:
        'Alsina, D., Cagnola, E., Güemes, R., Noseda, J. y Odetti, H. (2015). Química, conceptos fundamentales.',
      link:
        'http://www.unl.edu.ar/ingreso/cursos/quimica/wp-content/uploads/sites/4/2016/09/quimica_20140911_07_anexo.pdf',
    },
    {
      referencia:
        'BRAND GMBH + CO KG. (2015). Información sobre la medición del volumen.',
      link:
        'https://www.brand.de/fileadmin/user/pdf/Information_Vol/Brochuere_Volumenmessung_ES.pdf',
    },
    {
      referencia: 'Chang, R. (2002). Química, séptima edición. Mc Graw Hill.',
    },
    {
      referencia:
        'Cova, V. (2018). Físico-química biológica. Universidad Nacional del Litoral.',
      link:
        'http://www.unl.edu.ar/ingreso/cursos/medicina/wp-content/uploads/sites/8/2017/10/Quimica_05.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (2004). Guía técnica colombiana [GTC] 100. Guía para los procedimientos de cadena de custodia de muestras.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (2017). Norma técnica colombiana [NTC] 17025 Requisitos generales para la competencia de los laboratorios de ensayo y calibración.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (1998). Norma técnica colombiana [NTC] 4532. Transporte de mercancías, tarjetas de emergencia para transporte de materiales, elaboración.',
      link:
        'https://web.mintransporte.gov.co/consultas/mercapeli/Reglamento/Anexos/NTC4435.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (1996). Norma técnica colombiana [NTC] 5667-6. Guía para el muestreo de aguas de ríos y corrientes. Editada 2003.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (2008). Norma técnica colombiana [NTC] 5667-5. Directrices para el muestreo de agua potable de instalaciones de tratamiento y sistemas de distribución por tubería.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (1998). Norma técnica colombiana [NTC] 4435. Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos y se dictan otras disposiciones en materia de seguridad química.',
      link:
        'https://web.mintransporte.gov.co/consultas/mercapeli/Reglamento/Anexos/NTC4532.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Tecnología Agropecuaria [INTA]. (2011). Protocolo de Muestreo, Transporte y Conservación de Muestras de Agua con Fines Múltiples.',
      link:
        'https://inta.gob.ar/sites/default/files/script-tmp-protocolo_de_muestreo_de_aguas_inta.pdf',
    },
    {
      referencia:
        'Instituto de investigaciones marinas y costeras [INVEMAR]. (2003). Manual de técnicas analíticas para la determinación de parámetros fisicoquímicos y contaminantes marinos. Aguas sedimentos y organismos. Cargraphics- Impresión digital.',
      link:
        'http://www.invemar.org.co/redcostera1/invemar/docs/7010manualTecnicasanaliticas..pdf',
    },
    {
      referencia:
        'Ministerio de trabajo [MinTrabajo]. (2018). Decreto 1496 de 2018. Por el cual se crea Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos y se dictan otras disposiciones en materia de seguridad química.',
      link:
        'http://es.presidencia.gov.co/normativa/normativa/DECRETO%201496%20DEL%2006%20DE%20AGOSTO%20DE%202018.pdf',
    },
    {
      referencia:
        'Mott, R. (2006). Mecánica de fluidos. Sexta edición. Pearson Education.',
    },
    {
      referencia:
        'Nava, H., Pezet, F., Mendoza, J., y Hernández, I. (2001). El sistema internacional de unidades. Centro Nacional de Metrología [CENAM].',
    },
    {
      referencia:
        'Organización Mundial de la Salud [OMS]. (2005). Manual de mantenimiento para equipos de laboratorio. ISBN 92 75 32590 1.',
    },
    {
      referencia:
        'Organización de las naciones unidas para el desarrollo industrial [ONUDI]. (2020). Guía para la elaboración de fichas de datos de seguridad (FDS). Según el sistema globalmente armonizado de clasificación y etiquetado de productos químicos (SGA). ISBN 978-058-598529-6.Editores  gráficos Colombia S.A.S.',
      link:
        'https://www.icontec.org/wp-content/uploads/2020/03/Onudi-Colombia_Digital_02_compressed.pdf',
    },
    {
      referencia:
        'Ortiz, J. (2011). Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio. Instituto Nacional de Salud.',
    },
    {
      referencia:
        'Petrucci, R., Herring, F., Madura, J.y Bissonnette, C. (2018) Química general. Undécima edición. Pearson Educación S.A.',
    },
    {
      referencia:
        'Salazar, C. y Castillo, S. (2018). Fundamentos básicos de estadística.',
      link:
        'http://www.dspace.uce.edu.ec/bitstream/25000/13720/3/Fundamentos%20B%C3%A1sicos%20de%20Estad%C3%ADstica-Libro.pdf',
    },
    {
      referencia:
        'Universidad Tecnológica de Pereira. (2019). Procedimiento para manejo de equipos.',
      link: 'http://app4.utp.edu.co/calidad_bibi/ver/?iddoc=11060&tipo=1915',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora Ambiental',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Lubin Andrés Hernández Sanabria',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Jesús Ricardo Arias Munevar',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Javier Ricardo Luna Pineda',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de diseño y metrología',
        },
        {
          nombre: 'Rafael Neftali Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro: 'Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Martha Isabel Martínez Vargas',
          cargo: 'Productora audiovisual',
          centro: 'Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuador Instruccional',
          centro:
            'Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor metodológico',
          centro:
            'Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
