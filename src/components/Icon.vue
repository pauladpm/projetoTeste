<template lang="pug">
  awesome-icon.icon(:icon='name')
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

.icon {
  color: rgb(63, 63, 63);
}
.icon:hover {
  background: rgba(216, 255, 255, 0.6);
}
.icon:focus {
  background-color:rgb(215, 255, 255);
}
</style>
