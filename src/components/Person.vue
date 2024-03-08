<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{ address }}</h2>

    <button @click="changename">修改名字</button>
    <button @click="changeage">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>


<script lang="ts" setup name="Person234">
let name = '张三'  // 注意此时不是响应式
let age = 12      // 注意此时不是响应式
let tel = '123245'
let address = '东莞市松山湖'

//方法
function changename() {
  name = 'zhangsan'// 虽然改了，但这样修改并不是响应式的
}

function changeage() {
  age += 1
}

function showTel() {
  alert(tel)
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
</style>


