<template>
  <div class="Lshoplist">
    <ele-homepage-live-Shop></ele-homepage-live-Shop>
    <ele-homepage-live-Shop></ele-homepage-live-Shop>
    <ele-homepage-live-Shop></ele-homepage-live-Shop>
    <ele-homepage-live-Shop></ele-homepage-live-Shop>
    <ele-homepage-live-Shop></ele-homepage-live-Shop>
    <ele-homepage-live-Shop></ele-homepage-live-Shop>
  </div>
</template>

<script>
import Shop from "../../common/Shop";

export default {
  name: "Lshoplist",
  components: {
    "ele-homepage-live-Shop": Shop
  }
};
</script>

<style scoped>
.Lshoplist{
  padding: 10px 15px;
  background-color: #cfebf7;
}
</style>