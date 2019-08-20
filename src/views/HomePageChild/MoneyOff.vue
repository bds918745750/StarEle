<template>
  <div class="MoneyOff">
    <ele-homepage-moneyoff-Mheader></ele-homepage-moneyoff-Mheader>
    <ele-homepage-moneyoff-MshopList></ele-homepage-moneyoff-MshopList>
    <ele-homepage-moneyoff-Rule></ele-homepage-moneyoff-Rule>
  </div> 
</template>

<script>
import Mheader from "../../components/HomePageChild/MoneyOff/Mheader";
import MshopList from "../../components/HomePageChild/MoneyOff/MshopList";
import Rule from "../../components/HomePageChild/MoneyOff/Rule";


export default {
  name: "MoneyOff",
  components: {
    "ele-homepage-moneyoff-Mheader": Mheader,
    "ele-homepage-moneyoff-MshopList": MshopList,
    "ele-homepage-moneyoff-Rule": Rule,
   
  }
};
</script>

<style scoped>
.MoneyOff{
  background-color: #f4ebe2;
}
</style>