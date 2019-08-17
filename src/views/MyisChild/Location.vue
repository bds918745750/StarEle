<template >
	<div class="Options-body">
      <ele-MyisChild-Location-Top8></ele-MyisChild-Location-Top8>
	  <ele-MyisChild-Location-LocationPic></ele-MyisChild-Location-LocationPic>
	</div>
</template>

<script>
	import Top8 from "../../components/MyisChild/Location/Top8.vue";
	import LocationPic from "../../components/MyisChild/Location/LocationPic.vue";

	export default {
	  name:"Location",
	  components: {
	    "ele-MyisChild-Location-Top8": Top8,
		"ele-MyisChild-Location-LocationPic": LocationPic,
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
