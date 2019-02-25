/*
用来保存所有路由的数组的模块
 */
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'


 export default [
   {
     path:'/msite',
     component:Msite,
     meta:{
       isShowFooter:true
     }
   },
   {
     path:'/order',
     component:Order,
     meta:{
       isShowFooter:true
     }
   },
   {
     path:'/search',
     component:Search,
     meta:{
       isShowFooter:true
     }
   },
   {
     path:'/profile',
     component:Profile,
     meta:{
       isShowFooter:true
     }
   },
   {
     path:'/',
     redirect:'/msite'
   },
   {
     path:'/login',
     component:Login
   }
 ]
