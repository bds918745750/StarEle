<template>
  <div class="Address">
    <ele-homepage-Address-AddressHead></ele-homepage-Address-AddressHead>
    <ele-homepage-Address-AddressDeliver></ele-homepage-Address-AddressDeliver>
    <ele-homepage-Address-AddressUse></ele-homepage-Address-AddressUse>
    <ele-homepage-Address-AddressGps></ele-homepage-Address-AddressGps>
    
  </div>
</template>

<script>
import AddressHead from "../../components/HomePageChild/Address/AddressHead.vue";
import AddressDeliver from "../../components/HomePageChild/Address/AddressDeliver.vue";
import AddressUse from "../../components/HomePageChild/Address/AddressUse.vue";
import AddressGps from "../../components/HomePageChild/Address/AddressGps.vue";

export default {
  name: "Address",
  components: {
    "ele-homepage-Address-AddressHead": AddressHead,
    "ele-homepage-Address-AddressDeliver": AddressDeliver,
    "ele-homepage-Address-AddressUse": AddressUse,
    "ele-homepage-Address-AddressGps": AddressGps,
  }
};
</script>

<style scoped>
	/* html,body{
		background: #FFFFFF;
	} */
	.Address{
		height: 100%;
		background: #FFFFFF;
	}
</style>