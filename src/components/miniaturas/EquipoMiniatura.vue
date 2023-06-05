<template>
  <v-card-text class="contenedor">
    <div class="izquierda">
      <BanderaFutbol :pais="equipo.bandera" class="bandera"></BanderaFutbol>
      <span class="nombre">{{ equipo.nombre }}</span>
    </div>
    <div class="derecha">
      <span>{{ equipo.goles }}</span>
      <span class="penales" v-if="'penales' in equipo">({{equipo.penales}})</span>
    </div>
  </v-card-text>
</template>

<script>
import BanderaFutbol from "../BanderaFutbol.vue";

export default {
  name: "EquipoMiniatura",
  props: {
    equipo: {
      type: Object,
      required: true,
    },
  },
  components: {
    BanderaFutbol,
  },
};
</script>

<style scoped>
.contenedor {
  display: flex;
  justify-content: space-between;
}

.izquierda {
  text-align: left;
}
.bandera {
  display: inline-block;
  position: relative;
  border: 0.1rem solid white;
  font-size: 1.2rem;
  box-sizing: content-box;
  padding: 0.05rem;
  margin-right: 1rem;
  top: 0.4rem;
  width: 1.33333333em;
  height: 1em;
}

.nombre {
  font-size: 1.2em;
}

.derecha {
  text-align: right;
  font-size: 1.2em;
  margin-right: 60px;
  padding-top: 5px;
}

.penales {
  position: relative;
  left: 7px;
}
</style>
