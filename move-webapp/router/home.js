import Vue from "Vue"
import VueRouter from "vue-router"
import home from "../components/home"
import shop from "../components/shop"
import preferential from "../components/preferential"

Vue.use(VueRouter)
let router = new VueRouter({
    routes:[
        {path:"/",component:home},
        {path:"/shop",component:shop},
        {path:"/preferential",component:preferential}

    ]
})
export default router