<template>
  <!-- 分类列表 -->
        <div class="left-box">
            <ul class="ul-list">
                <li v-for="item in data">
                    <a href="#foryou">{{item.classDelicious}}</a>
                </li>
            </ul>
        </div>
</template>

<script>

export default {
  name: "CaiLeft",
  props:["data"]
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