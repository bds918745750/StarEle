<template>
  <div>
      <ele-homepage-shop :data="data" ></ele-homepage-shop>
  </div>
</template>

<script>
import Shop from "./Shop";
export default {
  name: "ShopList",
  props:["data"],
  components: {
    "ele-homepage-shop": Shop
  }
};
</script>

<style scoped>
</style>