<template>
  <v-container>
    <v-card class="carta">
      <v-card-title
        class="d-flex justify-space-between carta-ajuste carta-titulo"
      >
        <div>
          <TarjetaFutbol
            :recta="true"
            :jugador="{ tarjetaRoja: true }"
            class="icono tarjeta"
          ></TarjetaFutbol>
          <span class="titulo">Tarjeta Roja</span>
        </div>
        <span>120'</span>
      </v-card-title>
      <JugadorCronologia :estado="entra"></JugadorCronologia>
    </v-card>

    <v-card class="carta">
      <v-card-title
        class="d-flex justify-space-between carta-ajuste carta-titulo"
      >
        <div>
          <FlechaFutbol :cambio="true" class="icono"></FlechaFutbol>
          <span class="titulo">Cambio</span>
        </div>
        <span>120'</span>
      </v-card-title>
      <JugadorCronologia :estado="entra"></JugadorCronologia>
      <JugadorCronologia :estado="sale"></JugadorCronologia>
    </v-card>

    <v-card class="carta">
      <v-card-title class="d-flex flex-column justify-center align-center carta-negra">
        <PelotaFutbol :cambio="true" class="icono pelota"></PelotaFutbol>
        <span class="titulo gol">¡gooool!</span>
        <span class="minuto">120'</span>
      </v-card-title>
      <JugadorCronologia :estado="entra"></JugadorCronologia>
    </v-card>
  </v-container>
</template>

<script>
import TarjetaFutbol from "../TarjetaFutbol.vue";
import FlechaFutbol from "../FlechaFutbol.vue";
import JugadorCronologia from "./JugadorCronologia.vue";
import PelotaFutbol from "../PelotaFutbol.vue";

export default {
  name: "InfoCronologia",
  components: {
    TarjetaFutbol,
    FlechaFutbol,
    JugadorCronologia,
    PelotaFutbol,
  },
};
</script>

<style scoped>
.carta {
  background: inherit;
  color: inherit;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  margin: 50px;
}

.carta-titulo {
  margin-top: 5px;
  margin-bottom: 5px;
}

.titulo {
  letter-spacing: 0.07rem;
}

.carta-ajuste {
  padding-left: 15px;
  padding-right: 30px;
}

.icono {
  position: relative;
  width: 25px;
  height: 25px;
  margin-right: 15px;
  top: 5px;
}

.icono.pelota {
  margin-right: 0;
  margin-bottom: 10px;
  margin-top: 5px;
  width: 32px;
  height: 32px;
}

.icono.tarjeta {
  width: 18px;
  border: 2px solid #d2d2d2;
  border-radius: 25%;
}

.gol {
  font-size: 1.5em;
  color: white;
}

.minuto {
  font-size: 1.2em;
  color: white;
}

.carta-negra {
  background-color:black;
  margin-bottom: 30px;
}
</style>