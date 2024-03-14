<template>
  <div class="person">

    <h2>情况 5:监视上述多个数据(人的名字和第一台车的品牌)</h2>
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

//监视名字和第一台车的品牌
watch([() => person.name, () => person.cars.car1], (newVal, oldVal) => {
      console.log('监视到数据变化：', newVal, oldVal)
    }, {deep: true}
)


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


