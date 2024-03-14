<template>
  <div class="person">

    <h2>情况 4：监视ref 或者 reactive 定义的对象数据类型的某个属性</h2>
    <h2>姓名：{{ person.name }}</h2>

    <h2>年龄：{{ person.age }}</h2>

    <h2>车辆：{{ person.cars.car1 }} {{ person.cars.car2 }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeCar">修改第一辆车</button>
    <button @click="changeCar2">修改第二辆车</button>
    <button @click="changeAllCars">修改所有车</button>

  </div>

</template>


<script lang="ts" setup name="Person234">
import {reactive, watch} from 'vue'

//数据
let person = reactive({
  name: '张三',
  age: 25,
  cars: {
    car1: '宝马',
    car2: '奔驰'
  }
})


//方法
function changeName() {
  person.name += '~'
}

function changeAge() {
  person.age += 1
}

function changeCar() {
  person.cars.car1 = '奥迪'
}


function changeCar2() {
  person.cars.car2 = '宝马X5'
}

function changeAllCars() {
  person.cars = {
    car1: '宝马X6',
    car2: '奔驰E200'
  }
}

//监听
//监听name属性的变化,监视响应式对象中{基本数据类型}的值的变化，要写成() => person.name函数式写法
watch(() => person.name, (newVal, oldVal) => {
  console.log('监听到name变化，新值为：' + newVal + '，旧值为：' + oldVal)
})
//监听cars属性的变化,监视响应式对象中{对象类型}的值的变化，最好要写成() => person.cars函数式写法
watch(() => person.cars, (newValue, oldValue) => {
  console.log('监听到cars变化', newValue, oldValue)
}, {deep: true})


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


