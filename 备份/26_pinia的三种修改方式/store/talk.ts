import {defineStore} from 'pinia'


export const useTalkStore = defineStore('talk', {
    state: () => (
        {
            talkList: [{id: 'ftnfasdf01', title: '今天你有点怪，哪里怪？怪好看的!'}]
        }
    )
})