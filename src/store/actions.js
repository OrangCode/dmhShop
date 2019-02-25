/*
 包含n个用于间接更新状态数据的方法的对象
 */

import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUserInfo,
  reqLogOut
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER
} from './mutation-types'

export default {
  //异步获取地址的action
  async getAddress({commit,state}){
    //发ajax请求
    const {longitude,latitude} = state
    const result = await reqAddress(longitude,latitude)
    //成功后，提交mutation
    if(result.code === 0){
      commit(RECEIVE_ADDRESS,result.data)
    }
  },
  //异步获取分类列表的action
  async getCategorys({commit}){
    //发ajax请求
    const result = await reqCategorys()
    //成功后，提交mutation
    if(result.code === 0){
      commit(RECEIVE_CATEGORYS,result.data)
    }
  },
  //异步获取商家的action
  async getShops({commit,state}){
      //发ajax请求
    const {longitude,latitude} = state
    const result = await reqShops({longitude,latitude})
    //成功后，提交mutation
    if(result.code === 0){
      commit(RECEIVE_SHOPS,result.data)
    }
  },
  //同步保存用户的action
  saveUser({commit},user){
    commit(RECEIVE_USER,user)
  },
  //异步获取用户信息的action
  async reqUserInfo({commit}){
    const result = await reqUserInfo()
    if(result.code === 0){
      const user = result.data
      commit(RECEIVE_USER,user)
    }
  },
  //退出登录
  async logOutLogin({commit}){
    const result = await reqLogOut()
    if(result.code === 0){
      commit(RESET_USER)
    }
  }

}
