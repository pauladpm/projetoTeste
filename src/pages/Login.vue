<template lang="pug">
  .login
    FlyerBox.flyer-box
      Button.button(slot='header', v-on:click='teste()' :label="'Cadastro'")
      .title(slot='body-title')
        |Bem vindo(a)
      form.form(slot='body')
        Input.input(type='text', placeholder="Usuário*")
        Input.input(type='password', placeholder="Senha*")
      Button.button(slot='footer', v-on:click='teste()', :label="'Entrar'", :kind="'left'")
        Icon(slot='icon', :name="'coffee'")
      Button.button(slot='footer', v-on:click='teste()', :kind="'unique'")
        Icon(slot='icon', :name="['far','angry']")
      Button.button(slot='footer', v-on:click='teste()', :label="'cancelar'", :kind="'right'")
        Icon(slot='icon', :name="'flag'", class="'far-flag'")
</template>

<script>

export default {
  name: 'Login',
  methods: {
    testo () {
      alert('ss ')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

.flyer-box {
  background-color: white;
  height: 300px;
  width: 300px;
}
.title {
  text-align: center;
  font-family: 'Titillium Web', sans-serif;
  font-size: 130%;
}
.form {
/*   float: right;
  left: -50%;
  position: relative; */
  text-align: center;
}
.input {
/*   display: block;
  left: 50%;
  position: relative; */
}
</style>
