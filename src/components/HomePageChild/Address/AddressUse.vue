<template>
	 <div class="use">
        <div class="useLeft">
            <img src="../../../assets/imgs/HomepageChild/Adress/changyong.png" alt=""><span>登陆后使用常用收货地址</span>
        </div>
        <div class="login">
            <span>登录</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "AddressUse"
};
</script>

<style scoped>
	.use{
    width: 100%;
    height: .47rem;
    background-color:#ffffff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.useLeft{
    display: flex;
    align-items: center;
}
.login{
    margin-right: .2rem;
    text-align: center;
    line-height: .3rem;
    margin-right: 14px;
}
.useLeft img{
    width: .18rem;
    height: .18rem;   
    float: left;
    margin-right: 10px;
}
.useLeft span{
    font-size: .13rem;
    color: #a8a8a8;
    float: left;
}

.login span{
    display: block;
    width: .66rem;
    height: .3rem;
    border: 1px solid #dc3538;
    border-radius: 5px;
    font-size: .13rem;
    color: #dc3538;
}
</style>