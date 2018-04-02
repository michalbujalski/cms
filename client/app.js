import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import VeeValidate from 'vee-validate'

sync(store, router)
Vue.use(Buefy)
Vue.use(VeeValidate)
const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
