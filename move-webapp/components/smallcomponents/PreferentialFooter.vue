<template>
    <ul>
        <li>
            <div id="web">
                <p>京ICP备05002571号<a>  证照信息</a></p>
                <p> Copyright©1999-2019  中国移动  版权所有</p>
                <p>本网站支持IPv6访问</p>
            </div>
        </li>
        <ul id="comef">
            <li><img @click="Home" src="../../assets/img/preferentialpage/preferentialfooter1.jpg"><p>首页</p></li>
            <li><img @click="shop" src="../../assets/img/homepage/Navigation2.jpg"><p>商城</p></li>
            <li><img @click="preferential" src="../../assets/img/preferentialpage/preferentialfooter3.jpg"><p style="color: #0085d0;">优惠</p></li>
            <li><img @click="myself" src="../../assets/img/homepage/Navigation4.jpg"><p>个人中心</p></li>
        </ul>
    </ul>
</template>
<script>
export default {
    name:"PreferentialFooter",
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
    @import"../../assets/css/PreferentialFooter.css";
</style>