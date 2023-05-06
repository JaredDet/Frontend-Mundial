<template>
  <v-container fluid class="d-flex align-center modo-oscuro">
    <v-row class="mx-auto justify-center align-center principal">
      <v-col class="distribucion-campo">
        <div class="pasto">
          <v-row class="campo-juego">
            <v-col class="text-center equipo-local">
              <div class="area-meta" id="area-meta-local">
                <JugadoresEquipo
                  nombre="portero"
                  equipo="local"
                  :jugadores="local.portero"
                />
              </div>
              <div class="area-penal" id="area-penal-local">
                <div class="area-defensa" id="area-defensa-local">
                  <JugadoresEquipo
                    nombre="defensa"
                    equipo="local"
                    :jugadores="local.defensas"
                  />
                </div>
                <div class="area-chica" id="area-chica-local"></div>
              </div>
              <div class="area-central" id="area-central-local">
                <div class="trasera" id="baja-local">
                  <JugadoresEquipo
                    nombre="medio-centro-defensivo"
                    equipo="local"
                    :jugadores="local.medioCentroDefensivo"
                  />
                </div>
                <div class="media" id="media-local">
                  <JugadoresEquipo
                    nombre="medio-centro"
                    equipo="local"
                    :jugadores="local.medioCentro"
                  />
                </div>
                <div class="delantera" id="alta-local">
                  <JugadoresEquipo
                    nombre="medio-centro-ofensivo"
                    equipo="local"
                    :jugadores="local.medioCentroOfensivo"
                  />
                </div>
              </div>
              <div class="circulo" id="circulo-local">
                <JugadoresEquipo
                  nombre="delanteros"
                  equipo="local"
                  :jugadores="local.delanteros"
                />
              </div>
            </v-col>
            <v-col cols="6" class="text-center equipo-visita">
              <div class="area-meta" id="area-meta-visita">
                <JugadoresEquipo
                  nombre="portero"
                  equipo="visita"
                  :jugadores="visita.portero"
                />
              </div>
              <div class="area-penal" id="area-penal-visita">
                <div class="area-defensa" id="area-defensa-visita">
                  <JugadoresEquipo
                    nombre="defensas"
                    equipo="visita"
                    :jugadores="visita.defensas"
                  />
                </div>
                <div class="area-chica" id="area-chica-visita"></div>
              </div>
              <div class="area-central" id="area-central-visita">
                <div class="trasera" id="baja-visita">
                  <JugadoresEquipo
                    nombre="medio-centro-defensivo"
                    equipo="visita"
                    :jugadores="visita.medioCentroDefensivo"
                  />
                </div>
                <div class="media" id="media-visita">
                  <div class="jugadores">
                    <JugadoresEquipo
                    nombre="medio-centro"
                    equipo="visita"
                    :jugadores="visita.medioCentro"
                  />
                  </div>
                </div>
                <div class="delantera" id="alta-visita">
                  <JugadoresEquipo
                    nombre="medio-centro-ofensivo"
                    equipo="visita"
                    :jugadores="visita.medioCentroOfensivo"
                  />
                </div>
              </div>
              <div class="circulo" id="circulo-visita">
                <JugadoresEquipo
                    nombre="delanteros"
                    equipo="visita"
                    :jugadores="visita.delanteros"
                  />
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import JugadoresEquipo from "./JugadoresEquipo.vue";

export default {
  components: {
    JugadoresEquipo,
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
      const titulares = equipoOrigen.titulares;

      const { nombre, dorsal } = titulares.portero[0];
      equipoDestino.portero = { nombre, dorsal };

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
          jugadores.forEach(({ nombre, dorsal }) => {
            equipoDestino[posicion].push({ nombre, dorsal });
          });
        }
      });

      const [lateralIzquierdo, lateralDerecho] = titulares.laterales;
      equipoDestino.defensas.unshift({
        nombre: lateralIzquierdo.nombre,
        dorsal: lateralIzquierdo.dorsal,
      });
      equipoDestino.defensas.push({
        nombre: lateralDerecho.nombre,
        dorsal: lateralDerecho.dorsal,
      });
    },
    obtenerDatosPartido() {
      axios
        .get("http://localhost:8080/api/partidos/1/plantillas")
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

<style>
.principal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.distribucion-campo {
  max-width: 60%;
}

.modo-oscuro {
  background-color: #1c1c1c;
  color: #ffffff;
  font-family: "Bebas Neue", sans-serif;
}
.pasto {
  background-image: url(../assets/grass.png);
  background-repeat: repeat;
  height: 80vh;
  position: relative;
}

.campo-juego:before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 49.8%;
  height: 100.5%;
  width: 2px;
  transform: translate(-50%, -50%);
  background: #fff;
}

.campo-juego::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(50vw / 7);
  height: calc(50vw / 7);
  border-radius: 50%;
  border: 2px solid white;
  box-sizing: border-box;
}

.campo-juego {
  display: flex;
  height: 65vh;
  width: 95%;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border: 2px solid white;
}

.area-meta {
  position: absolute;
  width: 7%;
  height: 30%;
  top: 50%;
  transform: translateY(-50%);
  border: 2px solid white;
  z-index: -1;
}

#area-meta-local {
  border-left: none;
  left: 0%;
}

#area-meta-visita {
  right: 0%;
  border-right: none;
}

.area-penal {
  position: absolute;
  z-index: 10;
  width: 15%;
  height: 65%;
  border: 2px solid white;
  top: 17%;
}

#area-penal-local {
  left: 0;
  border-left: none;
}

#area-penal-visita {
  right: 0;
  border-right: none;
}

.area-chica {
  position: absolute;
  z-index: 1;
  width: 60%;
  height: 33%;
  top: 33%;
  border: 2px solid white;
  border-radius: 50% 50% 50% 50%;
  clip-path: ellipse(50% 100% at 100% 50%);
}

.area-defensa {
  position: absolute;
  z-index: 10;
  width: calc(50%);
  height: 157%;
  top: -28%;
}

#area-defensa-local {
  left: 100%;
}

#area-defensa-visita {
  right: 100%;
}

#area-chica-local {
  right: -27%;
}

#area-chica-visita {
  left: -27%;
  transform: scaleX(-1);
}

.area-central {
  position: absolute;
  z-index: 1;
  width: calc(22%);
  height: 100%;
  top: 0%;
}

#area-central-local {
  left: 21.5%;
}

#area-central-visita {
  right: 21.5%;
}

.area-central .trasera {
  position: absolute;
  z-index: 1;
  height: 100%;
  top: 0%;
  width: calc(33.3%);
}

#baja-local {
  left: 0%;
}

#baja-visita {
  right: 0%;
}

.area-central .media {
  position: absolute;
  z-index: 1;
  height: 100%;
  top: 0%;
  width: calc(33.3%);
}

#media-local {
  left: 33.3%;
}

#media-visita {
  right: 33.3%;
}

.area-central .delantera {
  position: absolute;
  z-index: 1;
  height: 100%;
  top: 0%;
  width: calc(33.3%);
}

#alta-local {
  left: 66.6%;
}

#alta-visita {
  right: 66.6%;
}

.circulo {
  position: absolute;
  z-index: 1;
  width: calc(6.5%);
  height: 100%;
  top: 0%;
}

#circulo-local {
  left: 43%;
}

#circulo-visita {
  right: 43%;
}

.jugadores {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.jugador {
  position: relative;
  z-index: 10;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid white;
  line-height: 0;
}

.jugador .dorsal {
  position: absolute;
  top: 55%;
  left: 48%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
}

.jugador .nombre {
  z-index: 50;
  position: absolute;
  bottom: -45%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  white-space: nowrap;
}

.equipo-local .jugador {
  background-color: #2590e7;
}

.equipo-visita .jugador {
  background-color: #f72a2a;
}
</style>

