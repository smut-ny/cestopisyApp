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
      database: this.$store.state.database,
      pie_data: {},
    }
  },
  methods: {
    onlyUnique(value, index, self) {
      return self.indexOf(value) === index
    },
    countOccuranceInArray(array, name) {
      var count = 0

      array.forEach((e) => {
        if (e == name) count++
      })

      return { title: name, occurances: count }
    },
    generateChartData(database) {
      const titles = []
      const final_data = []

      // Destructure titles
      for (const { 'container-title': title } of database) {
        titles.push(title)
      }

      let titleNames = titles.filter(this.onlyUnique)

      titleNames.forEach((titleName) => {
        if (titleName != undefined) {
          final_data.push(this.countOccuranceInArray(titles, titleName))
        }
      })

      this.pie_data = final_data
    },
  },
  beforeMount() {
    this.generateChartData(this.database)
  },
}
</script>
