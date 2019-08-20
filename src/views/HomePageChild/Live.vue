<template>
<div>
  <ele-homepage-live-Lheader></ele-homepage-live-Lheader>
  <ele-homepage-live-Lvegetarian></ele-homepage-live-Lvegetarian>
  <ele-homepage-live-Lshoplist></ele-homepage-live-Lshoplist>
  <ele-homepage-live-Lcmore></ele-homepage-live-Lcmore>
  <ele-homepage-live-Lrule></ele-homepage-live-Lrule>
</div>

</template>

<script>
import Lheader from "../../components/HomePageChild/Live/Lheader";
import Lvegetarian from "../../components/HomePageChild/Live/Lvegetarian";
import Lshoplist from "../../components/HomePageChild/Live/Lshoplist";
import Lcmore from "../../components/HomePageChild/Live/Lcmore";
import Lrule from "../../components/HomePageChild/Live/Lrule";

export default {
  name: "Live",
  components: {
    "ele-homepage-live-Lheader": Lheader,
    "ele-homepage-live-Lvegetarian": Lvegetarian,
    "ele-homepage-live-Lshoplist": Lshoplist, 
    "ele-homepage-live-Lcmore": Lcmore,
    "ele-homepage-live-Lrule": Lrule,   
  }
};
</script>

<style scoped>


</style>