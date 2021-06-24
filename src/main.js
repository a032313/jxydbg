import {createApp} from "vue"
import "./mock/mockServer"
import App from "./App.vue"
import lazyPlugin from 'vue3-lazy'
import router from "./router"
import {store} from "./store/index"
import "./common/style/total.less"
import "./common/style/reset.css"

const app=createApp(App)
app.use(router)
app.use(store)
app.use(lazyPlugin,{
    loading:'/images/loading.gif'
})
app.mount("#app")

