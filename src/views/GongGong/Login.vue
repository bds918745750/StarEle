<template>
	<ele-Login></ele-Login>
</template>

<script>
import Login from "../../components/common/Login"	
	
export default{
	name:"Login",
	components:{
		"ele-Login":Login
	}
}
	
	
	
</script>

<style scoped="scoped">
	@import "../../assets/Login.css";
</style>
