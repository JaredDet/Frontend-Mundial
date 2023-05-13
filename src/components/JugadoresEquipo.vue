<template>
  <div class="jugadores equipo-{{equipo}}">
    <div v-if="nombre === 'portero'" class="jugador">
      <span class="dorsal">{{ jugadores.dorsal }}</span>
      <span class="nombre">{{ jugadores.nombre }}</span>
    </div>
    <div
      v-else
      v-for="(jugador, index) in jugadores"
      :key="index"
      class="jugador"
    >
      <span class="dorsal">{{ jugador.dorsal }}</span>
      <span class="nombre">{{ jugador.nombre }}</span>
      <span v-if="'gol' in jugador" class="gol-container">
        <PelotaFutbol></PelotaFutbol>
      </span>
      <span v-if="salio(jugador)" class="flecha-container">
        <FlechaFutbol :roja=true></FlechaFutbol>
      </span>
      <span v-if="tieneTarjetas(jugador)" class="jugador-container-tarjeta">
        <TarjetaFutbol :jugador="jugador" :espejo="true"> </TarjetaFutbol>
      </span>
    </div>
  </div>
</template>

<script>
import PelotaFutbol from "./PelotaFutbol.vue";
import TarjetaFutbol from "./TarjetaFutbol.vue";
import FlechaFutbol from './FlechaFutbol.vue';

export default {
  components: {
    PelotaFutbol,
    TarjetaFutbol,
    FlechaFutbol,
  },
  props: {
    nombre: String,
    equipo: String,
    jugadores: {
      type: [Array, Object],
      required: true,
    },
  },
  methods: {
    salio(jugador) {
      return "salio" in jugador;
    },
    tieneTarjetas(jugador) {
      return "tarjetaAmarilla" in jugador || "tarjetaRoja" in jugador;
    },
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
}

.jugador {
  position: relative;
  z-index: 10;
  width: 2.2vw;
  height: 2.2vw;
  border-radius: 50%;
  border: 0.15vw solid white;
  line-height: 0;
}

.jugador .dorsal {
  position: absolute;
  top: 55%;
  left: 48%;
  transform: translate(-50%, -50%);
  font-size: 1.4vw;
}

.jugador .nombre {
  z-index: 10;
  position: absolute;
  bottom: -45%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.9vw;
  white-space: nowrap;
}

.gol-container {
  position: absolute;
  left: -12px;
  bottom: -9.5px;
}

.flecha-container {
  display: inline-block;
  position: relative;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 20px;
  right: -15px;
  top: 20px;
}

.flecha-roja {
  bottom: -1px;
  height: 12px;
  width: 12px;
}

.jugador-container-tarjeta {
  position: absolute;
  top: -2.5px;
  right: -15px;
}

</style>