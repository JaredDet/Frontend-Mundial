<template>
  <v-container>
    <v-row>
      <EquipoEstadisticas :equipo="local"></EquipoEstadisticas>

      <v-col class="text-center">
        <h2 class="titulo estadisticas">
          {{ estadisticas_equipo.nombre }}
        </h2>
        <span
          v-for="(dato, index) in estadisticas_equipo.estadisticas"
          :key="index"
          class="estadisticas"
          >{{ dato.nombre }}</span
        >
      </v-col>

      <EquipoEstadisticas :equipo="visita"></EquipoEstadisticas>
    </v-row>
  </v-container>
</template>

<script>
import EquipoEstadisticas from "./EquipoEstadisticas.vue";
import { obtenerDatosEstadisticas } from "@/service/ServicioPartido.js";

export default {
  components: {
    EquipoEstadisticas,
  },
  data() {
    return {
      local: { bandera: "", estadisticas: [] },
      estadisticas_equipo: {
        nombre: "Estadísticas del equipo",
        estadisticas: [
          { nombre: "Remates" },
          { nombre: "Remates al arco" },
          { nombre: "Posesión" },
          { nombre: "Pases" },
          { nombre: "Precisión de los pases" },
          { nombre: "Faltas" },
          { nombre: "Tarjetas amarillas" },
          { nombre: "Tarjetas rojas" },
          { nombre: "Posición adelantada" },
          { nombre: "Tiros de esquina" },
        ],
      },
      visita: { bandera: "", estadisticas: [] },
    };
  },
  methods: {
    cargarEquipos(equipos) {
      this.cargarEquipo(equipos[0], "local");
      this.cargarEquipo(equipos[1], "visita");
    },

    cargarEquipo(equipoOrigen, equipoDestino) {
      this[equipoDestino] = {
        bandera: equipoOrigen.bandera,
        estadisticas: [
          "" + equipoOrigen.remates,
          "" + equipoOrigen.rematesAlArco,
          "" + equipoOrigen.posesion + "%",
          "" + equipoOrigen.pases,
          "" + equipoOrigen.precisionPases + "%",
          "" + equipoOrigen.faltas,
          "" + equipoOrigen.tarjetasAmarillas,
          "" + equipoOrigen.tarjetasRojas,
          "" + equipoOrigen.posicionAdelantada,
          "" + equipoOrigen.tirosEsquina,
        ],
      };
    },
    async obtenerEstadisticas() {
      const id = this.$route.params.id;
      try {
        const respuesta = await obtenerDatosEstadisticas(id);
        this.cargarEquipos(respuesta);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.obtenerEstadisticas();
  },
};
</script>

<style scoped>
.bandera-estadisticas {
  border: 0.1rem solid white;
  font-size: 1.35rem;
  box-sizing: content-box;
  padding: 0.05rem;
}

.titulo {
  font-size: 1.2rem;
  letter-spacing: 0.06rem;
  white-space: nowrap;
  margin-bottom: 0.55rem;
  font-weight: normal;
}

.estadisticas {
  display: block;
}
</style>