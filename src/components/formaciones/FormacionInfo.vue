<template>
  <v-container>
    <v-row class="formacion">
      <EquipoFormacion :equipo="local"></EquipoFormacion>
      <EquipoFormacion :equipo="visita" :espejo="true"></EquipoFormacion>
    </v-row>
  </v-container>
</template>

<script>
import EquipoFormacion from "./EquipoFormacion.vue";
import { obtenerDatosFormacionEquipos } from "@/service/ServicioPartido.js";

export default {
  name: "FormacionInfo",
  components: {
    EquipoFormacion,
  },
  data() {
    return {
      local: { bandera: "", nombre: "", formacion: "" },
      visita: { bandera: "", nombre: "", formacion: "" },
    };
  },
  methods: {
    cargarEquipo(equipoOrigen, equipoDestino) {
      this[equipoDestino].bandera = equipoOrigen.bandera;
      this[equipoDestino].nombre = equipoOrigen.nombre;
      this[equipoDestino].formacion = equipoOrigen.formacion;
    },
    async obtenerFormaciones() {
      const id = this.$route.params.id;
      try {
        const respuesta = await obtenerDatosFormacionEquipos(id);
        this.cargarEquipo(respuesta.local, "local");
        this.cargarEquipo(respuesta.visita, "visita");
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.obtenerFormaciones();
  },
};
</script>

<style scoped>
.formacion {
  margin-top: -20px;
}
</style>