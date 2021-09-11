<template>
  <div class="cart">
    <nav-bar class="navbar">
      <template #center>
        购物车({{length}})
      </template>
    </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load = "true" @pullingUp="loadMore">
      <template #>
       <cart-list></cart-list>
      </template>
    
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'
import {mapGetters} from 'vuex'

import Scroll from 'components/common/scroll/Scroll.vue'



export default {
  name: "Cart",
  components: { 
    NavBar,
    CartList,
    CartBottomBar,
    Scroll,
    
  },
  computed:{
    //两种语法
    //...mapGetters(['cartLength'])
    ...mapGetters({
      length:'cartLength'
    })
  },
  activated() {
    this.$refs.scroll.scroll.refresh()
  },
  methods:{
     loadMore() {
      this.$refs.scroll.scroll.finishPullUp()
    },
  }  
}
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .navbar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
  .content {
    overflow: hidden;
     /* margin-top: 44px; */
    height: calc(100% - 93px - 40px);
  }
</style>