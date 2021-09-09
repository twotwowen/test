<template>
  <div>
    <nav-bar>
      <template #left>
        <img src="~assets/img/common/back.svg" @click="backClick"/>
      </template>
      <template #center>
        <div class="title">
          <div v-for="(item,index) in title" :key="index" class="titleitem" :class="{active:ncurrentIndex===index}" @click="itemClick(index)">{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'



export default {
  name: 'DetailNavBar',
  props:{
    type:Array,
    default() {
      return []
    }
  },
  components:{
    NavBar
  },
  data() {
    return {
      title:['商品','参数','评论','推荐'],
      ncurrentIndex:0
    }
  },
  methods:{
    itemClick(index) {
      this.ncurrentIndex = index
      this.$emit('itemClick',index)
    },
    backClick() {
      console.log('点击了返回');
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 13px;
  }
  .titleitem {
    flex: 1;
  }
  .left img{
    margin-top: 13px;
  }
  .active {
    color: var(--color-high-text);
  }
</style>