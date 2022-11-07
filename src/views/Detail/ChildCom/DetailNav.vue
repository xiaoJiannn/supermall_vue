<template>
  <nav-bar>
    <div slot="left"
         @click="backHome()"
    >
      <img alt="" class="backTo" src="~assets/images/common/back.svg">
    </div>
    <div slot="center" class="title">
      <div v-for="(item,index) in title"
           :class="{isActive:index === currentIndex}"
           class="title-item"
           @click="titleClick(index)">
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNav",
  components: {
    NavBar,
  },
  data() {
    return {
      title: ["商品", "参数", "详情", "推荐"],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    backHome() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}

.title-item {
  flex: 1;
}

.isActive {
  color: var(--color-high-text);
}

.backTo {
  vertical-align: middle;
}
</style>
