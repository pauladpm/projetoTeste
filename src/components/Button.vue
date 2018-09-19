<template lang="pug">
  button.button
    | {{ label }}
    slot.icon(name='icon')
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

.button {
  font-family: inherit;
  background: rgb(255, 255, 255);
  border: 1.5px solid $border-color;
  border-radius: 3px;
  margin: 10px;
  padding: 5px;
}
.button:hover {
  background: rgba(216, 255, 255, 0.6);
}
.button:focus {
  background-color:rgb(215, 255, 255);
}
.icon {
  color: red;
}
</style>
