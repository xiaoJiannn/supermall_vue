<template>
  <div class="detail">
    <detail-nav></detail-nav>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
import detailNav from "views/Detail/ChildCom/DetailNav";
import detailSwiper from "views/Detail/ChildCom/detailSwiper";
import detailBaseInfo from "views/Detail/ChildCom/DetailBaseInfo";
import {getProductDetail, GoodInfo, Shop} from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopMaster: {}
    }
  },
  components: {
    detailNav,
    detailSwiper,
    detailBaseInfo
  },
  created() {
    this.iid = this.$route.params.iid
    getProductDetail(this.iid).then(res => {
      console.log(res)
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new GoodInfo(data.columns, data.itemInfo, data.shopInfo.services)
      this.shopMaster = new Shop(data.shopInfo)
    })
  }
}
</script>

<style scoped>

</style>
