<template>
  <div class="child2">
    <h3>子组件2</h3>
    <h4>电脑：{{ computer }}</h4>
    <h4>哥哥给的玩具：{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import {onMounted, onUnmounted, ref} from 'vue'
import emitter from "../../utils/emitter.ts";

let computer = ref('孩子的电脑')
let toy = ref('')


//给emitter添加监听事件
emitter.on('send-toy', (value: any) => {
  toy.value = value
})

//在组件销毁时，移除监听事件send-toy
onUnmounted(() => {
  emitter.off('send-toy')
})
</script>

<style scoped>
.child2 {
  margin-top: 50px;
  background-color: orange;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>