<template >
	<div class="Options-body">
      <ele-MyisChild-Options-Header></ele-MyisChild-Options-Header>
	  <ele-MyisChild-Options-Administer></ele-MyisChild-Options-Administer>
	</div>
</template>

<script>
	import Header from "../../components/MyisChild/Options/Header.vue";
	import Administer from "../../components/MyisChild/Options/Administer.vue";

	export default {
	  name:"Options",
	  components: {
	    "ele-MyisChild-Options-Header": Header,
		"ele-MyisChild-Options-Administer": Administer,
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
