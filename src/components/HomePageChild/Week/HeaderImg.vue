<template>
      <div class="header">
        <img src="../../../assets/imgs/HomepageChild/Finess/img/week4.jpg" alt="">
       <router-link to="/">
        <img class="img2" src="../../../assets/imgs/HomepageChild/Finess/img/fanhui.jpg" alt=""> 
        </router-link>
    </div>

</template>

<script>

export default {
  name: "HeaderImg",
  components: {
   
  }
};
</script>

<style scoped>

/* 头部 */
.header{
    width: 100%;
}
.header img{
    width: 100%;
    height: 3.68rem;
    position: relative;
}
.header h4{
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
.header .img2{
    width: .35rem;
    height: .35rem;
    opacity: .3;
    border-radius: 12px;
    position: absolute;
    top: .355rem;
    left: .062rem;
}
</style>