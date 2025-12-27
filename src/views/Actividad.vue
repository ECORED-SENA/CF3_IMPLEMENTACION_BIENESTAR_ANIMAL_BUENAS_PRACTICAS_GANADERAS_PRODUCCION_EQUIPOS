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
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave sobre la implementación, normativa, procedimientos, beneficios, criterios técnicos y auditoría de certificación en Buenas Prácticas Ganaderas (BPG) aplicadas a équidos en Colombia.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal función del plan de implementación en sistemas equinos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar la comercialización de animales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aplicar de forma técnica y verificable las normas de bienestar y BPG.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar campañas publicitarias de manejo animal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir al médico veterinario responsable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué resolución establece los requisitos técnicos para la certificación BPG en équidos en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resolución ICA 7953 de 2017.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Resolución ICA 20223040006915 de 2022.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resolución ICA 136 de 2020.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Resolución ICA 1195 de 2023.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Uno de los beneficios principales de implementar el plan de BPG es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mejora en el bienestar físico y emocional de los équidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducción de los costos legales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mayor competencia entre predios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incremento de la natalidad equina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué componente del diagnóstico inicial analiza la salud del hato y el plan sanitario?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Condición sanitaria.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Infraestructura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Manejo de personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluación ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué dimensión del plan se asocia con la gestión de residuos y protección de recursos naturales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambientalmente sostenible.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Económicamente viable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ético y legal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Productivamente eficiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué parámetro técnico se recomienda para evaluar la condición corporal del equino?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escala de 1 a 5 o de 1 a 9.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Frecuencia cardíaca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Peso exacto en kilogramos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rendimiento deportivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué elemento es obligatorio durante el ingreso de nuevos équidos al predio?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuarentena de mínimo 21 días.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Premio de bienvenida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Certificado de competencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vacunación contra la rabia solamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el objetivo de los protocolos escritos en el predio?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estandarizar acciones para situaciones especiales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir la inversión económica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar la supervisión del ICA.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el uso de registros físicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué registro obligatorio evidencia la aplicación de medicamentos veterinarios?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fecha, dosis, producto, identificación del animal, responsable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fecha, dosis, producto, identificación del animal, responsable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Control de visitas externas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluación de comportamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué porcentaje mínimo debe cumplirse en los criterios fundamentales para obtener la certificación BPG?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '100%',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '95%',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '90%',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '85%',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El plan de implementación es solo un requisito documental sin impacto práctico.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El bienestar animal incluye tanto el estado físico como emocional del equino.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Las Buenas Prácticas Ganaderas se aplican exclusivamente a caballos de carrera.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La ausencia de registros de medicamentos puede ser considerada una no conformidad fundamental.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Un predio que cumpla el 80% de criterios fundamentales puede ser certificado.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
