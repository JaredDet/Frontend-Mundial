<template>
  <v-container class="contenedor">
    <span class="titulo">{{ titulo }}</span>
    <div class="contenedor-partido">
      <PartidoMiniatura
        v-for="(partido, index) in partidos"
        :key="index"
        class="dimensiones"
        :class="{
          'borde derecho': (index + 1) % 2 === 0,
          'borde izquierdo': (index + 1) % 2 !== 0,
        }"
        :partido="partido"
      ></PartidoMiniatura>
      <i v-if="partidos.length % 2 !== 0" class="dimensiones borde derecho"></i>
    </div>
  </v-container>
</template>

<script>
import PartidoMiniatura from "./PartidoMiniatura.vue";

export default {
  name: "InfoMiniatura",

  components: {
    PartidoMiniatura,
  },
  data() {
    return {
      partidos: [
        {
          local: { nombre: "Francia", bandera: "fr", goles: 0 },
          visita: { nombre: "Alemania", bandera: "de", goles: 1 },
          fase: "Cuartos de final",
        },
        {
          local: { nombre: "Brasil", bandera: "br", goles: 2 },
          visita: { nombre: "Colombia", bandera: "co", goles: 1 },
          fase: "Cuartos de final",
        },
        {
          local: { nombre: "Argentina", bandera: "ar", goles: 1 },
          visita: { nombre: "Bélgica", bandera: "be", goles: 0 },
          fase: "Cuartos de final",
        },
        {
          local: { nombre: "Países Bajos", bandera: "nl", goles: 0, penales: 2 },
          visita: { nombre: "Costa Rica", bandera: "cr", goles: 0, penales: 4 },
          fase: "Cuartos de final",
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>