import {defineStore} from 'pinia'
import axios from "axios";
import {nanoid} from "nanoid";


export const useTalkStore = defineStore('talk', {

    actions: {
        async getTalk() {
            //发请求
            let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json%27')
            //包装数据
            let obj = {id: nanoid(), title: result.data.content}
            //console.log(obj)
            //添加到列表中
            this.talkList.unshift(obj)
        }
    },
    state: () => (
        {
            talkList: [{id: 'ftnfasdf01', title: '今天你有点怪，哪里怪？怪好看的!'}]
        }
    )
})