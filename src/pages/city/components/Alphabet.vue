<template>
    <div class="alphabet">
      <div class="alphabet-list"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
      >
        {{item}}
      </div>
    </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      // 将对象转为数组
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      // ['A','B',...]
      return letters
    }
  },
  updated () {
    // 当数据渲染后，获取首个字母(A)距离顶部蓝色位置的高度
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      // 将点击获取的字母向上级传递
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 通过setTimeOut优化此函数的执行次数,以此优化性能
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 获取拖动时距离顶部蓝色位置的高度（减去蓝色部分的高度）
          const touchY = e.touches[0].clientY - 83
          // 获取停止拖动时的字母序号（一个字母的高度为20）
          const index = Math.floor((touchY - this.startY) / 20)
          // 将获取的字母向上级传递
          this.$emit('change', this.letters[index])
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.alphabet
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 1.6rem
  right: 0
  bottom: 0
  width: .4rem
  text-align: center
  .alphabet-list
    height: .4rem
    line-height: .2rem
    text-align: center
    color: $bgColor
</style>
