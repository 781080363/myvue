<template>
    <div id="banner7">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../../assets/img/myself/swiper1.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="../../assets/img/myself/swiper2.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="../../assets/img/myself/swiper3.jpg" alt=""></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
</template>
<script>
    import swiper from "../../../bower_components/swiper/package/css/swiper.css"
    import Swiper from "swiper"
    export default {
        name:"MyselfSwiper1",
        mounted(){
            var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            autoplay:true,
            autoplay: {
                delay:2000,
                disableOnInteraction: false
            },
            speed:500,
            pagination:{
                el: '.swiper-pagination',
                clickable: true,
                clickableClass : 'my-pagination-clickable'
            }
            })         
        }
    }
</script>
<style>
    @import"../../assets/css/MyselfSwiper1.css";
</style>