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
    // import HomeFooter from "../components/smallcomponents/HomeFooter"
    export default {
        name:"bighome",
        components:{
            home,
            shop,
            // HomeFooter
        },
    }
</script>
<style>

</style>