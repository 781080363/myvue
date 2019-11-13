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
    // import HomeFooter from "../components/smallcomponents/HomeFooter"
    export default {
        name:"bighome",
        components:{
            home,
            shop,
            Preferential
            // HomeFooter
        },
    }
</script>
<style>

</style>