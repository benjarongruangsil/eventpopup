import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import addevent from '@/pages/addevent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/addevent',
      name: 'addevent',
      component: addevent
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
