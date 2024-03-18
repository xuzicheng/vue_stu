<template>
  <div class="app">
    <h2 class="title">Vue路由测试</h2>
  </div>
  <!-- 导航区 -->
  <div class="nav">
    <RouterLink to="/home" active-class="active">首页</RouterLink>
    <RouterLink to="/news" active-class="active">关于</RouterLink>
    <RouterLink to="/About" active-class="active">新闻</RouterLink>
  </div>
  <!-- 展示区 -->
  <div class="main-content">
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts" setup name="App">
import {RouterLink, RouterView} from 'vue-router'
</script>

<style scoped>
/* 样式重写 */
.title {
  margin-top: 50px;
  font-size: 30px;
}

.active {
  color: #f33939;
  background-color: #e6f53c;
}

.app {
  text-align: center;
  font-family: Arial, sans-serif;
}

h2 {
  color: #333;
}

.nav {
  background-color: #f2f2f2;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  /* 设置 a 标签的样式 */

  a {
    text-decoration: none;
    padding: 5px 10px;
    color: #555;
    /* a 标签 hover 效果 */

    &:hover {
      color: #000;
      background-color: #ccc;
    }
  }
}

.main-content {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  /* 圆角边框 */
  border-radius: 5px;
}
</style>
