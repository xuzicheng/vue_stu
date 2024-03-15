<template>

  <Person a="haha" :list="personlist"/>

</template>


<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import {reactive} from 'vue'
import {Persons} from "./types";

let personlist = reactive<Persons>([
  {id: 'a1', name: 'John', age: 25},
  {id: 'a2', name: 'Mary', age: 30},
  {id: 'a3', name: 'Tom', age: 28}
])


</script>


<style scoped>

</style>


