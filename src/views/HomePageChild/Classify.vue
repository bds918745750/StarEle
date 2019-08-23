<template>
  <div class="CaiBox">
	  <div class="CaiLeft">
		  <ele-homepage-classify-CaiLeft></ele-homepage-classify-CaiLeft>
	  </div>
	   <div class="CaiRight">
		   <ele-homepage-classify-CaiRight></ele-homepage-classify-CaiRight>
	  </div>
  </div>
</template>

<script>
	import CaiLeft from '../../components/HomePageChild/Classify/CaiLeft'
	import CaiRight from '../../components/HomePageChild/Classify/CaiRight'



export default {
  name: "Classify",
  components: {
    "ele-homepage-classify-CaiLeft": CaiLeft,
    "ele-homepage-classify-CaiRight": CaiRight
  }
};
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