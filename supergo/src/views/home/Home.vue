<template>
  <div id="home">
    <nav-bar class="home-nav"><template #center>购物车</template></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import {getHomeMultidata} from 'network/home'




export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        banners:[],
        recommends:[]
      }

    },
    created() {
      //请求多个数据
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners =res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }

}
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>