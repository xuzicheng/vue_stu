<template>
  <div class="person">
    姓：<input type="text" v-model="firstname"><br>
    名：<input type="text" v-model="lastname"><br>
    <button @click="changeFu11Name">改全名为li-si</button>
    全名：<span>{{ fullname }}</span><br>
  </div>

</template>


<script lang="ts" setup name="Person234">
import {computed, ref} from 'vue'

let firstname = ref('张')
let lastname = ref('三')

//这样定义的fullname 是计算属性，且是只读的
// let fullname = computed(() => {
//   return firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1) + '-' + lastname.value
// })


//这样定义的fullname 是计算属性，可读可写
let fullname = computed({
  get() {
    return firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1) + '-' + lastname.value
  },
  set(val) {
    const [str1, str2] = val.split('-')
    firstname.value = str1
    lastname.value = str2
    console.log('set', val)
  }
})

function changeFu11Name() {
  fullname.value = 'li-si'
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


