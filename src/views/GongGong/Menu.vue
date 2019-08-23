<template>
	<div class="MENU">
		<ele-Menu-MenuHead></ele-Menu-MenuHead>
		<div class="MbigBox">
			<ele-Menu-MenuDetails></ele-Menu-MenuDetails>
			<ele-Menu-MenuThreeMode></ele-Menu-MenuThreeMode>
			<ele-Menu-MenuBox></ele-Menu-MenuBox>
		</div>
		<ele-Menu-MenuFooter></ele-Menu-MenuFooter>
	</div>
</template>

<script>
	import MenuHead from "../../components/common/Menu/MenuHead";
	import MenuDetails from "../../components/common/Menu/MenuDetails";
	import MenuThreeMode from "../../components/common/Menu/MenuThreeMode";
	import MenuBox from "../../components/common/Menu/MenuBox";
	import MenuFooter from "../../components/common/Menu/MenuFooter";
		
	export default{
		name:"Menu",
		//获取点击的店铺信息
		props:["data","id"],
		components:{
			"ele-Menu-MenuHead":MenuHead,
			"ele-Menu-MenuDetails":MenuDetails,
			"ele-Menu-MenuThreeMode":MenuThreeMode,
			"ele-Menu-MenuBox":MenuBox,
			"ele-Menu-MenuFooter":MenuFooter,
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	@import"../../assets/Menu.css";
	.MENU{
		height: 100%;
	}
	.MbigBox{
		display: flex;
		flex-direction: column;
		overflow-y:auto ;
		padding: 0 .15rem;
		height: 100%;
		position: sticky;
		top: 0;

	}

</style>
