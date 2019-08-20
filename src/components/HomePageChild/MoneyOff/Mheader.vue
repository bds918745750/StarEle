<template>
    <!-- 满减主义 -->
    <div class="ism MoneyOffheader">
        <img src="../../../assets/imgs/HomepageChild/Finess/img/ism.png" class="ismhead-img">
        <router-link to="/">
             <img class="img2" src="../../../assets/imgs/HomepageChild/Finess/img/fanhui.jpg">
        </router-link>
        <ul>
            <li>中式餐饮</li>
        </ul>
    </div>
</template>

<script>

export default {
  name: "Mheader",
  components: {
   
  }
};
</script>

<style scoped>
/* 满减主义 */
.ism{
    width: 100%;
}
.ism img{
    width: 100%;
}
.ism ul{
    width: 100%;
    height: .5rem;
    background-color: red;
    font-size: .18rem;
    color: #ffffff;
    text-align: center;
    line-height: .5rem;
}
.MoneyOffheader{
    width: 100%;
}
.MoneyOffheader img{
    width: 100%;
    height: 3.68rem;
    position: relative;
}
.MoneyOffheader h4{
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
.MoneyOffheader .img2{
    width: .35rem;
    height: .35rem;
    opacity: .3;
    border-radius: 12px;
    position: absolute;
    top: .355rem;
    left: .062rem;
}
</style>