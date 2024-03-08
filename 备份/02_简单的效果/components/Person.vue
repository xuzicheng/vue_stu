<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changename">修改名字</button>
    <button @click="changeage">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person",
  setup() {
    //数据 原来是卸载 data 中，此时 name 啥的都不是响应式数据
    let name = '张三'  // 注意此时不是响应式
    let age = 12      // 注意此时不是响应式
    let tel = '123245'

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

    return {name, age, changename, changeage, showTel}
  }
}
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
</style>