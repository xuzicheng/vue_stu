//创建路由器并且暴露出去
//导入createRouter方法
import {createRouter, createWebHistory} from 'vue-router'
import home from '../components/home.vue'
import news from '../components/news.vue'
import About from '../components/About.vue'


//创建路由器
const router = createRouter({
    history: createWebHistory(),//路由器模式
    routes: [
        {
            path: '/home',
            component: home
        },
        {
            path: '/news',
            component: news
        },
        {
            path: '/about',
            component: About
        }
    ]
})

//暴露router
export default router