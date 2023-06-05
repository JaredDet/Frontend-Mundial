<template>
  <v-col :class="{ 'text-right': espejo }">
    <BanderaFutbol :pais="equipo.bandera" class="bandera"></BanderaFutbol>

    <JugadorSuplente
      v-for="(jugador, index) in equipo.jugadores"
      :key="index"
      :jugador="jugador"
      :espejo="espejo"
    ></JugadorSuplente>

  </v-col>
</template>

<script>
import JugadorSuplente from "./JugadorSuplente.vue";
import BanderaFutbol from "../BanderaFutbol.vue";

export default {
  name: "EquipoSuplente",

  components: {
    JugadorSuplente,
    BanderaFutbol,
  },
  props: {
    equipo: {
      type: Object,
      required: true,
    },
    espejo: {
      type: Boolean,
      required: false,
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

</style>