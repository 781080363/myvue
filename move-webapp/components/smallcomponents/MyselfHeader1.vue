<template>
    <div id="oheader">
        <div id="myheader">
            <img src="../../assets/img/myself/header1.jpg" alt />
            <p>我的</p>
            <div id="twopho">
                <img src="../../assets/img/myself/header2.jpg" alt />
                <img src="../../assets/img/myself/header3.jpg" alt />
            </div>
        </div>
        <div id="pho">
            <div id="pho1">
                <div id="pho2">
                    <div id="pho3">
                        <img src="../../assets/img/myself/header4.jpg" alt />
                    </div>
                </div>
            </div>
            <div>
                <p id="dl">登录</p>
                <p id="more">登录后可查看更多信息哦~</p>
            </div>
        </div>
        <ul id="surplus">
            <li>
                <span>--</span>元
                <p>我的余额</p>
            </li>
            <li>
                <span>--</span>
                <p>通用流量剩余</p>
            </li>
            <li>
                <span>--</span>分钟
                <p>语音剩余</p>
            </li>
            <li>
                <span>--</span>
                <p>可用积分</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:"MyselfHeader1"
    };
</script>
<style>
    @import"../../assets/css/MyselfHeader1.css";
</style>