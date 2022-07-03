<template>
  <div>
    <D3PieChart
      :config="pie_config"
      :datum="pie_data"
      :height="600"
    ></D3PieChart>
  </div>
</template>

<script>
import { D3PieChart } from 'vue-d3-charts'

export default {
  name: 'D3Pie',
  props: ['x'],
  components: {
    D3PieChart,
  },
  data() {
    return {
      pie_config: {
        key: 'title',
        value: 'occurances',
        color: { scheme: 'schemeTableau10' },
        radius: {
          inner: false,
          outter: false,
          padding: 0,
          round: 0,
        },
        transition: {
          duration: 350,
          ease: 'easeLinear',
        },
        pie_data: this.assignPieData(),
      },
    }
  },
  methods: {
    assignPieData() {
      this.x.sort((a, b) => b.occurances - a.occurances)
      this.pie_data = this.x.slice(0, 10)
    },
  },
}
</script>
