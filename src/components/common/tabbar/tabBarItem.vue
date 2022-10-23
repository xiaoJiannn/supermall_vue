<template>
  <div class="tab-item"
       @click="itemClick">
    <slot name="tab-icon"
          v-if="!isActive"></slot>
    <slot name="tab-icon-active"
          v-else></slot>
    <div :style="activeStyle">
      <slot name="tab-text"></slot>
    </div>
  </div>

</template>
<script>
export default {
  name: 'tabBarItem',
  // 父传子
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  data () {
    return {
      // isActive: true,
    };
  },
  methods: {
    itemClick () {
      this.$router.push(this.path);
    }
  }
}
</script>
<style scoped>
.tab-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active {
  color: red;
}
</style>
