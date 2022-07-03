<template>
  <div>
    <h5>{{ metadata.title }}</h5>
    <p>{{ metadata.description }}</p>
    <div ref="bar" style="width: 100%; height: auto"></div>
  </div>
</template>

<script>
export default {
  name: 'Plotly',
  props: ['x', 'y', 'metadata'],
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
