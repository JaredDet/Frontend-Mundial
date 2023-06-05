<template>
  <v-col :class="{ 'text-right': espejo }">
    <BanderaFutbol :pais="equipo.bandera" class="bandera"></BanderaFutbol>
    <span class="tecnico">{{ equipo.tecnico }}</span>
  </v-col>
</template>

<script>
import BanderaFutbol from "../BanderaFutbol.vue";

export default {
  name: "EquipoTecnico",

  components: {
    BanderaFutbol,
  },
  props: {
    equipo: {
      type: Object,
      required: true,
    },
    espejo: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.bandera {
  display: inline-block;
  border: 0.1rem solid white;
  font-size: 1.2rem;
  box-sizing: content-box;
  padding: 0.05rem;
  margin-bottom: 0.55rem;
  width: 1.33333333em;
  height: 1em;
}

.tecnico {
  display: block;
}
</style>