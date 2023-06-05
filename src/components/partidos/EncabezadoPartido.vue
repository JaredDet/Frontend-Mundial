<template>
  <header class="header">
    <span class="fecha">{{ fecha }}</span>
  </header>
</template>

<script>
export default {
  name: "EncabezadoPartido",
  props: {
    fecha: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  text-align: left;
}

.fecha {
  display: inline-block;
  position: relative;
  left: 20px;
  top: 15px;
  word-wrap: break-word;
  white-space: nowrap;
  margin: 0 auto;
  font-size: 1.4rem;
  margin-bottom: 27px;
  letter-spacing: 0.02rem;
}
</style>