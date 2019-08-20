<template>
	<ele-Search></ele-Search>
</template>

<script>
	import Search from "../../components/common/Search";
	export default{
		name:"Search",
		components:{
			"ele-Search":Search,
		}
	}
	
</script>

<style scoped>
	@import"../../assets/Search.css";
</style>
