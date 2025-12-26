<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.pb-5
          .row.align-items-center
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/intro/img2.png", alt="", style="width: 300px").m-auto
            .col-lg-9(data-aos="fade-left")
              p Este plan constituye el eje operativo que organiza y articula las acciones necesarias para garantizar condiciones de bienestar animal y el cumplimiento de las Buenas Prácticas Ganaderas en unidades productivas que manejan équidos. Su finalidad es estructurar el trabajo diario mediante criterios técnicos verificables, alineados con la normatividad vigente y diseñados para mejorar las condiciones sanitarias, ambientales y productivas del predio. En este sentido, el plan permite que cada actividad, desde la alimentación hasta la bioseguridad, se ejecute de forma ordenada y con base en parámetros objetivos.
              .row.justify-content-center
                .col-lg.bg-c2.mb-4.mb-lg-0
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        p.mb-0 Además de orientar la operación, este instrumento traduce los requisitos legales en procedimientos claros y aplicables en el campo. Esto comprende la implementación de prácticas obligatorias relacionadas con sanidad, manejo hídrico, infraestructura, comportamiento animal, transporte, interacción humano-équido y manejo documental. La estructura del plan facilita la identificación de responsabilidades, la definición de recursos, la organización de cronogramas y la evaluación permanente del cumplimiento de los estándares establecidos por el ICA.
                .col-lg-auto.ps-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/intro/img3.png', style="width: 350px").m-auto
    .row.bg-c3
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/intro/img1.svg', style="width: 120px").m-auto
            .col-lg(data-aos="fade-left")
              p.mb-0 Su propósito no se limita a cumplir exigencias normativas; también busca mejorar la gestión interna de la unidad productiva, prevenir riesgos sanitarios, fortalecer la bioseguridad y promover un manejo ético y sostenible de los équidos. A través de este enfoque, el plan contribuye a que cada predio alcance un funcionamiento seguro, organizado y sustentado en evidencia técnica, garantizando un bienestar integral para caballos, asnos y mulas, y facilitando procesos de auditoría, certificación y mejora continua.

</template>

<script>
export default {
  name: 'Introduccion',
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
