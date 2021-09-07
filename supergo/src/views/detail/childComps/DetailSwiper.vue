<template>
    <swiper class="topImage">
    <template #>
      <swiper-item v-for="(item,index) in topimg" :key="index">
      <template #>
        <img :src="item" alt="">
      </template>
    </swiper-item>
    </template>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'


export default {
  name: 'DetailSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topimg:{
      type:Array,
      default() {
        return []
      }
    }
  },
  method:{
  
  }
  
}
</script>

<style scoped>
  .topImage {
    height: 300px;
  }
  /* img {
    width: 100%;
    height: 100%;
  } */
</style>