<template>
        <ul id="Navigation1">
            <li><img @click="Home" src="../../assets/img/shoppage/home.jpg" alt=""><p>首页</p></li>
            <li><img @click="shop" src="../../assets/img/shoppage/shop.jpg" alt=""><p style="color: #0085d0;">商城</p></li>
            <li><img @click="preferential" src="../../assets/img/homepage/Navigation3.jpg" alt=""><p>优惠</p></li>
            <li><img @click="myself" src="../../assets/img/homepage/Navigation4.jpg" alt=""><p>个人中心</p></li>
        </ul>
</template>
<script>
export default {
    name:"ShopFooter",
        methods:{
        Home(){
            this.$router.push("/");
        },
        shop(){
            this.$router.push("/shop");
        },
        preferential(){
            this.$router.push("/preferential");
        },
        myself(){
            this.$router.push("/myself");
        }
    }
}
</script>
<style>
    @import"../../assets/css/ShopFooter.css";
</style>