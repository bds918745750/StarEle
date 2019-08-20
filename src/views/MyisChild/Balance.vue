<template >
	<div class="Options-body">
      <ele-MyisChild-Balance-Top4></ele-MyisChild-Balance-Top4>
	  <ele-MyisChild-Balance-Money></ele-MyisChild-Balance-Money>
	</div>
</template>

<script>
	import Top4 from "../../components/MyisChild/Balance/Top4.vue";
	import Money from "../../components/MyisChild/Balance/Money.vue";

	export default {
	  name:"Balance",
	  components: {
	    "ele-MyisChild-Balance-Top4": Top4,
		"ele-MyisChild-Balance-Money": Money,
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
