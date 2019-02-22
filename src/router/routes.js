/*
用来保存所有路由的数组的模块
 */
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'

 export default [
     {
       path:'/msite',
       component:Msite
     },
     {
       path:'/order',
       component:Order
     },
     {
       path:'/search',
       component:Search
     },
     {
       path:'/profile',
       component:Profile
     },
     {
       path:'/',
       redirect:'/msite'
     }
 ]
