<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="wrapper" v-show="keyword">
      <div>
        <ul>
          <li
            class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            {{item.name}}
          </li>
        </ul>
        <div class="search-item-no border-bottom" v-show="hasNotDate">没有匹配项，请重新输入</div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
// 运用vuex的高级用法
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNotDate () {
      return !this.list.length
    }
  },
  methods: {
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
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (this.keyword) {
        this.list = []
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    line-height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .3rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
    .search-item-no
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
      text-align: center
</style>
