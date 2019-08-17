<template >
	<div class="Options-body">
      <ele-MyisChild-Service-Top10></ele-MyisChild-Service-Top10>
	  <div class="rolling">
	  <ele-MyisChild-Service-Star></ele-MyisChild-Service-Star>
	  <ele-MyisChild-Service-Title></ele-MyisChild-Service-Title>
	  </div>
	  <ele-MyisChild-Service-Footer></ele-MyisChild-Service-Footer>
	</div>
</template>

<script>
	import Top10 from "../../components/MyisChild/Service/Top10.vue";
	import Star from "../../components/MyisChild/Service/Star.vue";
	import Title from "../../components/MyisChild/Service/Title.vue";
	import Footer from "../../components/MyisChild/Service/Footer.vue";


	export default {
	  name:"Options",
	  components: {
	    "ele-MyisChild-Service-Top10": Top10,
		"ele-MyisChild-Service-Star": Star,
		"ele-MyisChild-Service-Title": Title,
		"ele-MyisChild-Service-Footer":Footer,
		
	}
}
</script>

<style scoped="scoped">
	.Options-body{
		background: #FFFFFF;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.rolling{
		display: flex;
		flex: 1; 
		overflow-y: auto;
		flex-direction: column;
	}
</style>
