<template>
  <v-container class="d-flex align-center modo-oscuro">
    <v-card class="mx-auto redondeado" width="500">
      <estadio-info :estadio="estadio.nombre" :fecha="torneo.fecha">
      </estadio-info>

      <v-container class="contenedor">
        <v-row>
          <equipo-local
            :nombre="equipoLocal.nombre"
            :codigo="equipoLocal.codigo"
            :goles="equipoLocal.goles"
            :fase="fase.nombre"
          >
          </equipo-local>

          <equipo-visita
            :nombre="equipoVisita.nombre"
            :codigo="equipoVisita.codigo"
            :goles="equipoVisita.goles"
          >
          </equipo-visita>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import EstadioInfo from "./EstadioInfo.vue";
import EquipoLocal from "./EquipoLocal.vue";
import EquipoVisita from "./EquipoVisita.vue";
import axios from "axios";

export default {
  components: {
    EstadioInfo,
    EquipoLocal,
    EquipoVisita,
  },

  data() {
    return {
      torneo: { fecha: "" },
      estadio: { nombre: "" },
      equipos: [
        { nombre: "", codigo: "", goles: 0 },
        { nombre: "", codigo: "", goles: 0 },
      ],
      fase: { nombre: "" },
    };
  },
  computed: {
    equipoLocal() {
      return this.equipos[0];
    },
    equipoVisita() {
      return this.equipos[1];
    },
  },
  methods: {
    actualizarPartido(response) {
      console.log(response)
      const { fecha, marcador, fase, estadio } = response.data[0];
      this.torneo.fecha = fecha;
      this.estadio.nombre = estadio;
      this.equipos[0].nombre = marcador[0].nombre;
      this.equipos[0].codigo = marcador[0].codigo;
      this.equipos[0].goles = marcador[0].goles;
      this.equipos[1].nombre = marcador[1].nombre;
      this.equipos[1].codigo = marcador[1].codigo;
      this.equipos[1].goles = marcador[1].goles;
      this.fase.nombre = fase;
    },
    obtenerDatosPartido() {
      axios
        .get("http://localhost:8080/api/ronda/4")
        .then((response) => {
          this.actualizarPartido(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.obtenerDatosPartido();
  },
};
</script>

<style>
.modo-oscuro {
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background-color: #1c1c1c;
  color: #ffffff;
}

.redondeado {
  border-radius: 17px;
}

.v-container {
  font-family: "Bebas Neue", sans-serif;
}

@media (min-width: 1280px) {
  .v-container {
    max-width: 1550px;
  }
}
</style>