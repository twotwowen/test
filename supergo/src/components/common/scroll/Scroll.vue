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
  props:{
    probeType: {
      type:Number,
      default:0
    },
    pullUpLoad: {
      type: Boolean,
      default:false
    }
  },
  components:{
    BScroll
  },
  data(){
    return {
      scroll: null
    }
  },
  mounted() {
    //创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      //会检测 scroller 内部 DOM 变化，自动调用 refresh 方法重新计算来保证滚动的正确性。它会额外增加一些性能开销，如果你能明确地知道 scroller 内部 DOM 的变化时机并手动调用 refresh 重新计算，你可以把该选项设置为 false。
      observeDOM: true,
      // movable: true,
      // zoom: true,
      click:true,
      probeType:this.probeType,
      //监听图片加载完成刷新scrollheight
      observeImage: true,
      pullUpLoad: this.pullUpLoad
    }),
    //监听滚动的位置
    this.scroll.on('scroll',(position) => {
      this.$emit('scroll',position)
    })

    //监听上拉事件
    this.scroll.on('pullingUp',() => {
      console.log('到达底部');
      //this.scroll.finishPullUp()
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x,y,time=300) {
      this.scroll.scrollTo(x,y,time)
    }

    // finishPullUp(){
    //   this.scroll && this.scroll.finishPullUp()
    // }
  },
    
 }
</script>

<style>

</style>