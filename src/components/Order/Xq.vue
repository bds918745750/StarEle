<template>
    <div>
        <div class="nav"> 
			<p>订单</p>
			<h6>跑腿代购</h6>   
		</div>
		<div class="orderForm">
			<div class="zb">
				<img src="../../assets/imgs/Order/1.png" >
				<div class="shu">
					<h3>书亦烧仙草（西安...  >  已完成</h3>
					<h6>25减3    34减6    49减9 ...         08-10</h6>
				</div>
			</div>
			<ul>
				<li>芒果布丁奶绿（中杯）x 1</li>
				<li>书亦烧仙草（大杯）x 2</li>
				<li>芒果布丁奶绿（大 ... x 1  共￥47.5</li>
			</ul>
			<div class="an">
				<button>评价晒单</button>
				<button class="an1">再来一单</button>
			</div>
		</div>
    </div>
</template>
<script>
export default {
    name:"Xq"
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
    height: 0.71rem;
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
    font-size: .15rem;
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
    width:2.99rem;
    height:3.22rem;
    background-color:#ffffff;
    margin: 0 auto;
    border-radius: 8px;
    padding: 15px 10px;
}
.orderForm .zb{
    display: flex;
    height: 0.99rem;
    flex-direction: row

}
.orderForm img{
    width: 0.7rem;
    height: 0.7rem;
    display: block;
}
.orderForm div{
    height: 0.7rem;
}
.orderForm h3{
    font-size: .16rem;
    padding-bottom: .2rem;
    /* display: inline-block */
}
.orderForm h6{
    font-size: .1rem
}
.orderForm ul{
    height: 1.2rem;
    /* width: 39rem; */
    background-color:#fafafa;
}
.orderForm li{
    font-size: .16rem;
    line-height: .3rem;
    padding-left: .5rem;
}
.orderForm .an{
    height: 1rem;
    display: flex;
    justify-content: flex-end;
}
.orderForm button{
    height: .3rem;
    border: none;
	outline: none
}
.orderForm .an1{
    background: red;
    margin-left: .2rem
}
</style>