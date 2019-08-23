<template>
    <div>
        <div class="nav"> 
            <router-link to="/">
                 <img class="row" src="../../assets/imgs/MyisChild/SH/1-2.png" alt="">                
            </router-link>
			<p>订单</p>
			<h6>跑腿代购</h6>   
		</div>
		<div class="orderForm"  v-for="(item,index) in data" :key="index">
			<div class="zb">
				<img :src=item.Xq_img>
				<div class="shu">
                    <div class="shu1">
					<h3>{{item.Xq_name}}</h3>
                    <span>已完成</span>
                    </div>
                    <div class="shu1">
					<h6>{{item.Xq_discounts.full}}减{{item.Xq_discounts.minus}}..</h6>
                    <span>08-10</span>
                    </div>

				</div>
			</div>
			<ul>
				<li>{{item.Xq_delicious.hot}}     数量：1份</li>
				<li>{{item.Xq_delicious.pure}}    数量：1份</li>
			</ul>
                <div class="sum">总计：￥300</div>
			<div class="an">
				<button>评价晒单</button>
				<button class="an1">再来一单</button>
			</div>
		</div>
    </div>
</template>
<script>
export default {
    name:"Xq",
    props:["data"]//订单信息
}
</script>
<style scoped>
    @charset "utf-8";
/* CSS Document */
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,td,input,textarea,select,option
{
	margin: 0;
	padding: 0;
}
a{text-decoration: none;}
img{
	border: none;
	display: block;
}
ul,ol,li{
	list-style:none;
}
html{
	font-size:26.76vw;
}
body{
	background: #f5f5f9;
	display: -webkit-flex;
    -webkit-flex-direction: column;
    padding:.1rem .21rem 0;
    background-color: "#fafafa";
}
html,body{
    height: 100%;
    background: #f5f5f9
}
/* 头部 */
.nav{
    /* height: 0.71rem; */
    font-size: 0.24rem;
    display:flex; 
    margin-bottom: .3rem;  
}
.nav p{
    margin-left:40%; 
    text-align: center;
}
.nav h6{
    margin-left:25%;
    font-size: .13rem;
    color: #000000;
    right: .08rem;
}
element.style {
    padding: 15px 10px;
}

element.style {
    border-radius: 5px;
    margin-bottom: 10px;
}
.orderForm{
    /* width:2.99rem; */
    /* height:3.22rem; */
    background-color:#ffffff;
    /* margin: 0 auto; */
    border-radius: 8px;
    margin: 15px 10px;
}
.orderForm .zb{
    display: flex;
    /* height: 0.99rem; */
    flex-direction: row;
    padding-top: 0.1rem;
    padding-left: 0.1rem;

}
.shu1{
    width: 2.5rem;
    display: flex;
    justify-content: space-between;
}
.sum{
    font-size: .16rem;
    line-height: .3rem;
    padding-left: 2.2rem;
}
.row{
    width: 0.27rem;
    height:0.46rem;
}
.orderForm img{
    width: 0.7rem;
    height: 0.7rem;
    display: block;
     padding-right: 0.1rem;
}
.orderForm div{
    /* height: 0.7rem; */
}
.orderForm h3{
    font-size: .13rem;
    padding-bottom: .2rem;
    /* display: inline-block */
}
.orderForm h6{
    font-size: .1rem
}
.orderForm span{
    font-size: .1rem
}
.orderForm ul{
    /* height: 1.2rem; */
    width: 2.5rem;
    background-color: #fafafa;
    margin: 0.1rem 0.8rem;
    border-radius: 10px;
    
}
.orderForm li{
    font-size: .16rem;
    line-height: .3rem;
    padding-left: .2rem;
    font-size: 0.12rem;
}
.orderForm .an{
    /* height: 1rem; */
    margin-top: 0.2rem;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 0.1rem;
}
.orderForm button{
    height: .3rem;
    border: none;
	outline: none
}
.orderForm .an1{
    background: red;
    margin-left: .2rem;
    color: #ffffff;
}
</style>