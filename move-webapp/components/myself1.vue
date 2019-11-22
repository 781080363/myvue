<template>
    <div>
        <myself-header1></myself-header1>
        <myself-list1></myself-list1>
        <myself-swiper1></myself-swiper1>
        <myself-foot1></myself-foot1>
        <myself-footer1></myself-footer1>
    </div>  
</template>
<script>
    import MyselfHeader1 from "./smallcomponents/MyselfHeader1"
    import MyselfList1 from "./smallcomponents/MyselfList1"
    import MyselfSwiper1 from "./smallcomponents/MyselfSwiper1"
    import MyselfFoot1 from "./smallcomponents/MyselfFoot1"
    import MyselfFooter1 from "./smallcomponents/MyselfFooter1"
    export default {
        name:"myself1",
        components:{
            MyselfHeader1,
            MyselfList1,
            MyselfSwiper1,
            MyselfFoot1,
            MyselfFooter1
        }
    }
</script>
<style>
   @import"../assets/css/myself.css";
</style>