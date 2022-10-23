<template>
  <div class="tabControl">
    <div v-for="(item,index) in tabText"
         :key="index"
         :class="{active:index===currentIndex}"
         @click="itemClick(index)"
         class="tab-item">
      <span>{{item}}</span>
    </div>
  </div>

</template>
<script>
export default {
  name: 'tabControl',
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  },
  props: {
    tabText: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped>
.tabControl {
  display: flex;
  position: sticky;
  top: 44px;
  left: 0;
  background-color: #fff;
  z-index: 10;
}
.tab-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>
