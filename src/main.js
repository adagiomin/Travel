import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)//参数二可以添加默认option

import 'styles/reset.css'   //styles是别名，同@符号一样
import 'styles/border.css'
import 'styles/iconfont.css'
import fastClick from 'fastclick'
fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
