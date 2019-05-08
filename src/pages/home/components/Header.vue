<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.currentCity}}
        <span class="iconfont arrow-icon">&#xe62d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // 将vuex中state的city属性映射到currentCity
    // 简写：。。。mapState(['currentCity'])
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display: flex
        background-color: $bgColor
        height: $rem86
        color #ffffff
        .header-left
            line-height: $rem86
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
                margin-left: .1rem
        .header-input
            flex: 1
            height: $rem62
            line-height: $rem62
            background-color: #ffffff
            border-radius: .1rem
            color: #cccccc
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
        .header-right
            min-width: 1.04rem
            line-height: $rem86
            padding: 0 .1rem
            float: right
            text-align: center
            color: #ffffff
            .arrow-icon
              margin-left: -.04rem
              font-size: .24rem
</style>
