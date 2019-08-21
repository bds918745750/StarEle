<template>
<div class="HOT">
     <ele-homepage-HOT-HotHeader></ele-homepage-HOT-HotHeader>
      <ele-homepage-HOT-ThreeBox></ele-homepage-HOT-ThreeBox>
   <div class="BigBox">
      <ele-homepage-HOT-Shop></ele-homepage-HOT-Shop>
      <ele-homepage-HOT-Shop></ele-homepage-HOT-Shop>
      <ele-homepage-HOT-Shop></ele-homepage-HOT-Shop>
      <ele-homepage-HOT-Shop></ele-homepage-HOT-Shop>
      <ele-homepage-HOT-Shop></ele-homepage-HOT-Shop>
      <ele-homepage-HOT-Shop></ele-homepage-HOT-Shop>
      <ele-homepage-HOT-Shop></ele-homepage-HOT-Shop>
      <ele-homepage-HOT-Shop></ele-homepage-HOT-Shop>
      <ele-homepage-HOT-Shop></ele-homepage-HOT-Shop>
      <ele-homepage-HOT-Minshop></ele-homepage-HOT-Minshop>
      <ele-homepage-HOT-Minshop></ele-homepage-HOT-Minshop>
      <ele-homepage-HOT-Minshop></ele-homepage-HOT-Minshop>
      <ele-homepage-HOT-Minshop></ele-homepage-HOT-Minshop>
      <ele-homepage-HOT-Minshop></ele-homepage-HOT-Minshop>
   </div>
      <ele-homepage-HOT-Nothing></ele-homepage-HOT-Nothing>

</div>
</template>

<script>
    import HotHeader from "../../components/HomePageChild/Hot/HotHeader";
    import ThreeBox from "../../components/HomePageChild/Hot/ThreeBox";
    import Shop from "../../components/HomePageChild/Hot/Shop";
    import Minshop from "../../components/HomePageChild/Hot/Minshop";
    import Nothing from "../../components/HomePageChild/Hot/Nothing";

export default {
  name: "Hot",
  components: {
    "ele-homepage-HOT-HotHeader":HotHeader,
    "ele-homepage-HOT-ThreeBox":ThreeBox,
    "ele-homepage-HOT-Shop":Shop,
    "ele-homepage-HOT-Minshop":Minshop,
    "ele-homepage-HOT-Nothing":Nothing,
  }
};
</script>

<style scoped>
.HOT{
      background-color: #c1111e;
}
.BigBox{
    width: 100%;
    background-color: #c1111e;
}
</style>