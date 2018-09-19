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
    border: 1px solid $border-color;
    border-radius: 3px;
    height: 350px;
    padding: 5px;
    width: 250px;
  }

  .header {
    height: 25%;
  }

  .body {
    height:50%;
  }

  .footer {
    height: 25%;
  }
</style>
