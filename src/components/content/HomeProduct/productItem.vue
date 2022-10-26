<template>
  <div class="proItem">
    <img :src="productInfo.show.img" @load="imageLoad">
    <div class='itemMessage'>
      <p>{{ productInfo.title }}</p>
      <span class="price">{{ productInfo.price }}</span>
      <span class="collect">{{ productInfo.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'productItem',
  props: {
    productInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    //监听每个图片当加载完成后再次刷新bscroll
    // 利用vue中的@load
    imageLoad() {
      //  利用事件总线将该方法传至home组件（新建一个vue实例$bus）
      this.$bus.$emit('itemLoad')
    }
  }
}
</script>
<style scoped>
.proItem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.proItem img {
  width: 100%;
  border-radius: 5px;
}

.itemMessage {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.itemMessage p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.itemMessage .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.itemMessage .collect {
  position: relative;
}

.itemMessage .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url('~assets/images/common/collect.svg') 0 0/14px 14px;
}
</style>
