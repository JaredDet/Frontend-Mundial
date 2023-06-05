<template>
  <v-container class="d-flex align-center justify-center">
    <v-card class="redondeado carta">
      <EncabezadoPartido :fecha="fecha"></EncabezadoPartido>
      <v-row>
        <EquipoPartido :equipo="local"> </EquipoPartido>
        <IconosPartido></IconosPartido>
        <EquipoPartido :equipo="visita" :espejo="true"> </EquipoPartido>
      </v-row>
      <FasePartido :fase="fase"></FasePartido>
      <JugadoresPartido></JugadoresPartido>
    </v-card>
  </v-container>
</template>

<script>
import EquipoPartido from "./EquipoPartido.vue";
import EncabezadoPartido from "./EncabezadoPartido.vue";
import IconosPartido from "./IconosPartido.vue";
import FasePartido from "./FasePartido.vue";
import JugadoresPartido from "@/components/partidos/JugadoresPartido.vue";

import {
  obtenerDatosMarcadores,
  obtenerDatosExtras,
} from "@/service/ServicioPartido.js";

export default {
  components: {
    EquipoPartido,
    IconosPartido,
    EncabezadoPartido,
    FasePartido,
    JugadoresPartido,
  },

  data() {
    return {
      fecha: "",
      local: { nombre: "", bandera: "", goles: "" },
      visita: { nombre: "", bandera: "", goles: "" },
      fase: "",
    };
  },
  methods: {
    cargarEquipos(equipos) {
      this.cargarEquipo(equipos[0], "local");
      this.cargarEquipo(equipos[1], "visita");
    },
    cargarEquipo(equipoOrigen, equipoDestino) {
      this[equipoDestino].nombre = equipoOrigen.nombre;
      this[equipoDestino].bandera = equipoOrigen.bandera;
      this[equipoDestino].goles = equipoOrigen.goles;
    },
    cargarDatosVarios(datos) {
      this["fecha"] = datos.fecha;
      this["fase"] = datos.fase;
    },
    async obtenerMarcadores() {
      const id = this.$route.params.id;
      try {
        const marcadores = await obtenerDatosMarcadores(id);
        this.cargarEquipos(marcadores);
        const datosVarios = await obtenerDatosExtras(id);
        this.cargarDatosVarios(datosVarios);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.obtenerMarcadores();
  },
};
</script>

<style scoped>
.redondeado {
  border-radius: 12px;
}

.carta {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 865px;
  background: inherit;
  color: inherit;
}
</style>