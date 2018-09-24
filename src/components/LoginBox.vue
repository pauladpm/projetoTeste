<template lang="pug">
  .loginBox
    .header
      slot(name='header')
    .body
      slot(name='body-title')
      slot(name='body')
    .footer
      slot(name='footer')
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/style.scss";

  .loginBox {
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
