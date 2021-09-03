<template>
   <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
         <template #item-icon><img src="~assets/img/tabbar/home.svg" alt=""></template>
         <template #item-icon-active><img src="~assets/img/tabbar/home_active.svg" alt=""></template>
       <template #item-text>首页</template>
      </tab-bar-item>
      <tab-bar-item path="/category">
           <template #item-icon><img src="~assets/img/tabbar/category.svg" alt=""></template>
         <template #item-icon-active><img src="~assets/img/tabbar/category_active.svg" alt=""></template>
       <template #item-text>分类</template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
         <template #item-icon><img src="~assets/img/tabbar/shopcart.svg" alt=""></template>
         <template #item-icon-active><img src="~assets/img/tabbar/shopcart_active.svg" alt=""></template>
       <!-- <div slot="item-text">购物车</div> vue3插槽改版了-->
       <template #item-text>购物车</template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
         <template #item-icon><img src="~assets/img/tabbar/profile.svg" alt=""></template>
         <template #item-icon-active><img src="~assets/img/tabbar/profile_active.svg" alt=""></template>
       <template #item-text>我的</template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
 import TabBar from '@/components/common/tabbar/TabBar.vue'
  import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'

export default {
    name: "MainTabBar",
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>