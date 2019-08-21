<template>
<div >
  <ele-homepage-Gsou-Gheader></ele-homepage-Gsou-Gheader>
  <ele-homepage-Gsou-Gtwo></ele-homepage-Gsou-Gtwo>
  <ele-homepage-Gsou-Gshoplist></ele-homepage-Gsou-Gshoplist>
  <ele-homepage-Gsou-Gmore></ele-homepage-Gsou-Gmore>
  <ele-homepage-Gsou-Grule></ele-homepage-Gsou-Grule>
</div>

</template>

<script>
import Gheader from "../../components/HomePageChild/Gsou/Gheader";
import Gtwo from "../../components/HomePageChild/Gsou/Gtwo";
import Gshoplist from "../../components/HomePageChild/Gsou/Gshoplist";
import Gmore from "../../components/HomePageChild/Gsou/Gmore";
import Grule from "../../components/HomePageChild/Gsou/Grule";

export default {
  name: "Gsou",
  components: {
    "ele-homepage-Gsou-Gheader": Gheader,
    "ele-homepage-Gsou-Gtwo": Gtwo,
    "ele-homepage-Gsou-Gshoplist": Gshoplist, 
    "ele-homepage-Gsou-Gmore": Gmore,
    "ele-homepage-Gsou-Grule": Grule,   
  }
};
</script>

<style scoped>


</style>