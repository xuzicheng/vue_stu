//引入 createapp 用于创建应用
import {createApp} from 'vue'
import './style.css'
//引用 app 根组件
import App from './App.vue'
//引入路由
import router from './router'
//创建一个应用实例
const app = createApp(App)
//使用路由
app.use(router)

//挂载路由到 app 实例上
app.mount('#app')