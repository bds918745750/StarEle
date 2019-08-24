<template>
  <div class="CaiBox">
	  <div class="CaiLeft">
		  <ele-homepage-classify-CaiLeft v-if="deliciousClass" :data="deliciousClass"></ele-homepage-classify-CaiLeft>
	  </div>
	   <div class="CaiRight">
		   <ele-homepage-classify-CaiRight v-if="deliciousClass"  :data="deliciousClass"></ele-homepage-classify-CaiRight>
	  </div>
  </div>
</template>

<script>
	import CaiLeft from '../../components/HomePageChild/Classify/CaiLeft'
	import CaiRight from '../../components/HomePageChild/Classify/CaiRight'
	import HomePage from "../../apis/HomePage";



export default {
  name: "Classify",
  components: {
    "ele-homepage-classify-CaiLeft": CaiLeft,
    "ele-homepage-classify-CaiRight": CaiRight
  },
  data(){
	  return{
		deliciousClass:[] 
	  }	  
  },
  created(){
	  this.deliciousFoods()
  },
  methods:{
	  deliciousFoods(){
		  HomePage.getclassFoods(data=>{
			  console.log(data.deliciousClass)
			  this.deliciousClass=data.deliciousClass
		  })
	  }
  }
}
</script>

<style scoped>
.CaiBox{
	width: 100%;
	height: inherit;
	display: flex;
}

.CaiLeft{
	width: 28%;
	height: inherit;
	overflow-y: auto;
}
.CaiRight{
	width: 75%;
	height: inherit;
	overflow-y: auto;
}
</style>