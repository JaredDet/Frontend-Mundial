<template>
  <div class="ataque">
    <LineaJugadores :jugadores="delanteros" :noInvertir="noInvertir"></LineaJugadores>
  </div>
</template>

<script>
import LineaJugadores from "./LineaJugadores.vue";

export default {
  name: "AreaAtaque",
  components: {
    LineaJugadores,
  },
  props: {
    delanteros: {
      type: Array,
      required: true,
    },
    noInvertir: {
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style scoped>

.ataque {
  position: absolute;
  z-index: 1;
  width: 6.5%;
  height: 100%;
  top: 0%;
  left: 86%;
}
</style>