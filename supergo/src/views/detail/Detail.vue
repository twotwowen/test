<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" @pullingUp="loadMore" ref="scroll" :probe-type="3" :pull-up-load = "true">
      <detail-swiper :topimg="topImg"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
    <detail-param-info :paramInfo="paramInfo"></detail-param-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import {getDetail,Goods,Shop,GoodsParam} from  'network/detail.js'
import DetailSwiper from './childComps/DetailSwiper.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailParamInfo from './childComps/DetailParamInfo.vue';

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
    Scroll,
    
    
  
  },
    data() {
    return {
      iid:null,
      topImg: [],
      goods:{},
      shop:{},
      detailInfo: {},
      paramInfo:{}
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
      const data = res.result
      this.topImg = data.itemInfo.topImages

      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services),
      //获取店铺信息
      this.shop = new Shop(data.shopInfo)

      //保存商品详情数据
      this.detailInfo = data.detailInfo

      //获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
    })
  },
  methods:{
    loadMore() {
      this.$refs.scroll.scroll.finishPullUp()
    },
    imageLoad() {
      this.$refs.scroll.scroll.refresh()
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
  .content {
    height: calc(100% - 44px);
  }
</style>