<template lang="pug">
  .login
    FlyerBox.flyer-box
      .header(slot='header')
        Button.header-button(
          v-on:click='teste()',
          :label="'Logar-se'",
          :kind="'left'")
        Button.header-button(
          v-on:click='teste()',
          :label="'Inscrever-se'",
          :kind="'right'")
      .body-title(slot='body-title')
        |Bem vindo(a)
      .body(slot='body')
        form.form
          Input.input(
            type='text',
            placeholder="Usuário*")
          Input.input(
            type='password',
            placeholder="Senha*")
      .footer(slot='footer')
        Button(
          v-on:click='teste()',
          :label="'ENTRAR'")
          Icon(slot='icon', :name="'sign-in-alt'")
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
  height: 350px;
  width: 300px;
}
.login {
  text-align: center;
}
.body-title {
  text-align: center;
  font-family: 'Titillium Web', sans-serif;
  font-size: 130%;
}
.header {
  display: block;
}
.header-button{
  width: 40%;
  height: 200%;
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
