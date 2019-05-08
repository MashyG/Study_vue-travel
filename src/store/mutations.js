export default {
  // state所有的公用数据
  changeCity (state, city) {
    state.city = city
    localStorage.city = city
  },
  imgShow (state, imgs) {
    state.imgs = imgs
    localStorage.imgs = imgs
  }
}
