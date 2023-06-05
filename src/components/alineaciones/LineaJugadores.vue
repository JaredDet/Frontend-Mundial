<template>
  <div class="jugadores" :class="{ 'no-invertir': noInvertir }">
    <AreaJugador v-if="portero" :jugador="portero"></AreaJugador>
    <AreaJugador
      v-for="(jugador, index) in jugadores"
      :jugador="jugador"
      :key="index"
      
    ></AreaJugador>
  </div>
</template>

<script>
import AreaJugador from "./AreaJugador.vue";

export default {
  name: "LineaJugadores",
  components: {
    AreaJugador,
  },
  props: {
    jugadores: {
      type: Array,
      default: null,
    },
    portero: {
      type: Object,
      default: null,
    },
    noInvertir: {
        type: Boolean,
        default: false,
    }
  },
};
</script>

<style scoped>
.jugadores {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: fit-content;
  margin: 0 auto;
}

.equipo-local .jugador {
  background-color: #237cd5;
}

.no-invertir {
  transform: scaleX(-1);
}

</style>