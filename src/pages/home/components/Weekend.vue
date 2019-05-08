<template>
  <div class="weekend">
      <div class="weekendTitle">周末去哪儿</div>
      <div class="weekend-content">
            <ul class="weekend-content-list">
                <li class="weekend-content-listItem" v-for="item of weekendList" :key="item.id">
                    <img class="weekend-img" :src="item.imgUrl"/>
                    <div class="weekend-content-title">{{item.title}}</div>
                    <div class="weekend-content-desc">{{item.desc}}</div>
                </li>
            </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.weekend
    width: 100%
    display: inline-block
    margin-top: .2rem
    .weekendTitle
        height: .72rem
        line-height: .72rem
        font-size: .3rem
        background: #eee
        padding-left: .2rem
    .weekend-content
        .weekend-content-list
            .weekend-content-listItem
                .weekend-img
                    width: 100%
                .weekend-content-title
                    margin: .4rem 0 .2rem .4rem
                .weekend-content-desc
                    font-size: .24rem
                    width: 70%
                    color: #616161
                    margin: .2rem 0 .2rem .4rem
                    ellipsis()
</style>
