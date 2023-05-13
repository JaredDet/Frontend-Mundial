<template>
  <v-container class="d-flex align-center modo-oscuro">
    <v-card class="mx-auto redondeado" width="500">
      <v-card-title class="estadio">
        {{ estadio.nombre }}
      </v-card-title>

      <v-card-text class="fecha">
        {{ torneo.fecha }}
      </v-card-text>

      <v-container class="contenedor">
        <v-row>
          <EquipoLocal :equipo="equipos[0]" />
          <EquipoVisita :equipo="equipos[1]" />
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import EquipoLocal from './EquipoInfo.vue'
import EquipoVisita from './EquipoVisita.vue'

export default {
  components: {
    EquipoLocal,
    EquipoVisita,
  },
  data() {
    return {
      torneo: { fecha: "13 de julio del 2014" },
      estadio: { nombre: "Estadio Maracaná" },
      equipos: [
        { nombre: "Alemania", codigo: "de", goles: 1 },
        { nombre: "Argentina", codigo: "ar", goles: 0 },
      ],
      fase: { nombre: "Final" },
    };
  },
};
</script>

<style>
.modo-oscuro {
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background-color: #1c1c1c;
  color: #ffffff;
}

.redondeado {
  border-radius: 17px;
}

.fecha {
  margin-bottom: -5%;
  font-size: 16px;
  color: #3e3e42;
}

.estadio {
  text-align: right;
  margin-bottom: -5.5%;
  color: #3e3e42;
}



.v-container {
  font-family: "Bebas Neue", sans-serif;
}

@media (min-width: 1280px) {
  .v-container {
    max-width: 1550px;
  }
}
</style>