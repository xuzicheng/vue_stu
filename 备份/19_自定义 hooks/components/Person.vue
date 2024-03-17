<template>
  <div class="person">
    <h2>当前求和为:{{ sum }}, 一千倍为:{{ bigSum }}</h2>
    <button @click="add">点我sum+1</button>
    <hr>
    <img v-for="(dog,index) in imglist" :src="dog" :key="index" alt="">
    <br>
    <button @click="addDog">再来一只狗</button>

  </div>

</template>


<script lang="ts" setup name="Person234">
import useSum from '../hooks/useSum'
import useDog from '../hooks/useDog'


const {sum, add, bigSum} = useSum();
const {imglist, addDog} = useDog();
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

img {
  width: 10%;
  object-fit: cover;
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>


