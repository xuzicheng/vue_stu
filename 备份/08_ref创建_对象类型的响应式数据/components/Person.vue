<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万元</h2>
    <button @click="changeprice">修改汽车的价格</button>
    <br>
    <h2>游戏列表:</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changefirstgame">修改第一个游戏的名字</button>
  </div>

</template>


<script lang="ts" setup name="Person234">
import {ref} from "vue";

//数据
let car = ref({brand: '奔驰', price: 100})
let games = ref([
  {id: '1001', name: '原神'},
  {id: '1002', name: '三国杀'},
  {id: '1003', name: '守望先锋'},
])


function changeprice() {
  car.value.price += 10
}

function changefirstgame() {
  games.value[0].name = '剑网三'
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


