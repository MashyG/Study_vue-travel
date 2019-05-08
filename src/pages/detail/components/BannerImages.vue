<template>
    <div class="banner-images">
        <div class="header border-bottom">
            景区图片
        <router-link to="/detail/0001">
            <div class="iconfont">&#xe624;</div>
        </router-link>
        </div>
        <div class="content">
            <div class="content-img-list" v-for="(item, key) of gallaryImgs" :key="key">
               <img
                    class="content-img"
                    :src="item.imgUrl"
                    @click="handleGallaryClick"
                />
            </div>
        </div>
        <fade-animation>
          <common-gallary
            :gallaryImgs="gallaryImgs"
            v-show="gallaryShow"
            @close="handleGallaryClose"
          ></common-gallary>
        </fade-animation>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
import { mapState } from 'vuex'
export default {
  name: 'DetailBannerImages',
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      gallaryShow: false
    }
  },
  computed: {
    ...mapState({
      gallaryImgs: 'imgs'
    })
  },
  methods: {
    handleGallaryClick () {
      this.gallaryShow = true
    },
    handleGallaryClose () {
      this.gallaryShow = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position: relative
  overflow: hidden
  height: .86rem
  line-height: .86rem
  text-align: center
  font-size: .32rem
  .iconfont
      position: absolute
      top: 0
      left: .1rem
      text-align: center
      font-size: .4rem
      color: #333
.content
    overflow: hidden
    padding: .2rem
    .content-img-list:nth-child(odd)
        padding-right: .05rem
    .content-img-list:nth-child(even)
        padding-left: .05rem
    .content-img-list
        float: left
        width: 50%
        padding-bottom: .1rem
        box-sizing: border-box
        .content-img
            width: 100%
</style>
