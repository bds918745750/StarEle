<template >
	<div class="Options-body">
      <ele-MyisChild-UserControl-Top2></ele-MyisChild-UserControl-Top2>
	  <ele-MyisChild-UserControl-Amend></ele-MyisChild-UserControl-Amend>
	</div>
</template>

<script>
	import Top2 from "../../components/MyisChild/UserControl/Top2.vue";
	import Amend from "../../components/MyisChild/UserControl/Amend.vue";


	export default {
	  name:"Options",
	  components: {
	    "ele-MyisChild-UserControl-Top2": Top2,
		"ele-MyisChild-UserControl-Amend": Amend,

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
