<template>
    <div class="wrapper">
        <!-- 等接收完数据再加载swiper,使用v-if判断 -->
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background-color: #ffffff
.wrapper
    width: 100%
    overflow: hidden
    height: 0
    // 宽高比
    padding-bottom: 37.08%
    background-color: #eeeeee
    .swiper-img
        width: 100%
</style>
