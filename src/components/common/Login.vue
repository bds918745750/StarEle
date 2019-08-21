<template>
	<div class="LoginbigBox">
		<div class="header">
			<router-link to="/">
			  <img src="../../assets/imgs/Login/left-36.png">
			</router-link>
			  <h1>登录</h1>
			  <h3>验证码登录</h3>
		</div>
			
		<div class="contet">
				<div class="phoneNum">
					<input type="text" placeholder="请输入正确的号码" id="phoneNum" v-model="userID" :key="userID">
					<span class="x" @click="clearInput">x</span>
				</div>
				<h6>xxx</h6>
				<!-- 密码验证 -->
				
				<div class="phoneNum">
					<input type="text" placeholder="验证码" id="phoneNum">
					<div class="vertifyCode" v-show="show" @click="getCode">获取验证码</div>
					<div class="vertifyCode" v-show="!show" id="countNumber">{{count}}</div>
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
				show:true,
				count:" ",
				timer:null,
				userID:" "
			}
		},
		methods:{
		   getCode(){
		     const TIME_COUNT = 60;
		     if (!this.timer) {
		       this.count = TIME_COUNT;
		       this.show = false;
		       this.timer = setInterval(() => {
		       if (this.count > 0 && this.count <= TIME_COUNT) {
		         this.count--;
		        } else {
		         this.show = true;
		         clearInterval(this.timer);
		         this.timer = null;
		        }
		       }, 1000)
		      }
		   },
		 clearInput(){
			 if(this.userID!=null){
				 this.userID=" "
			 }
		 }  
	}
}
</script>

<style scoped="scoped">
	.LoginbigBox{
		padding: 0.26rem 0.15rem 0;
	}
	#countNumber{
		font-size: .2rem;
		color: red;
	}
</style>
