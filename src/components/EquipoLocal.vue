<template>
  <v-col>
    <v-row>
      <v-col id=columna-personalizada-local>
        <span :class="'fi fi-' + codigo + ' bandera-local'"></span>
        <span class="separador"></span>
      </v-col>
      <v-col>
        <span class="goles-local">{{ goles }}</span>
      </v-col>
    </v-row>
    <v-row id="fila-personalizada-local">
      <v-col>
        <div class="nombre-container-local">
          <span class="nombre-local">{{ nombre }}</span>
        </div>
      </v-col>
      <v-col class="contenedor-fase"
        ><span>{{ fase }}</span>
      </v-col>
    </v-row>
    <v-row
      class="fila-jugador-local"
      v-for="(jugador, index) in jugadores"
      :key="index"
      dense
    >
      <v-col class="goleador-local">
        <span>{{ jugador.nombre }}</span>
        <span class="ml-2-local">{{ jugador.minuto }}</span>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  props: {
    nombre: {
      type: String,
      required: true,
    },
    codigo: {
      type: String,
      required: true,
    },
    goles: {
      type: Number,
      required: true,
    },
    fase: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      jugadores: [{ nombre: "Oscar", minuto: "90'" }],
    };
  },
};
</script>

<style>
.bandera-local {
  margin-top: 0.0625rem;
  font-size: 5em;
}

.goles-local {
  font-size: 3.5rem;
  color: #3e3e42;
}

.nombre-container-local {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 48%;
}

.nombre-local {
  font-size: 1.5rem;
  text-align: center;
  max-width: 100%;
  color: #3e3e42;
  word-wrap: break-word;
  line-height: 1.4rem;
  margin-top: 0.4375rem;
}

#fila-personalizada-local {
  margin-top: -1.7em;
}

#columna-personalizada-local {
  margin-right: 0.93em;
}

.ml-2-local {
  margin-left: 0.25rem;
}

.fila-jugador-local {
  font-size: 0.6rem;
}

.fila-jugador-local:not(:last-child) {
  margin-bottom: -1rem;
}

.goleador-local {
  margin-left: 0.3rem;
}

.contenedor-fase {
  position: absolute;
  top: 80%;
  left: 50.6%;
  transform: translateY(-80%) translateX(-50.6%);
  border: 0.1875rem solid #3e3e42;
  border-radius: 0.625rem;
  width: auto;
  height: 2.5rem;
  padding: 0.3125rem 1.25rem;
  line-height: 1.8rem;
  font-size: 1.7rem;
  color: #3e3e42;
}

.separador {
  position: absolute;
  bottom: 61%;
  left: 50%;
  transform: translateY(-61%) translateX(-50%);
  border-top: 0.3125rem solid #3e3e42;
  width: 1.875rem;
}
</style>