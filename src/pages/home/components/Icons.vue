<template>
  <div class="icons">
      <swiper :options="swiperOption">
          <swiper-slide v-for="(page, pageIndex) of pages" :key="pageIndex">
              <div class="icon" v-for="item of page" :key="item.id">
                <div class="icon-img">
                    <img class="icon-img-content" :src="item.imgUrl"/>
                </div>
                <p class="icon-desc">{{item.desc}}</p>
              </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      <div class="listItem border-top">
        <ul>
          <li class="listItem-li border-right">
            <a href="#">
              <span class="iconfont">&#xe63f;</span>
              定位失败
            </a>
          </li>
          <li class="listItem-li">
            <a href="#">
              <span class="iconfont">&#xe629;</span>
              必游榜单
            </a>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconsList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 禁止自动轮播
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.icons >>> .swiper-container
    height: 0
    padding-bottom: 55%
    touch-action: none
.icons
  margin-top: .1rem
  // 解决手动拖动报错的问题
  touch-action: none
  .icon
      position: relative
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
          position: absolute
          top: 0
          left: 0
          right: 0
          bottom: .44rem
          box-sizing: border-box
          padding: .1rem
          .icon-img-content
              display: block
              margin: 0 auto
              height: 100%
      .icon-desc
          position: absolute
          left: 0
          right: 0
          bottom: 0
          height: .44rem
          line-height: .44rem
          color: #333
          text-align: center
          // 文字过多则省略功能
          ellipsis()
    .swiper-pagination-bullets
      bottom: 0
  .listItem
    margin-top: .1rem
    .listItem-li
      float: left
      width: 50%
      height: 1rem
      line-height: 1rem
      text-align: center
      a
        color: #333
</style>
