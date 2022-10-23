<template>
  <tabBar>
    <TabBarItem path="/home"
                activeColor="blue">
      <img slot="tab-icon"
           src="~assets/images/tabbar/home.svg">
      <img slot="tab-icon-active"
           src="~assets/images/tabbar/home_active.svg">
      <div slot="tab-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category"
                activeColor="red">
      <img slot="tab-icon"
           src="~assets/images/tabbar/category.svg">
      <img slot="tab-icon-active"
           src="~assets/images/tabbar/category_active.svg">
      <div slot="tab-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart"
                activeColor="red">
      <img slot="tab-icon"
           src="~assets/images/tabbar/shopcart.svg">
      <img slot="tab-icon-active"
           src="~assets/images/tabbar/shopcart_active.svg">

      <div slot="tab-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile"
                activeColor="red">
      <img slot="tab-icon"
           src="~assets/images/tabbar/profile.svg">
      <img slot="tab-icon-active"
           src="~assets/images/tabbar/profile_active.svg">

      <div slot="tab-text">我的</div>
    </TabBarItem>

  </tabBar>

</template>
<script>
import tabBar from "components/common/tabbar/tabbar.vue"
import TabBarItem from "components/common/tabbar/tabBarItem.vue"
export default {
  name: 'mainbar',
  components: {
    tabBar,
    TabBarItem,
  }
}
</script>
<style scoped>
</style>
