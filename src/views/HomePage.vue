<template >
  <div class="HomePage">
    <div class="bigBox">
     <ele-homepage-header></ele-homepage-header>
       <ele-homepage-Nav v-if="HomeInfo.menu" :data="HomeInfo.menu" ></ele-homepage-Nav>
      <ele-homepage-Banner v-if="HomeInfo.banner" :data="HomeInfo.banner"></ele-homepage-Banner>
      <ele-homepage-EatGrass v-if="HomeInfo.eatter" :data="HomeInfo.eatter"></ele-homepage-EatGrass>
      <ele-homepage-EatGrass></ele-homepage-EatGrass>
      <ele-homepage-ServicePromises></ele-homepage-ServicePromises>
      <ele-homepage-FoodResearch></ele-homepage-FoodResearch>
      <ele-homepage-SelectShop v-if="HomeInfo" :data="HomeInfo"></ele-homepage-SelectShop>
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

//引入首页数据
import HomePage from "../apis/HomePage"

export default {
  name: "HomePage",
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
  created() {
    this._initPageData();
  },
  data(){
    return{
      HomeInfo:{}
    }
  },
  methods: {
    _initPageData() {
      HomePage.getHomePage(data => {
        console.log(data);
        this.HomeInfo= data;

      });
    }
  },

};
</script>

<style scoped>
@import "../assets/HomePage.css";
.HomePage {
  display: -webkit-flex;
  flex-direction: column;
  height: 100%;
}

.bigBox {
  flex: 1;
  overflow-y: auto;
}
</style>
    
