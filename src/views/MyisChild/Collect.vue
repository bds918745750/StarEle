<template >
	<div class="Options-body">
      <ele-MyisChild-Collect-Top3></ele-MyisChild-Collect-Top3>
	  <ele-MyisChild-Collect-Favorite></ele-MyisChild-Collect-Favorite>
	</div>
</template>

<script>
	import Top3 from "../../components/MyisChild/Collect/Top3.vue";
	import Favorite from "../../components/MyisChild/Collect/Favorite.vue";


	export default {
	  name:"Options",
	  components: {
	    "ele-MyisChild-Collect-Top3": Top3,
		"ele-MyisChild-Collect-Favorite": Favorite,

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