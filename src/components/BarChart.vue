
<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['labels', 'data'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f17119',
          data: this.data
        }
      ]
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
