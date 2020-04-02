// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)//参数二可以添加默认option

import 'styles/reset.css'   //styles是别名，同@符号一样
import 'styles/border.css'
import 'styles/iconfont.css'
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
