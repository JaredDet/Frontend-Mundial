<template>
  <span :class="'flag-icon fi-' + pais"></span>
</template>

<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
  name: "BanderaFutbol",

  props: {
    pais: {
      type: String,
      required: false,
      default: 'xx'
    },
  },
};
</script>