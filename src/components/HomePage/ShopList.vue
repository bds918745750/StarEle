<template>
  <div>
    <router-link to="/Menu">
      <ele-homepage-shop></ele-homepage-shop>
    </router-link>
    <ele-homepage-shop></ele-homepage-shop>
    <ele-homepage-shop></ele-homepage-shop>
  </div>
</template>

<script>
import Shop from "./Shop";
export default {
  name: "ShopList",
  components: {
    "ele-homepage-shop": Shop
  }
};
</script>

<style scoped>
</style>