<template>
  <div class="area-penal">
    <div class="linea-defensiva">
      <LineaJugadores :jugadores="defensas" :noInvertir="noInvertir"></LineaJugadores>
    </div>
    <div class="semicirculo"></div>
  </div>
</template>

<script>
import LineaJugadores from "./LineaJugadores.vue";

export default {
  name: "AreaDefensa",
  components: {
    LineaJugadores,
  },
  props: {
    defensas: {
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

.area-penal {
  position: absolute;
  z-index: 10;
  width: 30%;
  height: 65%;
  border: 2px solid white;
  top: 17%;
  left: 0;
  border-left: none;
}

.linea-defensiva {
  position: absolute;
  z-index: 10;
  width: 50%;
  height: 157%;
  top: -28%;
  left: 100%;
}

.semicirculo {
  position: absolute;
  z-index: 1;
  width: 60%;
  height: 33%;
  top: 33%;
  border: 2px solid white;
  border-radius: 50% 50% 50% 50%;
  clip-path: ellipse(50% 100% at 100% 50%);
  right: -27%;
}
</style>