<template>
  <div>
<<<<<<< HEAD
    <ele-homepage-shop></ele-homepage-shop>
=======
    <router-link to="/Menu">
      <ele-homepage-shop></ele-homepage-shop>
    </router-link>
>>>>>>> aa23efd4029aa921d767c41c338b1a4ef0d458f0
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