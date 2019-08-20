<template>
	<div class="Aheader">
		<router-link to="/"><div class="multipe">x</div></router-link>
		<span>选择收货地址</span>
		<img src="../../../assets/imgs/HomepageChild/Adress/jia.png" >
	</div>

</template>

<script>
export default {
  name: "AddressHead"
};
</script>

<style scoped>
	.Aheader{
	width: 100%;
	height: .41rem;
	background-color: #ffffff;
	display: flex;
	align-items: center;
}
.Aheader span{
	font-size: .17rem;
	color: #4d4d4d;
	display: block;
	margin: 0 auto;
}
.Aheader img{
	width: .19rem;
	height: .19rem;
	margin-right:2px;
}
.multipe{
	margin-left: .15rem;
	font-size: .3rem;
}

</style>