<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wripper">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) of gallaryImgs" :key="index">
                <img class="gallary-img" :src="item.imgUrl"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    gallaryImgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 分式显示：1/2
        paginationType: 'fraction',
        // 解决轮播异常
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: #000
  .wripper
    height: 0
    padding-bottom: 67%
    width: 100%
    .gallary-img
      width: 100%
    .swiper-pagination
      color: #ffffff
      bottom: -2rem
</style>
