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
          name: 'title',
          title: 'Článek',
        },
        {
          name: 'author',
          title: 'Autor',
          formatter(value) {
            if(value){
              const [ first, second, ...rest ] = value
              return `${Object.values(first)} ${ second ? 'a ' + Object.values(second) : ''} `
            }
            else {
              return ""
            }
          },
        },
        {
          name: 'container-title',
          title: 'Časopis',
        },
        {
          name: 'issued.date-parts',
          title: 'Rok vydání',
          formatter(value) {
            return value + ''
          },
        },
      ],
    }
  },
  mounted() {
    console.log(this.data)
  },
}
</script>
