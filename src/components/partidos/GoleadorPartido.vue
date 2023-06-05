<template>
  <div class="jugador" :class="{ espejo: espejo }">
    <span class="nombre">{{ jugador.nombre }}</span>
    <span class="minutos">{{ jugador.minutos }}</span>
  </div>
</template>

<script>
export default {
  name: "GoleadorPartido",

  props: {
    jugador: {
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
.jugador {
  height: 17px;
  text-align: left;
  margin-left: 40px;
  margin-bottom: -3px;
}

.jugador.espejo {
  text-align: right;
  margin-left: 0;
  margin-right: 40px;
}

.nombre {
  margin-right: 7px;
  white-space: nowrap;
  font-size: 12px;
}

.minutos {
  white-space: nowrap;
  font-size: 12px;
}
</style>