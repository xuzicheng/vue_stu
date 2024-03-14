<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="h2">北京</h2>
    <h3>东莞</h3>
    <button @click="handleClick">点我输出h2</button>
  </div>

</template>


<script lang="ts" setup name="Person234">

import {defineExpose, ref} from "vue";

//创建一个h2的ref,用于存储 ref 元素
let h2 = ref(null);

let a = ref(0);
let b = ref(1);
let c = ref(2);


function handleClick() {
  console.log(h2.value);
}

defineExpose({a, b, c})
</script>

<style scoped>
.person {
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


