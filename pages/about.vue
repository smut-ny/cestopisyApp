<template>
  <div>
    <Navbar />
    <b-container>
      <h1>O projektu</h1>
      <h3>
        Bibliografická databáze časopisecky publikovaných českých cestopisů v
        19. století
      </h3>
      <p>
        Databáze zahrnuje v současné době 952 položek, které představují
        bibliografické údaje cestopisů publikovaných ve 70 časopisech, které
        byly digitalizovány Národní knihovnou v Praze či Moravskou zemskou
        knihovnou v Brně. Databáze bude rozšiřována.
      </p>
      <p>
        Databázi sestavili:<b
          >Bc. Vendula Čepicová, Mgr. Vojtěch Smutný, Mgr. Radek Touš, Mgr.
          Natálie Trojková</b
        >v rámci projektu <i>„Vyprávění o cestování v 19. století“</i> (garant
        Mgr. Jiří Hrabal, Ph.D.) Zpracování a publikování databáze bylo umožněno
        díky účelové podpoře na specifický vysokoškolský výzkum udělené
        Ministerstvem školství, mládeže a tělovýchovy ČR Univerzitě Palackého v
        Olomouci (IGA_FF_2020_021). Aktuální podobu databáze seřazenou
        chronologicky najdete na samostatné stránce.
      </p>
      <a class="with-arrow" href="http://cvc.upol.cz/">
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM0 9H18V7H0V9Z"
            fill="black"
          />
        </svg>

        Oficiální stránka projektu</a
      >

      <h3>Technické parametry projektu</h3>
      <p>Webová prezentace byla vytvořena pomocí těchto technologií:</p>

      <h5>Frontend</h5>
      <ul>
        <li><a target="_blank" href="https://nuxtjs.org/">NuxtJS</a></li>
        <li>
          <a target="_blank" href="https://bootstrap-vue.org/">Bootstrap</a>
        </li>
      </ul>

      <h5>Vizualizace dat</h5>
      <ul>
        <li>
          <a target="_blank" href="https://plotly.com/">Plotly</a>
        </li>
        <li>
          <a target="_blank" href="https://saigesp.github.io/vue-d3-charts/#/"
            >Vue D3 Charts</a
          >
        </li>
        <li>
          <a target="_blank" href="https://www.vuetable.com/">Vuetable-2</a>
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>
h3 {
  margin-top: 20px;
}
</style>
