<template>
  <div class="talk">
    <button @click="getTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>


</template>

<script setup lang="ts" name="LoveTalk">
import axios from 'axios'
import {nanoid} from 'nanoid'
import {useTalkStore} from "../store/talk.ts";

const talkStore = useTalkStore()

async function getTalk() {
  //发请求
  let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json%27')
  //包装数据
  let obj = {id: nanoid(), title: result.data.content}
  //console.log(obj)
  //添加到列表中
  talkList.unshift(obj)
}
</script>


<style scoped>

.talk {
  margin: 20px;
  width: 100%;
  background-color: rgba(255, 74, 86, 0.87);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>