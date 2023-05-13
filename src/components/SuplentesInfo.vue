<template>
  <v-container>
    <v-row class="justify-center">
      <v-col>
        <div>
          <span
            :class="'flag-icon fi fi-' + local.bandera"
            class="bandera-suplentes separar-titulos"
          ></span>
        </div>
        <div
          v-for="(jugador, index) in local.jugadores"
          :key="index"
          style="position: relative"
        >
          <span>{{ jugador.dorsal }} {{ jugador.nombre }} </span>
          <TarjetaFutbol v-if="tieneTarjetas(jugador)" :jugador="jugador" class="suplentes-container-tarjeta">
          </TarjetaFutbol>
          <FlechaFutbol
            v-if="entroSalio(jugador)"
            :verde="jugador.entro"
            :roja="jugador.salio"
          ></FlechaFutbol>
        </div>
      </v-col>
      <v-col class="text-center">
        <div class="titulo separar-titulos">
          <span>{{ titulo.nombre }}</span>
        </div>
      </v-col>
      <v-col class="text-right">
        <div>
          <span
            :class="'flag-icon flag-icon-squared fi fi-' + visita.bandera"
            class="bandera-suplentes separar-titulos"
          ></span>
        </div>
        <div
          v-for="(jugador, index) in visita.jugadores"
          :key="index"
          class="jugador"
        >
          <FlechaFutbol
            v-if="entroSalio(jugador)"
            :espejo="true"
            :verde="jugador.entro"
            :roja="jugador.salio"
          ></FlechaFutbol>
          <span v-if="tieneTarjetas(jugador)">
            <TarjetaFutbol :jugador="jugador" :espejo="true" class="suplentes-container-tarjeta"> </TarjetaFutbol>
          </span>
          <span> {{ jugador.nombre }} {{ jugador.dorsal }}</span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import TarjetaFutbol from "./TarjetaFutbol.vue";
import FlechaFutbol from "./FlechaFutbol.vue";

export default {
  components: {
    TarjetaFutbol,
    FlechaFutbol,
  },
  data() {
    return {
      local: {
        bandera: "br",
        jugadores: [
          {
            dorsal: "5",
            nombre: "Fernandinho",
            tarjetaAmarilla: true,
            entro: true,
          },
          { dorsal: "7", nombre: "Hulk", entro: true },
          { dorsal: "18", nombre: "Hernanes", entro: true },
          { dorsal: "1", nombre: "Jefferson de Oliveira"},
          { dorsal: "2", nombre: "Dani Alves" },
          { dorsal: "6", nombre: "Marcelo Vieira"},
          { dorsal: "9", nombre: "Fred" },
          { dorsal: "13", nombre: "Dante Bonfim" },
          { dorsal: "15", nombre: "Henrique Adriano Buss" },
          { dorsal: "20", nombre: "Bernand" },
          { dorsal: "22", nombre: "Victor Leandro Bagy" },
        ],
      },
      titulo: { nombre: "Suplentes" },
      visita: {
        bandera: "nl",
        jugadores: [
          { dorsal: "7", nombre: "Daryl Janmaat", tarjetaRoja: true, entro: true },
          { dorsal: "13", nombre: "Joel Veltman", entro: true },
          { dorsal: "22", nombre: "Michel Vorm", entro: true },
          { dorsal: "12", nombre: "Paul Verhaegh" },
          { dorsal: "14", nombre: "Terence Kongolo" },
          { dorsal: "17", nombre: "Jeramain Lens" },
          { dorsal: "19", nombre: "Klaas-Jan Huntelaar" },
          { dorsal: "21", nombre: "Memphis Depay" },
          { dorsal: "23", nombre: "Tim Krul" },
        ],
      },
    };
  },
  methods: {
    tieneTarjetas(jugador) {
      return "tarjetaAmarilla" in jugador || "tarjetaRoja" in jugador;
    },
    entroSalio(jugador) {
      return "entro" in jugador || "salio" in jugador;
    },
  },
};
</script>

<style>
.bandera-suplentes {
  border: 0.1rem solid white;
  font-size: 1.2rem;
  box-sizing: content-box;
  padding: 0.05rem;
}

.titulo {
  letter-spacing: 0.05rem;
  white-space: nowrap;
  font-size: 1.2rem;
}

.separar-titulos {
  margin-bottom: 0.55rem;
}

.suplentes-container-tarjeta {
  transform: translateY(3px);
}

</style>  