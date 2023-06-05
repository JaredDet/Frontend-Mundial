<template>
  <v-container class="padre">
    <TablaInfo
      v-for="(grupo, index) in grupos"
      :key="index"
      :grupoCargado="grupo"
    ></TablaInfo>
    <span class="clasifica green-border">Clasifica a la siguiente fase</span>
  </v-container>
</template>

<script>
import TablaInfo from "@/components/tablas/TablaInfo.vue";

export default {
  components: {
    TablaInfo,
  },
  data() {
    return {
      grupos: ["A", "B", "C", "D", "E", "F", "G", "H"],
    };
  },
};
</script>

<style scoped>
.padre {
  width: 1100px;
}

.clasifica {
  display: flex;
  margin-top: 20px;
  font-size: 1.1em;
  letter-spacing: 0.05em;
}

.green-border {
  position: relative;
}

.green-border::before {
  content: "";
  position: absolute;
  top: -1px;
  left: -20px;
  height: 103%;
  width: 5px;
  background-color: #91c714;
}

.bandera {
  display: inline-block;
  position: relative;
  font-size: 10rem;
  box-sizing: content-box;
  padding: 0.05rem;
  margin-right: 0.7rem;
  top: 0.3rem;
  width: 1.33333333em;
  height: 1em;
}
</style>