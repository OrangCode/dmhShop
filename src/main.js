/*
入口JS
 */

import Vue from 'vue'
import App from './App.vue'

import router from './router'
import Header from './components/Header/Header.vue'
import store from './store'
import Star from './components/star/star.vue'
import './mock/mockServer'
import './filters'
import CartControl from './components/CartControl/CartControl.vue'
import Split from './components/Split/Split.vue'
//注册全局组件
Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component('CartControl',CartControl)
Vue.component('Split',Split)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h => h(App),
  router,  //用于配置路由器
  store    //配置vuex的核心管理对象
})
