<template >
<div class="invite-banner">
	<div class="swiper-container">
		<div class="swiper-wrapper">
		  <div class="swiper-slide">
			  <img src="../../../assets/imgs/MyisChild/invite/i-3.png" alt="">
		  </div>
		  <div class="swiper-slide">
			  <img src="../../../assets/imgs/MyisChild/invite/i-4.png" alt="">
		  </div>
		  <div class="swiper-slide">
			  <img src="../../../assets/imgs/MyisChild/invite/i-5.png" alt="">
		  </div>
		  <div class="swiper-slide">
			  <img src="../../../assets/imgs/MyisChild/invite/i-6.png" alt="">
		  </div>
		  <div class="swiper-slide">
			  <img src="../../../assets/imgs/MyisChild/invite/i-7.png" alt="">
		  </div>
		</div>
	<!-- Add Pagination -->
	<!-- <div class="swiper-pagination"></div> -->
	</div>
</div>
</template>

<script>
	export default {
	  name:"Balance",
	}
</script>

<style scoped="scoped">
	.invite-banner{
		margin-top: 0.5rem;
	}
	.swiper-container {
	  width: 100%;
	  height: 100%;
	}
	.swiper-slide {
	  text-align: center;
	  font-size: 18px;
	  background: #fff;
	  /* width: 80%; */

	  /* Center slide text vertically */
	  display: -webkit-box;
	  display: -ms-flexbox;
	  display: -webkit-flex;
	  display: flex;
	  -webkit-box-pack: center;
	  -ms-flex-pack: center;
	  -webkit-justify-content: center;
	  justify-content: center;
	  -webkit-box-align: center;
	  -ms-flex-align: center;
	  -webkit-align-items: center;
	  align-items: center;
	}
	.swiper-slide  img{
		width: 1.40rem;
		height: 2.53rem;
	}
	.swiper-slide:nth-child(1n) {
	  width: 35%;
	}
	.swiper-slide:nth-child(2n) {
	  width: 35%;
	}
	.swiper-slide:nth-child(3n) {
	  width: 35%;
	}
	.swiper-slide:nth-child(4n) {
	  width: 35%;
	}
	.swiper-slide:nth-child(5n) {
	  width: 35%;
	}
</style>
