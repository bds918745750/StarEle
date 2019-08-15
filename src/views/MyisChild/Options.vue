<template >
	<div class="Options-body">
      <ele-Options-Header></ele-Options-Header>
	  <ele-Options-Administer></ele-Options-Administer>
	</div>
</template>

<script>
	import Header from "../../components/MyisChild/Options/Header.vue";
	import Administer from "../../components/MyisChild/Options/Administer.vue";

	export default {
	  name:"Options",
	  components: {
	    "ele-Options-Header": Header,
		"ele-Options-Administer": Administer,
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
