<template>
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
          <div
            class="area-central"
            id="area-central-local"
            :style="`grid-template-columns: repeat(${numSecciones(
              'local'
            )}, 1fr)`"
          >
            <JugadoresEquipo
              nombre="medio-centro-defensivo"
              equipo="local"
              :jugadores="local.medioCentroDefensivo"
              class="jugadores"
              v-if="hayJugadoresEnPosicion('local', 'medioCentroDefensivo')"
            />
            <JugadoresEquipo
              nombre="medio-centro"
              equipo="local"
              :jugadores="local.medioCentro"
              class="jugadores"
              v-if="hayJugadoresEnPosicion('local', 'medioCentro')"
            />
            <JugadoresEquipo
              nombre="medio-centro-ofensivo"
              equipo="local"
              :jugadores="local.medioCentroOfensivo"
              class="jugadores"
              v-if="hayJugadoresEnPosicion('local', 'medioCentroOfensivo')"
            />
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
          <div
            class="area-central"
            id="area-central-visita"
            :style="`grid-template-columns: repeat(${numSecciones(
              'visita'
            )}, 1fr)`"
          >
            <JugadoresEquipo
              nombre="medio-centro-defensivo"
              equipo="visita"
              :jugadores="visita.medioCentroDefensivo"
              class="jugadores"
              v-if="hayJugadoresEnPosicion('visita', 'medioCentroDefensivo')"
            />
            <JugadoresEquipo
              nombre="medio-centro"
              equipo="visita"
              :jugadores="visita.medioCentro"
              class="jugadores"
              v-if="hayJugadoresEnPosicion('visita', 'medioCentro')"
            />
            <JugadoresEquipo
              nombre="medio-centro-ofensivo"
              equipo="visita"
              :jugadores="visita.medioCentroOfensivo"
              class="jugadores"
              v-if="hayJugadoresEnPosicion('visita', 'medioCentroOfensivo')"
            />
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
</template>

<script>
import JugadoresEquipo from "./JugadoresEquipo.vue";

export default {
  components: {
    JugadoresEquipo,
  },
  props: {
    local: {
      type: Object,
      required: true,
    },
    visita: {
      type: Object,
      required: true,
    },
  },
  computed: {
    numSecciones() {
      return (equipo) => {
        let num = 0;
        if (this.hayJugadoresEnPosicion(equipo, "medioCentroDefensivo")) {
          num++;
        }
        if (this.hayJugadoresEnPosicion(equipo, "medioCentro")) {
          num++;
        }
        if (this.hayJugadoresEnPosicion(equipo, "medioCentroOfensivo")) {
          num++;
        }
        return num;
      };
    },
    hayJugadoresEnPosicion() {
      return (equipo, posicion) => {
        return this[equipo][posicion].length > 0;
      };
    },
  },
};
</script>

<style scoped>
.distribucion-campo {
  max-width: 900px;
}

.pasto {
  background-image: url(../assets/grass.png);
  background-repeat: repeat;
  height: 75vh;
  position: relative;
  padding: 0 1.6vw;
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
  display: grid;
  width: 21.5%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
}

#area-central-local {
  left: 21.5%;
}

#area-central-visita {
  right: 21.5%;
  direction: rtl;
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
</style>