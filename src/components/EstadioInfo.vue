<template>
  <div>
    <v-card-title class="estadio">
      {{ estadio }}
    </v-card-title>

    <v-card-text class="fecha">
      {{ fecha }}
    </v-card-text>
  </div>
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
.fecha {
  margin-bottom: -5%;
  font-size: 1rem;
  color: #3e3e42;
}

.estadio {
  text-align: right;
  margin-bottom: -5.5%;
  color: #3e3e42;
}
</style>