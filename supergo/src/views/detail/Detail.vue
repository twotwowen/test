<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @itemClick="itemClick" ref="navbar"></detail-nav-bar>
    <scroll class="contents" @pullingUp="loadMore" ref="scroll" :probe-type="3" :pull-up-load = "true" @scroll="navscroll">
     <template #>
        <detail-swiper :topimg="topImg"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
        <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
        <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
        <goods-list :goods="recommends" ref="recommend" class="goods"></goods-list>
     </template>
    </scroll>
   
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import {getDetail,getRecommend,Goods,Shop,GoodsParam} from  'network/detail.js'
import DetailSwiper from './childComps/DetailSwiper.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailParamInfo from './childComps/DetailParamInfo.vue';
import DetailCommentInfo from './childComps/DetailCommentInfo.vue';
import GoodsList from 'components/content/goods/GoodsList'

import Scroll from 'components/common/scroll/Scroll.vue'






export default {
  name: 'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,

    Scroll,
   
    
    
    
  
  },
    data() {
    return {
      iid:null,
      topImg: [],
      goods:{},
      shop:{},
      detailInfo: {},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      getThemeY:[],
      currentIndex:0

    }
  },
  created() {
    //$router使用带params的路由跳转
    //$route  对应取参
    
    //保存传入的iid
    this.iid = this.$route.params.iid

    //通过iid请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      //获取数据
      const data = res.result
      //取出轮播图数据
      this.topImg = data.itemInfo.topImages
      //创建商品对象
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services),
      //获取店铺信息
      this.shop = new Shop(data.shopInfo)

      //保存商品详情数据
      this.detailInfo = data.detailInfo

      //获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      //取出评论信息
      if(data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
      
    })
  
    //请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list
    })
  
  },
  methods:{
    loadMore() {
      this.$refs.scroll.scroll.finishPullUp()
    },
    imageLoad() {
      this.$refs.scroll.scroll.refresh()

      this.getThemeY = []
      this.getThemeY.push(0)
      this.getThemeY.push(this.$refs.param.$el.offsetTop)
      this.getThemeY.push(this.$refs.comment.$el.offsetTop)
      this.getThemeY.push(this.$refs.recommend.$el.offsetTop)
     
      console.log(this.getThemeY);
    },
    itemClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0,-this.getThemeY[index]+44)
    },
    navscroll(position) {
      //获取y值
      const positionY = -position.y 
     
      let length = this.getThemeY.length
      for(let i = 0; i < length; i++) {

        if(this.currentIndex !== i && ((i < length - 1 && positionY >= this.getThemeY[i]-44 && positionY < this.getThemeY[i+1]-44) || (i === length - 1 && positionY >= this.getThemeY[i]-44))) {
          this.currentIndex = i
          console.log(this.currentIndex);
          this.$refs.navbar.ncurrentIndex = this.currentIndex
        }
     
      
      }
    }
   
  }
}
</script>

<style scoped>
 
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .contents {
     overflow: hidden;
    height: calc(100% - 44px);
     /* overflow: hidden;
    position: absolute;
    top: 44px;
     left: 0;
    right: 0; */
  }
  .goods {
    background-color: #fff;
  }
</style>