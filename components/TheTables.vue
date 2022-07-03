<template>
  <vuetable
    ref="vuetable"
    :fields="fields"
    :api-mode="false"
    :data="data"
  ></vuetable>
</template>

<script>
import Vuetable from 'vuetable-2'

export default {
  components: {
    Vuetable,
  },
  data() {
    return {
      data: this.$store.state.database,
      fields: [
        {
          name: "title",
          title: "Článek"
        },
        {
          name: "author",
          title: "Autor"
        },
        {
          name: "container-title",
          title: "Časopis"
        }
      ]
    }
  },
  mounted() {
    console.log(this.data)
  },
}
</script>
