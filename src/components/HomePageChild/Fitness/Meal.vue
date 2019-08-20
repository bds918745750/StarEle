<template>
  <!-- 健身餐 -->
    <div class="MEAL">
        <div class="meal">
            <img src="../../../assets/imgs/HomepageChild/Finess/img/left-g.jpg" alt="">
            <span>健身餐5折起</span>
            <img src="../../../assets/imgs/HomepageChild/Finess/img/right-g.jpg" alt="">
        </div>
    </div>
</template>

<script>

export default {
  name: "Meal",
  components: {
   
  }
};
</script>

<style scoped>
/* 健身餐 */
.MEAL{
    width: 100%;
    height: .21rem;
    background-color: #eecdd4;
    padding-top: 5px;
}
.meal{
    width: 2rem;
    display: flex;
    margin: 0 auto;
}
.meal img{
    width: .42rem;
    height: .21rem;
}
.meal span{
    font-size: .18rem;
    color: #852754;
    font-weight: 500;
    line-height: .21rem;
}
</style>