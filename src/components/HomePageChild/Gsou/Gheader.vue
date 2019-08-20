<template>
    <!-- 头部 -->
    <div class="Gsouheader">
        <img class="img1" src="../../../assets/imgs/HomepageChild/Finess/img/gsou.jpg" alt="">
        <router-link to="/">
             <img class="img2" src="../../../assets/imgs/HomepageChild/Finess/img/fanhui.jpg" alt="">
        </router-link>
    </div>
</template>

<script>

export default {
  name: "Gheader",
  components: {
   
  }
};
</script>

<style scoped>
/* 优享生活 */
.Gsouheader{
    width: 100%;
}
.Gsouheader .img1{
    width: 100%;
    position: relative;
}
.Gsouheader .img2{
    width: .35rem;
    height: .35rem;
    opacity: .1;
    border-radius: 12px;
    position: absolute;
    top: .355rem;
    left: .062rem;
}

</style>