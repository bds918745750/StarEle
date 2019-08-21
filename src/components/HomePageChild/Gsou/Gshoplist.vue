<template>
  <div class="Gshoplist">
    <ele-homepage-Gsou-Shop></ele-homepage-Gsou-Shop>
    <ele-homepage-Gsou-Shop></ele-homepage-Gsou-Shop>
    <ele-homepage-Gsou-Shop></ele-homepage-Gsou-Shop>
    <ele-homepage-Gsou-Shop></ele-homepage-Gsou-Shop>
    <ele-homepage-Gsou-Shop></ele-homepage-Gsou-Shop>
    <ele-homepage-Gsou-Shop></ele-homepage-Gsou-Shop>
  </div>
</template>

<script>
import Shop from "../../common/Shop";

export default {
  name: "Gshoplist",
  components: {
    "ele-homepage-Gsou-Shop": Shop
  }
};
</script>

<style scoped>
.Gshoplist{
  padding: 10px 15px;
  background-color: #1e1a19;
}
</style>