<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topimg="topImg"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import {getDetail} from  'network/detail.js'
import DetailSwiper from './childComps/DetailSwiper.vue';

export default {
  name: 'Detail',
  components:{
    DetailNavBar,
    DetailSwiper 
  },
    data() {
    return {
      iid:null,
      topImg: []
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
      this.topImg = res.result.itemInfo.topImages
    })
  },
 
}
</script>

<style>

</style>