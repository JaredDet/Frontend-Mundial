<template>
  <v-col class="text-center">
    <BanderaFutbol :pais="equipo.bandera" class="bandera"></BanderaFutbol>

    <div v-for="(dato, index) in equipo.estadisticas" :key="index">
      <span class="estadisticas" :class="{ ajustar: dato.includes('%') }">{{
        dato
      }}</span>
    </div>
  </v-col>
</template>

<script>
import BanderaFutbol from "../BanderaFutbol.vue";

export default {
  name: "EquipoEstadisticas",

  components: {
    BanderaFutbol,
  },
  props: {
    equipo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.bandera {
  display: inline-block;
  border: 0.1rem solid white;
  font-size: 1.35rem;
  box-sizing: content-box;
  padding: 0.05rem;
  margin-bottom: 10px;
  top: 0.01rem;
  width: 1.33333333em;
  height: 1em;
}

.estadisticas {
  display: inline-block;
  width: 35px;
  text-align: center;
}

.estadisticas.ajustar {
  padding-left: 5px;
}
</style>