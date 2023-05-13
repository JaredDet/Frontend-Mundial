<template>
  <v-container>
    <h2 class="grupo-nombre">{{ grupo }}</h2>
    <v-table class="tabla-personalizada" density="compact">
      <thead>
        <tr>
          <th id="th-color">Equipo</th>
          <th
            v-for="(titulo, index) in titulos"
            :key="index"
            class="px-2"
            id="th-color"
          >
            {{ titulo.nombre }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(equipo, index) in equipos" :key="index">
          <td class="py-0" id="td">
            {{ index + 1 }}
            <i
              :class="'bandera-tabla ml-2 flag-icon fi fi-' + equipo.bandera"
            ></i>
            <span class="ml-2">{{ equipo.nombre }}</span>
          </td>
          <td
            v-for="(puntuacion, index) in equipo.puntuaciones"
            :key="index"
            class="px-2"
            id="td"
          >
            {{ puntuacion.valor }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
  data() {
    return {
      grupo: "Grupo B",
      equipos: [
        {
          bandera: "nl",
          nombre: "Países Bajos",
          puntuaciones: [
            { valor: 3 },
            { valor: 3 },
            { valor: 0 },
            { valor: 0 },
            { valor: 10 },
            { valor: 3 },
            { valor: 7 },
            { valor: 9 },
          ],
        },
        {
          bandera: "cl",
          nombre: "Chile",
          puntuaciones: [
            { valor: 3 },
            { valor: 2 },
            { valor: 0 },
            { valor: 1 },
            { valor: 5 },
            { valor: 3 },
            { valor: 2 },
            { valor: 6 },
          ],
        },
        {
          bandera: "es",
          nombre: "España",
          puntuaciones: [
            { valor: 3 },
            { valor: 1 },
            { valor: 0 },
            { valor: 2 },
            { valor: 4 },
            { valor: 7 },
            { valor: -3 },
            { valor: 3 },
          ],
        },
        {
          bandera: "au",
          nombre: "Australia",
          puntuaciones: [
            { valor: 3 },
            { valor: 0 },
            { valor: 0 },
            { valor: 3 },
            { valor: 3 },
            { valor: 9 },
            { valor: -6 },
            { valor: 0 },
          ],
        },
      ],
      titulos: [
        { nombre: "PJ" },
        { nombre: "G" },
        { nombre: "E" },
        { nombre: "P" },
        { nombre: "GF" },
        { nombre: "GC" },
        { nombre: "DG" },
        { nombre: "Pts" },
      ],
    };
  },
};
</script>

<style>
.tabla-personalizada {
  background: inherit;
  color: inherit;
}

#th-color {
  color: #d2d2d2;
  border-bottom-color: #d2d2d2;
  padding-left: 0;
}

#td {
  border-bottom-color: #d2d2d2;
}

.bandera-tabla {
  border: 0.1rem solid #d2d2d2;
  box-sizing: content-box;
  padding: 0.05rem;
}

.grupo-nombre {
  font-size: 1.6rem;
  font-weight: normal;
  margin-bottom: -1%;
}
</style>