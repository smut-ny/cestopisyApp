<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Databáze cestopisů</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="">
          <li>
            <nuxt-link to="/database">Databáze</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/graphs">Grafy</nuxt-link>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>
li {
  margin-left: 10px;
}

.navbar {
  margin-bottom: 60px;
}
</style>
