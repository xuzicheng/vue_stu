<template>
  <div class="news">
    <!-- 新闻列表(导航区) __ -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <RouterLink :to="{
          name: '详情',
          params: {
            id: news.id,
            title: news.title,
            content: news.content
          }
        }">{{news.title}}
        </RouterLink>
      </li>
    </ul>
    <!-- 新闻列表(展示区) __ -->
    <div class="news_content">
      <RouterView></RouterView>
    </div>
  </div>

</template>

<script setup lang="ts" name="news">
import {reactive} from 'vue'
import {RouterLink, RouterView} from 'vue-router'

const newsList = reactive([
  {id: '01', title: '车祸新闻', content: '车祸新闻内容'},
  {id: '02', title: '财经', content: '财经新闻内容'},
  {id: '03', title: '科技', content: '科技新闻内容'},
])
</script>


<style scoped>
.div {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 20px;
}

.news_content {
  width: 110%;
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
