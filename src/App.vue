<template>
    <div>
      <router-view/>
      <FooterGuide v-show="$route.meta.isShowFooter"/>
    </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {reqShopInfo} from './api'
  export default {
      async mounted(){
          //触发vuex的getAddress（），然后从后台获取address
        this.$store.dispatch('getAddress')
        this.$store.dispatch('reqUserInfo')
        this.$store.dispatch('getShopInfo')

        const result = await reqShopInfo()
        console.log('result',result)
      },
      components:{
        FooterGuide
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
