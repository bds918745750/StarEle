<template>
  <div class="plate_second">
    <h2>美食研究所</h2>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="plate_second_top">
            <img src="../../assets/imgs/Homepage/plate_second/one-1.png" />
          </div>
          <div class="plate_second_bottom">
            <a href="javaScript:;">
              <img src="../../assets/imgs/Homepage/plate_second/two-1.png" />
              <span>川魂帽牌货冒菜(万柯金域国际店)</span>
            </a>
            <a href="javaScript:;">
              <img src="../../assets/imgs/Homepage/plate_second/two-1.png" />
              <span>川魂帽牌货冒菜(万柯金域国际店)</span>
            </a>
            <a href="javaScript:;">
              <img src="../../assets/imgs/Homepage/plate_second/two-1.png" />
              <span>川魂帽牌货冒菜(万柯金域国际店)</span>
            </a>
            <a href="javaScript:;">
              <img
                class="plate_second_bottom_move"
                src="../../assets/imgs/Homepage/plate_second/move.png"
              />
            </a>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="plate_second_top">
            <img src="../../assets/imgs/Homepage/plate_second/one-2.png" />
          </div>
          <div class="plate_second_bottom">
            <a href="javaScript:;">
              <img src="../../assets/imgs/Homepage/plate_second/two-1.png" />
              <span>川魂帽牌货冒菜(万柯金域国际店)</span>
            </a>
            <a href="javaScript:;">
              <img src="../../assets/imgs/Homepage/plate_second/two-1.png" />
              <span>川魂帽牌货冒菜(万柯金域国际店)</span>
            </a>
            <a href="javaScript:;">
              <img src="../../assets/imgs/Homepage/plate_second/two-1.png" />
              <span>川魂帽牌货冒菜(万柯金域国际店)</span>
            </a>
            <a href="javaScript:;">
              <img
                class="plate_second_bottom_move"
                src="../../assets/imgs/Homepage/plate_second/move.png"
              />
            </a>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
// import Swiper from "swiper"; //模块化引入

export default {
  name: "FoodResearch",
  mounted() {
    var mysSwiper = new Swiper(".swiper-container", {
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
.swiper-container-horizontal > .swiper-pagination-bullets {
    left: 1.5rem;
    bottom: -15px;
}
</style>