<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="faded" fixed="top">
      <b-navbar-brand href="/">
        <img
          class="navbar-logo"
          src="http://cvc.upol.cz/wp-content/uploads/2020/09/CVC_horizontalni_dlouhe-v1.jpg"
          alt=""
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="">
          <li>
            <nuxt-link to="/database">Databáze</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/graphs">Grafy</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">O projektu</nuxt-link>
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
@media (min-width: 992px) {
  .navbar-nav {
    gap: 25px;
  }
  .navbar {
    gap: 50px;
  }
}

.navbar {
  background-color: white;
  box-shadow: 0px 10px 49px 0px rgba(0, 0, 0, 0.07);
}

.navbar-logo {
  max-width: 200px;
}
</style>
