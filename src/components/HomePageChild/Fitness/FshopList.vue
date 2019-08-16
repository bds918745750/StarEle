<template>
 <div class="BigBox">
    <ele-homepage-fitness-Fshop></ele-homepage-fitness-Fshop>
    <ele-homepage-fitness-Fshop></ele-homepage-fitness-Fshop>
    <ele-homepage-fitness-Fshop></ele-homepage-fitness-Fshop>
    <ele-homepage-fitness-Fshop></ele-homepage-fitness-Fshop>
    <ele-homepage-fitness-Fshop></ele-homepage-fitness-Fshop>
    <ele-homepage-fitness-Fshop></ele-homepage-fitness-Fshop>
    <ele-homepage-fitness-Fshop></ele-homepage-fitness-Fshop>
    <ele-homepage-fitness-Fshop></ele-homepage-fitness-Fshop>
    <ele-homepage-fitness-Fshop></ele-homepage-fitness-Fshop>
    <ele-homepage-fitness-Fshop></ele-homepage-fitness-Fshop>
 </div>
</template>

<script>
    import Fshop from "./Fshop"

    export default {
        
    name: "FshopList",
    components: {
        "ele-homepage-fitness-Fshop":Fshop
    
    }
    };
</script>

<style scoped>
.BigBox{
    width: 100%;
    background-color: #eecdd4;
    padding: 10px 0;
}
</style>