<template lang="pug">
  awesome-icon.icon(:icon='name')
</template>

<script>
// how to use: Icon(:name="['far','angry']")  or  Icon(:name="'angry'")

export default {
  name: 'Icon',
  props: {
    name: {
      type: [String, Array],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

.icon {
  padding: 0 $padding-space/2;
}
</style>
