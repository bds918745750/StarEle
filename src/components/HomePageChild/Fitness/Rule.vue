<template>
    <!-- 活动规则 -->
    <div>
   <div class="look">
        <div class="meal meal-look">
            <img src="../../../assets/imgs/HomepageChild/Finess/img/left-g.jpg" alt="">
            <span>活动规则</span>
            <img src="../../../assets/imgs/HomepageChild/Finess/img/right-g.jpg" alt="">
        </div>
    </div>

    <div class="rule1">
        <div class="rule1-text">
            <img src="../../../assets/imgs/HomepageChild/Finess/img/no1.jpg" alt="">
            <span>本活动仅限在饿了么星选 APP 在线支付时专享。</span><br>
            <img src="../../../assets/imgs/HomepageChild/Finess/img/no2.jpg" alt="">
            <span>活动期间，特价菜不支持使用优惠券，不参与任何减满、折扣等其他优惠活动。</span><br>
            <img src="../../../assets/imgs/HomepageChild/Finess/img/no3.jpg" alt="">
            <span>如有问题，请联系饿了么星选客服，路径：我的-我的客服-在线客服或电话客服。</span><br>
        </div>
    </div>
    </div>
 
</template>

<script>
export default {
  name: "Rule",
  components: {
  }
};
</script>

<style scoped>



/* 规则 */
.rule1{
    width: 100%;
    font-size: .13rem;
    background-color: #eecdd4;
    padding: 10px 0;
    position: relative;
    color: #8d325d;
}
.rule1 img{
    width: .13rem;
    height: .13rem;
    display: inline;
    line-height: .11rem;
    /* position: absolute;
    top: 0;
    left: 0; */
}
.rule1-text{
    width: 93%;
    line-height: .11rem;
    height: 1.27rem;
    background-color: #f8e4e9;
    border-radius: 10px;
    margin: 0 auto;
    padding-left: .12rem;
    padding-top: .11rem;
}
.rule1-text span{
    /* margin-left: .2rem; */
    line-height: .2rem;
}
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