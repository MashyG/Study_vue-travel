<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-container
      :hotCities="hotCities"
      :cities="cities"
      :letter="letter"
    ></city-container>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CityContainer from './components/CityContainer'
import CityAlphabet from './components/Alphabet'
import CitySearch from './components/Search'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityContainer,
    CityAlphabet,
    CitySearch
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    getHomeInfo () {
      // 路径中的api需要在config/index.js配置文件中说明api转换为static/mock
      axios.get('/api/city.json')
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (res) {
      // console.log(res.data)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
*
  touch-action: none
</style>
