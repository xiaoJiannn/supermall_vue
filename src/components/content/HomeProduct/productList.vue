<template>
  <div class="list">
    <product-item v-for="(item,index) in productMessage"
                  :key="index"
                  :productInfo="item"></product-item>
  </div>

</template>
<script>
import productItem from './productItem.vue'
export default {
  name: 'productList',
  components: {
    productItem
  },
  props: {
    productMessage: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
