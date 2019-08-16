<template >
	<div class="Options-body">
      <ele-Set-Top11></ele-Set-Top11>
	  <ele-Set-SetRules></ele-Set-SetRules>
	</div>
</template>

<script>
	import Top11 from "../../components/MyisChild/Set/Top11.vue";
	import SetRules from "../../components/MyisChild/Set/SetRules.vue";

	export default {
	  name:"Set",
	  components: {
	    "ele-Set-Top11": Top11,
		"ele-Set-SetRules": SetRules,
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
