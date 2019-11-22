<template>
    <div>
        <router-view></router-view>
        <!-- <home-footer></home-footer> -->

        <!-- <home></home>
        <shop></shop>   -->
    </div>
</template>
<script>
    import home from "../components/home"
    import shop from "../components/shop"
    import Preferential from "../components/preferential"
    import myself1 from "../components/myself1"
    // import HomeFooter from "../components/smallcomponents/HomeFooter"
    export default {
        name:"bighome",
        components:{
            home,
            shop,
            Preferential,
            myself1
            // HomeFooter
        },
    }
</script>
<style>

</style>