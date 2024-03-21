<template>
  <div class="count">
    <h2>当前求和为:{{ sum }},放大十倍为:{{ bigSum }}</h2>
    <h3>欢迎来到:{{ school }}, ,大写:{{ upperCaseSchool }},坐落于:{{ address }}</h3>

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
import {storeToRefs} from 'pinia'
import {useCountStore} from '../store/count'

//数据

const countStore = useCountStore()
//storeToRefs将store转换为响应式对象,且不会对方法进行响应式处理
const {sum, school, address, bigSum, upperCaseSchool} = storeToRefs(countStore)

let n = ref(1)//用户选择的数值


//方法
function add() {

  countStore.increment(n.value)


}

function Minus() {
  countStore.sum -= n.value
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