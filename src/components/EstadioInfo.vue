<template>
  <v-container class="encabezado">
    <v-card-title class="estadio">
      <span>{{ estadio }}</span>
    </v-card-title>

    <v-card-text class="fecha">
      <span>{{ fecha }}</span>
    </v-card-text>
  </v-container>
</template>

<script>
export default {
  props: {
    estadio: {
      type: String,
      required: true,
    },
    fecha: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>

.encabezado {
    height: 5vh;
}

.fecha {
  position: absolute;
  right: 36.5%;
  top: 10.5%;
}

.fecha span {
  font-size: 10%;
  color: #3e3e42;
}

.estadio {
  position: absolute;
  width: 35%;
  right: 0;
  top: 0;
}

.estadio span {
  color: #3e3e42;
}
</style>