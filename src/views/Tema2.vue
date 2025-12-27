<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Procedimientos, procesos y registros obligatorios en Buenas Prácticas Ganaderas para équidos
    .row.justify-content-center
      .col-lg-auto.mb-4.mb-lg-0.pe-lg-0
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width: 450px").m-auto
      .col-lg.bg-c4
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.mb-0 En el marco de las Buenas Prácticas Ganaderas (BPG) para équidos, definidas en la Resolución ICA 00007953 de 2017, es indispensable comprender los conceptos de proceso, procedimiento, registro y protocolo, los cuales constituyen la base para garantizar la sanidad, bioseguridad, bienestar animal, inocuidad y trazabilidad exigidas por la normativa nacional. Estos elementos permiten estandarizar las actividades dentro de la unidad productiva equina, asegurar su correcta ejecución y generar evidencias verificables para la certificación en BPG por parte del ICA.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Proceso
    .row.align-items-center.mb-4
      .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 A continuación, se presenta un pódcast  que explica el concepto de proceso dentro del sistema de producción equina, ilustrando con ejemplos prácticos y su vinculación normativa según la Resolución 7953 de 2017.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.svg', style="width: 150px").m-auto
    .row.bg-c9
      .col-12
        .px-5
          .row.align-items-center
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c12
                .row.align-items-center
                  .col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema2/img2.svg', style="width: 230px").m-auto
                  .col-lg
                    p.text-white.fs-4.mb-1 #[b Pódcast]
                    .row
                      .col-12
                        .tarjeta
                          .tarjeta.bg-white
                            TarjetaAudio.color-acento-contenido(
                            texto="Procesos productivos en el sistema de producción equina"
                            :audio="require('@/assets/curso/tema2/Audio.mp3')"
                            @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
            .col-lg-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img2.png', style="width: 450px").m-auto
          Separador
          #t_2_2
          .titulo-segundo.color-acento-contenido
            h2 2.2 Procedimiento
          p.mb-4 Un procedimiento es la descripción técnica y detallada de cómo se ejecuta un proceso específico, incluyendo instrucciones paso a paso. Este debe indicar:
          .row.justify-content-center.mb-4
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c17
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema2/img3.svg', style="width: 100px").m-auto
                  .col-md
                    p.mb-0 #[b 01]
                    p.mb-0 Actividades a realizar.
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c17
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema2/img4.svg', style="width: 100px").m-auto
                  .col-md
                    p.mb-0 #[b 02]
                    p.mb-0 Responsable de cada acción.
            .col-md-6.col-lg-3.mb-4.mb-md-0
              .p-4.bg-c17
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema2/img5.svg', style="width: 100px").m-auto
                  .col-md
                    p.mb-0 #[b 03]
                    p.mb-0 Frecuencia y condiciones de ejecución.
            .col-md-6.col-lg-3
              .p-4.bg-c17
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema2/img6.svg', style="width: 100px").m-auto
                  .col-md
                    p.mb-0 #[b 04]
                    p.mb-0 Herramientas, materiales o insumos necesarios.
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p Según el Art. 5 y 6 de la Resolución ICA 7953 de 2017, los procedimientos deben estar documentados, disponibles y ser conocidos por todo el personal. Se aplican en áreas como:
              .row.justify-content-center.mb-3
                .col-lg-auto.mb-4.mb-lg-0.pe-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img7.svg', style="width: 140px").m-auto
                .col-lg.bg-c13
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        ul.lista-ul.mb-0
                          li.d-flex
                            i.fa-solid.fa-circle-right
                            |
                            p.mb-0 Limpieza y desinfección de instalaciones (Art. 6.2 - 6.3).
                          li.d-flex
                            i.fa-solid.fa-circle-right
                            |
                            p.mb-0 Cuarentena de animales nuevos (Art. 5.3).
                          li.d-flex
                            i.fa-solid.fa-circle-right
                            |
                            p.mb-0 Manejo de estiércol (Art. 6.4).
                          li.d-flex
                            i.fa-solid.fa-circle-right
                            |
                            p.mb-0 Uso y almacenamiento de medicamentos (Art. 8 y 9).
                          li.d-flex
                            i.fa-solid.fa-circle-right
                            |
                            p.mb-0 Control de plagas (Art. 6.5).
                          li.d-flex
                            i.fa-solid.fa-circle-right
                            |
                            p.mb-0 Manejo de alimentos, agua y condiciones ambientales (Art. 10 y 12).
                          li.d-flex
                            i.fa-solid.fa-circle-right
                            |
                            p.mb-0 Entrenamiento y jornadas de trabajo (Art. 12.6).
                          li.d-flex.mb-0
                            i.fa-solid.fa-circle-right
                            |
                            p.mb-0 Atención de animales enfermos o con dolor.
              p.mb-0 Un procedimiento bien definido reduce errores, mejora la eficiencia operativa y facilita el cumplimiento verificable de las BPG.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img3.png', style="width: 400px").m-auto
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Registro
    p.mb-4 Los registros son evidencias documentadas de que un procedimiento fue ejecutado de acuerdo con los lineamientos establecidos.
    .row.align-items-center
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img4.png', style="width: 300px").m-auto
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-left")
        AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Formatos habituales")
            .col-12
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Planillas físicas.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Bitácoras diarias.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Listas de chequeo.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Documentos digitales con respaldo impreso.
          .row(titulo="Funciones clave")
            .col-12
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Asegurar la trazabilidad de los procesos.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Facilitar auditorías del ICA.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Monitorear avances y generar mejora continua.
          .row(titulo="Registros obligatorios según la Resolución ICA 7953")
            .col-12
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Sanidad: vacunas, diagnósticos, tratamientos, mortalidades (Art. 7.4 y 9.5).
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Bioseguridad: ingreso de animales, personas y vehículos (Art. 7.2).
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Medicamentos: dosis, fechas, lotes y tiempos de retiro (Art. 9.5).
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Alimentación y agua: calidad y condiciones de suministro.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Bienestar animal: condición corporal, trabajo diario y comportamiento (Art. 12.6).
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Saneamiento: limpieza, desinfección y control de vectores.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Inventarios: medicamentos, alimentos e insumos veterinarios (Art. 8.4).
        p.mb-0 La ausencia de registros es una no conformidad mayor. En el caso de medicamentos, puede ser clasificada como no conformidad fundamental.
    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido
      h2 2.4 Relación entre proceso, procedimiento y registro
    p.mb-4 La estructura exigida por la normativa es:
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Tabla 5.] Relación entre proceso, procedimiento y registro
    .tabla-a.color-acento-botones.mb-4
      table
        thead
          tr
            th Elemento
            th Descripción
            th Ejemplo
        tbody.bg-white
          tr
            td.txt-p1 Proceso
            td.txt-p1 Actividad general
            td.txt-p1 Limpieza de pesebreras.
          tr
            td.txt-p1 Procedimiento
            td.txt-p1 Cómo se ejecuta
            td.txt-p1 Instrucciones detalladas: frecuencia, insumos, responsable.
          tr
            td.txt-p1 Registro
            td.txt-p1 Evidencia de ejecución
            td.txt-p1 Planilla de limpieza diaria firmada.
    .row
      .col-12
        .p-4.bg-c18
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img6.svg', style="width: 100px").m-auto
            .col-md
              p.mb-0 Este encadenamiento garantiza trazabilidad técnica, permite la evaluación y es obligatorio para la certificación.
    Separador
    #t_2_5
    .titulo-segundo.color-acento-contenido
      h2 2.5 Protocolo
    p.mb-4 Un protocolo es un documento técnico que define acciones específicas para situaciones especiales o críticas en la unidad productiva. A diferencia del procedimiento (que aplica a la rutina diaria), el protocolo se activa ante condiciones excepcionales o riesgos sanitarios.
    TabsB.color-primario
      .p-4.p-md-5(titulo="Aplicaciones frecuentes" :icono="require('@/assets/curso/tema1/img32.svg')")
        .row.justify-content-center
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img5.png', style="width: 400px").m-auto
          .col-lg-5
            p #[b Aplicaciones frecuentes]
            ul.lista-ul.mb-0
              li.d-flex
                i.fa-solid.fa-circle-right
                |
                p.mb-0 Cuarentena de animales recién ingresados (Art. 5.3).
              li.d-flex
                i.fa-solid.fa-circle-right
                |
                p.mb-0 Manejo de brotes sanitarios o signos de enfermedades de control oficial.
              li.d-flex
                i.fa-solid.fa-circle-right
                |
                p.mb-0 Manejo de animales con agresividad o ansiedad.
              li.d-flex
                i.fa-solid.fa-circle-right
                |
                p.mb-0 Emergencias clínicas: cólico, fractura, trauma grave.
              li.d-flex
                i.fa-solid.fa-circle-right
                |
                p.mb-0 Desinfección durante alertas sanitarias del ICA.
              li.d-flex.mb-0
                i.fa-solid.fa-circle-right
                |
                p.mb-0 Manejo seguro en el embarque, transporte o descarga.
      .p-4.p-md-5(titulo="Exigencia normativa" :icono="require('@/assets/curso/tema1/img32.svg')")
        .row.justify-content-center
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img6.png', style="width: 400px").m-auto
          .col-lg-5
            p #[b Exigencia normativa]
            p La Resolución ICA 7953 requiere que estos protocolos estén:
            ul.lista-ul.mb-0
              li.d-flex
                i.fa-solid.fa-circle-right
                |
                p.mb-0 Disponibles y actualizados.
              li.d-flex
                i.fa-solid.fa-circle-right
                |
                p.mb-0 Socializados con el personal.
              li.d-flex.mb-0
                i.fa-solid.fa-circle-right
                |
                p.mb-0 Ubicados en zonas visibles de trabajo.
    Separador
    #t_2_6
    .titulo-segundo.color-acento-contenido
      h2 2.6 Estructura de un protocolo
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Todo protocolo debe seguir una estructura clara y funcional:
        .row.justify-content-center.mb-3
          .col-lg-auto.mb-4.mb-lg-0.pe-lg-0
            figure
              img(src='@/assets/curso/tema2/img8.svg', style="width: 140px").m-auto
          .col-lg.bg-c13
            .row.h-100.align-items-center
              .col-12
                .p-4
                  ol.lista-ol--cuadro.mb-0
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span a
                      |
                      p.mb-0 Objetivo.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span b
                      |
                      p.mb-0 Alcance (animales, personal, áreas).
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span c
                      |
                      p.mb-0 Responsables designados.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span d
                      |
                      p.mb-0 Materiales e insumos necesarios.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span e
                      |
                      p.mb-0 Pasos ordenados de ejecución.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span f
                      |
                      p.mb-0 Medidas obligatorias de bioseguridad.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span g
                      |
                      p.mb-0 Registros generados (bitácoras, listas, reportes).
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span h
                      |
                      p.mb-0 Evidencias fotográficas (cuando aplique).
                    li.d-flex.mb-0
                      .lista-ol--cuadro__vineta.v--green
                        span i
                      |
                      p.mb-0 Frecuencia de revisión y actualización.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img7.png', style="width: 400px").m-auto
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Protocolos básicos exigidos para équidos
    .row.bg-c9
      .col-12
        .px-5
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img8.png', style="width: 400px").m-auto
            .col-lg-8(data-aos="fade-left")
              p Este conjunto de protocolos reúne las acciones mínimas que debe aplicar el predio para garantizar bioseguridad, manejo adecuado y bienestar en todas las actividades relacionadas con los équidos.
              .row.justify-content-center
                .col-lg-auto.mb-4.mb-lg-0.pe-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img9.svg', style="width: 130px").m-auto
                .col-lg.bg-c2
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        ul.lista-ul.mb-0
                          li.d-flex
                            i.fa-solid.fa-circle-right
                            |
                            p.mb-0 Protocolo de cuarentena.
                          li.d-flex
                            i.fa-solid.fa-circle-right
                            |
                            p.mb-0 Protocolo de animales enfermos.
                          li.d-flex
                            i.fa-solid.fa-circle-right
                            |
                            p.mb-0 Protocolo de desinfección de herramientas.
                          li.d-flex
                            i.fa-solid.fa-circle-right
                            |
                            p.mb-0 Protocolo de manejo de estiércol.
                          li.d-flex
                            i.fa-solid.fa-circle-right
                            |
                            p.mb-0 Protocolo de control integrado de plagas.
                          li.d-flex
                            i.fa-solid.fa-circle-right
                            |
                            p.mb-0 Protocolo de movilización, embarque y transporte.
                          li.d-flex.mb-0
                            i.fa-solid.fa-circle-right
                            |
                            p.mb-0 Protocolo de herraje, recorte y revisión de cascos.
          Separador
          #t_2_7
          .titulo-segundo.color-acento-contenido
            h2 2.7 Tipos de procedimientos en Buenas Prácticas Ganaderas para équidos
          .row.align-items-center.mb-4
            .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 La implementación de las Buenas Prácticas Ganaderas (BPG) para équidos, conforme a la Resolución ICA 00007953 de 2017, exige la adopción de procedimientos escritos que estandaricen las actividades del predio, protejan la sanidad, la bioseguridad, la trazabilidad y garanticen el bienestar animal. Cada procedimiento debe:
            .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img1.svg', style="width: 150px").m-auto
          .row.justify-content-center.mb-4
            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .p-4.bg-c17
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema2/img10.svg', style="width: 100px").m-auto
                  .col-md
                    p.mb-0 #[b 01]
                    p.mb-0 Estar documentado.
            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .p-4.bg-c17
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema2/img11.svg', style="width: 100px").m-auto
                  .col-md
                    p.mb-0 #[b 02]
                    p.mb-0 Ser conocido por el personal.
            .col-md-6.col-lg-4
              .p-4.bg-c17
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema2/img12.svg', style="width: 100px").m-auto
                  .col-md
                    p.mb-0 #[b 03]
                    p.mb-0 Generar registros verificables.
          p.mb-4 A continuación, se describen los principales procedimientos obligatorios:
          .row.align-items-center
            .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img9.png', style="width: 380px").m-auto
            .col-lg-8(data-aos="fade-left")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
                .row(titulo="Procedimiento de rutina diaria de manejo y bienestar de los équidos")
                  .col-12
                    p Alcance: aplica a todos los équidos del predio.
                    p #[b Requisitos previos:]
                    ul.lista-ul
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Personal capacitado (Art. 13).
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Infraestructura adecuada (Art. 5 y 12).
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Agua potable permanente (Art. 10 y 12.1).
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Implementos en buen estado.
                    p #[b Pasos generales:]
                    ul.lista-ul
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Inspección diaria: condición corporal, heridas, cojeras y conducta.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Suministro de agua y alimento: disponibilidad y limpieza de comederos.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Limpieza de pesebreras: retiro de estiércol y renovación de cama.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Manejo de équidos de trabajo: límite de 8 horas o 60 km; verificación de lesiones.
                      li.d-flex.mb-0
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Registro: alimentación, trabajo, bienestar e incidencias.
                .row(titulo="Procedimiento del plan sanitario para équidos")
                  .col-12
                    p Alcance: equinos de todas las categorías (Art. 7 y 9).
                    p #[b Componentes mínimos:]
                    ul.lista-ul
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Vacunación: según plan veterinario, con registros detallados.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Desparasitación: interna y externa, con cronograma.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Control de enfermedades: vigilancia clínica y notificación al ICA.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Manejo clínico: diagnóstico y tratamiento por veterinario.
                      li.d-flex.mb-0
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Registros sanitarios: historia clínica individual actualizada.
                .row(titulo="Procedimiento para el manejo de animales enfermos")
                  .col-12
                    p Alcance: animales con signos clínicos.
                    p #[b Pasos:]
                    ul.lista-ul
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Detección: observación y reporte inmediato.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Aislamiento: traslado al área de enfermería (Art. 5.12).
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Diagnóstico y tratamiento: prescripción veterinaria (Art. 9).
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Bioseguridad: uso de EPP y desinfección de materiales.
                      li.d-flex.mb-0
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Registro: diagnóstico, tratamiento, evolución y destino.
                .row(titulo="Procedimiento para la compra e ingreso de nuevos équidos")
                  .col-12
                    p Alcance: toda adquisición de animales nuevos (Art. 5.4).
                    p #[b Etapas:]
                    ul.lista-ul
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Selección del proveedor: predios registrados ante el ICA.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Verificación documental: guía ICA y pruebas sanitarias.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Transporte: vehículo desinfectado y adecuado.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Cuarentena: mínimo 21 días (Art. 5.3).
                      li.d-flex.mb-0
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Registro: ficha individual y actualización del inventario.
    .row.align-items-center
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Procedimiento para el registro de ingreso de personas, animales y vehículos")
            .col-12
              p Alcance: todo ingreso al predio (Art. 7.2 y 7.3).
              p #[b Elementos clave:]
              ul.lista-ul
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Punto de control habilitado.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Libro de registro: nombre, fecha, motivo y hora.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Bioseguridad: pediluvios, EPP y desinfección.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Acompañamiento obligatorio dentro del predio.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro de salida: hora y observaciones.
          .row(titulo="Procedimiento de cuarentena para équidos")
            .col-12
              p Alcance: animales nuevos o sospechosos de enfermedad (Art. 5.3).
              p #[b Pasos:]
              ul.lista-ul
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Ingreso: identificación, procedencia y revisión veterinaria.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Manejo: alimentación y equipos separados; registro diario.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Salida: evaluación final y autorización escrita del veterinario.
          .row(titulo="Procedimientos de limpieza y desinfección de instalaciones, equipos e implementos")
            .col-12
              p Alcance: pesebreras, corrales, enfermería, zonas de alimentación y herramientas (Art. 6.2 a 6.5).
              p #[b Componentes:]
              ul.lista-ul
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Limpieza diaria: retiro de estiércol y manejo adecuado.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Desinfección periódica: según cronograma.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Comederos y bebederos: lavado frecuente.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Aperos e implementos: limpieza, secado y almacenamiento.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registros: planillas con fecha y responsable.
          .row(titulo="Procedimientos para el uso y manejo de medicamentos veterinarios y residuos")
            .col-12
              p Alcance: productos veterinarios y biológicos (Art. 8 y 9).
              p #[b Elementos clave:]
              ul.lista-ul
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Almacenamiento: botiquín bajo llave, separado de alimentos y plaguicidas.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Uso: solo productos con Registro ICA; prohibición de vencidos; prescripción obligatoria para antibióticos y medicamentos especiales.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro de tratamientos: completo y actualizado (Art. 9.5).
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Manejo de residuos: clasificación y disposición adecuada; cumplimiento de normativa ambiental (Art. 9.7 y 9.8).
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img10.png', style="width: 380px").m-auto
    Separador
    #t_2_8
    .titulo-segundo.color-acento-contenido
      h2 2.8 Modelos ajustados a BPG para équidos - Resolución ICA 7953 de 2017
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
        p La Resolución ICA 00007953 de 2017 no impone formatos únicos ni obligatorios para la elaboración de procedimientos, protocolos o planes operativos internos. Sin embargo, sí exige que cada unidad productiva documente estos elementos de forma clara, aplicable y técnica, evidenciando el cumplimiento de los requisitos en sanidad, bioseguridad, manejo, bienestar animal y trazabilidad.
        .row.justify-content-center
          .col-lg-auto.mb-4.mb-lg-0.pe-lg-0
            figure
              img(src='@/assets/curso/tema2/img13.svg', style="width: 130px").m-auto
          .col-lg.bg-c2
            .row.h-100.align-items-center
              .col-12
                .p-4
                  p Un protocolo técnico debe cumplir con las siguientes características:
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Estar redactado de manera clara y coherente.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Ser aplicable en la realidad operativa del predio.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Establecer responsables de cada actividad.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Generar registros verificables.
                    li.d-flex.mb-0
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Permitir evaluar el cumplimiento de requisitos normativos.
      .col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img11.png', style="width: 400px").m-auto
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Protocolos recomendados en unidades productivas de équidos
    p.mb-4 A continuación se detallan los protocolos más utilizados en predios dedicados a la cría, manejo, reproducción, trabajo o deporte con équidos:
    .row.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img12.png', style="width: 380px").m-auto
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Protocolo de bioseguridad para la unidad productiva")
            .col-12
              p Contenidos mínimos:
              ul.lista-ul
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Control de ingreso y salida de personas, animales y vehículos.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Uso obligatorio de pediluvios y rodaluvios.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Documentación sanitaria de animales nuevos.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Restricción del contacto entre animales externos y residentes.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Limpieza y desinfección regular de áreas y herramientas.
              p.mb-0 Referencia normativa: Artículos 5, 7 y 8 de la Resolución 7953 de 2017.
          .row(titulo="Protocolo de limpieza y desinfección de instalaciones")
            .col-12
              p #[b Aplica a:]
              ul.lista-ul
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Pesebreras.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Corrales.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Áreas de enfermería.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Comederos y bebederos.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Almacenes e instalaciones de insumos.
              p #[b Debe especificar:]
              ul.lista-ul
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Frecuencia de limpieza y desinfección.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Productos permitidos.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Responsables por actividad.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Formatos de registro.
              p.mb-0 #[b Referencia normativa: Artículos 6.2, 6.3, 6.4 y 8.2.]
          .row(titulo="Protocolo de manejo de residuos y mortalidades")
            .col-12
              p #[b Incluye:]
              ul.lista-ul
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Separación de residuos peligrosos, orgánicos y reciclables.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Disposición final de envases de medicamentos y plaguicidas.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Manejo adecuado de estiércol, camas contaminadas y cadáveres.
              p.mb-0 Referencia normativa: Artículos 6.4, 9.7 y 9.8.
          .row(titulo="Debe contemplar")
            .col-12
              p #[b Incluye:]
              ul.lista-ul
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Esquemas de vacunación por riesgo zonal.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Programas de desparasitación interna y externa.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Medidas para control de enfermedades transmisibles.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro individual de tratamientos, diagnósticos y vacunas.
              p.mb-0 Referencia normativa: Artículos 7 y 9.
          .row(titulo="Protocolo de manejo de cuarentena")
            .col-12
              p #[b Aplicación:]
              ul.lista-ul
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Para animales nuevos que ingresan al predio o con sospecha clínica.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Debe contener:
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Área física separada e identificada.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Estancia mínima de 21 días.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Observación clínica diaria.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Evaluación final del médico veterinario para reintegración.
              p.mb-0 Referencia normativa: Artículo 5.3.
          .row(titulo="Protocolo de bienestar animal")
            .col-12
              p #[b Debe garantizar:]
              ul.lista-ul
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Acceso permanente a agua potable y alimentación adecuada.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Infraestructura cómoda y segura.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Manejo amable y contención segura.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Libertad para expresar comportamientos naturales.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Atención oportuna de heridas, lesiones o enfermedades.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Regulación del trabajo: máximo 8 horas diarias o 60 kilómetros de recorrido.
              p Incluye: registros de condición corporal, revisión de cascos, trabajo diario, rutinas de ejercicio y signos de dolor.
              p.mb-0 Referencia normativa: Artículo 12 de la Resolución 7953 de 2017 y Resolución 136 de 2020.
    .row
      .col-12
        .p-4.bg-c18
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img6.svg', style="width: 100px").m-auto
            .col-md
              p.mb-0 Estos modelos deben diseñarse de acuerdo con las condiciones y capacidades de cada predio, pero siempre deben contener lo necesario para demostrar cumplimiento durante la auditoría de certificación. La relación entre el procedimiento, el protocolo y el registro es clave para consolidar un sistema sólido de gestión en BPG para équidos.
    Separador
    #t_2_9
    .titulo-segundo.color-acento-contenido
      h2 2.9 Características de los procedimientos en BPG para équidos
    .row.align-items-center.mb-4
      .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 Cada procedimiento implementado dentro de las Buenas Prácticas Ganaderas (BPG) para équidos debe cumplir con criterios técnicos que garanticen su eficacia, trazabilidad y conformidad con la normatividad establecida por el ICA. A continuación, se detallan las características esenciales que debe cumplir todo procedimiento formal dentro de una unidad productiva de équidos:
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.svg', style="width: 150px").m-auto
    .row.bg-c8.mb-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1.p-4.shadow
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img13.png', style="width: 400px").m-auto
                .col-lg-7
                  p #[b Claridad]
                  p El procedimiento debe estar redactado de forma precisa, lógica y comprensible. Debe describir paso a paso cómo se ejecuta cada actividad operativa, tales como:
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Alimentación diaria.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Limpieza y desinfección de instalaciones.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Registro de tratamientos médicos.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Evaluación de condición corporal.
                    li.d-flex.mb-0
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Manejo durante trabajo o entrenamiento.
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img14.png', style="width: 400px").m-auto
                .col-lg-7
                  p #[b Especificación de responsables]
                  p Todo procedimiento debe asignar claramente:
                  ul.lista-ul
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Quién ejecuta cada tarea.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Quién supervisa su cumplimiento.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Qué personal genera los registros.
                  p.mb-0 Esto permite establecer trazabilidad y facilita la rendición de cuentas en auditorías.
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img15.png', style="width: 400px").m-auto
                .col-lg-7
                  p #[b Enfoque preventivo]
                  p El objetivo principal de las BPG es prevenir riesgos sanitarios, laborales y de bienestar. Los procedimientos deben evitar:
                  ul.lista-ul
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Aparición y propagación de enfermedades.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Accidentes del personal.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Estrés o sufrimiento animal.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Contaminación cruzada de insumos.
                    li.d-flex.mb-0
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Ingreso de patógenos externos al sistema productivo.
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img16.png', style="width: 400px").m-auto
                .col-lg-7
                  p #[b Orientación al bienestar animal]
                  p Todo procedimiento debe contribuir al cumplimiento de los principios de bienestar animal (Art. 12.1 a 12.6, Resolución ICA 7953 de 2017). Esto incluye:
                  ul.lista-ul
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Espacio suficiente, sombra y ventilación.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Manejo amable y cuidadoso.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Entrenamiento progresivo, sin coerción.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Tiempo adecuado de descanso.
                    li.d-flex.mb-0
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Identificación y control del dolor y malestar.
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img17.png', style="width: 400px").m-auto
                .col-lg-7
                  p #[b Generación de registros]
                  p Cada procedimiento debe tener un formato o planilla asociada. Estos documentos deben:
                  ul.lista-ul
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Ser diligenciados por el personal responsable.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Estar disponibles en físico o digital.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Ser verificables por el ICA.
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Servir como soporte técnico de la actividad realizada.
                  p.mb-0 La ausencia de registros constituye una no conformidad que afecta la certificación.
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img18.png', style="width: 400px").m-auto
                .col-lg-7
                  p #[b Alineación normativa]
                  p Todos los procedimientos deben estructurarse de acuerdo con la Resolución ICA 00007953 de 2017, incluyendo:
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Instalaciones y condiciones mínimas del predio (Cap. I).
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Manejo sanitario y vacunación (Cap. II).
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Bioseguridad y cuarentena (Cap. III).
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Higiene, limpieza y residuos (Cap. IV).
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Manejo de alimentación y agua (Cap. V).
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Uso y almacenamiento de medicamentos (Cap. VI).
                    li.d-flex
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Bienestar animal en trabajo, descanso y entrenamiento (Cap. VII).
                    li.d-flex.mb-0
                      i.fa-solid.fa-circle-right
                      |
                      p.mb-0 Capacitación y condiciones del personal (Cap. VIII).
    .row
      .col-12
        .p-4.bg-c18
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img6.svg', style="width: 100px").m-auto
            .col-md
              p.mb-0 Estas características aseguran que los procedimientos sean técnicamente válidos, operativamente funcionales y legalmente exigibles durante los procesos de verificación y certificación de BPG para équidos.
    .row.bg-c9.mb-4
      .col-12
        .px-5
          Separador
          #t_2_10
          .titulo-segundo.color-acento-contenido
            h2 2.10 Concepto y características de los registros
          .row.align-items-center.mb-4
            .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 En el contexto de las Buenas Prácticas Ganaderas (BPG) para équidos, los registros son documentos fundamentales que permiten comprobar la ejecución de las actividades conforme a los procedimientos establecidos y a la normativa oficial del ICA. Su existencia, conservación y disponibilidad son requisitos indispensables para garantizar la trazabilidad, la bioseguridad, el bienestar animal y la viabilidad de la certificación en BPG. Además de ser obligatorios, los registros constituyen herramientas clave para la toma de decisiones técnicas dentro de la unidad productiva.
            .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img14.svg', style="width: 150px").m-auto
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0
              .p-4.bg-c10
                figure.mb-3
                  img(src='@/assets/curso/tema2/img15.svg', style="width: 150px").m-auto
                p.text-center #[b Funciones principales]
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fa-solid.fa-circle-right
                    |
                    p.mb-0 Evidenciar cumplimiento normativo.
                  li.d-flex
                    i.fa-solid.fa-circle-right
                    |
                    p.mb-0 Facilitar auditorías del ICA.
                  li.d-flex
                    i.fa-solid.fa-circle-right
                    |
                    p.mb-0 Permitir trazabilidad individual del equino.
                  li.d-flex
                    i.fa-solid.fa-circle-right
                    |
                    p.mb-0 Soportar el plan sanitario.
                  li.d-flex
                    i.fa-solid.fa-circle-right
                    |
                    p.mb-0 Facilitar la toma de decisiones.
                  li.d-flex.mb-0
                    i.fa-solid.fa-circle-right
                    |
                    p.mb-0 Demostrar bienestar animal.
            .col-md-6
              .p-4.bg-c10
                figure.mb-3
                  img(src='@/assets/curso/tema2/img15.svg', style="width: 150px").m-auto
                p.text-center #[b Características de los registros]
                .row.justify-content-center
                  .col-auto
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Claros.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Precisos.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Legibles.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Cronológicos.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Disponibles ante auditoría.
                      li.d-flex
                        i.fa-solid.fa-circle-right
                        |
                        p.mb-0 Conservados por el tiempo mínimo exigido por el ICA.
          Separador
          #t_2_11
          .titulo-segundo.color-acento-contenido
            h2 2.11 Ejemplos de registros aplicados a BPG-équidos
          p Los registros deben adaptarse a las particularidades de la producción equina, documentando de forma clara y organizada todas las actividades críticas del predio. La Resolución ICA 7953 de 2017 exige, directa o indirectamente, el uso de diversos formatos que respalden procedimientos en sanidad, manejo, alimentación, bioseguridad, bienestar animal y administración. En esta sección se presentan ejemplos concretos de los registros aplicables, con base en la normatividad vigente y orientados a cumplir con los criterios de auditoría y certificación.
    .row.align-items-center
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img19.png', style="width: 380px").m-auto
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Registro de aplicación de medicamentos veterinarios (Art. 9.5)")
            .col-12
              p Contenido mínimo:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Fecha.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Identificación individual del equino.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Producto y registro ICA.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Lote.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Dosis y vía de administración.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Responsable.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Tiempo de retiro (si aplica para carne).
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Observaciones.
          .row(titulo="Registro de control de plagas y roedores (Art. 6.5)")
            .col-12
              p Incluye:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Fecha.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Área tratada.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Tipo de plaga.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Método de control.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Producto (con registro ICA).
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Concentración.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Responsable.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Resultados u observaciones.
          .row(titulo="Registro de manejo de potreros")
            .col-12
              p Incluye:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Rotación de potreros.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Descanso de praderas.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Acceso a agua y sombra.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Control de malezas y erosión.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Observaciones de bienestar.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Fechas de entrada y salida.
          .row(titulo="Registro de ingreso de personas y vehículos (Art. 7.2 y 7.3)")
            .col-12
              p Debe contener:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Fecha.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Nombre.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Identificación.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Motivo de visita.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Procedencia.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Placa del vehículo.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Áreas visitadas.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Medidas de bioseguridad aplicadas.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Firma.
    .row.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Registro de capacitación del personal (Art. 13)")
            .col-12
              p Incluye:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Nombre del trabajador.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Tema.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Fecha.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Nombre del capacitador.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Firma.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Evidencias.
          .row(titulo="Registro de ingreso y salida de animales")
            .col-12
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Tipo de evento (ingreso o salida).
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Fecha.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Identificación individual.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Procedencia o destino.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Motivo.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Guía Sanitaria ICA.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Firma del responsable.
          .row(titulo="Registro individual del equino")
            .col-12
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Identificación (chip, tatuaje, placa o hierro).
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Nombre, sexo y edad.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Propósito (trabajo, cría, deporte, reproducción o compañía).
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Historial sanitario y productivo.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Manejo de cascos y alimentación.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Observaciones de bienestar.
          .row(titulo="Registro de limpieza y desinfección de instalaciones (Art. 6.2 y 6.3)")
            .col-12
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Fecha.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Área limpiada.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Método.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Producto utilizado.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Responsable.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Observaciones.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img20.png', style="width: 380px").m-auto
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Tipos de registros
    .row.align-items-center
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img21.png', style="width: 380px").m-auto
      .col-lg-8(data-aos="fade-left")
        p Cada unidad productiva con équidos debe establecer un sistema de registros acorde a los lineamientos de la Resolución 7953 de 2017. Esta sección consolida los tipos de registros considerados esenciales para garantizar el cumplimiento técnico, legal y documental de las BPG en predios equinos. Su correcta implementación permite evidenciar el manejo responsable, mejorar la gestión del riesgo y cumplir con los estándares requeridos por el ICA para la obtención o mantenimiento de la certificación.
        .row
          .col-12
            .p-4.bg-c18
              p Listado de registros recomendados y obligatorios:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro de medicamentos veterinarios.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro sanitario y mortalidades.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro de control de plagas.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro de ingreso y salida de animales.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro de ingreso de personas y vehículos.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro de alimentación y agua.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro de trabajo diario (si los équidos realizan labores).
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro de bienestar animal.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro de capacitación del personal.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro de limpieza y desinfección de instalaciones.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro de inventario de insumos agropecuarios.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro de inventario de alimentos (Art. 8.4).
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro de cuarentena.
                li.d-flex
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro de accidentes o incidentes.
                li.d-flex.mb-0
                  i.fa-solid.fa-circle-right
                  |
                  p.mb-0 Registro del plan sanitario.


</template>

<script>
export default {
  name: 'Tema2',
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
