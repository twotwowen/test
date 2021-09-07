<template>
  <div id="app">
    <router-view v-slot="{ Component }">
  <keep-alive exclude="Detail">
    <component :is="Component"/>
  </keep-alive>
</router-view>
      <!-- <router-view></router-view> -->
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'


export default {
  name:'app',
  components: {
    MainTabBar
    
  }
}
</script>

<style>
  @import "assets/css/base.css"
</style>

