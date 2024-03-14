<template>
  <h2 ref="h2">你好</h2>
  <button @click="handleClick">测试</button>
  <Person ref="ren"/>

</template>


<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import {ref} from 'vue'

let ren = ref(null)

function handleClick() {
  // console.log(h2.value)
  console.log(ren.value)
}


</script>


<style scoped>

</style>


