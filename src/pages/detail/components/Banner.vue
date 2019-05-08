<template>
    <div>
        <div class="banner">
            <router-link to="/detail/0001/bannerImages">
                <img
                    class="banner-img"
                    :src="bannerImg"
                    @click="handleImageClick()"
                />
            </router-link>
            <div class="banner-number">
                <span class="iconfont">&#xe674;</span>
                {{this.gallaryImgs.length}}
            </div>
            <div class="banner-title">
                {{this.sightName}}
            </div>
            <div class="banner-video">
                视频
                <span class="iconfont">&#xe6ab;</span>
            </div>
            <div class="banner-after"></div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  methods: {
    handleImageClick () {
      this.imgShow(this.gallaryImgs)
    },
    ...mapMutations(['imgShow'])
  }
}
</script>
<style lang="stylus" scoped>
.banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
        width: 100%
    .banner-number
        width: 15%
        text-align: center
        height: .42rem
        line-height: .42rem
        position: absolute
        left: .2rem
        bottom: .86rem
        color: #ffffff
        background: rgba(0, 0, 0, .4)
        border-radius: .3rem
    .banner-title
        position: absolute
        right: .2rem
        bottom: .2rem
        left: .2rem
        min-height: .4rem
        color: #ffffff
        font-size: .36rem
    .banner-video
        position: absolute
        bottom: .2rem
        right: .2rem
        width: 1.5rem
        color: #ffffff
        font-size: .36rem
        text-align: right
    .banner-after
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .4rem
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
</style>
