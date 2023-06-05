<template>
  <v-card-text class="contenedor">
    <div class="izquierda">
      <span class="nombre">Per Mertesacker</span>
      <BanderaFutbol class="bandera" :pais="'de'"></BanderaFutbol>
      <span class="pais">Alemania</span>
    </div>
    <CirculoFutbol :dorsal="17" class="derecha"></CirculoFutbol>
  </v-card-text>
</template>

<script>
import BanderaFutbol from "../BanderaFutbol.vue";
import CirculoFutbol from "../CirculoFutbol.vue";
export default {
  name: "TarjetaCronologia",
  components: {
    BanderaFutbol,
    CirculoFutbol,
  },
};
</script>

<style scoped>
.contenedor {
  display: flex;
  justify-content: space-between;
}

.izquierda {
  text-align: left;
}

.derecha {
  text-align: right;
  font-size: 1.7em;
  margin-right: 8px;
}

.entra {
  color: #188d1c;
  font-size: 1.15em;
  letter-spacing: 0.05rem;
  margin-bottom: 5px;
  display: flex;
}

.nombre {
  font-size: 1.2em;
  margin-bottom: 3px;
  display: flex;
}

.bandera {
  display: inline-block;
  position: relative;
  border: 0.1rem solid white;
  font-size: 0.7rem;
  box-sizing: content-box;
  padding: 0.05rem;
  margin-right: 0.5rem;
  top: 0.25rem;
  left: 0.2rem;
  width: 1.33333333em;
  height: 0.92em;
}

.pais {
  font-size: 0.9em;
}

.sale {
  color: #9c1a38;
  font-size: 1.15em;
  letter-spacing: 0.05rem;
  margin-bottom: 5px;
}

</style>