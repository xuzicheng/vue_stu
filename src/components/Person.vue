<template>
  <div class="person">
    <h2>情况 1：监视 ref 基本数据类型</h2>
    <h2>当前求和为{{ sum }}</h2>
    <button @click="changesum">点我sum+1</button>
    <br>
    <h2>情况 2：监视 ref 对象数据类型</h2>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <button @click="changename">修改名字</button>
    <button @click="changeage">修改年龄</button>
    <button @click="changePerson">修改整个人</button>


  </div>

</template>


<script lang="ts" setup name="Person234">
import {ref, watch} from 'vue'

let sum = ref(0)
let person = ref({
  name: '张三',
  age: 18
})

function changesum() {
  sum.value += 1
}

//监视 情况 1：监视 ref 基本数据类型
const stopwatch = watch(sum, (newValue, oldValue) => {
  console.log('sum 变化了', newValue, oldValue)
  // if (newValue>=10){
  //   stopwatch()
  // }
})


function changename() {
  person.value.name += '~'
}

function changeage() {
  person.value.age += 1
}

function changePerson() {
  person.value = {name: '李四', age: 99}
}

/*监视 情况 2：监视 ref 对象数据类型,监视的是对象的地址值，若想监视对象内部的属性变化，需要手动开启深度监视,immediate立即给你 watch
若修改的是ref定义的对象中的属性，newValue和oldValue都是新值，因为它们是同一个对象。
若修改整个ref定义的对象，newValue是新值，oldValue是旧值，因为不是同一个对象了
watch的第一个参数是：被监视的数据
watch的第二个参数是：监视的回调
watch的第三个参数是：配置对象（deep,immediate等等）
 */
watch(person, (newValue, oldValue) => {
  console.log('person 变化了', newValue, oldValue)
}, {deep: true, immediate: true})
</script>

<style scoped>
.person {
  width: 1150px;
  height: 550px;
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


