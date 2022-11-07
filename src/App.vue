<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <mainTabBar></mainTabBar>
  </div>
</template>

<script>
import mainTabBar from "components/content/main/mainbar"

export default {
  name: 'app',
  components: {
    mainTabBar,
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
