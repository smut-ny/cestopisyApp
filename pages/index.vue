<template>
  <div>
    <Navbar />
    <b-container>
      <h1>Centrum pro výzum cestopisů</h1>
      <h3>a dějin písemných reprezentací mezikulturních kontaktů</h3>
      <TheBox v-for="box in thebox" :key="box.title" :data="box" />
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      thebox: [
        {
          title: 'Databáze',
          href: '/database',
          img_src: 'database.png',
          bg_color: 'darkseagreen',
          description:
            'Databáze zahrnuje v současné době 952 položek, které představují bibliografické údaje cestopisů publikovaných ve 70 časopisech, které byly digitalizovány Národní knihovnou v Praze či Moravskou zemskou knihovnou v Brně. Databáze bude rozšiřována.',
        },
        {
          title: 'Datová vizualizace',
          href: '/graphs',
          img_src: 'data.png',
          bg_color: 'plum',
          description:
            'Grafy vizualizují v jakých časopisech byly cestopisné články sesbírány, v koláčovém grafu je zobrazen výběr deseti nejčetnějších časopisů a rovněž zobrazují četnost dle jednotlivých let.',
        },
        {
          title: 'O projektu',
          href: '/about',
          img_src: 'traveler.png',
          bg_color: 'powderblue',
          description:
            'Centrum pro výzkum cestopisu a dějin písemných reprezentací mezikulturních kontaktů bylo zřízeno k 31. lednu 2020, a to prostřednictvím „Smlouvy o spolupráci“ mezi Katedrou bohemistiky Filozofické fakulty UP v Olomouci, Katedrou geoinformatiky Přírodovědecké fakulty UP v Olomouci a Ústavem věd o umění a kultuře Filozofické fakulty JU v Českých Budějovicích.',
        },
      ],
    }
  },
}
</script>
