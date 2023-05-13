<template>
  <div v-if="jugadorTarjeta('tarjetaAmarilla')" class="tarjeta-container">
    <i
      class="tarjeta amarilla"
      :class="{ 'espejo tarjeta-amarilla-espejo': this.espejo }"
    ></i>
    <i
      v-if="jugadorTarjeta('tarjetaRoja')"
      class="tarjeta roja tarjeta-segunda"
      :class="{ 'espejo tarjeta-roja-espejo': this.espejo }"
    ></i>
  </div>
  <div v-else if="jugadorTarjeta('tarjetaRoja')" class="tarjeta-container">
    <i
      class="tarjeta roja"
      :class="{ 'espejo tarjeta-roja-espejo': this.espejo }"
    ></i>
  </div>
</template>

<script>
export default {
  name: "TarjetaFutbol",

  props: {
    jugador: {
      type: Object,
      required: true,
    },
    espejo: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    jugadorTarjeta(tipoTarjeta) {
      console.log(tipoTarjeta);
      console.log(tipoTarjeta in this.jugador);
      return tipoTarjeta in this.jugador;
    },
  },
};
</script>

<style>
.tarjeta-container {
  display: inline-block;
  position: relative;
  width: 18px;
  height: 18px;
  margin-right: 7px;
}

.tarjeta {
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 100%;
  margin-left: 5px;
  background-size: contain;
}

.amarilla {
  background-image: url(../assets/tarjeta-amarilla.svg);
  z-index: 1;
}

.roja {
  background-image: url(../assets/tarjeta-roja.svg);
  z-index: 10;
}

.espejo {
  right: 1px;
}

.tarjeta-amarilla-espejo {
  background-image: url(../assets/tarjeta-amarilla-espejo.svg);
  z-index: 1;
}

.tarjeta-roja-espejo {
  background-image: url(../assets/tarjeta-roja-espejo.svg);
  z-index: 10;
}

.tarjeta-segunda {
  top: -1.5px;
  right: -9px;
}

.tarjeta-segunda.espejo {
  right: -2px;
}
</style>