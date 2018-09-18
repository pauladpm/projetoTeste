<template lang="pug">
  .login
    LoginBox.login-box
      Button.button(slot='header', v-on:click='teste()' :label="'Cadastro'")
      .title(slot='body-title')
        |Bem vindo(a)
      form.form(slot='body')
        Input.input(type='text', placeholder="Usuário*")
        Input.input(type='password', placeholder="Senha*")
      Button.button(slot='footer', v-on:click='teste()', :label="'Entrar'")
        Icon(slot='icon', icon="'coffee'")
</template>

<script>
import Background from '@/components/Background'
import LoginBox from '@/components/LoginBox'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

export default {
  name: 'Login',
  components: {
    LoginBox,
    Background,
    Input,
    Button,
    Icon
  },
  methods: {
    testo () {
      alert('ss ')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

.login-box {
  background-color: white;
}
.title {
  text-align: center;
  font-family: 'Titillium Web', sans-serif;
  font-size: 130%;
}
.form {
  text-align: center;
}
</style>
