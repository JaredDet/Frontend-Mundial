<template>
  <v-col>
    <v-row>
      <v-col class="bandera-container">
        <div>
          <span
            :class="'flag-icon flag-icon-squared fi fi-' + codigo + ' bandera'"
          ></span>
        </div>
        <div class="nombre-container">
          <span class="nombre">{{ nombre }}</span>
        </div>
      </v-col>
      <v-col class="gol-container">
        <span class="goles">{{ goles }}</span>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  props: {
    nombre: {
      type: String,
      required: true,
    },
    codigo: {
      type: String,
      required: true,
    },
    goles: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      jugadores: [],
    };
  },
};
</script>

<style>
.bandera-container {
  display: flex;
  flex-direction: column;
}

.bandera {
  font-size: 3rem;
}

.gol-container {
  text-align: center;
}

.goles {
  color: #3e3e42;
  font-size: 3rem;
}

.nombre-container {
    text-align: center;
}

.nombre {
  font-size: 1.3rem;
  text-align: center;
  color: #3e3e42;
  word-wrap: break-word;
  white-space: nowrap;
  line-height: 1.5rem;
}

.jugador-container {
  text-align: left;
}

.fila-jugador {
  font-size: 0.6rem;
}

.fila-jugador:not(:last-child) {
  margin-bottom: -1rem;
}

.goleador {
  margin-left: 0.3rem;
}
</style>