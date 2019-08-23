<template>
<<<<<<< HEAD
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
					<span class="x" @click="clearInput">✕</span>
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
=======
  <div class="LoginbigBox">
    <div class="header">
      <img src="../../assets/imgs/Login/left-36.png" @click="cancelPage()" />
      <h1>登录</h1>
      <h3>验证码登录</h3>
    </div>

    <div class="contet">
      <div class="phoneNum">
        <input
          type="text"
          ref="file"
          placeholder="请输入正确的号码"
          id="phoneNum"
          v-model="user_tel"
          @blur="funb()"
          name="user_tel"
        />
        <span class="x" @click="clearInput()">x</span>
      </div>
      <h6 v-if="isNull">{{redphone}}</h6>
      <!-- 密码验证 -->
      <div class="phoneNum">
        <input type="text" placeholder="验证码" id="phoneNum" v-model="validcode" name="validcode" />
        <div class="vertifyCode" v-show="show" @click="getCode()">获取验证码</div>
        <div v-show="!show" id="countNumber" class="vertifyCode">{{count}}</div>
      </div>
      <div class="loginBtn" @click="Login()">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loginin",
  data() {
    return {
      show: true,
      count: "",
      timer: null,
      user_tel: "",
      reg_tel: /(^1[3|4|5|6|7|8]\d{9}$)|(^09\d{8}$)/,
      redphone: "", //正则判断框
      isNull: "false",
      validcode: ""
    };
  },
  methods: {
    getCode() {
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
        }, 1000);
      }
    },
    clearInput() {
      this.$refs.file.value = "";
    },
    //返回上一页
    cancelPage() {
      history.back();
    },

    //失去焦点时正则判断
    funb() {
      if (this.user_tel == "" && !this.reg_tel.test(this.user_tel)) {
        this.isNull = true;
        this.redphone = "请输入11位手机号";
      }
    },
    getCode() {
      this.$axios({
        method: "post",
        // url: "http://192.168.0.128:8060/logintel/",
        url: "http://10.35.170.75:8000/logintel/",
        data: {
          sendmsg: 1,
          user_tel: this.user_tel
        }
      }).then(res => {
        let rs = res.data.code;
        let text = res.data.message;
        alert(text);
        // if (rs == 0) {
        //   alert(text);
        //   // console.log(text);
        // }
        // if (rs == 1) {
        //   alert(text);
        // }
        // if (rs == 2) {
        //   alert(text);
        // }
      });
    },
    Login() {
      this.$axios({
        method: "post",
        // url: "http://192.168.0.128:8060/logintel/",
        url: "http://10.35.170.75:8000/logintel/",
        data: {
          dosubmit: 1,
          user_tel: this.user_tel,
          validcode: this.validcode
        }
      }).then(res => {
        let rs = res.data.status;
        let phone = res.data.info;
         alert(phone);
        // if (rs == 0) {
        //   console.log("登录成功");
        //   localStorage.setItem("user_tel", phone);
        //   history.back();
        // }
        // if (rs == 1) {
        //   alert(phone);
        // }
        // if (rs == 2) {
        //   alert(phone);
        // }
        // if (rs == 3) {
        //   alert(phone);
        // }if(rs == 4){
        //   alert(phone);
        // } 
      });
    }
  }
};
</script>

<style scoped="scoped">
.LoginbigBox {
  padding: 0.26rem 0.15rem 0;
}
#countNumber {
  font-size: 0.1rem;
  color: red;
}
#phoneNum {
  border: none;
  outline: none;
  font-size: 0.2rem;
  margin-top: 0.2rem;
}
>>>>>>> 8fde462c736040661c30425a38835030a750dc02
</style>
