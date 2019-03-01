/*
自定义过滤器模块
 */

import Vue from 'vue'
import moment from 'moment'

//日期格式化的过滤器
Vue.filter('dateRating',function (value) {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})
