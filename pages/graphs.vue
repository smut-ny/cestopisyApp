<template>
  <div>
    <Navbar />
    <b-container>
      <h1>D3 Package <small>vue package</small></h1>
      <D3Pie :x="magazines.data" />

      <h1>Plotly <small>Non-vue package</small></h1>
      <Plotly
        :x="magazines.data.map((x) => x.title)"
        :y="magazines.data.map((x) => x.occurances)"
        :title="magazines.metadata.title"
      />
      <Plotly
        :x="yearPublished.data.map((x) => x.title)"
        :y="yearPublished.data.map((x) => x.occurances)"
        :title="yearPublished.metadata.title"
      />
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Graphs',
  data() {
    return {
      magazines: {
        metadata: { title: 'Počet časopisů' },
        data: this.generateMagazineData(this.$store.state.database),
      },
      yearPublished: {
        metadata: { title: 'V jakém roce byly články vydány' },
        data: this.generateYearPublishedData(this.$store.state.database),
      },
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
    Rtable(data) {
      const table = []
      let titleNames = data.filter(this.onlyUnique)

      titleNames.forEach((titleName) => {
        if (titleName != undefined) {
          table.push(this.countOccuranceInArray(data, titleName))
        }
      })

      return table
    },
    generateMagazineData(database) {
      const titles = []

      // Destructure titles
      for (const { 'container-title': title } of database) {
        titles.push(title)
      }

      return this.Rtable(titles)
    },
    generateYearPublishedData(database) {
      const years = []

      for (const { issued: title } of database) {
        if (title != undefined) {
          years.push(...title['date-parts'][0])
        }
      }

      // Clean bad data
      let data = this.Rtable(years)
      data = data.filter((e) => {
        return e.title > 1700
      })

      return data
    },
  },
}
</script>
