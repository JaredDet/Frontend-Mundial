<template>
  <td class="py-0" id="td" :class="{ 'green-border': numero < 3 }">
    <span class="numero px-6">{{ numero }}</span>
    <BanderaFutbol :pais="equipo.bandera" class="bandera"></BanderaFutbol>
    <span class="nombre">{{ equipo.nombre }}</span>
  </td>

  <td
    v-for="(puntuacion, index) in equipo.puntuaciones"
    :key="index"
    class="px-2"
    id="td-centrado"
    :class="{ puntos: index === 0 }"
  >
    <span class="estadisticas">{{ puntuacion }}</span>
  </td>

  <td class="px-0" id="td-centrado">
    <div class="resultados-container">
      <ResultadoPartido
        :resultado="equipo.resultados[0]"
        class="resultados"
      ></ResultadoPartido>
      <ResultadoPartido
        :resultado="equipo.resultados[1]"
        class="resultados"
      ></ResultadoPartido>
      <ResultadoPartido
        :resultado="equipo.resultados[2]"
        class="resultados"
      ></ResultadoPartido>
    </div>
  </td>
</template>

<script>
import BanderaFutbol from "../BanderaFutbol.vue";
import ResultadoPartido from "../ResultadoPartido.vue";

export default {
  name: "EquipoTabla",

  components: {
    BanderaFutbol,
    ResultadoPartido,
  },
  props: {
    equipo: {
      type: Object,
      required: true,
    },
    numero: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.numero {
  position: relative;
  top: -2px;
}

.bandera {
  display: inline-block;
  position: relative;
  border: 0.1rem solid white;
  font-size: 1.2rem;
  box-sizing: content-box;
  padding: 0.05rem;
  margin-right: 0.7rem;
  top: 0.3rem;
  width: 1.33333333em;
  height: 1em;
}

.nombre {
  white-space: nowrap;
}

#td-centrado {
  text-align: center;
  border-bottom-color: #323b73;
}

#td {
  border-bottom-color: #323b73;
}

.estadisticas {
  display: inline-block;
  text-align: center;
}

.puntos {
  background: #2b49ab;
}

.resultados-container {
  display: flex;
  justify-content: space-evenly;
}

.resultados {
  font-size: 1.4rem;
  padding: 0.05rem;
  width: 1em;
  height: 1em;
  margin: 0 -18%;
}

.green-border {
  position: relative;
}

.green-border::before {
  content: "";
  position: absolute;
  top: -1px;
  left: -2px;
  height: 103%;
  width: 11px;
  background-color: #91c714;
}
</style>