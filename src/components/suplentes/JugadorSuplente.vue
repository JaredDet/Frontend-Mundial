<template>
  <div class="jugador" :class="{ espejo: espejo }">
    <span class="dorsal" :class="{ espejo: espejo }">{{ jugador.dorsal }}</span>
    <span class="nombre">{{ jugador.nombre }}</span>

    <TarjetaFutbol
      v-if="tieneTarjetas(jugador)"
      :jugador="jugador"
      class="icono-tarjeta"
      :class="{ espejo: espejo }"
    >
    </TarjetaFutbol>
    <FlechaFutbol
      class="icono-flecha"
      v-if="entro(jugador)"
      :verde="jugador.entro"
      :class="{ espejo: espejo }"
    ></FlechaFutbol>
  </div>
</template>

<script>
import TarjetaFutbol from "../TarjetaFutbol.vue";
import FlechaFutbol from "../FlechaFutbol.vue";

export default {
  name: "JugadorSuplente",

  components: {
    TarjetaFutbol,
    FlechaFutbol,
  },
  props: {
    jugador: {
      type: Object,
      required: true,
    },
    espejo: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    tieneTarjetas(jugador) {
      return "tarjetaAmarilla" in jugador || "tarjetaRoja" in jugador;
    },
    entro(jugador) {
      return "entro" in jugador;
    },
  },
};
</script>

<style scoped>
.jugador {
  display: flex;
}

.dorsal {
  margin-right: 7px;
  width: 20px;
  text-align: center;
}

.nombre {
  white-space: nowrap;
}

.dorsal.espejo {
  margin-right: 0px;
  margin-left: 7px;
}

.icono-tarjeta {
  position: relative;
  width: 15px;
  height: 15px;
  left: 6px;
  bottom: -3px;
}

.icono-tarjeta.espejo {
  left: -4px;
}

.icono-flecha {
  position: relative;
  bottom: -5px;
  left: 7px;
  width: 12px;
  height: 12px;
}

.icono-flecha.espejo {
  left: -7px;
}

.jugador.espejo {
  flex-direction: row-reverse;
}
</style>  