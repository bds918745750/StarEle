<template >
  <div class="HomePage">
    <div class="bigBox">
      <ele-homepage-header></ele-homepage-header>
      <ele-homepage-Nav></ele-homepage-Nav>
      <ele-homepage-Banner></ele-homepage-Banner>
      <ele-homepage-EatGrass></ele-homepage-EatGrass>
      <ele-homepage-ServicePromises></ele-homepage-ServicePromises>
      <ele-homepage-FoodResearch></ele-homepage-FoodResearch>
      <ele-homepage-SelectShop></ele-homepage-SelectShop>
    </div>
    <ele-homepage-Footer></ele-homepage-Footer>
  </div>
</template>




<script>
import Swiper from "swiper"; //模块化引入

import Header from "../components/HomePage/Header";
import Nav from "../components/HomePage/Nav";
import Banner from "../components/HomePage/Banner";
import EatGrass from "../components/HomePage/EatGrass";
import ServicePromises from "../components/HomePage/ServicePromises";
import FoodResearch from "../components/HomePage/FoodResearch";
import SelectShop from "../components/HomePage/SelectShop";
import Footer from "../components/common/Footer";

export default {
  name: "HomePage",
  props:["data"],
  components: {
    "ele-homepage-header": Header,
    "ele-homepage-Nav": Nav,
    "ele-homepage-Banner": Banner,
    "ele-homepage-EatGrass": EatGrass,
    "ele-homepage-ServicePromises": ServicePromises,
    "ele-homepage-FoodResearch": FoodResearch,
    "ele-homepage-SelectShop": SelectShop,
    "ele-homepage-Footer": Footer
  },
  created(){
	  this._initPageData()
  },
  data(){
	  return{
		  index:{
			  
		  }
	  }
  },
  methods:{
	  //私有组件传入
	 _initPageData(){
		index 
	 }
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: {
        delay: 5000
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style scoped>
  @import "../assets/HomePage.css";
  .HomePage{
    display: -webkit-flex;
	  flex-direction:column;  
  }

  .bigBox{
    flex:1;
	  overflow-y:auto;
  }

</style>
    
