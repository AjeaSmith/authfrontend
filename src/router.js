import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register,
      beforeEnter: (to, from, next) => {
        if (localStorage.token) {
          next('/homepage')
        } else {
          next()
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (localStorage.token) {
          next('/homepage')
        } else {
          next()
        }
      }
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (localStorage.token) {
          next()
        } else {
          next('/login')
        }
      }
    }
  ]
})
