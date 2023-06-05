<template>
  <div class="equipo" :class="{ espejo: espejo }">
    <BanderaFutbol
      :pais="equipo.bandera"
      class="bandera"
      :class="{ espejo: espejo }"
    ></BanderaFutbol>
    <span class="texto" :class="{ espejo: espejo }">{{ equipo.nombre }}</span>
  </div>
</template>

<script>
import BanderaFutbol from "@/components/BanderaFutbol.vue";

export default {
  name: "EquipoFormacionInfo",
  components: {
    BanderaFutbol,
  },
  props: {
    equipo: {
      type: Object,
      required: true,
    },
    espejo: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>

.equipo {
  display: flex;
}

.equipo.espejo {
  flex-direction: row-reverse;
}

.bandera {
  position: relative;
  border: 0.1rem solid white;
  font-size: 1.2rem;
  box-sizing: content-box;
  padding: 0.05rem;
  margin-right: 1.3rem;
  top: 0.01rem;
  width: 1.33333333em;
  height: 1em;
}

.bandera.espejo {
  margin-right: 0;
}

.texto {
  display: inline-block;
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
}

.texto.espejo {
  margin-right: 1.3rem;
}
</style>