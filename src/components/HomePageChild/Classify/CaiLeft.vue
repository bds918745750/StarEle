<template>
  <!-- 分类列表 -->
        <div class="left-box">
            <ul class="ul-list">
                <li>
                    <a href="#foryou">为你推荐</a>
                </li>
                <li>
                    <a href="#easy">简餐</a>
                </li>
                <li>
                    <a href="#dfc">地方菜</a>
                </li>
                <li>
                    <a href="#xsjc">西式简餐</a>
                </li>
                <li>
                    <a href="#ygfw">异国风味</a>
                </li>
                <li>
                    <a href="#china">中式正餐</a>
                </li>
                <li>
                    <a href="#babiQ">烧烤海鲜</a>
                </li>
                <li>
                    <a href="#tian">甜点饮品</a>
                </li>
                <li>
                    <a href="#shuiguo">水果生鲜</a>
                </li>
                <li>
                    <a href="#am">下午茶</a>
                </li>
                <li>
                    <a href="#flaw">鲜花蛋糕</a>
                </li>
                <li>
                    <a href="#shop">超市购</a>
                </li>
                <li>
                    <a href="#yao">送药上门</a>
                </li>
            </ul>
        </div>
</template>

<script>

export default {
  name: "CaiLeft",

};
</script>

<style scoped>
/* 分类列表 */
.ul-list{
	text-indent: .17rem;
	line-height: .95rem;
	height: inherit;
}
.ul-list>li{
	font-size: .15rem;
}
ul>li>a{
	color:#000000;
}
</style>