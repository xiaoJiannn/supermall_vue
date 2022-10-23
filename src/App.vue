<template>
  <div id="app">

    <router-view></router-view>

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
