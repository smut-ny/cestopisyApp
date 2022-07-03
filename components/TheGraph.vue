<template>
  <div>
    <D3PieChart :config="chart_config" :datum="chart_data"></D3PieChart>
  </div>
</template>

<script>
import { D3PieChart } from 'vue-d3-charts'

export default {
  name: 'TheGraph',
  components: {
    D3PieChart,
  },
  data() {
    return {
      chart_config: {
        key: 'title',
        value: 'occurances',
        color: {scheme: 'schemeTableau10'},
        radius: {inner: 80}
      },
      database: this.$store.state.database,
      chart_data: {},
    }
  },
  methods: {
    onlyUnique(value, index, self) {
      return self.indexOf(value) === index
    },
    countOccuranceInArray(array, name){
        var count = 0;
        
        array.forEach( e => {
            if(e == name) count ++;
        })

        return { title: name, occurances: count };
    },
    generateChartData(database) {
      const titles = []
      const final_data = []

    // Destructure titles
      for (const { 'container-title': title } of database) {
        titles.push(title)
      }

      let titleNames = titles.filter(this.onlyUnique)

      titleNames.forEach(titleName => {
        if(titleName != undefined){
            final_data.push(this.countOccuranceInArray(titles, titleName))
        }
      })

      this.chart_data = final_data
    },
  },
  mounted() {
    this.generateChartData(this.database)
  },
}
</script>
