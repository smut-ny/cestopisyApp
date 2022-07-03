<template>
  <div>
    <h2>{{ this.title }}</h2>
    <div ref="bar" style="width: 100%; height: auto"></div>
  </div>
</template>

<script>
export default {
  name: 'Plotly',
  props: ['x', 'y', 'title'],
  data() {
    return {
      barData: [
        {
          x: this.x,
          y: this.y,
          type: 'bar',
        },
      ],
    }
  },
  mounted() {
    Plotly.newPlot(this.$refs.bar, this.barData)
  },
}
</script>

<style></style>
