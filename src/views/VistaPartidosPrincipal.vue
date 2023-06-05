<template>
  <v-container class="padre">
    <InfoPartido></InfoPartido>
    <BarraNavegacion @opcion-seleccionada="actualizarOpcion"></BarraNavegacion>
    <component :is="opcionSeleccionada"></component>
  </v-container>
</template>

<script>
import InfoPartido from "@/components/partidos/InfoPartido.vue";
import BarraNavegacion from "@/components/BarraNavegacion.vue";

import VistaAlineaciones from "@/views/VistaAlineaciones.vue";
import InfoEstadísticas from "@/components/estadisticas/InfoEstadisticas.vue";

export default {
  components: {
    InfoPartido,
    VistaAlineaciones,
    BarraNavegacion,
    InfoEstadísticas
  },
  data() {
    return {
      opcionSeleccionada: VistaAlineaciones,
    };
  },
  methods: {
    actualizarOpcion(opcion) {
      this.opcionSeleccionada = opcion;
    },
  },
};
</script>

<style scoped>
.contenedor-barra {
  width: 855px;
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: #2e2e2e;
  padding: 0;
}

.barra-navegacion {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
}
.elemento {
  display: flex;
  font-size: 1.3em;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.elemento:hover {
  color: #fff;
  background-color: #0e0e0e;
}
</style>