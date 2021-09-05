<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" :key="index" @click="itemClick(index)" class="tab-control-item" :class="{active:index===currentindex}">
      <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentindex:0
    }
  },
  props:{
    title:{
      type:Array,
      defalut() {
        return []
      }
    }
  },
  methods:{
    itemClick(index) {
      console.log(index);
      this.currentindex =index
      //向外面发送事件，括号里面记得添加元素
      //把index也发送出去
      this.$emit('tabClick',index)

    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    background-color: #fff;
    height: 40px;
    line-height: 40px;
    font-size: 15px;

    position: sticky;
    top:44px;
    z-index: 9;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>