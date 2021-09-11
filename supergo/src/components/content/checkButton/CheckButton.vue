<template>
  <div class="check-button" :class="{check: ischecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    // 动态绑定class isChecked大写出错
    ischecked:{
      type:Boolean,
      default() {
        return false
      }
      
    }
  }
}
</script>

<style scoped>
  .check-button {
    border-radius: 50%;
    border: 2px solid #aaa;
  }
  .check {
    border-color: orangered;
    background-color: orangered;
  }
</style>