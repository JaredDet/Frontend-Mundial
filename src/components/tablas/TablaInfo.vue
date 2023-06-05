<template>
  <v-container>
    <h2 class="grupo-nombre">{{ grupo }}</h2>

    <v-table class="tabla-personalizada">
      <thead>
        <TitulosTabla :titulos="titulos"></TitulosTabla>
      </thead>
      <tbody>
        <tr v-for="(equipo, index) in equipos" :key="index">
          <EquipoTabla :equipo="equipo" :numero="index + 1"></EquipoTabla>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import EquipoTabla from "./EquipoTabla.vue";
import TitulosTabla from "./TitulosTabla.vue";
import { obtenerDatosPartido } from "@/service/ServicioTabla.js";

export default {
  components: {
    EquipoTabla,
    TitulosTabla,
  },
  props: {
    grupoCargado: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      grupo: "",
      equipos: [],
      titulos: [
        { nombre: "Pts" },
        { nombre: "PJ" },
        { nombre: "G" },
        { nombre: "E" },
        { nombre: "P" },
        { nombre: "GF" },
        { nombre: "GC" },
        { nombre: "DIF" },
        { nombre: "Resultados" },
      ],
    };
  },
  methods: {
    cargarEquipos(equipos) {
      for (let equipo of equipos) {
        const nuevoEquipo = {
          nombre: equipo.nombre,
          bandera: equipo.bandera,
          puntuaciones: [
            equipo.puntos,
            equipo.partidosJugados,
            equipo.ganados,
            equipo.empatados,
            equipo.perdidos,
            equipo.golesAFavor,
            equipo.golesEnContra,
            equipo.diferenciaGoles,
          ],
          resultados: [],
        };
        for (let resultado of equipo.resultados) {
          nuevoEquipo.resultados.push(resultado.resultado);
        }
        this.equipos.push(nuevoEquipo);
      }
    },
    async obtenerEquipos(grupo) {
      try {
        const respuesta = await obtenerDatosPartido(grupo);
        const tieneEstructuraValida =
          "grupo" in respuesta && "equipos" in respuesta;
        if (tieneEstructuraValida) {
          this.grupo = `Grupo ${respuesta.grupo}`;
          this.cargarEquipos(respuesta.equipos);
        } else {
          throw new Error("La respuesta no tiene la estructura esperada");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.obtenerEquipos(this.grupoCargado);
  },
};
</script>

<style scoped>
.tabla-personalizada {
  background: inherit;
  color: inherit;
}

.grupo-nombre {
  font-size: 1.6rem;
  font-weight: normal;
  margin-bottom: -1%;
  margin-bottom: 2px;
}
</style>