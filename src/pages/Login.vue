<template lang="pug">
  .login
    Background.background
    LoginBox.login-box
</template>

<script>
import Background from '@/components/Background'
import LoginBox from '@/components/LoginBox'

export default {
  name: 'Login',
  components: {
    LoginBox,
    Background
  }
}
</script>

<style scoped>

.background {
  color: blue;
}
.login-box {
  align-content: center;
}

</style>
