<template>
  <div class="like">
      <div class="like-title">
          <span class="iconfont">&#xe757;</span>
          猜你喜欢
      </div>
      <ul class="like-list">
          <li class="likeList-item border-bottom" v-for="item of likeList" :key="item.id">
              <div class="likeList-item-img">
                  <img :src="item.imgUrl"/>
              </div>
              <div class="likeList-item-content">
                  <div class="content-title">{{item.likeTitle}}</div>
                  <div class="content-star-comment">
                      <span class="iconfont">&#xe60a;&#xe60a;&#xe60a;&#xe60a;&#xe60a;</span>
                      <div class="content-comment">{{item.likeNum}}条评论</div>
                  </div>
                  <div class="content-money-place">
                      <div class="content-money">￥<em>{{item.likeMoney}} </em>起</div>
                      <div class="content-place">{{item.likePlace}}</div>
                  </div>
                  <div class="content-desc" v-if="item.isShow">{{item.likeDesc}}</div>
              </div>
          </li>
      </ul>
      <div class="like-more">
          <a href="#">查看所有产品</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLike',
  props: {
    likeList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.like
    display: inline-block
    margin: .2rem 0 0 0
    width: 100%
    .like-title
        margin-left: .2rem
        font-size: .32rem
        height: .64rem
        line-height: .64rem
        .iconfont
            color: red
    .like-list
        .likeList-item
            display: flex
            height: 0
            overflow: hidden
            padding-bottom: 38%
            margin: .2rem
            .likeList-item-img
                float: left
                overflow: hidden
                width: 3rem
                height: 3rem
                img
                    width: 100%
            .likeList-item-content
                width: 100%
                padding-left: .3rem
                .content-title
                    font-size: .36rem
                    padding-top: .2rem
                .content-star-comment
                    position: relative
                    margin: .1rem 0
                    .iconfont
                        color: #ffb436
                    .content-comment
                        position: absolute
                        top: 0
                        right: 0
                .content-money-place
                    position: relative
                    margin: .3rem 0 .4rem 0
                    .content-money
                        em
                            font-size: .48rem
                            color: #ff8300
                    .content-place
                        max-width: 1.5rem
                        position: absolute
                        top: 0
                        right: 0
                        ellipsis()
                .content-desc
                    color: #f55
                    font-size: .24rem
                    line-height: .34rem
    .like-more
        height: .36rem
        line-height: .36rem
        text-align: center
</style>
