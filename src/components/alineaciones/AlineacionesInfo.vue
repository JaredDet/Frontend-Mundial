<template>
  <v-container fluid class="d-flex align-center">
    <v-row>
      <CampoFutbol :local="local" :visita="visita" />
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import CampoFutbol from "./CampoFutbol.vue";


export default {
  components: {
    CampoFutbol,
  },
  data() {
    return {
      local: {
        portero: {},
        defensas: [],
        medioCentroDefensivo: [],
        medioCentro: [],
        medioCentroOfensivo: [],
        delanteros: [],
      },
      visita: {
        portero: {},
        defensas: [],
        medioCentroDefensivo: [],
        medioCentro: [],
        medioCentroOfensivo: [],
        delanteros: [],
      },
    };
  },
  methods: {
    cargarEquipo(equipoOrigen, equipoDestino) {
      this.cargarJugadores(equipoOrigen.titulares, equipoDestino);
      this.cargarLaterales(equipoOrigen, equipoDestino);
    },
    cargarJugadores(titulares, equipoDestino) {
      
      equipoDestino.portero = titulares.portero[0];

      const posiciones = [
        "defensas",
        "medioCentroDefensivo",
        "medioCentro",
        "medioCentroOfensivo",
        "delanteros",
      ];

      posiciones.forEach((posicion) => {
        if (posicion in titulares) {
          const jugadores = titulares[posicion];
          jugadores.forEach((jugador) => {
            equipoDestino[posicion].push(jugador);
          });
        }
      });
    },

    cargarLaterales(equipoOrigen, equipoDestino) {
      const titulares = equipoOrigen.titulares;
      const [lateralIzquierdo, lateralDerecho] = titulares.laterales;

      const posicionesLateral = {
        DEFENSAS: {
          nombre: "defensas",
        },
        MEDIO_CAMPO_DEFENSIVO: {
          nombre: "medioCentroDefensivo",
        },
        MEDIO_CAMPO: {
          nombre: "medioCentro",
        },
        MEDIO_CAMPO_OFENSIVO: {
          nombre: "medioCentroOfensivo",
        },
      };

      const posicionLateral = posicionesLateral[equipoOrigen.posicionLaterales];

      equipoDestino[posicionLateral.nombre].unshift(lateralIzquierdo);
      equipoDestino[posicionLateral.nombre].push(lateralDerecho);
    },
    obtenerDatosPartido() {
      const id = this.$route.params.id;
      axios
        .get(`http://localhost:8080/api/partidos/${id}/plantillas`)
        .then((response) => {
          this.cargarEquipo(response.data[0], this.local);
          this.cargarEquipo(response.data[1], this.visita);
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




