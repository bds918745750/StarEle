<template>
    <footer>
            <router-link to="/">
                <img src="../../assets/imgs/footer/footer-1.png">
                <span>首页</span>
           </router-link>
            <a href="javaScript:;">
                <img src="../../assets/imgs/footer/footer-2.png">
                <span>指南</span>
            </a>
            <a href="javaScript:;">
                <img src="../../assets/imgs/footer/footer-3.png">
                <span>订单</span>
            </a>
            <router-link to="/Myis">
                <img src="../../assets/imgs/footer/footer-4.png">
                <span>我的</span>
           </router-link>
        </footer>
    </template>

<script>


    export default {
        name:"SFooter",
        

    }
</script>

<style scoped>
/* footer */

footer{
	background: #fff;
	display: flex;
	justify-content:space-around;
    padding: 5px 0;
    position: absolute;
    bottom: 0;
    width: 100%;
	z-index: 100;
}

footer a{
	display: flex;
	flex-direction: column;
	align-items: center;
}

footer a img{
	width: 0.26rem;
	height: 0.24rem;
	margin-bottom: 5px;
}

footer a span{
	font-size: 0.01rem;
}

</style>