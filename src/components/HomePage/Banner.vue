<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(imgs,Iid) in data" :key="Iid" class="swiper-slide">
          <img :src="imgs" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: ["data"], //代表轮播图
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
.swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -24px;
    left: 144px;
}
</style>