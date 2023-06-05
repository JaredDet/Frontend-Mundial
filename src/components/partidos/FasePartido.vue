<template>
  <span class="fase">{{ fase }}</span>
</template>

<script>
export default {
  name: "FasePartido",
  props: {
    fase: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

.fase {
  display: block;
  position: relative;
  word-wrap: break-word;
  white-space: nowrap;
  letter-spacing: 0.03rem;
  font-size: 1.55rem;
  top: -15px;
}
</style>