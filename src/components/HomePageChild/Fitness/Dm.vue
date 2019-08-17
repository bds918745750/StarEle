<template>
   <!-- 吃对了才能瘦 -->
    <div class="DM">
            <div class="meal">
                <img src="../../../assets/imgs/HomepageChild/Finess/img/left-g.jpg" alt="">
                <span>吃对了 才能瘦</span>
                <img src="../../../assets/imgs/HomepageChild/Finess/img/right-g.jpg" alt="">
            </div>
            <div class="meal-bottom">
                <p>合理搭配 均衡营养</p>
            </div>
    </div>
</template>

<script>

export default {
  name: "Dm",
  components: {
   
  }
};
</script>

<style scoped>
.MEAL{
    width: 100%;
    height: .21rem;
    background-color: #eecdd4;
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
/* 吃对了才能瘦 */
.DM{
    width: 100%;
    height: .5rem;
    background-color: #eecdd4;
    padding: 10px 0;
}
.meal-bottom{
    width: 100%;
    height: .21rem;
    font-size: .18rem;
    color: #852754;
    text-align: center;
}
</style>