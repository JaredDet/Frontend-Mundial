<template>
  <v-container class="goleadores">
    <v-row>
      <v-col>
        <GoleadorPartido
          v-for="(jugador, index) in local.goleadores"
          :key="index"
          :jugador="jugador"
          class="jugador"
        ></GoleadorPartido>
      </v-col>
      <v-col class="d-flex justify-center align-center">
        <PelotaFutbol class="icono-pelota"></PelotaFutbol>
      </v-col>
      <v-col>
        <GoleadorPartido
          v-for="(jugador, index) in visita.goleadores"
          :key="index"
          :jugador="jugador"
          :espejo="true"
          class="jugador"
        ></GoleadorPartido>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import GoleadorPartido from "./GoleadorPartido.vue";
import PelotaFutbol from "../PelotaFutbol.vue";
import { obtenerDatosGoleadores } from "@/service/ServicioPartido.js";

export default {
  name: "JugadoresPartido",
  components: {
    GoleadorPartido,
    PelotaFutbol,
  },
  data() {
    return {
      local: { goleadores: [] },
      visita: { goleadores: [] },
    };
  },
  methods: {
    cargarEquipos(equipos) {
      this.cargarEquipo(equipos[0], "local");
      this.cargarEquipo(equipos[1], "visita");
    },

    cargarEquipo(equipoOrigen, equipoDestino) {
      if ("goles" in equipoOrigen) {
        this[equipoDestino].goleadores = equipoOrigen.goles.map((jugador) => ({
          nombre: jugador.nombre,
          minutos: this.obtenerMinutos(jugador.goles),
        }));
      }
    },

    obtenerMinutos(goles) {
      return goles
        .map((gol) => `${gol.minuto}${gol.esPenal ? "' (P)" : "'"}`)
        .join(", ");
    },

    async obtenerGoleadores() {
      const id = this.$route.params.id;
      try {
        const respuesta = await obtenerDatosGoleadores(id);
        this.cargarEquipos(respuesta);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.obtenerGoleadores();
  },
};
</script>

<style scoped>
.goleadores {
  position: relative;
  top: -40px;
  margin-top: 15px;
  margin-bottom: -40px;
}

.jugador {
  margin-bottom: 1px;
}

.icono-pelota {
  width: 20px;
  height: 20px;
  left: 0;
}
</style>