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
        download: 'downloads/dist.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
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
