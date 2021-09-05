<template>
<!-- ref一般绑定给子组件 
      div也可以绑定-->
      <!-- ref绑定在组件中的 ,那么通过this.$ref.refname获取到的是一个组件对象
            ref绑定在普通元素中,那么通过this.$ref.refname获取到的是一个元素对象-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//默认情况下BScroll是不可以实时的监听滚动的位置
//probe监测
//0，1都是不监测实时的位置
//2：在手指滚动的过程中监测，手指离开后的惯性滚动过程中不监测

import BScroll from 'better-scroll'


export default {
  name: 'Scroll',
  components:{
    BScroll
  },
  data(){
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      observeDOM: true,
      movable: true,
      zoom: true,
      click:true,
      // mouseWheel:true
    })
  },
  methods: {
    scrollTo(x,y,time=300) {
      this.scroll.scrollTo(x,y,time)
    }
  }
}
</script>

<style>

</style>