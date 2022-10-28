<template>
  <swiper>
    <swiper-item v-for="(value,index) in banners"
                 :key="index"
    >
      <a :href="value.link">
        <img :src="value.image"
             alt=""
             @load="SwiperImageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: "HomeSwiper",
  data() {
    return {
      isSend: true,
    }
  },
  methods: {
    SwiperImageLoad() {
      if (this.isSend) {
        this.$emit('SwiperImageLoad')
        this.isSend = false
      }
    },
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
</style>


