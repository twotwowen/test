<template>
  <swiper>
    <!-- 记得添加键key -->
    <!-- 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。理想的 key 值是每项都有唯一 id。 -->
    <template #>
      <swiper-item v-for="(item,index) in banners" :key="index">
    <template #>
      <a :href="item.link"><img :src="item.image" @load="imgload"/></a>
    </template>
  </swiper-item>
    </template>
  </swiper>
  
</template>

<script>
import { Swiper, SwiperItem} from 'components/common/swiper/index.js'


export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem
    
  },
  data() {
    return {
      isLoad :false
    }
  },
  props:{
    banners:{
      type:Array,
      defalut(){
        return []
      }
    }
  },
  methods:{
    imgload() {
      if(!this.isLoad) {
        this.$emit('imgload')
        this.isLoad = true
      }
      
    }
  }

}
</script>

<style>
  
</style>