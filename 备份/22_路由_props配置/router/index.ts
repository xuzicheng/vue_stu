//创建路由器并且暴露出去
//导入createRouter方法
import {createRouter, createWebHistory} from 'vue-router'
import home from '../pages/home.vue'
import news from '../pages/news.vue'
import About from '../pages/About.vue'
import Detail from '../pages/Detail.vue'


//创建路由器
const router = createRouter({
    history: createWebHistory(),//路由器模式
    routes: [
        {
            name: '主页',
            path: '/home',
            component: home
        },
        {
            name: '新闻',
            path: '/news',
            component: news,
            children: [
                {
                    name: '详情',
                    path: 'detail/:id/:title/:content',
                    component: Detail
                }
            ]
        },
        {
            name: '关于',
            path: '/about',
            component: About
        },

    ]
})

//暴露router
export default router