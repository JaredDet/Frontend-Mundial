<template>
  <v-col cols="2">
    <v-row class="fila-tercio">
      <v-col class="columna-centrada">
        <span class="fecha">{{ fecha }}</span>
      </v-col>
    </v-row>
    <v-row class="fila-tercio">
      <v-col class="columna-centrada">
        <span class="separador"></span>
      </v-col>
    </v-row>
    <v-row class="fila-tercio">
      <v-col class="columna-centrada">
        <span class="fase">{{ fase }}</span>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  props: {
    fase: {
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
.fila-tercio {
  height: 33%;
}

.columna-centrada {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.fecha {
  font-size: 1.05rem;
  color: #3e3e42;
  white-space: nowrap;
  margin-top: 3vh;
}

.separador {
  border-top: 0.3125rem solid #3e3e42;
  width: 75%;
}

.fase {
  border: 0.1875rem solid #3e3e42;
  border-radius: 0.625rem;
  padding: 0.5rem 1.2rem;
  line-height: 1rem;
  font-size: 1.45rem;
  color: #3e3e42;
  white-space: nowrap;
}
</style>