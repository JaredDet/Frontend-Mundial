<template>
  <v-container>
    <v-row class="justify-center">
      <EquipoTecnico :equipo="local"></EquipoTecnico>

      <v-col class="text-center">
        <h2 class="titulo">{{ titulo.nombre }}</h2>
      </v-col>

      <EquipoTecnico :equipo="visita" :espejo="true"></EquipoTecnico>
    </v-row>
  </v-container>
</template>

<script>
import EquipoTecnico from "./EquipoTecnico.vue";
import { obtenerDatosTecnicosEquipos } from "@/service/ServicioPartido.js";

export default {
  components: {
    EquipoTecnico,
  },
  data() {
    return {
      local: {
        bandera: "",
        tecnico: "",
      },
      titulo: { nombre: "Director Técnico" },
      visita: {
        bandera: "",
        tecnico: "",
      },
    };
  },
    methods: {
    cargarEquipo(equipoOrigen, equipoDestino) {
      this[equipoDestino].bandera = equipoOrigen.bandera;
      this[equipoDestino].tecnico = equipoOrigen.tecnico;
    },
    async obtenerTecnicos() {
      const id = this.$route.params.id;
      try {
        const respuesta = await obtenerDatosTecnicosEquipos(id);
        this.cargarEquipo(respuesta.local, "local");
        this.cargarEquipo(respuesta.visita, "visita");
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.obtenerTecnicos();
  },
};
</script>

<style scoped>
.bandera {
  border: 0.1rem solid white;
  font-size: 1.2rem;
  box-sizing: content-box;
  padding: 0.05rem;
  margin-bottom: 0.55rem;
}

.titulo {
  letter-spacing: 0.05rem;
  white-space: nowrap;
  font-size: 1.2rem;
  font-weight: normal;
}
</style>