<template>
  <div class="person">
    姓：<input type="text" v-model="firstname"><br>
    名：<input type="text" v-model="lastname"><br>
    全名：<span>{{ fullname }}</span><br>
  </div>

</template>


<script lang="ts" setup name="Person234">
import {computed, ref} from 'vue'

let firstname = ref('张')
let lastname = ref('三')

let fullname = computed(() => {
  return firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1) + '-' + lastname.value
})
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


