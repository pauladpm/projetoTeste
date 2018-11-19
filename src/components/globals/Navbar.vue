<template lang="pug">
  .nav
    .one
      slot(name='one')
    .two
      slot(name='two')
    .three
      slot(name='three')
    .four
      slot(name='four')
    .five
      slot(name='five')
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

  .nav {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1em;
    align-items: center;
    text-align: center;
    border: $border-size solid $border-color;
  }

  .one {
    grid-column: 1;
  }
  .two {
    grid-column: 2;
  }
  .three {
    grid-column: 3;
  }
  .four {
    grid-column: 4;
  }
  .five {
    grid-column: 5;
  }
</style>
