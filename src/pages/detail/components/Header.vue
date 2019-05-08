<template>
    <div>
        <div class="header-back" v-show="headerShow">
            <router-link to="/">
                <div class="iconfont back-icon">&#xe624;</div>
            </router-link>
        </div>
        <div class="header" v-show="!headerShow" :style="opacityStyle">
            景区详情
            <router-link to="/">
                <div class="iconfont header-back-icon">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      headerShow: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 40) {
        let opacity = top / 80
        this.opacityStyle.opacity = opacity > 1 ? 1 : opacity
        this.headerShow = false
      } else {
        this.headerShow = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-back
    position: absolute
    top: .1rem
    left: .1rem
    padding: .2rem
    border-radius: .6rem
    background: rgba(0, 0, 0, 0.4)
    .back-icon
        color: #ffffff
.header
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    overflow: hidden
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-back-icon
        position: absolute
        top: 0
        left: .1rem
        text-align: center
        font-size: .4rem
        color: #fff
</style>
