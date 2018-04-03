import Vue from 'vue'
import Router from 'vue-router'
import CreateField from '../views/CreateField'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: CreateField
    }
  ]
})
