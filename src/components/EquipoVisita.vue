<template>
  <v-col>
    <v-row>
      <v-col class="text-right">
        <span class="goles-visita">{{ goles }}</span>
      </v-col>
      <v-col id="columna-personalizada-visita">
        <span :class="'fi fi-' + codigo + ' bandera-visita'"></span>
      </v-col>
    </v-row>
    <v-row id="fila-personalizada-visita">
      <v-col class="text-right">
        <div class="nombre-container-visita">
          <span class="nombre-visita">{{ nombre }}</span>
        </div>
      </v-col>
    </v-row>
    <v-row
      class="fila-jugador-visita"
      v-for="(jugador, index) in jugadores"
      :key="index"
      dense
    >
      <v-col class="goleador-visita">
        <span>{{ jugador.nombre }}</span>
      <span v-if="jugador.minutos.length" class="ml-2-visita">
        {{ jugador.minutos.join(', ') }}
      </span>
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
      default: "",
    },
    codigo: {
      type: String,
      required: true,
      default: "",
    },
    goles: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      jugadores: [
        { nombre: "Thomas Müller", minutos: ["11'"] },
        { nombre: "Miroslav Klose", minutos: ["23'"] },
        { nombre: "Toni Kroos", minutos: ["24'", "26'"] },
        { nombre: "Sami Khedira", minutos: ["29'"] },
        { nombre: "André Schürrle", minutos: ["69'", "79'"] },
      ],
    };
  },
};
</script>

<style>
.bandera-visita {
  margin-top: 0.0625rem;
  font-size: 5em;
}

.goles-visita {
  font-size: 3.5rem;
  color: #3e3e42;
}

.nombre-container-visita {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 92%;
}

.nombre-visita {
  font-size: 1.5rem;
  text-align: center;
  max-width: 50%;
  color: #3e3e42;
  word-wrap: break-word;
  line-height: 1.4rem;
  margin-top: 0.4375rem;
}

#fila-personalizada-visita {
  margin-top: -1.6875rem;
}

#columna-personalizada-visita {
  margin-left: 0.9375rem;
}

.ml-2-visita {
  margin-left: 0.25rem;
}

.fila-jugador-visita {
  font-size: 0.6rem;
}

.fila-jugador-visita:not(:last-child) {
  margin-bottom: -1rem;
}

.goleador-visita {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 0.5rem;
}
</style>