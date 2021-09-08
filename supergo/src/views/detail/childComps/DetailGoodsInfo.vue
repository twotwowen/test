<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="gs-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item " alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    }
  },
  methods:{
    imgLoad() {
      if(++this.counter === this.imagesLength) {
        this.$emit('imageLoad')
      }
    }
  },
  watch: {
    detailInfo() {
      //获取图片个数
      this.imagesLength = this.detailInfo.detailImage[0].listlength
    }
  }
}
</script>

<style scoped>
  .gs-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .desc {
    padding: 0 10px;
    font-size: 18px;
    color: #333;
    margin-bottom: 15px;
  }
  .info-key {
    padding: 0 10px;
    color: var(--color-high-text);
  }
  .info-list img {
    margin-top: 8px;
    width: 100%;

  }
</style>