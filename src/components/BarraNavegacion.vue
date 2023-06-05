<template>
  <v-container class="contenedor-barra">
    <v-btn-toggle class="barra-navegacion" v-model="selectedOption" group>
      <v-btn
        v-for="opcion in opciones"
        :key="opcion.valor"
        class="elemento"
        :value="opcion.valor"
        :class="botonActivo(opcion.valor)"
        @click="seleccionarOpcion(opcion.valor)"
      >
        {{ opcion.texto }}
      </v-btn>
    </v-btn-toggle>
  </v-container>
</template>

<script>
export default {
  name: "BarraNavegacion",
  data() {
    return {
      selectedOption: 'VistaAlineaciones',
      opciones: [
        { valor: "InfoCronología", texto: "Cronología" },
        { valor: "VistaAlineaciones", texto: "Alineaciones" },
        { valor: "InfoEstadísticas", texto: "Estadísticas" },
      ],
    };
  },
  methods: {
    botonActivo(valor) {
      return {
        "boton-activo": this.selectedOption === valor,
      };
    },
    seleccionarOpcion(opcion) {
      this.$emit("opcion-seleccionada", opcion);
    },
  },
};
</script>

<style scoped>
.contenedor-barra {
  width: 855px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.barra-navegacion {
  width: 100%;
}

.elemento {
  display: flex;
  font-size: 1.3em;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #2e2e2e;
  color: #d2d2d2;
}

.elemento:hover {
  color: #fff;
  background-color: #0e0e0e;
}

.boton-activo {
  background-color: black;
  color: #fff;
  border-bottom: 3px solid #fff;
}
</style>