<template >
	<div class="Options-body">
      <ele-Location-Top8></ele-Location-Top8>
	  <ele-Location-LocationPic></ele-Location-LocationPic>
	</div>
</template>

<script>
	import Top8 from "../../components/MyisChild/Location/Top8.vue";
	import LocationPic from "../../components/MyisChild/Location/LocationPic.vue";

	export default {
	  name:"Location",
	  components: {
	    "ele-Location-Top8": Top8,
		"ele-Location-LocationPic": LocationPic,
	}
}
</script>

<style scoped="scoped">
	.Options-body{
		background: #FFFFFF;
		width: 100%;
		height: 100%;
	}
</style>
