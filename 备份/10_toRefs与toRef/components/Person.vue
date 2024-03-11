<template>
  <div class="person">
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }},{{ nl }}</h2>
    <button @click="changename">修改名字</button>
    <button @click="changeage">修改年龄</button>


  </div>

</template>


<script lang="ts" setup name="Person234">
import {reactive, toRef, toRefs} from 'vue'

let person = reactive({
  name: 'zhangsan',
  age: 18
})

let {name, age} = toRefs(person)
let nl = toRef(person, 'age')
console.log(nl.value)

function changename() {
  name.value += '~'
}

function changeage() {
  age.value += 1
}

</script>


<style scoped>
.person {
  width: 750px;
  height: 350px;
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


