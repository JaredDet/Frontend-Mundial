<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <div class="separar-titulos">
          <span
            :class="'flag-icon fi fi-' + local.bandera"
            class="bandera-estadisticas"
          ></span>
        </div>
        <div
          v-for="(dato, index) in local.estadisticas"
          :key="index"
          :class="{ 'ajustar-estadistica': dato.estadistica.includes('%') }"
        >
          {{ dato.estadistica }}
        </div>
      </v-col>
      <v-col class="text-center">
        <div class="titulo separar-titulos">
          {{ estadisticas_equipo.nombre }}
        </div>
        <div
          v-for="(dato, index) in estadisticas_equipo.estadisticas"
          :key="index"
        >
          {{ dato.nombre }}
        </div>
      </v-col>
      <v-col class="text-center">
        <div class="bandera-container-estadisticas separar-titulos">
          <span
            :class="'flag-icon flag-icon-squared fi fi-' + visita.bandera"
            class="bandera-estadisticas"
          ></span>
        </div>
        <div
          v-for="(dato, index) in visita.estadisticas"
          :key="index"
          :class="{ 'ajustar-estadistica': dato.estadistica.includes('%') }"
        >
          {{ dato.estadistica }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
  data() {
    return {
      local: {
        bandera: "br",
        estadisticas: [
          { estadistica: "11" },
          { estadistica: "2" },
          { estadistica: "59%" },
          { estadistica: "490" },
          { estadistica: "86%" },
          { estadistica: "16" },
          { estadistica: "3" },
          { estadistica: "0" },
          { estadistica: "1" },
          { estadistica: "4" },
        ],
      },
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
      visita: {
        bandera: "nl",
        estadisticas: [
          { estadistica: "8" },
          { estadistica: "4" },
          { estadistica: "41%" },
          { estadistica: "355" },
          { estadistica: "80%" },
          { estadistica: "20" },
          { estadistica: "2" },
          { estadistica: "0" },
          { estadistica: "2" },
          { estadistica: "1" },
        ],
      },
    };
  },
};
</script>

<style>
.bandera-estadisticas {
  border: 0.1rem solid white;
  font-size: 1.35rem;
  box-sizing: content-box;
  padding: 0.05rem;
}

.separar-titulos {
  margin-bottom: 0.55rem;
}

.titulo {
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
  white-space: nowrap;
}

.ajustar-estadistica {
  padding-left: 0.3rem;
}
</style>