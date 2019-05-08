<template>
  <div id="app">
    <!-- exclude：通过组件名使得组件重新获取数据 -->
    <keep-alive exclude="">
      <!-- 数据保存在内存中，不需要一刷新就发请求 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
