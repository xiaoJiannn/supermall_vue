<template>
  <div>
    <swiper class="swiper-image">
      <swiper-item v-for="item in topImages">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: "detail-swiper",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {}
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.swiper-image {
  height: 300px
}
</style>
