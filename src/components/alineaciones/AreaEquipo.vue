<template>
  <v-col
    class="text-center equipo-local"
    :class="{ 'area-espejo': espejo }"
  >
    <AreaPorteria :portero="jugadores.portero" :noInvertir="espejo"></AreaPorteria>
    <AreaDefensa :defensas="jugadores.defensas" :noInvertir="espejo"></AreaDefensa>
    <AreaMedioCampo
      :medioCentroDefensivo="jugadores.medioCentroDefensivo"
      :medioCentro="jugadores.medioCentro"
      :medioCentroOfensivo="jugadores.medioCentroOfensivo"
       :noInvertir="espejo"
    ></AreaMedioCampo>
    <AreaAtaque :delanteros="jugadores.delanteros" :noInvertir="espejo"></AreaAtaque>
  </v-col>
</template>

<script>
import AreaPorteria from "./AreaPorteria.vue";
import AreaDefensa from "./AreaDefensa.vue";
import AreaMedioCampo from "./AreaMedioCampo.vue";
import AreaAtaque from "./AreaAtaque.vue";

export default {
  name: "AreaEquipo",
  components: {
    AreaPorteria,
    AreaDefensa,
    AreaMedioCampo,
    AreaAtaque,
  },
  props: {
    jugadores: {
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
.v-col {
  position: relative;
}


.area-espejo {
    transform: scaleX(-1);
}

</style>