<template>
  <!-- 活动规则 -->
    <div class="rulee">
            <div class="rule-text">
                <div class="title">
                    <img src="../../../assets/imgs/HomepageChild/Finess/img/starblue.jpg" alt=""><span>活动规则</span><img src="../../../assets/imgs/HomepageChild/Finess/img/starblue2.jpg" alt="">
                </div>
    
                <ol>
                    <li>1.活动时间：长期在线；</li>
                    <li>2.本活动仅限在饿了么星选 APP 在线支付时专享；</li>
                    <li>3.本活在商铺可配送范围内适用；</li>
                    <li>4.本活动特价菜不与店内满减同享；</li>
                    <li>5.如有问题，请联系饿了么星选客服，路径：我的-我的客服-在线客服或电话客服。</li>
                </ol>
            </div>
        </div>
</template>

<script>

export default {
  name: "Lrule",
  components: {
   
  }
};
</script>

<style scoped>
/* 规则 */
.rulee{
    width: 100%;
    padding: 10px 0;
    position: relative;
    background-color: #cfebf7;
}
.title{
    display: flex;
    justify-content:center;
}
.title img{
    width: 0.5rem;
    height: 0.25rem;
    display: inline;
    line-height: .11rem;
    /* position: absolute;
    top: 0;
    left: 0; */
}
.title span{
    color: #319fd4;
    font-size: .18rem;
}
.rule-text{
    width: 88%;
    line-height: .11rem;
    background-color: #ffffff;
    border-radius: 10px;
    margin: 0 auto;
    padding:.11rem .12rem;
}
.rule-text span{
    /* margin-left: .2rem; */
    line-height: .2rem;
}
.rule-text ol{
    color: #84aec6;
    font-size: .14rem;
    line-height: .2rem;
}


</style>