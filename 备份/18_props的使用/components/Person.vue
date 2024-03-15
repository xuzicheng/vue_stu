<template>
  <div class="person">
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }} -- {{ item.age }}
      </li>
    </ul>
  </div>

</template>


<script lang="ts" setup name="Person234">
import {defineProps, withDefaults} from 'vue'
import {type Persons} from '../types'

//只接收list
// defineProps(['list'])

//接收list+限制类型
// defineProps<{list:Persons}>()


//接收 list+限制类型+限制必要性+指定默认值
withDefaults(defineProps<{ list?: Persons }>(),
    {
      list: () => [{id: 'qq1', name: '张三', age: 20}]
    }
)
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


