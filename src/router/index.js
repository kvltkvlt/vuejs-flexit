import Vue from 'vue'
import Router from 'vue-router'
import Toster from '../components/Index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Toster',
      component: Toster,
      data: {
          name: "Huyaq"
      }
    }
  ]
})
