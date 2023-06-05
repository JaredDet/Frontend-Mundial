<template>
  <div
    class="area-central"
    :style="`grid-template-columns: repeat(${numSecciones()}, 1fr)`"
    >

    <div class="medio-campo" v-if="hayJugadoresEnPosicion('medioCentroDefensivo')">
      <LineaJugadores :jugadores="medioCentroDefensivo" :noInvertir="noInvertir"></LineaJugadores>
    </div>

    <div class="medio-campo" v-if="hayJugadoresEnPosicion('medioCentro')">
      <LineaJugadores :jugadores="medioCentro" :noInvertir="noInvertir"></LineaJugadores>
    </div>

    <div class="medio-campo" v-if="hayJugadoresEnPosicion('medioCentroOfensivo')">
      <LineaJugadores :jugadores="medioCentroOfensivo" :noInvertir="noInvertir"></LineaJugadores>
    </div>
  </div>
</template>

<script>
import LineaJugadores from "./LineaJugadores.vue";

export default {
  name: "AreaMedioCampo",
  components: {
    LineaJugadores,
  },
  props: {
    medioCentroDefensivo: {
      type: Array,
      required: true,
    },
    medioCentro: {
      type: Array,
      required: true,
    },
    medioCentroOfensivo: {
      type: Array,
      required: true,
    },
    noInvertir: {
      type: Boolean,
      required: false,
    }
  },
  computed: {
    numSecciones() {
      return () => {
        let num = 0;
        if (this.hayJugadoresEnPosicion("medioCentroDefensivo")) {
          num++;
        }
        if (this.hayJugadoresEnPosicion("medioCentro")) {
          num++;
        }
        if (this.hayJugadoresEnPosicion("medioCentroOfensivo")) {
          num++;
        }
        return num;
      };
    },
    hayJugadoresEnPosicion() {
      return (posicion) => {
        return this[posicion] && this[posicion].length > 0;
      };
    },
  },
};
</script>

<style scoped>
.area-central {
  display: grid;
  width: 42%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 43%;
}

.medio-campo {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
</style>