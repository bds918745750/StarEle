<template>
    <!-- 头部 -->
    <div class="Liveheader">
        <img class="img1" src="../../../assets/imgs/HomepageChild/Finess/img/live.jpg" alt="">
        <router-link to="/">
        <img class="img2" src="../../../assets/imgs/HomepageChild/Finess/img/fanhui.jpg" alt="">
        </router-link>
    </div>
</template>

<script>

export default {
  name: "Lheader",
  components: {
   
  }
};
</script>

<style scoped>
/* 优享生活 */
.Liveheader{
    width: 100%;
}
.Liveheader .img1{
    width: 100%;
    position: relative;
}
.Liveheader .img2{
    width: .35rem;
    height: .35rem;
    opacity: .8;
    border-radius: 12px;
    position: absolute;
    top: .355rem;
    left: .062rem;
}

</style>