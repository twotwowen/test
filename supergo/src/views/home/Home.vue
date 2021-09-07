<template>
  <div id="home">
    <nav-bar class="home-nav"><template #center>购物车</template></nav-bar>
    <tab-control :title="['流行','商品','精选']" @tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load = "true" @pullingUp = "loadMore">
      <home-swiper :banners="banners" @imgload="imgload"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :title="['流行','商品','精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>

    </scroll>
    <!-- 想要监听组件的点击必须加上native -->
    <!-- .native - 监听组件根元素的原生事件。 
主要是给自定义的组件添加原生事件。 -->
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
// 公共组件
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

//home里面子组件
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

//网络请求
import {getHomeMultidata,getHomeGoods} from 'network/home'
import { onActivated } from '@vue/runtime-core'


export default {
    name: "Home",
    components: {
      //公共组件
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
      //home里面子组件
      HomeSwiper,
      RecommendView,
      FeatureView,
      
    },
    data() {
      return {
        banners:[],
        recommends:[],
        goods: {
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isShow:false,
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0
      }
    },
    computed:{
      showGoods(){
        //要拿对象里面的键obj['键']
        return this.goods[this.currentType].list
      },
     
    },
    created() {
      //请求多个数据
      this.getHomeMultidata(),
      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

      //监听item中图片加载完成
      // this.$bus.$on('itemimgload',() => {
      //   this.$refs.scroll.scroll.refresh()
      // })
    },
    unmounted() {//原来的destroyed钩子
      console.log('destroyed');
    },
   
    //当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。
    //新版BScroll的bug已修复
     activated() {
      console.log('activated');
      this.$refs.scroll.scrollTo(0,this.saveY,1)
      this.$refs.scroll.scroll.refresh()
    },
    deactivated() {
      console.log('deactivated');
      //console.log(this.$refs.scroll.scroll);
      this.saveY = this.$refs.scroll.scroll.y
      console.log(this.saveY);
    },
    methods:{
      backClick() {
        console.log('点击了返回top');
        this.$refs.scroll.scrollTo(0,0)
      },

      //监听滚动，BackTop显示或隐藏
      contentScroll(position) {
        //1.判断BackTop是否显示
        this.isShow = (-position.y) >1000

        //2.判断tabControl是否吸顶
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      //监听上拉加载更多
      loadMore() {
        this.getHomeGoods(this.currentType)
       
      },
      imgload() {
        console.log(this.$refs.tabControl2.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
      //接受tabControl
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
            case 1:
            this.currentType = 'new'
            break
            case 2:
            this .currentType = 'sell'
            break
        }
        //$refs可以拿到组件，组件data里面有currentIndex
        console.log( this.$refs.tabControl1);
          this.$refs.tabControl1.currentindex = index 
           this.$refs.tabControl2.currentindex = index 
      },


      //请求数据
      getHomeMultidata() {
         getHomeMultidata().then(res => {
        console.log(res);
        this.banners =res.data.banner.list
        this.recommends = res.data.recommend.list
      })
      },
      getHomeGoods(type) {
        const page =this.goods[type].page+1
        getHomeGoods(type,page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        //完成上拉加载更多  可封装在pullingUp里面
        this.$refs.scroll.scroll.finishPullUp()
        console.log('已加载数据');
      })
      
      }
    }

}
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    /* vh视口高度 ,100% */
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;

    /* 没有滚动，不用加定位 */
    /* position: fixed;
    添加定位要加方位
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /* .content {
    margin-top: 44px;
    height: calc(100% - 93px);
  } */
</style>