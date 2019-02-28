
import {
  reqUserInfo,
  reqLogOut,
} from '../../api'
import {
  RECEIVE_USER,
  RESET_USER,
} from '.././mutation-types'
const state = {
  user:{},
}
const mutations = {
  [RECEIVE_USER](state,user){
    state.user = user
  },
  [RESET_USER](state){
    state.user = ''
  }
}
const actions = {
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
  },
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}
