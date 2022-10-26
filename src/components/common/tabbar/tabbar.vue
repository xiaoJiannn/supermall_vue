<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'tab',
}
</script>
<style scoped>
.tabbar {
  display: flex;
  background-color: #ececec;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
</style>
