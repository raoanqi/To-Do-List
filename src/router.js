import Vue from 'vue'
import VueRouter from "vue-router"
import DailyWork from "./components/DailyWork/DailyWork"

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/', component: DailyWork},
        {path: '/daily-work', component: DailyWork}
    ]
})

export default router
