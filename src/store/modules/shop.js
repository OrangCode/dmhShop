
import Vue from 'vue'
import {
  reqShopInfo,
  reqShopGoods,
  reqShopRatings
} from '../../api'
import {
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT,
  CLEAR_CART
} from '.././mutation-types'
const state = {
  goods:[],   //商家列表
  ratings:[],  //商家评价列表
  info:{},    //商家信息
  cartFoods:[],  //购物车食物列表
}
const mutations = {
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [ADD_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count++
    }else {
      Vue.set(food,'count',1)
      //将food添加到购物车
      state.cartFoods.push(food)
    }
  },
  [REDUCE_FOOD_COUNT](state, {food}) {
    if(food.count > 0){
      food.count--
      //当food减少为0时，将其从购物车移出
      if(food.count <= 0){
        const index = state.cartFoods.indexOf(food)
        state.cartFoods.splice(index,1)
      }
    }
  },
  [CLEAR_CART](state){
    state.cartFoods.forEach((food) => food.count = 0)
    state.cartFoods = []
  }
}
const actions = {
// 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if(result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
// 异步获取商家评价列表
  async getShopRatings({commit}) {
    const result = await reqShopRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
// 异步获取商家商品列表
  async getShopGoods({commit},callback) {
    const result = await reqShopGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      //更新状态后立即调用回调
      typeof callback === 'function' && callback()
    }
  },
  //更新指定数量的food
  updateFoodCount({commit},{isAdd,food}){
    if(isAdd){
      commit(ADD_FOOD_COUNT,{food})
    }else {
      commit(REDUCE_FOOD_COUNT,{food})
    }
  },
  //清空购物车
  clearCart({commit}){
    commit(CLEAR_CART)
  }

}
const getters = {
  //购物车总数量
  totalCart(state){
    return state.cartFoods.reduce((pre,item) => pre + item.count ,0)
  },
  //购物车的总价钱
  totalPrice(state){
    return state.cartFoods.reduce((pre,item) => pre + item.count * item.price ,0)
  },

}
export default {
  state,
  mutations,
  actions,
  getters
}
