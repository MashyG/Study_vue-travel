<template>
    <div class="recommend">
        <div class="recommend-header">
            <div class="header-left">
                <span class="iconfont">&#xe6a0;</span>
                <span class="header-left-content">本周热门榜单</span>
            </div>
            <div class="header-right">
                <span class="header-left-content">全部榜单</span>
                <span class="iconfont">&#xe6ab;</span>
            </div>
        </div>
        <div class="recommend-content">
            <ul class="recommend-content-list">
                <router-link
                    tag="li"
                    class="recommend-content-listItem"
                    v-for="item of recommendList"
                    :key="item.id"
                    :to="'/detail/' + item.id"
                >
                    <img class="listItem-img-top" v-if="item.showImtTop" :src="item.imgTopUrl"/>
                    <img class="listItem-img" :src="item.imgUrl"/>
                    <div class="recommend-content-desc">{{item.desc}}</div>
                    <div class="recommend-content-money"><em>{{item.money}} </em>起</div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.recommend
    position: relative
    margin-top: .2rem
    float: left
    width: 100%
    .recommend-header
        display: flex
        .header-left
            flex: 1
            width: 50%
            height: .6rem
            line-height: .6rem
            margin-left: .2rem
            color: red
            font-size: .35rem
            .header-left-content
                color: #333
        .header-right
            height: .6rem
            line-height: .6rem
            margin-right: .2rem
    .recommend-content
        margin-top: .2rem
        .recommend-content-list
            padding: 0 .2rem
            overflow-x: scroll
            white-space: nowrap
            .recommend-content-listItem
                position: relative
                width: 2rem
                display: inline-block
                padding: .06rem 0 .2rem
                margin-right: .1rem
                .listItem-img
                    position: relative
                    width: 2rem
                .listItem-img-top
                    width: .84rem
                    height: .4rem
                    position: absolute
                    top: 0
                    left: 0
                    z-index: 1
                .recommend-content-desc
                    margin: .1rem 0
                    text-align: center
                    ellipsis()
                .recommend-content-money
                    text-align: center
                    em
                        color: #ff8300
</style>
