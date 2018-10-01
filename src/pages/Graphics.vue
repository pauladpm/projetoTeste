<template lang="pug">
  .graphic
    BarChart(:labels='labels', :data='data')
    LineChart
</template>

<script>
import BarChart from '@/components/BarChart'
import LineChart from '@/components/LineChart'

export default {
  components: {
    BarChart,
    LineChart
  },
  data: () => ({
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    data: [40, 39, 10, 40, 39, 80, 40]
  })
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

.graphic {
  display: inline-flex;
  height: 350px;
  width: 300px;
}
</style>
