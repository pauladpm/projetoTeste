<template lang="pug">
  .search
    Input.input(
      type='text',
      placeholder="Procurar*")
    Button.button(
      v-on:click.native='func()')
      Icon(slot='icon', :name="'search'")
</template>
<script>

export default {
  name: 'Search'
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

.search {
  font-family: inherit;
  background: rgba(255, 255, 255, 0.8);
  border: $border-size solid $border-color;
  border-radius: $border-size * 5;
}
.input {
  all: none;
}
.input, button {
  border: none !important;
  margin: 0 !important;
}
</style>
