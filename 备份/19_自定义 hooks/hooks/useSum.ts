import {computed, onMounted, ref} from 'vue'

export default function () {

    let sum = ref(0)
    let bigSum = computed(() => {
        return sum.value * 1000
    })

    function add() {
        sum.value += 1
    }

    onMounted(() => {
        add()
    })

    return {
        sum,
        add,
        bigSum
    }
}