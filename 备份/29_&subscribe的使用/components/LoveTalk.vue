<template>
  <div class="talk">
    <button @click="getTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>


</template>

<script setup lang="ts" name="LoveTalk">
import {useTalkStore} from "../store/talk.ts";

const talkStore = useTalkStore()
talkStore.$subscribe(() => {
  console.log('talkStore里面有更新了')
  localStorage.setItem('talkList', JSON.stringify(talkStore.talkList))
})

function getTalk() {
  talkStore.getTalk()
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