<template>
  <div class="Fitiness">
    <ele-homepage-fitness-Fheader></ele-homepage-fitness-Fheader>
    <ele-homepage-fitness-Ftext
    ></ele-homepage-fitness-Ftext>
    <ele-homepage-fitness-Video></ele-homepage-fitness-Video>
    <ele-homepage-fitness-Coupon></ele-homepage-fitness-Coupon>
    <ele-homepage-fitness-Meal></ele-homepage-fitness-Meal>
    <ele-homepage-fitness-Get></ele-homepage-fitness-Get>
    <ele-homepage-fitness-Dm></ele-homepage-fitness-Dm>
    <ele-homepage-fitness-ThreeBox></ele-homepage-fitness-ThreeBox>
    <ele-homepage-fitness-FshopList></ele-homepage-fitness-FshopList>
    <ele-homepage-fitness-Look></ele-homepage-fitness-Look>
    <ele-homepage-fitness-Rule></ele-homepage-fitness-Rule>
  </div>
</template>

<script>
import Fheader from "../../components/HomePageChild/Fitness/Fheader";
import Ftext from "../../components/HomePageChild/Fitness/Ftext";
import Video from "../../components/HomePageChild/Fitness/Video";
import Coupon from "../../components/HomePageChild/Fitness/Coupon";
import Meal from "../../components/HomePageChild/Fitness/Meal";
import Get from "../../components/HomePageChild/Fitness/Get";
import Dm from "../../components/HomePageChild/Fitness/Dm";
import ThreeBox from "../../components/HomePageChild/Fitness/ThreeBox";
import FshopList from "../../components/HomePageChild/Fitness/FshopList";
import Look from "../../components/HomePageChild/Fitness/Look";
import Rule from "../../components/HomePageChild/Fitness/Rule";

export default {
  name: "Fitness",
  components: {
    "ele-homepage-fitness-Fheader": Fheader,
    "ele-homepage-fitness-Ftext": Ftext,
    "ele-homepage-fitness-Video": Video,
    "ele-homepage-fitness-Coupon": Coupon,
    "ele-homepage-fitness-Meal": Meal,
    "ele-homepage-fitness-Get": Get,
    "ele-homepage-fitness-Dm": Dm,
    "ele-homepage-fitness-ThreeBox": ThreeBox,
    "ele-homepage-fitness-FshopList": FshopList,
    "ele-homepage-fitness-Look": Look,
    "ele-homepage-fitness-Rule": Rule
  }
};
</script>

<style scoped>
</style>