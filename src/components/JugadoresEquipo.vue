<template>
  <div class="jugadores equipo-{{equipo}}">
    <div v-if="nombre === 'portero'" class="jugador">
      <span class="dorsal">{{ jugadores.dorsal }}</span>
      <span class="nombre">{{ jugadores.nombre }}</span>
    </div>
    <div
      v-else
      v-for="(jugador, index) in jugadores"
      :key="index"
      class="jugador"
    >
      <span class="dorsal">{{ jugador.dorsal }}</span>
      <span class="nombre">{{ jugador.nombre }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nombre: String,
    equipo: String,
    jugadores: {
      type: [Array, Object],
      required: true,
    },
  },
};
</script>

<style scoped>
.jugadores {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.jugador {
  position: relative;
  z-index: 10;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid white;
  line-height: 0;
}

.jugador .dorsal {
  position: absolute;
  top: 55%;
  left: 48%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
}

.jugador .nombre {
  z-index: 50;
  position: absolute;
  bottom: -45%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  white-space: nowrap;
}
</style>