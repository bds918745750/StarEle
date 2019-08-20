<template>
   <!-- 头部 -->
    <div class="Fitinessheader">
        <img src="../../../assets/imgs/HomepageChild/Finess/img/banner.jpg" alt="">
        <router-link to="/">
             <img class="img2" src="../../../assets/imgs/HomepageChild/Finess/img/fanhui.jpg" alt="">
        </router-link>
        <h4>规则</h4>
    </div>

</template>

<script>

export default {
  name: "Fheader",
  components: {
   
  }
};
</script>

<style scoped>
/* 头部 */
.Fitinessheader{
    width: 100%;
}
.Fitinessheader img{
    width: 100%;
    height: 3.68rem;
    position: relative;
}
.Fitinessheader h4{
    width: .45rem;
    height: .25rem;
    font-size: .13rem;
    color: #ffffff;
    background-color: #b8688e;
    position: absolute;
    top: .3rem;
    right: 0;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    text-align: center;
    line-height: .25rem;
}
.Fitinessheader .img2{
    width: .35rem;
    height: .35rem;
    opacity: .3;
    border-radius: 12px;
    position: absolute;
    top: .355rem;
    left: .062rem;
}

</style>