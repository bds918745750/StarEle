<template >
	<div class="Options-body">
      <ele-Service-Top10></ele-Service-Top10>
	  <div class="rolling">
	  <ele-Service-Star></ele-Service-Star>
	  <ele-Service-Title></ele-Service-Title>
	  </div>
	  <ele-Service-Footer></ele-Service-Footer>
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
	    "ele-Service-Top10": Top10,
		"ele-Service-Star": Star,
		"ele-Service-Title": Title,
		"ele-Service-Footer":Footer,
		
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
