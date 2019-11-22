<template>
    <div>
        <ul id="myself">
            <li><img @click="Home" src="../../assets/img/myself/home.jpg"><p>首页</p></li>
            <li><img @click="shop" src="../../assets/img/homepage/Navigation2.jpg"><p>商城</p></li>
            <li><img @click="preferential" src="../../assets/img/homepage/Navigation3.jpg"><p>优惠</p></li>
            <li><img @click="myself" src="../../assets/img/myself/core.png"><p  style="color: #0085d0;">个人中心</p></li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"MyselfFooter1",
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
    @import"../../assets/css/MyselfFooter1.css";
</style>