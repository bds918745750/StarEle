<template>
	<div class="GuideChild">
		<ele-GuideChild-deliciousHead></ele-GuideChild-deliciousHead>
		<ele-GuideChild-deliciousNav></ele-GuideChild-deliciousNav>
		<ele-GuideChild-deliciousKey></ele-GuideChild-deliciousKey>
		<ele-GuideChild-deliciousAdress></ele-GuideChild-deliciousAdress>
		<ele-GuideChild-deliciousAdressFoot></ele-GuideChild-deliciousAdressFoot>
		<ele-GuideChild-deliciousFooter></ele-GuideChild-deliciousFooter>
	</div>
</template>

<script>
import deliciousHead from "../components/GuideChild/deliciousHead";
import deliciousNav from "../components/GuideChild/deliciousNav";
import deliciousKey from "../components/GuideChild/deliciousKey";
import deliciousAdress from "../components/GuideChild/deliciousAdress";
import deliciousAdressFoot from "../components/GuideChild/deliciousAdressFoot";
import deliciousFooter from "../components/GuideChild/deliciousFooter";

export default {
  name: "GuideChild",
  components: {
    "ele-GuideChild-deliciousHead": deliciousHead,
    "ele-GuideChild-deliciousNav": deliciousNav,
    "ele-GuideChild-deliciousKey": deliciousKey,
    "ele-GuideChild-deliciousAdress": deliciousAdress,
	"ele-GuideChild-deliciousAdressFoot": deliciousAdressFoot,
    "ele-GuideChild-deliciousFooter": deliciousFooter
    
  }
};
</script>

<style scoped>
@import "../assets/GuideChild.css";
</style>