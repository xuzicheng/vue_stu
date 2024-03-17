import {onMounted, reactive} from 'vue'
import axios from 'axios'


export default function () {
    let imglist = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'
    ])

    async function addDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breeds/image/random')
            imglist.push(result.data.message)
        } catch (error) {
            alert('获取图片失败' + error)
        }
    }

//钩子
    onMounted(() => {
        addDog()
    })
//向外部提供的接口
    return {
        imglist,
        addDog
    }
}