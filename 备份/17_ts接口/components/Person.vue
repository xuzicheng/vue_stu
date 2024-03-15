<template>
  <div class="person">
    ??
  </div>

</template>


<script lang="ts" setup name="Person234">
import {Persons} from "../types";

// let person: PersonInterface = {
//   id: '123456',
//   name: 'John Doe',
//   age: 30
// }

let personList: Persons = [
  {id: '123456', name: 'John Doe', age: 30},
  {id: '654321', name: 'Jane Doe', age: 25},
  {id: '987654', name: 'Bob Smith', age: 40}
]


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
</style>


