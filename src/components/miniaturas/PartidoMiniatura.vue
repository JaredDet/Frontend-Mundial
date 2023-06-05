<template>
  <v-card class="carta gray-border">
    <v-card-title class="carta-titulo">
      <span>{{partido.fase}}</span>
    </v-card-title>

    <EquipoMiniatura class="equipo" :equipo="partido.local"></EquipoMiniatura>
    <EquipoMiniatura :equipo="partido.visita"></EquipoMiniatura>
  </v-card>
</template>

<script>
import EquipoMiniatura from "./EquipoMiniatura.vue";

export default {
  name: "PartidoMiniatura",

  components: {
    EquipoMiniatura,
  },
  props: {
    partido: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.carta {
  background: inherit;
  color: inherit;
}

.carta-titulo {
  margin-top: 5px;
  margin-bottom: 5px;
  letter-spacing: 0.05rem;
  font-size: 1em;
  margin-bottom: -5px;
}

.equipo {
  margin-bottom: -20px;
}

.gray-border {
  position: relative;
}

.gray-border::before {
  content: "";
  position: absolute;
  top: 32%;
  right: 55px;
  height: 50%;
  width: 1.3px;
  background-color: #2e2e2e;
}
</style>