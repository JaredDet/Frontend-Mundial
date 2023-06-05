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
  props: {
    partidos: {
      type: Array,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.contenedor-partido {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: dense;
  margin-top: 7px;
}

.titulo {
  position: relative;
  font-size: 1.5em;
  left: 15px;
}
.borde {
  border: 1px solid #2e2e2e;
  border-radius: 0;
}

.derecho {
  border-right: 0;
}

.izquierdo {
  border-left: 0;
}

.contenedor {
  width: 800px;
}

.dimensiones {
  height: 140px;
  width: 400px;
}
</style>