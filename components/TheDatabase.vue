<template>
  <div>
    <b-container> 
        <TheHeading text="Databáze" />
        <TheTables />
    </b-container> 
  </div>
</template>

<script>
import TheHeading from './TheHeading.vue'
import TheTables from './TheTables.vue'
export default {
  components: { TheHeading, TheTables },
  name: 'TheDatabase'
}
</script>
