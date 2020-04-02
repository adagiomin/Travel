import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'  //@符值src目录

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
