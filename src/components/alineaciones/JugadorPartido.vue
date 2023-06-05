<template>
  <div class="equipo">
    <span class="texto">Jugador del partido: </span>
    <AreaJugador :jugador="{ nombre: 'A. Robben', dorsal: 11 }"></AreaJugador>
    <EstrellaFutbol class="icono-estrella"></EstrellaFutbol>
  </div>
</template>

<script>
import EstrellaFutbol from "../EstrellaFutbol.vue";
import AreaJugador from "./AreaJugador.vue";

export default {
  name: "JugadorPartido",

  components: {
    EstrellaFutbol,
    AreaJugador,
  },
};
</script>

<style scoped>
.equipo {
  display: flex;
  margin-top: 42px;
}

.texto {
  height: 40px;
  font-size: 27px;
  margin-right: 20px;
  line-height: 40px;
  letter-spacing: -0.02rem;
}

.icono-estrella {
  position: relative;
  left: -7px;
  width: 15px;
  height: 15px;
}

.jugador {
  background-color: #237cd5;
}
</style>