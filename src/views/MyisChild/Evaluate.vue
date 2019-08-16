<template >
	<div class="Options-body">
      <ele-Evaluate-Top9></ele-Evaluate-Top9>
	  <ele-Evaluate-EvaluatePic></ele-Evaluate-EvaluatePic>
	</div>
</template>

<script>
	import Top9 from "../../components/MyisChild/Evaluate/Top9.vue";
	import EvaluatePic from "../../components/MyisChild/Evaluate/EvaluatePic.vue";


	export default {
	  name:"Options",
	  components: {
	    "ele-Evaluate-Top9": Top9,
		"ele-Evaluate-EvaluatePic": EvaluatePic,

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