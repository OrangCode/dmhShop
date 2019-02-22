/*
入口JS
 */

import Vue from 'vue'
import App from './App.vue'

import router from './router'
import Header from './components/Header/Header.vue'

//注册全局组件
Vue.component('Header',Header)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render:h => h(App),
  router
})
