<template >
	<div class="Options-body">
      <ele-Gather-Top6></ele-Gather-Top6>
	  <ele-Gather-Activity></ele-Gather-Activity>
	</div>
</template>

<script>
	import Top6 from "../../components/MyisChild/Gather/Top6.vue";
	import Activity from "../../components/MyisChild/Gather/Activity.vue";

	export default {
	  name:"Gather",
	  components: {
	    "ele-Gather-Top6": Top6,
		"ele-Gather-Activity": Activity,
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
