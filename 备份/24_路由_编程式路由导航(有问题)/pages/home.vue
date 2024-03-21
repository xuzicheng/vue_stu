//给我的 home 组件写一点结构和样式，让它看起来更像一个页面。
<template>

  <div class="home">
    <img src="https://www.atguigu.com/images/index_new/logo.png" alt="">
  </div>

</template>

<script setup lang="ts" name="home">
import {onMounted} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()


// onMounted(() => {
//   setTimeout(() => {
//     //在此处编写一段代码,让路由实现跳转
//     router.push('/about')
//   }, 3000)
// })


</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
