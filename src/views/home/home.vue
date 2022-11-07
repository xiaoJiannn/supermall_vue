<template>
  <div id="home">
    <navBar class="index-color">
      <div slot="center"
           class="index-word">我的购物街
      </div>
    </navBar>
    <tab-control v-show="isFixed"
                 ref="tabControl2"
                 :tabText="['流行','新款','精选']"
                 class="hiddenTab"
                 @tabClick="tabClick"
    ></tab-control>
    <scroll ref="scroll"
            :probeType="3"
            :pullUpLoad="true"
            class="content"
            @pullingUp="loadMore"
            @scroll="ContentScroll">
      <homeSwiper :banners="banners" @SwiperImageLoad="SwiperLoad"></homeSwiper>
      <home-rec-view :rec="recommend"></home-rec-view>
      <home-feature-view></home-feature-view>
      <tab-control ref="tabControl"
                   :tabText="['流行','新款','精选']"
                   @tabClick="tabClick"
      ></tab-control>
      <product-list
        :productMessage="changeList"></product-list>
    </scroll>
    <!-- 组件点击-->
    <back-top
      v-show="isShow"
      @click.native="TopClick"></back-top>
  </div>
</template>
<script>

import HomeRecView from './childComs/HomeRecView.vue'
import HomeFeatureView from './childComs/FeatureView.vue'
import navBar from 'components/common/navbar/NavBar'
import homeSwiper from './childComs/homeSwiper'
import tabControl from "components/content/tabControl/tabControl"
import TabControl from '../../components/content/tabControl/tabControl.vue'
import productList from 'components/content/HomeProduct/productList'
import scroll from "components/common/scroll/scroll";
import backTop from "components/content/BackTop/BackTop";

import {getHomeData, getHomeProducts} from 'network/home.js'
import {debounce} from 'components/common/utils'

export default {
  name: 'home',
  components: {
    navBar,
    homeSwiper,
    HomeRecView,
    HomeFeatureView,
    tabControl,
    TabControl,
    productList,
    scroll,
    backTop

  },
  data() {
    return {
      banners: [],
      recommend: [],
      product: {
        'pop': {
          page: 0,
          list: [],
        },
        'sell': {
          page: 0,
          list: [],
        },
        'new': {
          page: 0,
          list: [],
        }
      },
      currentType: 'pop',
      isShow: false,
      isFixed: false,
      savePos: null
    }
  },
  created() {
    this.CgetHomeData()
    this.CgetHomeProducts('pop')
    this.CgetHomeProducts('sell')
    this.CgetHomeProducts('new')


  },
  mounted() {
    //$refs需在组件创建完成后读取才会正常
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.$bus.$on('itemLoad', () => {
      refresh()
    })
  },
  activated() {
    this.$refs.scroll.backTop(0, this.savePos, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.savePos = this.$refs.scroll.scroll.y

  },
  computed: {
    changeList() {
      return this.product[this.currentType].list
    }
  },
  methods: {
    //normal function
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'sell'
          break;
        case 2:
          this.currentType = 'new'
          break;
        default:
          'pop'
          break;
      }
      this.$refs.tabControl.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    TopClick() {
      this.$refs.scroll.backTop(0, 0, 400)
    },
    ContentScroll(position) {
      // 1
      // -position.y >= 1000 ? this.isShow = true : this.isShow = false
      // 2
      //回到顶部显示
      this.isShow = -position.y >= 1000
      // 是否吸顶
      this.isFixed = -position.y >= this.$refs.tabControl.$el.offsetTop
    },
    loadMore() {
      this.CgetHomeProducts(this.currentType)
      // console.log('loading')
    },
    SwiperLoad() {
      console.log()
    },
    // Internet request
    CgetHomeData() {
      getHomeData().then(res => {
          //存储变量防止回收
          this.banners = res.data.banner.list
          this.recommend = res.data.recommend.list
        }
      )
    },
    CgetHomeProducts(type) {
      const page = this.product[type].page + 1
      getHomeProducts(type, page).then(res => {
        this.product[type].list.push(...res.data.list)
        this.product[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    },

  }
}
</script>
<style scoped>
#home {
  height: 100vh;
  position: relative;
}


.index-color {
  background-color: var(--color-tint);
}

.index-word {
  color: #fff;

}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.hiddenTab {
  position: relative;
  top: 0;
  z-index: 5;
}
</style>
