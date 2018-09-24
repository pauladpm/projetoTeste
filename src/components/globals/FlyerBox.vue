<template lang="pug">
  .flyerBox
    .header
      slot(name='header')
    .body
      slot(name='body-title')
      slot(name='body')
    .footer
      slot(name='footer')
</template>

<script>

</script>

<style lang="scss" scoped>
  @import "@/assets/styles/style.scss";

  .flyerBox {
    border: $border-size solid $border-color;
    border-radius: $border-radius;
    padding: $padding-space;
  }

  .header {
    height: 25%;
  }

  .body {
    height: 50%;
  }

  .footer {
    height: 25%;
  }
</style>
