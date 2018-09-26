<template lang="pug">
  button.button(:class='classStyle')
    | {{ label }}
    slot(name='icon')
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      required: false
    },
    kind: {
      type: String,
      required: false,
      default: 'simple'
    }
  },
  computed: {
    classStyle () {
      return this.kind
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

.button {
  font-family: inherit;
  background: rgb(255, 255, 255);
  border: $border-size/2 solid $border-color;
  margin: 0.2px;
  padding: $padding-space;
}
.simple {
  border-radius: $border-radius;
}
.middle {
  border-radius: 0px;
}
.right {
  border-bottom-right-radius: $border-radius;
  border-top-right-radius: $border-radius;
}
.left {
  border-bottom-left-radius: $border-radius;
  border-top-left-radius: $border-radius;
}
.button:hover {
  background: rgba(216, 255, 255, 0.6);
}
.button:active {
  background-color:rgb(224, 53, 110);
}
</style>
