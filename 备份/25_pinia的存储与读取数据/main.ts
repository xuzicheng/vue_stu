//引入 createapp 用于创建应用
import {createApp} from 'vue'
import './style.css'
//引用 app 根组件
import App from './App.vue'
//第一步：引入pinia 状态管理插件
import {createPinia} from 'pinia'


//创建一个应用实例
const app = createApp(App)

//第二步:创建 pinia 状态管理实例
const pinia = createPinia()
//第三步:安装 pinia 状态管理插件
app.use(pinia)
//挂载路由到 app 实例上
app.mount('#app')