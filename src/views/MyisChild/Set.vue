<template >
	<div class="Options-body">
      <ele-MyisChild-Set-Top11></ele-MyisChild-Set-Top11>
	  <ele-MyisChild-Set-SetRules></ele-MyisChild-Set-SetRules>
	</div>
</template>

<script>
	import Top11 from "../../components/MyisChild/Set/Top11.vue";
	import SetRules from "../../components/MyisChild/Set/SetRules.vue";

	export default {
	  name:"Set",
	  components: {
	    "ele-MyisChild-Set-Top11": Top11,
		"ele-MyisChild-Set-SetRules": SetRules,
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
