<template>
 <div>
    <!-- 往期回顾 -->
    <div class="look">
        <div class="meal meal-look">
            <img src="../../../assets/imgs/HomepageChild/Finess/img/left-g.jpg" alt="">
            <span>往期回顾</span>
            <img src="../../../assets/imgs/HomepageChild/Finess/img/right-g.jpg" alt="">
        </div>
    </div>

    <div class="more-list">
            <a href="#"><p>Vol.05 - 减肥反弹怎么吃?</p><img src="../../../assets/imgs/HomepageChild/Finess/img/youjian.jpg" alt=""></a>
    </div>
    <div class="more-list">
            <a href="#"><p>Vol.04 - 每天这么吃，少跑半小时！</p><img src="../../../assets/imgs/HomepageChild/Finess/img/youjian.jpg" alt=""></a>
    </div>    <div class="more-list">
            <a href="#"><p>Vol.03 - 吃的不对，运动白费！</p><img src="../../../assets/imgs/HomepageChild/Finess/img/youjian.jpg" alt=""></a>
    </div>
    <div class="more-list">
            <a href="#"><p>Vol.02 - 理想身材，你得[多]吃点！</p><img src="../../../assets/imgs/HomepageChild/Finess/img/youjian.jpg" alt=""></a>
    </div>
 </div>
</template>

<script>
export default {
  name: "Look",
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
/* 往期回顾 */
.look{
    width: 100%;
    background-color: #eecdd4;
    margin: 0 auto;
}
.meal-look{
    width: 1.58rem;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 5px;
}
.more-list{
    width: 100%;
    height: .5rem;
    background-color: #eecdd4;
    position: relative;
}
.more-list p{
    width: 93%;
    height: .36rem;
    background-color: #fefbf7;
    font-size: .12rem;
    margin: 0 auto; 
    line-height: .36rem;
    font-weight: 600;
    margin-bottom: 10px;
    text-indent: .2rem;
    color: #6f1944;
    border-radius: 5px;
}
.more-list img{
    width: .33rem;
    height: .14rem;
    position: absolute;
    top: .1rem;
    right: .35rem;
}
</style>