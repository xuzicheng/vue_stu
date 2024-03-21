import {defineStore} from 'pinia'


export const useCountStore = defineStore('count', {

    //actions里面可以定义一些方法，比如增加、减少、修改,用于响应组件中的:动作
    actions: {
        increment(value: any) {
            if (this.sum < 11) {
                //this是store实例，可以直接调用state和getters
                this.sum += value
            }
        }
    },
    state: () => ({
        sum: 5,
        school: 'DGUT',
        address: 'Cambridge, MA'
    }),

})