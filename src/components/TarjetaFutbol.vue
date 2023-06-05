<template>
  <img :src="obtenerRutaImagen()" />
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
    recta: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rutasImagenes() {
      return {
        roja: {
          normal: require("@/assets/tarjeta-roja.svg"),
          espejo: require("@/assets/tarjeta-roja-espejo.svg"),
          recta: require("@/assets/tarjeta-roja-recta.svg"),
        },
        amarilla: {
          normal: require("@/assets/tarjeta-amarilla.svg"),
          espejo: require("@/assets/tarjeta-amarilla-espejo.svg"),
          recta: require("@/assets/tarjeta-amarilla-recta.svg"),
        },
        doble: {
          normal: require("@/assets/tarjeta-doble.svg"),
          espejo: require("@/assets/tarjeta-doble-espejo.svg"),
        },
      };
    },
  },
  methods: {
    jugadorTarjeta(tipoTarjeta) {
      return tipoTarjeta in this.jugador;
    },
    obtenerRutaImagen() {
      const esRoja = this.jugadorTarjeta("tarjetaRoja");
      const esAmarilla = this.jugadorTarjeta("tarjetaAmarilla");
      const { amarilla, roja, doble } = this.rutasImagenes;

      if (esRoja && esAmarilla) {
        return this.espejo ? doble.espejo : doble.normal;
      }

      if (esRoja) {
        if (this.recta) {
          return roja.recta;
        }
        return this.espejo ? roja.espejo : roja.normal;
      }

      if (esAmarilla) {
        if (this.recta) {
          return amarilla.recta;
        }
        return this.espejo ? amarilla.espejo : amarilla.normal;
      }
    },
  },
};
</script>
