<template>
  <v-container class="padre">
    <AlineacionesInfo class="hijo"></AlineacionesInfo>
    <SuplentesInfo class="hijo"></SuplentesInfo>
    <TecnicosInfo class="hijo"></TecnicosInfo>
  </v-container>
</template>

<script>
import AlineacionesInfo from "@/components/alineaciones/AlineacionesInfo.vue";
import SuplentesInfo from "@/components/suplentes/SuplentesInfo.vue";
import TecnicosInfo from "@/components/tecnicos/TecnicosInfo.vue";

export default {
  components: {
    AlineacionesInfo,
    SuplentesInfo,
    TecnicosInfo,
  },
};
</script>

<style scoped>
.padre {
  width: 920px;
}

.hijo {
  margin-bottom: 10px;
}
</style>