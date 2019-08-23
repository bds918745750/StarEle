<template>
	<div>
		<ele-Menu-MenuHead></ele-Menu-MenuHead>
		<div class="MbigBox">
			<ele-Menu-MenuDetails :data="shops"></ele-Menu-MenuDetails>
			<ele-Menu-MenuThreeMode></ele-Menu-MenuThreeMode>
			<ele-Menu-MenuBox :data="shops"></ele-Menu-MenuBox>
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


	import HomePage from "../../apis/HomePage";
		
	export default{
		name:"Menu",
		// props:["data","sid"]
		//获取点击的店铺信息
		components:{
			"ele-Menu-MenuHead":MenuHead,
			"ele-Menu-MenuDetails":MenuDetails,
			"ele-Menu-MenuThreeMode":MenuThreeMode,
			"ele-Menu-MenuBox":MenuBox,
			"ele-Menu-MenuFooter":MenuFooter,
		},
		data(){
			return{
				shops:{},
				shopId:this.$route.query.shopid
			}
		},
		created(){
			this.nearbyshopLists(this.shopId)
		},
		methods:{
			nearbyshopLists(shopId){
				HomePage.getshopList(shopId,data=>{
					this.shops=data

				})
			}
		}
	}
</script>

<style>
	@import"../../assets/Menu.css";
	.MbigBox{
		display: flex;
		flex-direction: column;
		overflow-y:auto ;
		padding: 0 .15rem;
	}
</style>
