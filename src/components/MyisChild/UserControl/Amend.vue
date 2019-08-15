<template>
		<div class="setup">
			<div class="setup-1">
				<p>头像</p>
				<img src="../../../assets/imgs/MyisChild/SH/data.png" alt="" class="data-img">
			</div>
			<div class="setup-1">
				<p>用户名</p>
				<div class="clear-1">
					<span class="clear-1-use">xcsdf2df</span>
				</div>
			</div>
			<div class="setup-1">
				<p>修改密码</p>
				<div class="clear-1">
					<span>用于密码登录</span>
					<img src="../../../assets/imgs/MyisChild/SH/data-1.png" alt="">
				</div>
			</div>
			<div class="data-1">
				<div class="data-font">
					<p>换绑手机</p>
					<p class="iPhone">换绑手机可能会引起服务变更</p>
				</div>
				<div class="clear-1">
					<span>177********</span>
					<img src="../../../assets/imgs/MyisChild/SH/data-1.png" alt="">
				</div>
			</div>
			<div class="setup-1">
				<p>注销账号</p>
				<div class="clear-1">
					<span>注销后将无法登录饿了么/星选外卖</span>
					<img src="../../../assets/imgs/MyisChild/SH/data-1.png" alt="">
				</div>
			</div>
		</div>
</template>

<script>
	export default {
	name:"Amend",
	};
</script>

<style scoped="scoped">
.setup{
	margin-left: 0.2rem;
}
.setup-1{
	width: 3.55rem;
	height: 0.55rem;
	border-bottom: 1px solid #e6e6e6;
	display: flex;
	justify-content: space-between;
}
.setup-1 p{
	font-size: 0.15rem;
	line-height: 0.55rem;
}
.setup-1 span{
	font-size: 0.15rem;
}
.clear-1{
	height: 0.55rem;
    display: flex;
}
.clear-1 img{
	width: 0.42rem;
	height: 0.55rem;
}
.clear-1 span{
	font-size: 0.10rem;
	line-height: 0.55rem;
	color:#e6e6e6 ;
}
.data-img{
    width: 0.60rem;
	height: 0.55rem;
}
.data-1{
	width: 3.55rem;
	height: 0.65rem;
	border-bottom: 1px solid #e6e6e6;
	display: flex;
	justify-content: space-between;
}
.data-font{
	font-size: 0.15rem;
	margin-top: 0.1rem;
}
.iPhone{
	color: red;
	font-size: 0.10rem;
	margin-top: 0.1rem;
}
.clear-1-use{
	margin-right:0.4rem;
}
</style>
