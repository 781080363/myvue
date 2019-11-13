<template>
     <div>
        <preferential-header></preferential-header>
        <preferential-list></preferential-list>
        <preferential-footer></preferential-footer>
     </div>
</template>
<script>
import PreferentialHeader from "./smallcomponents/PreferentialHeader";
import PreferentialList from "./smallcomponents/PreferentialList";
import PreferentialFooter from "./smallcomponents/PreferentialFooter";
export default {
    name:"preferential",
    components:{
        PreferentialHeader,
        PreferentialList,
        PreferentialFooter
    }
}
</script>
<style>
    @import"../assets/css/Preferential.css";
</style>