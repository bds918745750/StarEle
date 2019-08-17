<template>
  <div class="MshopList">
    <ele-homepage-moneyoff-Shop></ele-homepage-moneyoff-Shop>
    <ele-homepage-moneyoff-Shop></ele-homepage-moneyoff-Shop>
    <ele-homepage-moneyoff-Shop></ele-homepage-moneyoff-Shop>
    <ele-homepage-moneyoff-Shop></ele-homepage-moneyoff-Shop>
    <ele-homepage-moneyoff-Shop></ele-homepage-moneyoff-Shop>
    <ele-homepage-moneyoff-Shop></ele-homepage-moneyoff-Shop>
  </div>
</template>

<script>
import Shop from "../../common/Shop";

export default {
  name: "MshopList",
  components: {
    "ele-homepage-moneyoff-Shop": Shop
  }
};
</script>

<style scoped>
.MshopList{
  padding: 10px 15px;
}
</style>