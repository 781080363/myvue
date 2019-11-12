import Vue from "Vue"
import VueRouter from "vue-router"
import home from "../components/home"
import shop from "../components/shop"

Vue.use(VueRouter)
let router = new VueRouter({
    routes:[
        {path:"/",component:home},
        {path:"/shop",component:shop}
    ]
})
export default router