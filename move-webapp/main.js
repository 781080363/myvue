import Vue from "Vue"
import BigHome from "./views/BigHome"
import VueRouter from "vue-router"
import router from "./router/home"

Vue.use(VueRouter)
new Vue({
    el:"#app",
    router,
    render(h){
        return h(BigHome)
    }
})

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}