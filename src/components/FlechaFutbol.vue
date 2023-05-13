<template>
  <i
    class="flecha"
    :class="{
      'flecha-espejo': this.espejo,
      'flecha-verde': this.verde,
      'flecha-roja': this.roja,
    }"
  ></i>
</template>

<script>
export default {
  name: "FlechaFutbol",
  props: {
    verde: {
      type: Boolean,
      default: true,
    },
    roja: {
      type: Boolean,
      default: false,
    },
    espejo: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.flecha {
  display: inline-block;
  position: relative;
  width: 18px;
  height: 18px;
  left: 0px;
  background-size: contain;
}

.flecha-verde {
  background-image: url(../assets/flecha-verde.svg);
  bottom: -3.5px;
}

.flecha-roja {
  background-image: url(../assets/flecha-roja.svg);
  bottom: -4px;
}

.flecha-espejo {
  left: -2px;
}
</style>