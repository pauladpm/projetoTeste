<template lang="pug">
  .login
    LoginBox.login-box
      button.button(slot='header', v-on:click='teste()')
        | Cadastro
      .title(slot='body-title')
        |Bem vindo(a)
      form.form(slot='body')
        input.input(type='text', placeholder="Usuário*")
        input.input(type='password', placeholder="Senha*")
      button.button(slot='footer', v-on:click='teste()')
        | Entrar
</template>

<script>
import Background from '@/components/Background'
import LoginBox from '@/components/LoginBox'

export default {
  name: 'Login',
  components: {
    LoginBox,
    Background
  },
  methods: {
    testo () {
      alert('ss ')
    }
  }
}
</script>

<style scoped>

.login-box {
  background-color: rgb(216, 233, 233);
}
.title {
  text-align: center;
  font-size: 130%;
}
.button {
  font-family: inherit;
  background: rgb(255, 255, 255);
  border: 1.5px solid rgb(142, 199, 199);
  border-radius: 3px;
  margin: 10px;
  padding: 5px;
}
.button:hover {
  background: rgb(157, 247, 247, 0.6);
}
.button:focus {
  background-color:rgb(215, 255, 255);
}
.form {
  text-align: center;
}
.input {
  font-family: inherit;
  background: rgba(255, 255, 255, 0.8);
  border: 1.5px solid rgb(142, 199, 199);
  border-radius: 2px;
  margin: 10px 0 10px 0;
  padding: 5px;
}

</style>
