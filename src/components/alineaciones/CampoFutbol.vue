<template>
  <v-col>
    <div class="pasto">
      <FormacionInfo class="formacion"></FormacionInfo>
      <v-row class="campo-juego">
        <i class="linea-medio-campo"></i>
        <i class="circulo"></i>
        <AreaEquipo :jugadores="local"></AreaEquipo>
        <AreaEquipo :jugadores="visita" :espejo="true"></AreaEquipo>
      </v-row>
    </div>
  </v-col>
</template>

<script>
import AreaEquipo from "./AreaEquipo.vue";
import FormacionInfo from "@/components/formaciones/FormacionInfo.vue";

export default {
  components: {
    AreaEquipo,
    FormacionInfo,
  },
  props: {
    local: {
      type: Object,
      required: true,
    },
    visita: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.pasto {
  background-image: url(@/assets/grass.png);
  background-repeat: repeat;
  height: 80vh;
  position: relative;
  padding: 0 1.6vw;
}

.campo-juego {
  display: flex;
  height: 65vh;
  margin: 0 auto;
  position: relative;
  top: 44%;
  transform: translateY(-50%);
  border: 2px solid white;
}

.circulo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(50vw / 7);
  height: calc(50vw / 7);
  border-radius: 50%;
  border: 2px solid white;
  z-index: 0;
}

.linea-medio-campo {
  position: absolute;
  top: 0.1%;
  left: 50%;
  height: 100%;
  width: 0.1%;
  border: 1px solid white;
  z-index: -10;
}
</style>