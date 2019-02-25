/*
能发送ajax请求的函数模块
函数的返回值是promise对象
 */

import axios from 'axios'

export default function ajax(url,data={},method='GET') {
 return new Promise((resolve,reject) => {
   let promise
   if(method === 'GET'){
     promise = axios.get(url,{params:data})  //指定所有的query参数
   }else {
     promise = axios.post(url,data)
   }

   promise.then(response =>{
     resolve(response.data)
   }).catch((error) =>{    //统一处理所有的请求错误
     alert('请求出错了')
   })
 })
}

//请求登录
 async function login() {
  const result = await ajax('/login',{name:'Jack',pwd:123},'POST')
}
