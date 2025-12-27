export default {
  global: {
    Name:
      'Principios de las Buenas Prácticas Ganaderas en la gestión y manejo de équidos',
    Description:
      'El plan de implementación organiza de forma técnica y verificable todas las acciones necesarias para garantizar bienestar animal y Buenas Prácticas Ganaderas en équidos. Traduce la normativa en procedimientos aplicables, define responsabilidades, recursos y seguimiento, y fortalece sanidad, bioseguridad y manejo ético. Su aplicación mejora la operación, reduce riesgos y facilita auditorías y certificación del ICA.',
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
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
          'Plan de implementación de bienestar animal y buenas prácticas ganaderas en équidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Implementación en sistemas de producción equina: concepto general',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Objetivo del plan',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Beneficios de implementar el plan',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Elementos del plan de implementación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Objetivos específicos y metas',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Parámetros',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Metodologías de desarrollo y programación',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo:
              'Cronograma para la implementación de BPG y Bienestar Animal en équidos',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Lista de chequeo',
            hash: 't_1_9',
          },
          {
            numero: '1.10',
            titulo: 'Criterios de cumplimiento',
            hash: 't_1_10',
          },
          {
            numero: '1.11',
            titulo: 'Documentación',
            hash: 't_1_11',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Procedimientos, procesos y registros obligatorios en Buenas Prácticas Ganaderas para équidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Proceso',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Procedimiento',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Registro',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Relación entre proceso, procedimiento y registro',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Protocolo',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Estructura de un protocolo',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo:
              'Tipos de procedimientos en Buenas Prácticas Ganaderas para équidos',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo:
              'Modelos ajustados a BPG para équidos - Resolución ICA 7953 de 2017',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Características de los procedimientos en BPG para équidos',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Concepto y características de los registros',
            hash: 't_2_10',
          },
          {
            numero: '2.11',
            titulo: 'Ejemplos de registros aplicados a BPG-équidos',
            hash: 't_2_11',
          },
          {
            numero: '2.12',
            titulo: 'Tipos de registros',
            hash: 't_2_12',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Auditoría de certificación en Buenas Prácticas Ganaderas (BPG) para équidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Requisitos para solicitar la auditoría del ICA',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ruta hacia la certificación BPG para équidos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Concepto de la certificación',
            hash: 't_3_3',
          },
        ],
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
        download: 'downloads/CF03_DU.zip',
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
  complementario: [
    {
      tema: 'Implementación en sistemas de producción equina: concepto general',
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2017). <i>Resolución 07953 de 2017: Requisitos sanitarios y de bienestar animal para certificación en BPG en la producción primaria de équidos</i>.',
      tipo: 'Resolución oficial',
      link:
        'https://www.ica.gov.co/normatividad/normas-ica/resoluciones-oficinas-nacionales/2017/2017r7953',
    },
    {
      tema: 'Implementación en sistemas de producción equina: concepto general',
      referencia:
        'TvAgro. (2016). <i>Buenas Prácticas para la Producción y el cuidado de Equinos - TvAgro por Juan Gonzalo Angel</i>. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-S1yDxTIn5o',
    },
    {
      tema: 'Implementación en sistemas de producción equina: concepto general',
      referencia:
        'ICA. (2023). <i>Metodología para evaluar el bienestar animal en équidos</i>. ICA - FEDEQUINAS - World Horse Welfare.',
      tipo: 'Manual técnico oficial',
      link:
        'https://www.ica.gov.co/getattachment/Areas/Pecuaria/Servicios/Inocuidad-en-las-Cadenas-Agroalimentarias/Bienestar-Animal/Metodologia-de-Evaluacion-BA-en-equidos_V2_2024_7N.pdf.aspx',
    },
    {
      tema: 'Implementación en sistemas de producción equina: concepto general',
      referencia:
        'World Organisation for Animal Health. (2022). <i>Working Equids Welfare Chapter (Terrestrial Animal Health Code)</i>. WOAH.',
      tipo: 'Norma internacional',
      link:
        'https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/chapitre_aw_working_equids.pdf',
    },
    {
      tema: 'Metodologías de desarrollo y programación',
      referencia:
        'TvAgro. (2020). <i>Manejo Equino Instalaciones y Bienestar- TvAgro por Juan Gonzalo Angel Restrepo</i>. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Urdoq5QzsF0',
    },
    {
      tema: 'Lista de chequeo',
      referencia:
        'ICA. (s.f.). <i>Forma 3-1099. Lista de chequeo para predios en Buenas Prácticas Ganaderas en la producción de équidos</i>.',
      tipo: 'Lista de chequeo oficial',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias/listado-de-predios-certificados-en-bpg/forma-3-1099-lista-de-chequeo-de-predios-en-bpg-en.aspx',
    },
    {
      tema: 'Implementación en sistemas de producción equina: concepto general',
      referencia:
        'European Commission. (2015). <i>Guide to good animal welfare practice for the keeping, care, training and use of horses</i>.',
      tipo: 'Manual técnico',
      link:
        'https://food.ec.europa.eu/system/files/2022-07/aw_platform_plat-conc_guide_equidae_en.pdf',
    },
    {
      tema:
        'Procedimientos, procesos y registros obligatorios en Buenas Prácticas Ganaderas para équidos',
      referencia:
        'Food and Agriculture Organization - FAO. (2011). <i>The role, impact and welfare of working equids. FAO Animal Production and Health</i>.',
      tipo: 'Documento académico',
      link:
        'https://openknowledge.fao.org/server/api/core/bitstreams/0cd63cd8-d185-4d0c-bc6e-00d7eb65360c/content',
    },
    {
      tema:
        'Procedimientos, procesos y registros obligatorios en Buenas Prácticas Ganaderas para équidos',
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2020). <i>Manual de Bienestar Animal - Versión 1</i>. MADR.',
      tipo: 'Manual oficial',
      link:
        'https://www.minagricultura.gov.co/SIG/DocumentosSIG/12GESTION_DE_INNOVACION_DES_TECN_Y_PROTECCION_SANITARIA/Manual-de-bienestar-Animal-V1.pdf',
    },
    {
      tema:
        'Procedimientos, procesos y registros obligatorios en Buenas Prácticas Ganaderas para équidos',
      referencia:
        'FAO. (2001). <i>Guidelines for humane handling and management of livestock</i>.',
      tipo: 'Manual internacional',
      link:
        'https://www.fao.org/sustainable-food-value-chains/library/details/en/c/266014/',
    },
    {
      tema:
        'Procedimientos, procesos y registros obligatorios en Buenas Prácticas Ganaderas para équidos',
      referencia:
        'ICA. (2024). <i>Se evaluará el bienestar animal de los équidos en Colombia</i>. ICA Noticias.',
      tipo: 'Nota técnica',
      link:
        'https://www.ica.gov.co/noticias/se-evaluara-el-bienestar-animal-de-los-equidos-en',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'garantizar condiciones dignas de alojamiento, alimentación, salud, movilización y relación humano-animal, según las Cinco Libertades y los Cinco Dominios del bienestar.',
    },
    {
      termino: 'Sanidad animal',
      significado:
        'implementar un plan sanitario preventivo respaldado por un médico veterinario zootecnista, controlando enfermedades de importancia económica y zoonótica.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'aplicar protocolos que prevengan el ingreso, propagación o salida de agentes patógenos en la unidad productiva: cuarentena, higiene, control de vectores y manejo adecuado de residuos.',
    },
    {
      termino: 'Nutrición y alimentación segura',
      significado:
        'proveer forrajes y suplementos de calidad, agua limpia permanente, y dietas balanceadas según la edad, trabajo y condición corporal del animal.',
    },
    {
      termino: 'Trazabilidad y registros',
      significado:
        'documentar todos los eventos sanitarios, movimientos, tratamientos, cambios de propiedad y desempeño del equino para permitir auditorías y toma de decisiones técnicas.',
    },
    {
      termino: 'Sostenibilidad ambiental',
      significado:
        'manejar adecuadamente los residuos, proteger las fuentes de agua, reducir la contaminación y promover prácticas que no afecten los recursos naturales.',
    },
    {
      termino: 'Responsabilidad del personal',
      significado:
        'capacitar a los cuidadores en manejo amable, lectura del comportamiento y ejecución correcta de los POE (Procedimientos Operativos Estandarizados).',
    },
    {
      termino: 'Seguridad física y laboral',
      significado:
        'minimizar riesgos de accidentes mediante un manejo seguro de los animales e instalaciones en buen estado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2020). <i>Resolución 067449 de 2020 por la cual se establecen los requisitos sanitarios y de bioseguridad para las especies equinas en Colombia</i>. ICA.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal - OMSA. (2024). <i>Código sanitario para los animales terrestres: Capítulo de bienestar equino</i>. OMSA.',
      link: '',
    },
    {
      referencia:
        'Federación Ecuestre Internacional - FEI. (2023). <i>Equine welfare guidelines: Care and management of sport horses</i>. FEI Publications.',
      link: '',
    },
    {
      referencia:
        'Association for the Advancement of Animal Welfare - AAWS. (2022). <i>Guidelines for good animal husbandry practices in horses</i>. AAWS Publishing.',
      link: '',
    },
    {
      referencia:
        'National Research Council. (2007). <i>Nutrient requirements of horses (6th ed.)</i>. The National Academies Press.',
      link: '',
    },
    {
      referencia:
        'McGreevy, P. D., & McLean, A. (2018). <i>Equine behavior: A guide for veterinarians and equine scientists (3rd ed.)</i>. Elsevier.',
      link: '',
    },
    {
      referencia:
        'Radostits, O. M., Gay, C. C., Hinchcliff, K. W., & Constable, P. D. (2010). <i>Veterinary medicine: A textbook of the diseases of cattle, horses, sheep, pigs, and goats (10th ed.)</i>. Saunders.',
      link: '',
    },
    {
      referencia: 'Waran, N. (2017). <i>The welfare of horses</i>. Springer.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
