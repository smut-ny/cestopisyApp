<template>
  <div>
    <b-container> 
        <TheHeading text="Databáze" />
        {{ $store.state.database }}
    </b-container>
  </div>
</template>

<script>
import TheHeading from './TheHeading.vue'
export default {
  components: { TheHeading },
  name: 'TheDatabase'
}
</script>
