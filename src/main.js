// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './vuex/store.js'

import Home from './routes/Home.vue'
import Map from './routes/Map.vue'

// Use declarations
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'route_home',
    component: Home
  },
  {
    path: '/map',
    name: 'route_map',
    component: Map
  }
]

const router = new VueRouter({
  // short for `routes: routes`
  routes
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  router,
  render: (h) => h(App)
})
