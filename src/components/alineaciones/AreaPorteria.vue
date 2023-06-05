<template>
  <div class="area-meta">
    <LineaJugadores :portero="portero" :noInvertir="noInvertir"></LineaJugadores>
  </div>
</template>

<script>
import LineaJugadores from "./LineaJugadores.vue";

export default {
  name: "AreaPorteria",
  components: {
    LineaJugadores,
  },
  props: {
    portero: {
      type: Object,
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

.area-meta {
  position: absolute;
  width: 14.5%;
  height: 30%;
  top: 50%;
  transform: translateY(-50%);
  border: 2px solid white;
  z-index: -1;
  border-left: none;
  left: 0%;
}

</style>