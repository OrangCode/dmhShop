<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text" @click="$router.replace('/login')">登录|注册</span>
      </span>
    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper" v-if="categorys.length > 0">
          <div class="swiper-slide" v-for="(categorys,index) in categoryArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com' + c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
        </div>
        <img src="./images/msite_back.svg" alt="Loading" v-else>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>
<script>

  import ShopList from '../../components/ShopList/ShopList.vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'

    export default {
      mounted () {
        //异步获取分类列表
        this.$store.dispatch('getCategorys')
        //异步获取商家列表
        this.$store.dispatch('getShops')
      },
      components:{
        ShopList
      },
      watch:{
        categorys(){
          this.$nextTick(() => {
            //导航区域滑动和自动轮播
            const mySwiper = new Swiper('.swiper-container', {
              pagination: {
                el: '.swiper-pagination',
              },
              loop: true,
              autoplay:true
            })
            //鼠标覆盖停止自动切换
            mySwiper.onmouseover = function(){
              mySwiper.autoplay.stop();
            }
          })
        }
      },
      computed:{
        ...mapState(['address','categorys']),
        categoryArr(){
          const {categorys} = this
          const arr = []  //二维数组
          let smallArr = []
          categorys.forEach( c => {
            if(smallArr.length === 0){
              arr.push(smallArr)
            }
            smallArr.push(c)
            if(smallArr.length === 8){
              smallArr = []
            }
          })
          return arr
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
