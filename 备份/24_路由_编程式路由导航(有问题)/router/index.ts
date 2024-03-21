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
                    name: 'xiang',
                    path: 'detail/:id/:title/:content?',
                    component: Detail,

                    //第一种写法:将路由收到所有的参数，然后通过props接收传给Detail组件
                    props: true
                    // //第二种写法,可以决定传给Detail组件哪些参数
                    // /* props: (route){
                    //     return route.params
                    // } */
                    //
                    // //第三种写法,对象写法
                    // /*props: {
                    //     id: 'id',
                    //     title: 'title',
                    //     content: 'content'
                    // } */
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