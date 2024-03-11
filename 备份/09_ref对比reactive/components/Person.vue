<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万元</h2>
    <button @click="changeprice">修改汽车的价格</button>
    <button @click="changebrand">修改汽车的品牌</button>
    <button @click="changecar">修改汽车的价格</button>

    <hr>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="chagesum">点我加一</button>

  </div>

</template>


<script lang="ts" setup name="Person234">
import {reactive, ref} from "vue";

//数据
let car = reactive({brand: '奔驰', price: 100})
let sum = ref(0)

function chagesum() {
  sum.value += 1
}

function changeprice() {
  car.price += 100
}

function changebrand() {
  car.brand = '宝马'
}

function changecar() {
  // car=｛brand：'奥拓'，price:1｝这么写页面不更新的

  //这个写法可以更新
  Object.assign(car, {brand: 'bmw', price: 1})

  //假如是用 ref 创建的对象
  //car.value = {brand：'奥拓'，price:1}  可以直接改
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


