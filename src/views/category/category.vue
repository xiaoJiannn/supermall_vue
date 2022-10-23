<template>
  <div>
    <div class="wrapper">
      <ul>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
        <li>222222222</li>
      </ul>
    </div>
  </div>
</template>
<script>
import bscroll from 'better-scroll'

export default {
  name: 'category',
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new bscroll('.wrapper', {
      probeType: 3,
      pullUpLoad: true
    })
    this.scroll.on('scroll', (pos) => {
      // console.log(pos)
    })
    this.scroll.on('pullingUp', () => {
      console.log('viewmore')
      // this.bscroll.finishPullUp()
    })
  },

}
</script>
<style scoped>
.wrapper {
  height: 150px;
  background-color: red;
  overflow: hidden;
}
</style>
