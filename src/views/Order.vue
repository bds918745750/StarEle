<template>
  <div class="Order">
    <ele-Order-Oheader></ele-Order-Oheader>
    <div class="bigBox">
      <ele-Order-Log></ele-Order-Log>
    </div>
    <ele-Order-Footer></ele-Order-Footer>
  </div>
</template>

<script>
import Oheader from "../components/Order/Oheader";
import Log from "../components/Order/Log";
import Footer from "../components/common/Footer";

export default {
  name: "Order",
  components: {
    "ele-Order-Oheader": Oheader,
    "ele-Order-Log": Log,
    "ele-Order-Footer": Footer
  }
};
</script>

<style scoped>
@import "../assets/Order.css";

.Order{
    display: -webkit-flex;
      flex-direction:column;  
      height: 100%;
  }

  .bigBox{
    flex:1;
	overflow-y:auto;
  }
</style>