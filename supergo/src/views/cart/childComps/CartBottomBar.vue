<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :ischecked="isselectall" @click="checkClick"></check-button>
      <span>全选</span>
    </div>

    <div class="price">
      合计: {{totalPrice}}
    </div>

    <div class="calculate">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
import { mapGetters } from 'vuex'


export default {
  name: 'CartBottomBar',
  components: {
    CheckButton,
    
  },
  //页面提示：
  //function () { [native code] }
  //对于任何复杂逻辑，你都应当使用计算属性。其余可以使用methods处理。
  computed:{
    ...mapGetters(['cartList']),
    //reduce 为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，
    //接受四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 reduce 的数组。


    //callback （执行数组中每个值的函数，包含四个参数）

    // 1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
    // 2、currentValue （数组中当前被处理的元素）
    // 3、index （当前元素在数组中的索引）
    // 4、array （调用 reduce 的数组）

    // initialValue （作为第一次调用 callback 的第一个参数。）
    totalPrice() {
      return '￥'+this.$store.state.cartList.filter((item) => {
        return item.checked 
      }).reduce((pre,cur) => {
        return pre +cur.price * cur.count
      },0).toFixed(2)
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length
    },
    isselectall() {
      if(this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.checked)
    }
  },
  methods: {
    checkClick(){
      if(this.isselectall) {//全部选中
        return this.cartList.forEach(item => item.checked = false)
      }else {//部分或全部不选中
        return this.cartList.forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    background-color: #eee;
    position: relative;
    display: flex;
    line-height: 40px;
    font-size: 14px;
  }
  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
  }
  .check-button {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }
  .price {
    margin-left: 20px;
    flex: 1;
  }
  .calculate {
    width: 90px;
    color: #fff;
    background-color: orangered;
    text-align: center;
  }
</style>