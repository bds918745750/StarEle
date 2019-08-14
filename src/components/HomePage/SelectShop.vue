<template>
<!-- 附近商家 -->
  <div class="ShopList">
    <div class="ShopList_top">
      <h2>附近商家</h2>
      <div class="ShopList_screen">
        <a href="javaScript:;">销量</a>
        <a href="javaScript:;">距离</a>
        <a href="javaScript:;">心选</a>
      </div>
      <ele-homepage-shopList></ele-homepage-shopList>
    </div>
  </div>
</template>

<script>
import ShopList from "./ShopList";
export default {
  name: "SeleShop",
  components: {
    "ele-homepage-shopList": ShopList
  }
};
</script>


<style scoped>
</style>