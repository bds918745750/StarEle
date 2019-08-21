<template>
		<div class="first-tier">
			<div class="nav-box1">
				<div class="set">
					<img src="../../../../public/assets/imgs/Myis/icon-1.png" alt="" class="set-img1">
					<img src="../../../../public/assets/imgs/Myis/icon-2.png" alt="" class="set-img2">
				</div>
			</div>
			<div class="head">
				<div class="head-lef">
					<h3>点击登录</h3>
					<p>登录以后享受更多优惠</p>
				</div>
				<div class="head-rig">
					<img src="../../../../public/assets/imgs/Myis/icon-3.png">
				</div>
			</div>
		</div>	
</template>

<script>
	export default{
		name:"Nav",
	}
</script>

<style scoped="scoped">
.first-tier{
	width:3.75rem;
    height:1.64rem ;
    background-color:#f0142d; 
}
.nav-box1{
    width:3.75rem;
    height:0.45rem ;
    background-color:#f0142d; 
}
.set{
    width:1.05rem;
	height: 0.35rem;
	margin-top: 0.1rem;
	float: right;
    display: inline-block;
    display: flex;
    justify-content: space-around;
}
.set img{
    width: 0.23rem;
    height: 0.20rem;
	line-height:0.45rem;
}
.head{
    width:3.47rem;
    height:0.88rem ;
    margin: 0.3rem auto;
    background-color:#f0142d; 
}
.head-lef{
	float: left;
}
.head-lef h3{
	font-size: 0.22rem;
	color: #FFFFFF;
	margin-bottom: 0.09rem;
	width: 1.20rem;
}
.head-lef p{
	font-size: 0.15rem;
	color: #FFFFFF;
}
.head-rig{
	float: right;
}
.head-rig img{
	width:0.58rem;
	height:0.57rem ;
}
.VIP{
	width:3.47rem;
	height:0.58rem ;
	border-top-right-radius: 0.1rem;
	border-top-left-radius: 0.1rem;
	margin: 0 auto;
	background: #f1e3bc;

}
.VIP .super{
	width:3.16rem;
	height:0.33rem ;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
} 
.super-H{
	font-size: 0.15rem;
	color: #604931;
	margin-top: 0.1rem;
}
.super-S{
	font-size: 0.1rem;
	color: #a28d6c;
	margin-top: 0.1rem;
}
.super-H2{
	font-size: 0.1rem;
	color: #a28d6c;
	margin-left: 0.16rem;
}
</style>
