<template>
  <div class="jugador">
    <span class="dorsal">{{ jugador.dorsal }}</span>
    <span class="nombre">{{ jugador.nombre }}</span>

    <TarjetaFutbol
      v-if="tieneTarjetas()"
      class="icono-tarjeta"
      :jugador="jugador"
    >
    </TarjetaFutbol>

    <PelotaFutbol v-if="anoto()" class="icono-pelota"> </PelotaFutbol>

    <BandaCapitanFutbol
      v-if="esCapitan()"
      class="icono-banda-capitan"
    ></BandaCapitanFutbol>

    <FlechaFutbol
      v-if="salio()"
      :roja="true"
      class="icono-flecha"
    ></FlechaFutbol>
  </div>
</template>

<script>
import PelotaFutbol from "../PelotaFutbol.vue";
import BandaCapitanFutbol from "./BandaCapitanFutbol.vue";
import TarjetaFutbol from "../TarjetaFutbol.vue";
import FlechaFutbol from "../FlechaFutbol.vue";

export default {
  name: "AreaJugador",

  components: {
    PelotaFutbol,
    BandaCapitanFutbol,
    TarjetaFutbol,
    FlechaFutbol,
  },
  props: {
    jugador: {
      type: Object,
      required: true,
    },
  },
  methods: {
    salio() {
      return "salio" in this.jugador;
    },
    tieneTarjetas() {
      return "tarjetaAmarilla" in this.jugador || "tarjetaRoja" in this.jugador;
    },
    esCapitan() {
      return "capitan" in this.jugador;
    },
    anoto() {
      return "gol" in this.jugador;
    },
  },
};
</script>

<style scoped>
.jugador {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid white;
}

.dorsal {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
}

.nombre {
  z-index: 10;
  position: absolute;
  bottom: -80%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  white-space: nowrap;
}

.icono-tarjeta {
  position: absolute;
  top: -10%;
  left: 93%;
  transform: translateX(-50%);
  width: 12.5px;
  height: 12.5px;
}

.icono-pelota {
  position: absolute;
  bottom: -10%;
  left: 0%;
  transform: translateX(-50%);
  width: 15.5px;
  height: 15.5px;
}

.icono-flecha {
  position: absolute;
  bottom: -8%;
  left: 100%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
}

.icono-banda-capitan {
  position: absolute;
  top: -5%;
  left: -20%;
  width: 12.5px;
  height: 12.5px;
}
</style>