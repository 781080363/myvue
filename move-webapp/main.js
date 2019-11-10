import Vue from "Vue"
import BigHome from "./views/BigHome"
new Vue({
    el:"#app",
    render(h){
        return h(BigHome)
    }
})