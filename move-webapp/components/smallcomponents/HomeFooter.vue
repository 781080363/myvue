<template>
        <ul id="Navigation">
            <li><img @click="Home" src="../../assets/img/homepage/Navigation1.jpg"><p style="color: #0085d0;">首页</p></li>
            <li><img @click="shop" src="../../assets/img/homepage/Navigation2.jpg"><p>商城</p></li>
            <li><img @click="preferential" src="../../assets/img/homepage/Navigation3.jpg"><p>优惠</p></li>
            <li><img @click="myself" src="../../assets/img/homepage/Navigation4.jpg"><p>个人中心</p></li>
        </ul>
</template>
<script>
export default {
    name:"HomeFooter",
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
    @import"../../assets/css/HomeFooter.css";
</style>