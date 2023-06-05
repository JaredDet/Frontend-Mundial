<template>
  <img v-if="roja" :src="require('@/assets/flecha-roja.svg')" />
  <img v-else-if="verde" :src="require('@/assets/flecha-verde.svg')" />
  <img v-else-if="cambio" :src="require('@/assets/flecha-verde-roja.svg')" />
</template>

<script>
export default {
  name: "FlechaFutbol",
  props: {
    verde: {
      type: Boolean,
      required: false,
      default: false,
    },
    roja: {
      type: Boolean,
      required: false,

      default: false,
    },
    cambio: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
