<template>
	<div class="SinglebigBox">
			<div class="foodsName">
				<h2>{{data.foodName}}</h2>
			</div>
			
			<div class="monthTo">
				<p>月售{{data.foodSale}}份</p>
			</div>
		
			<div class="singlePrice">
				<h3><span>￥{{data.foodPrice}}</span><del>￥20</del></h3>
				<div class="num">
					<p @click="minus()">-</p >
					<span>{{foodsCount}}</span>
					<p @click="add()">+</p>
				</div>
			</div>
			
			
			<div class="mes">
				<h2>商品详情</h2>
				<p>温馨提示，图片仅供参考</p>
			</div>
			
			
			<div class="selfshopCar" @click="toShopingCar()">
				<i class="fa fa-shopping-bag"  style="font-size:.4rem"></i>
				<span class="number">{{foodsCount}}</span>
				<div class="sendFee">另需配送费<span>10元</span></div>
			</div>
			
	</div>
</template>

<script>
	export default {
		name: "SingleDetailsBigBox",
		props:["data"],
		data(){
			return{
				foodsCount:0,
				shopId:"",
				foodId:"",
			}
		},
		methods:{
			add(){
				this.foodsCount++
			},
			minus(){
				if(this.foodsCount>0){
					this.foodsCount--
				}else{
					this.foodsCount=0
				}
			},
			toShopingCar(){	
				this.shopId=this.$route.query.shopId
				console.log(this.shopId)
			}
		}
}
</script>

<style scoped="scoped">
	h2{
		height:.5rem;
		font-size: .3rem;
		margin-top: .5rem;
	}
	.monthTo p{
		font-size: .12rem;
	}
		
	.singlePrice{
		font-size: .2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.singlePrice del{
		font-size: .15rem;
		color: #888888;
	}
	.num{
		display: flex;
		line-height: .17rem;
		font-size: .17rem;
		margin-top: .07rem ;
	}
	.num p{
		width: .17rem;
		height: .17rem;
		border: 1px solid red;
		font-size: .17rem;
		text-align: center;
		color: red;
		border-radius: 50%;
	}
	.num span{
		margin:0 .1rem
	}
	.mes p{
		font-size: .2rem;
		color: #CECED2;
	}
	.selfshopCar{
		width:3.46rem ;
		height:.5rem ;
		background: #808080;
		border-radius:1.5rem;
		margin: 0 auto ;
		display: flex;
		position: relative;
		z-index: 1;
		margin-top: .3rem;
	}
	.fa-shopping-bag {
		display: block;
		color: orangered;
	}
	.selfshopCar .number{
		display: block;
		font-size: .2rem;
		width: .3rem;
		height: .3rem;
		background: red;
		border-radius: 50%;
		border:1px solid wheat;
		text-align: center;
		line-height: .3rem;
		position: absolute;
		left:.3rem ;
		top:.01rem;
		}
		.sendFee{
			font-size:.2rem;
			line-height:.5rem ;
			margin-left: .3rem;
		}
		.sendFee span{
			font-size:.2rem;
		}
		.SinglebigBox{
			padding: 0 .15rem;
		}
</style>
