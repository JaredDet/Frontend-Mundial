<template>
  <v-container>
    <v-row>
      <EquipoSuplente :equipo="local"></EquipoSuplente>

      <v-col class="text-center">
        <div class="titulo separar-titulos">
          <span>{{ titulo.nombre }}</span>
        </div>
      </v-col>

      <EquipoSuplente :equipo="visita" :espejo="true"></EquipoSuplente>
    </v-row>
  </v-container>
</template>

<script>
import EquipoSuplente from "./EquipoSuplente.vue";
import { obtenerDatosSuplentesEquipos } from "@/service/ServicioPartido.js";

export default {
  components: {
    EquipoSuplente,
  },

  data() {
    return {
      local: {bandera: "", jugadores: []},
      titulo: { nombre: "Suplentes" },
      visita: {bandera: "", jugadores: []},
    };
  },
  methods: {
    cargarEquipo(equipoOrigen, equipoDestino) {
      this[equipoDestino].bandera = equipoOrigen.bandera;
      this[equipoDestino].jugadores = equipoOrigen.suplentes;
    },
    async obtenerSuplentes() {
      const id = this.$route.params.id;
      try {
        const respuesta = await obtenerDatosSuplentesEquipos(id);
        this.cargarEquipo(respuesta.local, "local");
        this.cargarEquipo(respuesta.visita, "visita");
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.obtenerSuplentes();
  },
};
</script>

<style scoped>
.bandera {
  border: 0.1rem solid white;
  font-size: 1.2rem;
  box-sizing: content-box;
  padding: 0.05rem;
  margin-bottom: 10px;
}

.titulo {
  letter-spacing: 0.05rem;
  white-space: nowrap;
  font-size: 1.2rem;
}

.separar-titulos {
  margin-bottom: 0.55rem;
}
</style>  