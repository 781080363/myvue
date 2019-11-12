<template>
    <div id="notice">
            <div id="tips">
                <img src="../../assets/img/homepage/notice.jpg" alt="">公告：
            </div>
            <div class="swiper-container swiper1">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">中国移动掌上营业厅服务协议</div>
                    <div class="swiper-slide">中国移动掌上营业厅10月30日9：00至17...</div>
                    <div class="swiper-slide">关于中国移动取消流量“漫游”费的公告</div>
                    <div class="swiper-slide">“扫黄打非”举报公告</div>
                    <div class="swiper-slide">个人信息保护政策</div>
                    <div class="swiper-slide">中央第六巡视组向中国移动通信集团有限公司党组</div>
                    <div class="swiper-slide">中国移动掌上营业厅10月29日9：00至17</div>
                    <div class="swiper-slide">中央第六巡视组巡视中国移动通信集团有限公司党...</div>
                </div>
            </div>
            <div id="banner">
                <div class="swiper-container swiper2">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="../../assets/img/homepage/banner1.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/img/homepage/banner2.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/img/homepage/banner3.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/img/homepage/banner4.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/img/homepage/banner5.jpg" alt=""></div>
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
    name:"HomeSwiper",
    mounted(){
        let mySwiper = new Swiper ('.swiper1', {
            loop: true,
            freeMode:true,
            autoplay:true,
            autoplay: {
                delay:2000,
                disableOnInteraction: false

            },
            speed:8000,
        })
        var newswiper = new Swiper('.swiper2',{
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
<style >
    @import"../../assets/css/HomeSwiper.css";
</style>