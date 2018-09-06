import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'tachyons'
import 'bootstrap'

import './assets/css/app.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
