<template>
  <tr>
    <th id="subtitulos">
      <span class="px-9 posicion">Pos</span>
      <span class="">Equipo</span>
    </th>
    <th
      v-for="(titulo, index) in titulos"
      :key="index"
      class="px-4"
      id="subtitulos-centrados"
      :class="{ puntos: index === 0 }"
    >
      <span class="titulo">{{ titulo.nombre }}</span>
    </th>
  </tr>
</template>

<script>
export default {
  name: "TitulosTabla",

  props: {
    titulos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
#subtitulos {
  color: #d2d2d2;
  border-bottom-color: #323b73;
  padding-left: 0;
  height: 35px;
  width: 320px;
}

#subtitulos-centrados {
  color: #d2d2d2;
  border-bottom-color: #323b73;
  padding-left: 0;
  height: 30px;
  text-align: center;
}

.titulo {
  display: inline-block;
  text-align: center;
}

.puntos {
  background: #2b49ab;
  border-radius: 10px 10px 0 0;
}

.posicion {
  margin-right: -20px;
}

</style>