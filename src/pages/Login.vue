<template lang="pug">
  .login
    FlyerBox.flyer-box
      .header(slot='header')
        Button.header-button(
          v-on:click.native="loginChange('login')",
          :label="'Logar-se'",
          :kind="'left'",
          :class="['header-button', { active: currentTab === 'login' }]")
        Button.header-button(
          v-on:click.native="loginChange('signup')",
          :label="'Inscrever-se'",
          :kind="'right'",
          :class="[{ active: currentTab === 'signup' }]")
      .body-title(slot='body-title', v-if="currentTab === 'login'")
        | Bem vindo(a)
      .body-title(slot='body-title', v-else)
        | Cadastre-se
      .body(slot='body', v-if="currentTab === 'login'")
        form.form
          Input.input(
            type='text',
            placeholder="Usuário*")
          Input.input(
            type='password',
            placeholder="Senha*")
      .body(slot='body', v-if="currentTab === 'signup'")
        form.form
          Input.input(
            type='text',
            placeholder="E-mail*")
          Input.input(
            type='text',
            placeholder="Usuário*")
          Input.input(
            type='password',
            placeholder="Senha*")
      .footer(slot='footer')
        Button(
          v-on:click.native='signin()',
          :label="buttonLabel")
          Icon(slot='icon', :name="'sign-in-alt'")
    BarChart.graphic
    LineChart.graphic
</template>

<script>
import BarChart from '@/components/BarChart'
import LineChart from '@/components/LineChart'

export default {
  components: {
    BarChart,
    LineChart
  },
  name: 'Login',
  data: () => ({
    currentTab: 'login',
    buttonLabel: 'ENTRAR'
  }),
  methods: {
    loginChange (currentTab) {
      this.currentTab = currentTab
    },
    signin () {
      if (this.currentTab === 'signup') {
        this.currentTab = 'login'
      } else {
        console.log('kk')
      }
    }
  },
  watch: {
    currentTab () {
      this.currentTab === 'signup'
        ? this.buttonLabel = 'SEGUIR'
        : this.buttonLabel = 'ENTRAR'
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
.graphic {
  float: right;
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
.header-button.active {
    background-color: $active-tab-color;
}
</style>
