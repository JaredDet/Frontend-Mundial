<template>
  <div class="circulo">
    <span class="dorsal">{{ dorsal }}</span>
  </div>
</template>

<script>
export default {
  name: "CirculoFutbol",

  props: {
    dorsal: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.circulo {
  position: relative;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid white;
}

.dorsal {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>