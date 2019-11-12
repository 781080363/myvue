<template>
    <div>

        <shop-header></shop-header>
        <shop-swiper></shop-swiper>
        <shop-list></shop-list>
        <div id="sbd">
            <div class="full">
                <h2>
                    <img src="../assets/img/shoppage/titlea1.jpg" alt="">
                    <span>热门推荐</span>
                </h2>
                <ul class="other other4">
                    <li class="grya1">
                        <img src="../assets/img/shoppage/recommend1.jpg" alt="">
                    </li>
                    <li>
                        <ul id="trouble">
                            <li class="grya1">
                                <img src="../assets/img/shoppage/recommend2.jpg" alt="">
                            </li>
                            <li class="grya1">
                                <img src="../assets/img/shoppage/recommend3.jpg" alt="">
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <h2 class="full">
                <img src="../assets/img/shoppage/titlea2.jpg" alt="">
                <span>买手机</span>
            </h2>
            <ul class="other other1">
                <li>
                    <img class="pho" src="../assets/img/shoppage/paypho1.jpg" alt="">
                    <p class="blac">华为Mate30</p>
                    <p class="name">华为Mate30</p>
                    <p class="pink">￥4299</p>
                </li>
                <li>
                    <img class="pho" src="../assets/img/shoppage/paypho2.jpg" alt="">
                    <p class="blac">iPhone1...</p>
                    <p class="name">双卡公开版4G手机</p>                       
                    <p class="pink">￥5499</p>
                </li>
                <li>
                    <img class="pho" src="../assets/img/shoppage/paypho3.jpg" alt="">
                    <p class="blac">小米9Pro...</p>
                    <p class="name">小米9Pro 5G...</p>                    
                    <p class="pink">￥4299</p>
                </li>
                <li>
                    <img class="pho" src="../assets/img/shoppage/paypho4.jpg" alt="">
                    <p class="blac">三星S10+</p>
                    <p class="name">三星S10+</p>                    
                    <p class="pink">￥5399</p>
                </li>
            </ul>
            <div class="full">
                <h2>
                    <img src="../assets/img/shoppage/titlea3.jpg" alt="">
                    <span>选号码</span>
                </h2>
                <ul class="other other2">
                    <li>
                        <img src="../assets/img/shoppage/num1.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/img/shoppage/num2.jpg" alt="">
                    </li>
                </ul>
            </div>
            <h2 class="full">
                <img src="../assets/img/shoppage/titlea4.jpg" alt="">
                <span>全家享</span>
            </h2>
            <ul class="other other3">
                <li>
                    <p class="big">宽带新装</p>
                    <p class="small">套餐还送宽带</p>
                    <img class="titlea" src="../assets/img/shoppage/family1.jpg" alt="">
                </li>
                <li>
                    <p class="big">全国亲情网</p>
                    <p class="small">成员多至19人</p>
                    <img class="titlea" src="../assets/img/shoppage/family2.jpg" alt="">
                </li>
            </ul>
            <h2 class="full">
                <img src="../assets/img/shoppage/titlea5.jpg" alt="">
                <span>挑配件</span>
            </h2>
            <ul class="other other5">
                <li>
                    <p class="blac">华为Mate30</p>
                    <p class="name">华为Mate30</p>
                    <p class="pink">￥4299</p>
                    <img class="watch" src="../assets/img/shoppage/watch1.jpg" alt="">
                </li>
                <li>
                    <p class="blac">iPhone1...</p>
                    <p class="name">双卡公开版4G手机</p>                       
                    <p class="pink">￥5499</p>
                    <img class="watch" src="../assets/img/shoppage/watch2.jpg" alt="">
                </li>
            </ul>
        </div>
        <shop-footer-1></shop-footer-1>
        <shop-footer></shop-footer>
    </div>
</template>
<script>
    import ShopFooter from "./smallcomponents/ShopFooter"
    import ShopFooter1 from "./smallcomponents/ShopFooter1"
    import ShopList    from "./smallcomponents/ShopList"
    import ShopHeader  from "./smallcomponents/ShopHeader"
    import ShopSwiper  from "./smallcomponents/ShopSwiper"
    export default {
        name:"shop",
        components:{
            ShopSwiper,
            ShopHeader,
            ShopList,
            ShopFooter1,
            ShopFooter
        }   
    }
</script>
<style scoped>
   @import"../assets/css/Shop.css";
</style>