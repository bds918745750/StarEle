<template>
  <div class="right-box">
            <ol class="ol-list" v-for="(item,index) in data" :key="index">
                <li class="box1" >
                    <p id="foryou" >{{item.classDelicious}}</p>
					<div class="box-a" v-for="(foods,index) in item.classDeliciousAll" :key="index">
						<a href="javascript:;">
							<img :src="foods.smallIconPic" >
							<h4>{{foods.smallIconName}}</h4>
						</a>
					</div>
                </li>
            </ol>
        </div>
</template>

<script>

export default {
  name: "CaiRight",
  props:["data"]

};
</script>

<style scoped>
.ol-list{
	overflow: hidden;
}
.ol-list>li>a>p{
	font-size: .15rem;
	padding-top: .38rem;
    padding-left: .17rem;
	padding-bottom: .15rem;
	color: #000000;
}
.box1>p{
	font-size: .15rem;
    padding-top: .38rem;
    padding-left: .17rem;
    padding-bottom: .15rem;
    color: #000000;
}
.box-a{
	display: flex;
	flex-wrap: wrap;
	float: left;
}
.box-a a{
	margin-left: .15rem;
    margin-top: 10px;
}
.box-a img{
	width: .7rem;
	height: .7rem;
	border-radius: 50%;
}
.box-a2 img{
	width: .7rem;
	height: .7rem;
	border-radius: 12px;
}
.box-a h4{
	line-height: .25rem;
	font-size: .13rem;
	font-weight: 100;
	color: #000000;
	text-align: center;
}
</style>