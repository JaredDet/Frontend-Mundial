<template>
  <v-col class="equipo" :class="{ espejo: espejo }">
    <div :class="espejo ? 'derecha' : 'izquierda'">
      <EquipoFormacionInfo
        :equipo="equipo"
        :espejo="espejo"
      ></EquipoFormacionInfo>
    </div>
    <div :class="espejo ? 'izquierda' : 'derecha'">
      <span class="texto">{{ equipo.formacion }}</span>
    </div>
  </v-col>
</template>


<script>
import EquipoFormacionInfo from "./EquipoFormacionInfo.vue";

export default {
  name: "EquipoFormacion",
  components: {
    EquipoFormacionInfo,
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
}

.equipo.espejo {
  flex-direction: row-reverse;
}

.texto {
  display: inline-block;
  font-size: 1.2rem;
  letter-spacing: 0.03rem;
}

.texto.espejo {
  margin-right: 20px;
}

.izquierda {
  display: inline-block;
  text-align: left;
  width: 50%;
}

.derecha {
  display: inline-block;
  text-align: right;
  width: 50%;
}
</style>

