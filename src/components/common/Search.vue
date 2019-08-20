<template>
<div class="SearchBox">
	<div class="serach">
		<div class="backBtn">
			<router-link to="/"><img src="../../assets/imgs/Search/left-36.png" ></router-link>
		</div>
		<img src="../../assets/imgs/Search/search-36.png" class="serachImg">
		<input type="text" placeholder="冒菜">
		<!-- 搜索框输入时出现 -->
		<img src="../../assets/imgs/Search/delete_sign-50.png" class="deletImg" >
		<h6 class="searchContent">搜索</h6>
	</div>
	<div class="searchList">
		<div class="hotSearch">
			<li>热门</li>
			<li>外婆卤肉饭</li>
			<li>社群福利</li>
			<li>会员享红包</li>
		</div>
		<div class="hotSearch">
			<li>店铺</li>
			<li>德克士</li>
			<li>西贝莜面村</li>
			<li>炉火粥乡</li>
		</div>
		<div class="hotSearch">
			<li>菜品</li>
			<li>锅巴米饭</li>
			<li>披萨/牛排</li>
			<li>黄焖鸡</li>
		</div>
	</div>
</div>
</template>

<script>
	export default{
		name:"Search"
	}
</script>

<style scoped>
	.SearchBox{
		padding: .16rem .15rem 0;
	}
</style>
