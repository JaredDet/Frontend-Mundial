<template>
  <img v-if="resultado === 'GANA'" :src="require('@/assets/tic.svg')" />
  <img v-else-if="resultado === 'PIERDE'" :src="require('@/assets/cruz.svg')" />
  <img v-else-if="resultado === 'EMPATE'" :src="require('@/assets/empate.svg')" />
  <img v-else :src="require('@/assets/no-jugado.svg')" />
</template>

<script>

export default {
  name: "ResultadoPartido",
  props: {
    resultado: {
      type: String,
      required: false,
      default: 'NO_JUGADO',
    },
  },
};
</script>
