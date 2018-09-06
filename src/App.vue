<template>
  <div id="app">
    <header class="container">
      <nav class="navbar navbar-expand-md">
          <router-link class="navbar-brand" to="/" id="logo"><img src="./assets/imgs/logo-training.png" alt="Training" /></router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon">
                  
              </span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link title="Contact" class="link fw5 nav-link" to="/contact">Contact</router-link>
                </li>
                <li class="nav-item">
                  <router-link title="Team" class="link fw5 nav-link" to="/team">Team</router-link>
                </li>
                <li class="nav-item">
                  <router-link title="About Us" class="link fw5 nav-link" to="/about">About Us</router-link>
                </li>
                <li class="nav-item">
                  <router-link title="Welcome" class="link fw5 nav-link" to="/welcome">Welcome</router-link>
                </li>
            </ul>
          </div>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Footer
  }
}
</script>


