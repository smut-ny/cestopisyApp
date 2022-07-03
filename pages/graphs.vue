<template>
  <div>
    <Navbar />
    <b-container>
      <Plotly
        :x="magazines.data.map((x) => x.title)"
        :y="magazines.data.map((x) => x.occurances)"
        :metadata="magazines.metadata"
      />
      <D3Pie :x="magazines.data" />
      <Plotly
        :x="yearPublished.data.map((x) => x.title)"
        :y="yearPublished.data.map((x) => x.occurances)"
        :metadata="yearPublished.metadata"
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
        metadata: {
          title: 'Počet časopisů',
          description:
            'Grafy vizualizují v jakých časopisech byly cestopisné články sesbírány, v koláčovém grafu je zobrazen výběr deseti nejčetnějších časopisů.',
        },
        data: this.generateMagazineData(this.$store.state.database),
      },
      yearPublished: {
        metadata: {
          title: 'V jakém roce byly články vydány',
          description:
            'Graf zobrazuje počet sesbíraných cestopisů v průřezu let od počátku devatenáctého století po rok 1918.',
        },
        data: this.generateYearPublishedData(this.$store.state.database),
      },
    }
  },
  methods: {
    onlyUnique(value, index, self) {
      return self.indexOf(value) === index
    },
    generateMagazineData(database) {
      const titles = []

      // Destructure titles
      for (const { 'container-title': title } of database) {
        titles.push(title)
      }

      return this.$Rtable(titles)
    },
    generateYearPublishedData(database) {
      const years = []

      for (const { issued: title } of database) {
        if (title != undefined) {
          years.push(...title['date-parts'][0])
        }
      }

      // Clean bad data
      let data = this.$Rtable(years)
      data = data.filter((e) => {
        return e.title > 1700
      })

      return data
    },
  },
}
</script>
