<template>
  <v-container class="d-flex align-center justify-center principal">
    <v-card class="redondeado carta">
      <v-row class="fila-principal">
        <EquipoInfo
          :nombre="equipoLocal.nombre"
          :codigo="equipoLocal.codigo"
          :goles="equipoLocal.goles"
        >
        </EquipoInfo>

        <SeparadorFase :fase="fase.nombre" :fecha="torneo.fecha"></SeparadorFase>

        <EquipoInfo
          :nombre="equipoVisita.nombre"
          :codigo="equipoVisita.codigo"
          :goles="equipoVisita.goles"
          class="espejo"
        >
        </EquipoInfo>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import EquipoInfo from "./EquipoInfo.vue";
import axios from "axios";
import SeparadorFase from "./SeparadorFase.vue";

export default {
  components: {
    EquipoInfo,
    SeparadorFase,
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
      console.log(response);
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
      const id = this.$route.params.id;
      axios
        .get(`http://localhost:8080/api/ronda/${id}`)
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
.principal {
  height: 100vh;
}

.redondeado {
  border-radius: 17px;
}

.carta {
  width: 35vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.fila-principal {
  width: 80%;
}

.v-container {
  font-family: "Bebas Neue", sans-serif;
}

.espejo,
.espejo .goleador,
.espejo .nombre-container,
.espejo .gol-container {
  transform: scaleX(-1);
}

.espejo .jugador-container {
  text-align: right;
}
</style>