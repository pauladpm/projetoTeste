<template lang="pug">
  input.input
</template>
<script>

export default {
  name: 'Input'
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

.input {
  font-family: inherit;
  background: rgba(255, 255, 255, 0.8);
  border: $border-size solid $border-color;
  border-radius: $border-size;
  margin: 10px 0 10px 0;
  padding: $padding-space;
}
</style>
