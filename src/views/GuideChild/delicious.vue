<template>
	<div class="delicious">
		<ele-Guide-GuideChild-deliciousHead></ele-Guide-GuideChild-deliciousHead>
		<ele-Guide-GuideChild-deliciousNav></ele-Guide-GuideChild-deliciousNav>
		<ele-Guide-GuideChild-deliciousKey></ele-Guide-GuideChild-deliciousKey>
		<ele-Guide-GuideChild-deliciousAdress></ele-Guide-GuideChild-deliciousAdress>
		<ele-Guide-GuideChild-deliciousAdressFoot></ele-Guide-GuideChild-deliciousAdressFoot>
		<ele-Guide-GuideChild-deliciousFooter></ele-Guide-GuideChild-deliciousFooter>
	</div>
</template>

<script>
import deliciousHead from "../../components/GuideChild/delicious/deliciousHead";
import deliciousNav from "../../components/GuideChild/delicious/deliciousNav";
import deliciousKey from "../../components/GuideChild/delicious/deliciousKey";
import deliciousAdress from "../../components/GuideChild/delicious/deliciousAdress";
import deliciousAdressFoot from "../../components/GuideChild/delicious/deliciousAdressFoot";
import deliciousFooter from "../../components/GuideChild/delicious/deliciousFooter";
 
export default {
  name: "delicious",
  components: {
    "ele-Guide-GuideChild-deliciousHead": deliciousHead,
    "ele-Guide-GuideChild-deliciousNav": deliciousNav,
    "ele-Guide-GuideChild-deliciousKey": deliciousKey,
    "ele-Guide-GuideChild-deliciousAdress": deliciousAdress,
		"ele-Guide-GuideChild-deliciousAdressFoot": deliciousAdressFoot,
    "ele-Guide-GuideChild-deliciousFooter": deliciousFooter
    
  }
};
</script>

<style scoped>
</style>