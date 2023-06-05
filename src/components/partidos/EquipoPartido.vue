<template>
  <v-col>
    <div class="equipo" :class="{ espejo: espejo }">
      <BanderaFutbol
        :pais="equipo.bandera"
        class="bandera"
        :class="{ espejo: espejo }"
      ></BanderaFutbol>
      <span class="goles" :class="{ espejo: espejo }">{{ equipo.goles }}</span>
    </div>
    <div class="nombre-container" :class="{ espejo: espejo }">
      <span class="nombre">{{ equipo.nombre }}</span>
    </div>
  </v-col>
</template>

<script>
import BanderaFutbol from "../BanderaFutbol.vue";

export default {
  name: "EquipoPartido",

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
.equipo {
  display: flex;
  width: 350px;
  margin-bottom: 10px;
}

.bandera {
  position: relative;
  font-size: 6rem;
  margin-left: 60px;
  box-sizing: content-box;
  padding: 0.05rem;
  top: 0.01rem;
  width: 1.33333333em;
  height: 1em;
  border: 0.3rem solid white;
}

.bandera.espejo {
  margin-right: 60px;
  margin-left: 0;
}

.nombre-container {
  display: flex;
  position: relative;
  left: -13%;
  top: -20px;
}

.nombre-container.espejo {
  left: 13%;
}

.nombre {
  display: block;
  position: relative;
  font-size: 1.45rem;
  word-wrap: break-word;
  white-space: nowrap;
  bottom: 3%;
  text-align: center;
  margin: 0 auto;
}

.goles {
  display: inline-block;
  font-size: 3rem;
  height: 96px;
  margin-top: 10%;
  margin-left: 60px;
}

.goles.espejo {
  margin-left: 0;
  margin-right: 60px;
}

.equipo.espejo {
  flex-direction: row-reverse;
}
</style>

