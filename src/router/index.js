import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import BannerImages from '@/pages/detail/components/BannerImages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      // 动态路由（:id）
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }, {
      path: '/detail/:id/bannerImages',
      name: 'BannerImages',
      component: BannerImages
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
