<template >
	<div class="Options-body">
      <ele-MyisChild-Gather-Top6></ele-MyisChild-Gather-Top6>
	  <ele-MyisChild-Gather-Activity></ele-MyisChild-Gather-Activity>
	</div>
</template>

<script>
	import Top6 from "../../components/MyisChild/Gather/Top6.vue";
	import Activity from "../../components/MyisChild/Gather/Activity.vue";

	export default {
	  name:"Gather",
	  components: {
	    "ele-MyisChild-Gather-Top6": Top6,
		"ele-MyisChild-Gather-Activity": Activity,
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
