<template>
  <div class="count">
    <h2>当前求和为:{{countStore.sum}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="add">加</button>
    <button @click="Minus">减</button>

  </div>


</template>

<script setup lang="ts" name="Count">
import {ref} from 'vue'
import {useCountStore} from '../store/count'

//数据

const countStore = useCountStore()

let n = ref(1)//用户选择的数值


//方法
function add() {

}

function Minus() {

}
</script>


<style scoped>
.count {
  margin: 20px;
  width: 100%;
  background-color: #6cbde8;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select, button {
  margin: 0 5px;
  height: 40px;
}

</style>