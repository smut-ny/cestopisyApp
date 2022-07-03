<template>
  <div>
    <D3PieChart :config="pie_config" :datum="x" :height="600"></D3PieChart>
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
      },
    }
  },
}
</script>
