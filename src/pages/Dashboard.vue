<template lang="pug">
  .dashboard
    FlyerBox.flyer-box
      .header(slot='header')
        Navbar.navbar
          .grid-one(slot='one')
            Button.button(
              v-on:click.native='refresh()',
              :label="'HOME '")
          .grid-three(slot='three')
            Icon(:name="'cocktail'")
          .grid-four(slot='four')
            Search.search
          .grid-five(slot='five')
            Button.button(
              v-on:click.native='signout()',
              :label="'SAIR '")
              Icon(slot='icon', :name="'sign-out-alt'")
</template>

<script>
export default {
  methods: {
    signout () {
      console.log('saiu')
    },
    refresh () {
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

.flyer-box {
  position: absolute;
  left: 4%;
  height: 680px;
  width: 90%;
}
.navbar {
  height: 30px;
}
.button {
  border: none !important;
}
</style>
