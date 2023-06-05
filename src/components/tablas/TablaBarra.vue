<template>
  <v-container>
    <div class="contenedor">
      <BanderaFutbol :pais="'nl'" class="bandera"></BanderaFutbol>
      <BanderaFutbol :pais="'ch'" class="bandera"></BanderaFutbol>
      <BanderaFutbol :pais="'es'" class="bandera"></BanderaFutbol>
      <BanderaFutbol :pais="'au'" class="bandera"></BanderaFutbol>
    </div>
    <img :src="require('@/assets/B.svg')" class="grupo" />
  </v-container>
</template>

<script>
import BanderaFutbol from "../BanderaFutbol.vue";

export default {
  components: {
    BanderaFutbol,
  },
};
</script>

<style scoped>
.contenedor {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: dense;
  margin-top: 20px;
  margin-left: 30px;
  width: 100px;
  height: 100px;
}

.bandera {
  position: relative;
  font-size: 3rem;
  box-sizing: content-box;
  padding: 0.05rem;
  top: 0.01rem;
  width: 1.33333333em;
  height: 1em;
  border: 2px solid #dedede;
}

.grupo {
  position: absolute;
  width: 65px;
  height: 65px;
  top: 55px;
  left: 242px;
}
</style>