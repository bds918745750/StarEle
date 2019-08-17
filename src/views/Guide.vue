<template>
  <div class="Guide">
    <ele-Guide-Gheader></ele-Guide-Gheader>
    <div class="bigBox">
      <ele-Guide-UseEat></ele-Guide-UseEat>
      <ele-Guide-FindCai></ele-Guide-FindCai>
      <ele-Guide-SplendDid></ele-Guide-SplendDid>
    </div>
    <ele-Guide-Footer></ele-Guide-Footer>
  </div>
</template>

<script>
import Gheader from "../components/Guide/Gheader";
import UseEat from "../components/Guide/UseEat";
import SplendDid from "../components/Guide/SplendDid";
import FindCai from "../components/Guide/FindCai";
import Footer from "../components/common/Footer";

export default {
  name: "Guide",
  components: {
    "ele-Guide-Gheader": Gheader,
    "ele-Guide-UseEat": UseEat,
    "ele-Guide-SplendDid": SplendDid,
    "ele-Guide-FindCai": FindCai,
    "ele-Guide-Footer": Footer
  }
};
</script>

<style scoped>
@import "../assets/Guide.css";

.Guide{
    display: -webkit-flex;
      flex-direction:column;  
      height: 100%;
  }

  .bigBox{
    flex:1;
	overflow-y:auto;
  }
</style>