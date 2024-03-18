//来点新闻组件和样式

<template>
  <div>
    <ul>
      <li><a href="#">新闻 001</a></li>
      <li><a href="#">新闻 002</a></li>
      <li><a href="#">新闻 003</a></li>
    </ul>
  </div>

</template>

<script setup lang="ts" name="news">

</script>


<style scoped>
.div {
  background-color: #f2f2f2;
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px;
}

a {
  color: #333;
  text-decoration: none;
}

</style>
