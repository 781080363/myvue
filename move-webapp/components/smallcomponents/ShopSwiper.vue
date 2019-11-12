<template>
    <div id="notice1">
            <div id="tips1">
                <img src="../../assets/img/shoppage/bannernotice.jpg" alt="">
            </div>
            <div class="swiper-container swiper11">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">关于中国移动官方服务热线号码的公告</div>
                    <div class="swiper-slide">关于中国移动取消流量“漫游”费的公告</div>
                </div>
            </div>
            <div id="tips2">
                <img src="../../assets/img/shoppage/bannerclose.jpg" alt="">
            </div>
            <div id="banner1">
                <div class="swiper-container swiper21">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="../../assets/img/shoppage/banner1.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/img/shoppage/banner2.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/img/shoppage/banner3.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/img/shoppage/banner4.jpg" alt=""></div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
</template>
<script>
import swiper from "../../../bower_components/swiper/package/css/swiper.css"
import Swiper from "swiper" 
export default {
    name:"ShopSwiper",
    mounted(){
        let mySwiper = new Swiper ('.swiper11', {
            loop: true,
            freeMode:true,
            autoplay:true,
            autoplay: {
                delay:2000,
                disableOnInteraction: false

            },
            speed:8000,
        })
        var newswiper = new Swiper('.swiper21',{
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
    @import"../../assets/css/ShopSwiper.css";
</style>