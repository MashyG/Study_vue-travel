import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
  /*
  actions可以忽略不写，则直接在组件中使用 this.$store.commit('changeCity', city)
  actions: {
    // ctx是上下文，city是传递过来的数据
    changeCity (ctx, city) {
      // 调用mutations中的changeCity
      ctx.commit('changeCity', city)
    }
  },
  */
})
