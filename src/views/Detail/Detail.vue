<template>
  <div class="detail">
    详情页面this is{{ id }}
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      id: null,
    }
  },
  created() {
    this.id = this.$route.params.iid
  }
}
</script>

<style scoped>

</style>
