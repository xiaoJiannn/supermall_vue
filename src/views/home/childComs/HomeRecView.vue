<template>
  <div class="recView">
    <div v-for="(item,index) in rec"
         :key="index"
         class="rec-item">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'homeRecView',
  props: {
    rec: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
.recView {
  display: flex;
  font-size: 12px;
  text-align: center;
  padding: 10px 0px;
  border-bottom: 8px solid #eee;
}

.rec-item {
  flex: 1;
}

.rec-item img {
  width: 65px;
  height: 65px;
}
</style>
