<template>
	<div class="LoginbigBox">
		<div class="header">
			  <img src="../../assets/imgs/Login/left-36.png">
			  <h1>登录</h1>
			  <h3>密码登录</h3>
		</div>
			
		<div class="contet">
				<div class="phoneNum">
					<input type="text" placeholder="请输入正确的号码" id="phoneNum" v-model="userID" :key="userID">
					<span class="x">x</span>
				</div>
				<h6>请输入正确的电话号码</h6>
				<!-- 密码验证 -->
				<div class="phoneNum">
					<input type="text" placeholder="请输入密码" id="phoneNum">
				</div>
				<h6>请输入6-15位密码</h6>
				
				<div class="phoneNum">
					<input type="text" placeholder="验证码" id="phoneNum">
					<div class="vertifyCode">获取验证码</div>
				</div>
			
				<div class="loginBtn">
					登录
				</div>
		</div>
</div>
</template>

<script>
	export default{
		name:"Loginin",
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="scoped">
	.LoginbigBox{
		padding: 0.26rem 0.15rem 0;
	}
</style>
