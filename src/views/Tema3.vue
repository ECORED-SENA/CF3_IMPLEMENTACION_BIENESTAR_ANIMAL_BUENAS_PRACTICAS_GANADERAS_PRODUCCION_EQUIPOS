<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Auditoría de certificación en Buenas Prácticas Ganaderas (BPG) para équidos
    .row.justify-content-center
      .col-lg-auto.mb-4.mb-lg-0.pe-lg-0
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width: 450px").m-auto
      .col-lg.bg-c2
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.mb-0 La certificación en Buenas Prácticas Ganaderas para predios con équidos constituye un proceso técnico y normativo liderado por el Instituto Colombiano Agropecuario (ICA). Su objetivo es verificar el cumplimiento de los requisitos establecidos en la Resolución ICA 00007953 de 2017, relacionados con sanidad, bioseguridad, bienestar animal, manejo de insumos, trazabilidad, entre otros. Esta auditoría es un paso fundamental para que el predio acceda al reconocimiento oficial como unidad productiva con BPG implementadas, lo que otorga ventajas en términos de inocuidad, trazabilidad, sostenibilidad y acceso a mercados.
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 Requisitos para solicitar la auditoría del ICA
    .row.align-items-center.mb-4
      .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        p Antes de solicitar una auditoría de certificación en Buenas Prácticas Ganaderas ante el ICA, el predio debe cumplir con una serie de condiciones previas que garanticen su preparación técnica, documental y operativa. Estos requisitos aseguran que el proceso de auditoría pueda realizarse de forma efectiva y objetiva.
        p.mb-0 en encabezados internos, siguiendo exactamente el estilo que vienes usando:
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img1.svg', style="width: 150px").m-auto
    .row.align-items-center
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img2.png', style="width: 380px").m-auto
      .col-lg-8(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="1. Registro del predio")
            .col-12
              p.mb-0 El predio debe estar registrado ante el ICA como unidad de producción primaria de équidos.
          .row(titulo="2. Implementación de las BPG para équidos")
            .col-12
              p El predio debe haber aplicado de forma integral las prácticas exigidas en:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Bioseguridad.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Sanidad animal.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Manejo de medicamentos.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Almacenamiento de insumos agropecuarios.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Alimentación y agua.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Identificación y trazabilidad.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Bienestar animal.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Manejo ambiental.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Capacitación del personal.
          .row(titulo="Documentación y registros obligatorios")
            .col-12
              p El predio debe contar con:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Protocolos documentados.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Procedimientos técnicos.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registros completos y actualizados según la normativa.
          .row(titulo="Cumplimiento de requisitos sanitarios")
            .col-12
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Disponer de un Plan Sanitario firmado por médico veterinario (Art. 7.1).
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Vacunaciones y desparasitaciones al día.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Control de enfermedades de notificación obligatoria.
          .row(titulo="Sistema de trazabilidad e identificación individual")
            .col-12
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Todos los animales deben tener una identificación única (chip, tatuaje o hierro).
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Mantener registros individuales y sanitarios actualizados.
    .row.align-items-center
      .col-lg-8(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Infraestructura adecuada")
            .col-12
              p Cumplimiento de los requisitos del Art. 5:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Áreas de cuarentena.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Infraestructura sanitaria.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Agua de calidad.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Delimitación del predio.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Áreas de almacenamiento.
          .row(titulo="Capacitación del personal")
            .col-12
              p El personal debe estar formado en:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Bienestar animal.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Bioseguridad.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Manejo sanitario.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Manipulación de insumos.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Seguridad ocupacional (Art. 13).
          .row(titulo="Solicitud formal al ICA")
            .col-12
              p.mb-0 Presentar la solicitud por escrito en el formato y canal establecidos por la entidad.
          .row(titulo="Listado de soportes documentales")
            .col-12
              p La solicitud debe incluir:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registros sanitarios y operativos.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Protocolos internos.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Certificaciones de vacunación.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Inventarios.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Procedimientos documentados.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img3.png', style="width: 380px").m-auto
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 Ruta hacia la certificación BPG para équidos
    .row.align-items-center.mb-4
      .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 La ruta de certificación incluye una serie de etapas técnicas y administrativas que deben cumplirse secuencialmente. Cada una de ellas permite al productor preparar, presentar y sostener el cumplimiento de los requisitos exigidos por el ICA.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img2.svg', style="width: 150px").m-auto
    .row.bg-c8
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1.p-4.shadow
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/img4.png', style="width: 400px").m-auto
                .col-lg-7
                  p #[b Diagnóstico inicial del predio]
                  p.mb-0 Aplicación de la lista de verificación oficial para evaluar el cumplimiento de la Resolución 7953 de 2017.
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/img5.png', style="width: 400px").m-auto
                .col-lg-7
                  p #[b Implementación de las BPG]
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Adecuación de infraestructura.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Señalización del predio.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Desarrollo del Plan Sanitario.
                    li.d-flex.mb-0
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Aplicación de procedimientos y protocolos.
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/img6.png', style="width: 400px").m-auto
                .col-lg-7
                  p #[b Documentación y registros]
                  p Elaboración de:
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Procedimientos técnicos por proceso.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Protocolos para situaciones críticas (cuarentena, emergencias, etc.).
                    li.d-flex.mb-0
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Formatos y registros obligatorios.
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/img7.png', style="width: 400px").m-auto
                .col-lg-7
                  p #[b Solicitud formal al ICA]
                  p.mb-0 Presentación de la solicitud junto con la documentación soporte y evidencia de cumplimiento.
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/img8.png', style="width: 400px").m-auto
                .col-lg-7
                  p #[b Auditoría técnica del ICA]
                  p Visita oficial para verificación de:
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Infraestructura y áreas del predio.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Registros y protocolos.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Trazabilidad e identificación de los animales.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Bienestar animal.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Cumplimiento sanitario.
                    li.d-flex.mb-0
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Capacitación del personal.
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/img9.png', style="width: 400px").m-auto
                .col-lg-7
                  p #[b Informe técnico y plan de mejora]
                  p.mb-0 En caso de encontrar no conformidades, el ICA emite un informe y plan de acciones correctivas.
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/img10.png', style="width: 400px").m-auto
                .col-lg-7
                  p #[b Verificación de acciones correctivas]
                  p.mb-0 El productor implementa los ajustes y solicita la visita de seguimiento.
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/img11.png', style="width: 400px").m-auto
                .col-lg-7
                  p #[b Otorgamiento del Certificado BPG para équidos]
                  p.mb-0 Si se cumplen los requisitos, el ICA emite el certificado, con validez de tres (3) años.
    Separador
    #t_3_3
    .titulo-segundo.color-acento-contenido
      h2 3.3 Concepto de la certificación
    .row.bg-c9
      .col-12
        .px-5
          .row.align-items-center.mb-4
            .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 El ICA realiza la evaluación final con base en los criterios establecidos en la Resolución ICA 7953 de 2017. Los requisitos se clasifican en tres tipos: fundamentales, mayores y menores. Cada uno tiene un peso técnico en el concepto final. Los tipos de criterios y porcentajes requeridos son:
            .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema3/img2.svg', style="width: 150px").m-auto
          .row.justify-content-center.mb-4
            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .p-4.bg-c10
                figure.mb-3
                  img(src='@/assets/curso/tema3/img3.svg', style="width: 150px").m-auto
                p.text-center #[b Fundamentales]
                p.text-center.mb-0 100 %
            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .p-4.bg-c10
                figure.mb-3
                  img(src='@/assets/curso/tema3/img3.svg', style="width: 150px").m-auto
                p.text-center #[b Mayores]
                p.text-center.mb-0 80 % o más
            .col-md-6.col-lg-4
              .p-4.bg-c10
                figure.mb-3
                  img(src='@/assets/curso/tema3/img3.svg', style="width: 150px").m-auto
                p.text-center #[b Menores]
                p.text-center.mb-0 60 % o más
          p.mb-4 A continuación, se presentan los conceptos que el ICA puede asignar durante la verificación oficial, junto con los criterios y plazos que determinan el avance hacia la certificación en Buenas Prácticas Ganaderas para équidos.
          .row.align-items-center.mb-4
            .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema3/img12.png', style="width: 380px").m-auto
            .col-lg-8(data-aos="fade-right")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
                .row(titulo="Aplazado")
                  .col-12
                    ul.lista-ul
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 No cumple el 100% de los criterios fundamentales.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 No alcanza el 80% en criterios mayores.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 No llega al 60% en criterios menores.
                    p #[b Plazo para corrección:]
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Máximo tres (3) meses para implementar acciones correctivas y solicitar nueva visita.
                      li.d-flex.mb-0
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 El ICA programará la verificación dentro de los 30 días hábiles siguientes a la solicitud.
                .row(titulo="Certificable")
                  .col-12
                    p Se otorga cuando el predio:
                    ul.lista-ul
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Cumple el 100% de los criterios fundamentales.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Cumple al menos el 80% de los criterios mayores.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Cumple mínimo el 60% de los criterios menores.
                    p.mb-0 En este caso, el ICA emite el Certificado de Buenas Prácticas Ganaderas para Predios de Producción Primaria de Équidos, con una vigencia de tres (3) años, conforme a la normativa vigente.
          .row
            .col-12
              .p-4.bg-c16
                .row.align-items-center.justify-content-center
                  .col-lg.mb-4.mb-lg-0
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/tema1/img61.svg', alt='', style='width: 80px').m-auto
                      .col-md
                        p.text-white.mb-0 #[b Anexo. Listado de puntos de control y criterios de cumplimiento]
                        p.text-white.mb-0 Se invita a consultar el documento Listado de Puntos de Control y Criterios de Cumplimiento - Resolución ICA 00007953 de 2017, el cual resume los requisitos sanitarios, de bioseguridad, bienestar animal y manejo de insumos para predios con équidos. Ofrece criterios claros y normativos útiles para el cumplimiento y la certificación oficial.
                  .col-auto
                    a.boton.boton--b(:href="obtenerLink('/downloads/Anexo_listado_de_puntos_de_control_y_criterios_de_cumplimiento.xlsx')" target="_blank")
                      span Realizar
                      i.fas.fa-download

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
