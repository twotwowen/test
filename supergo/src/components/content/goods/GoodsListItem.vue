<template>
  <div class="goods-item" @click="itemClick">
   <img v-lazy="showImage" alt="" :key="showImage">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
import {useRoute,useRouter} from 'vue-router'

export default {
  name: 'GoodsListItem',
  setup (props) {
    const router =useRouter()
    const itemClick = (() => {
      //由于setup内部是不能用this的，你的props并不能在setup内部方法里用this.xx去拿到，setup接受两个参数props和context
      router.push("/detail/"+ props.goodsitem.iid)
      // router.push({
      //   path:'/detail',
      //   query:props.goodsitem.iid
      // })
    })
    return{
      itemClick
    }
  },
  //记得props要加s！！！！！
  props:{
    goodsitem:{
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsitem.image || this.goodsitem.show.img
    }
  },
  methods:{
    // itemClick() {
    //   console.log('详情页');
    //   console.log(this.$router);
     
    //   // this.$emit('itemClick')

    // }
  }
}
</script>

<style scoped>
  .goods-item {
    /* flex: 1; */
    position: relative;
    padding-bottom: 40px;
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
   .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>