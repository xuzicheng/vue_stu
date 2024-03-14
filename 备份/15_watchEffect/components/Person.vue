<template>
  <div class="person">
    <h1>当求和为10或者水位到 60时候,给服务器发送请求</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <h2>当前水位为：{{ waterLevel }}</h2>
    <button @click="changeSum">点我sum+1</button>
    <button @click="changeWaterLevel">点我水位+1</button>


  </div>

</template>


<script lang="ts" setup name="Person234">
import {ref, watchEffect} from 'vue'

let sum = ref(0);
let waterLevel = ref(0);


function changeSum() {
  sum.value += 1;
}

function changeWaterLevel() {
  waterLevel.value += 10;
}

// 监听sum和waterLevel的变化--wacth实现
// watch([sum,waterLevel],(value) => {
//   let [newSum,newWaterLevel] = value;
//   console.log(`sum:${newSum},waterLevel:${newWaterLevel}`);
//   if(sum.value === 10 || waterLevel.value >= 60){
//     console.log('发送请求');
// }})

// 监听sum的变化--watchEffect实现
watchEffect(() => {
  if (sum.value === 10 || waterLevel.value >= 60) {
    console.log('发送请求');
  }
})

</script>

<style scoped>
.person {
  width: 1550px;
  height: 1150px;
  background-color: #79c9f1;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}

li {
  font-size: 20px;
}
</style>


