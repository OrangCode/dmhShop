<template>
  <div class="star" :class="'star-' + star">
    <span class="star-item" :class="sc" v-for="(sc,index) in starClasses" :key="index"></span>
  </div>
</template>
<script>
  export default {
    props:{
      star:Number,
      score:Number
    },
    computed:{
        //包含所有star类名的数组的方法
      starClasses(){
        const arr = []
        //向arr中添加n个类名on
        const {score} = this
        const scoreInteger = Math.floor(score)
        for(let i = 0; i < scoreInteger; i++){
          arr.push('on')
        }
        //向arr中添加n个类名half
        if(score*10 - scoreInteger*10 >= 5){
          arr.push('half')
        }
        //向arr中添加n个类名off
        while(arr.length < 5){
          arr.push('off')
        }

        return arr
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/stars/star48_on')
        &.half
          bg-image('./images/stars/star48_half')
        &.off
          bg-image('./images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star36_on')
        &.half
          bg-image('./images/stars/star36_half')
        &.off
          bg-image('./images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star24_on')
        &.half
          bg-image('./images/stars/star24_half')
        &.off
          bg-image('./images/stars/star24_off')
</style>
