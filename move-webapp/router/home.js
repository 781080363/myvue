import Vue from "Vue"
import VueRouter from "vue-router"
import home from "../components/home"
import shop from "../components/shop"
import preferential from "../components/preferential"
import myself1 from "../components/myself1"
 

Vue.use(VueRouter)
let router = new VueRouter({
    routes:[
        {path:"/",component:home},
        {path:"/shop",component:shop},
        {path:"/preferential",component:preferential},
        {path:"/myself",component:myself1}

    ]
})
export default router