<template>
  <div>
    <div class="city-tab">
        <ul>
          <li :class="activeClass == true ? 'active' : '' " @click="changeInlandShow">境内</li>
          <li :class="activeClass != true ? 'active' : '' " @click="changeForeignShow">境外·港澳台</li>
        </ul>
    </div>
    <div class="city-container" ref="wrapper">
      <div>
        <div class="city-inland" v-show="inlandShow">
          <div class="current-city">
            <div class="title">当前城市</div>
            <div class="city-list">
              <div
                class="city-item"
                @click="handleCityClick(this.currentCity)"
              >
                <div class="button">{{this.currentCity}}</div>
              </div>
            </div>
          </div>
          <div class="hot-city">
            <div class="title">热门城市</div>
            <div class="city-list">
              <div
                class="city-item border"
                v-for="item in hotCities"
                :key="item.id"
                @click="handleCityClick(item.name)"
              >
                <div class="item">{{item.name}}</div>
              </div>
            </div>
          </div>
          <div class="hot-city city-list" v-for="(item,key) in cities" :key="key" :ref="key">
            <div class="title">{{key}}</div>
            <div class="city-list">
              <div class="city-item border"
                v-for="innerItem in item"
                :key="innerItem.id"
                @click="handleCityClick(innerItem.name)"
              >
                <div class="item">{{innerItem.name}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="city-foreign" v-show="foreignShow">
          <div class="hot-city">
            <div class="title border-topbottom">热门城市</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
// 运用vuex的高级用法
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityContent',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    // 将vuex中state的city属性映射到currentCity
    // 简写：...mapState(['currentCity'])
    ...mapState({
      currentCity: 'city'
    })
  },
  data () {
    return {
      inlandShow: true,
      foreignShow: false,
      activeClass: true
    }
  },
  methods: {
    changeInlandShow () {
      this.inlandShow = true
      this.foreignShow = false
      this.activeClass = true
    },
    changeForeignShow () {
      this.foreignShow = true
      this.inlandShow = false
      this.activeClass = false
    },
    handleCityClick (city) {
      // 高级用法取代下面的代码
      // this.$store.commit('changeCity', city)
      // 使用映射过来的changeCity
      this.changeCity(city)
      this.$router.push('/')
    },
    // 将mutations映射到此组件中的changCity
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .city-tab
    background: $bgColor
    height: .4rem
    line-height: .4rem
    font-size: .32rem
    padding: .2rem 1rem
    color: #fff
    ul
      border: 1px solid #fff
      border-radius: .03rem
      zoom: 1
      overflow: hidden
      li.active
        background-color: #fff
        color: $bgColor
      li
        width: 50%
        float: left
        text-align: center
        background-color: $bgColor
        font-size: .28rem
        color: #fff
  .city-container
    overflow: hidden
    position: absolute
    top: 2.4rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .city-list
      overflow: hidden
      .city-item
        float: left
        width: 33.33%
        .item
          margin: .2rem
          padding: .1rem 0
          text-align: center
        .button
          margin: .2rem
          text-align: center
          height: .4rem
          line-height: .4rem
          border: 1px solid #cccccc
          border-radius: .3rem
 </style>
