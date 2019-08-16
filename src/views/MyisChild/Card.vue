<template >
	<div class="Options-body">
      <ele-Card-Top7></ele-Card-Top7>
	  <ele-Card-CardName></ele-Card-CardName>
	  <ele-Card-Cardlist></ele-Card-Cardlist>
	  <ele-Card-Cardlist></ele-Card-Cardlist>
	  <ele-Card-Cardlist></ele-Card-Cardlist>
	</div>
</template>

<script>
	import Top7 from "../../components/MyisChild/Card/Top7.vue";
	import CardName from "../../components/MyisChild/Card/CardName.vue";
	import Cardlist from "../../components/MyisChild/Card/Cardlist.vue";


	export default {
	  name:"Options",
	  components: {
	    "ele-Card-Top7": Top7,
		"ele-Card-CardName": CardName,
		"ele-Card-Cardlist": Cardlist,

	}
}
</script>

<style scoped="scoped">
	.Options-body{
		/* background: #FFFFFF; */
		width: 100%;
		height: 100%;
	}
</style>