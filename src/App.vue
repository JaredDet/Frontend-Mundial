<template>
  <v-app>
    <v-main>
      <AlineacionesInfo />
    </v-main>
  </v-app>
</template>

<script>
import AlineacionesInfo from "./components/AlineacionesInfo.vue";

export default {
  name: "App",

  components: {
    AlineacionesInfo,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
}

</style>
