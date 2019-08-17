 <template>
   <!-- 活动规则 -->

    <div class="rule">
        <div class="rule-text">
            <div class="title">
                <img src="img/start.png" alt=""><span>活动规则</span><img src="img/start.jpg" alt="">
            </div>

            <ol>
                <li>1.活动时间：长期在线；</li>
                <li>2.本活动仅限在饿了么星选 APP 在线支付时专享；</li>
                <li>3.本活在商铺可配送范围内适用；</li>
                <li>4.本活动特价菜不与店内满减同享；</li>
                <li>5.参与本活动页面的商户为：部分折扣菜/满减活动力度满足活动优惠，具体活动以门店为准；</li>
                <li>6.如有问题，请联系饿了么星选客服，路径：我的-我的客服-在线客服或电话客服。</li>
            </ol>
        </div>
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

/* 规则 */
.rule{
    width: 100%;
    padding: 10px 0;
    position: relative;
  background-color: #f4ebe2;
}
.title{
    display: flex;
    justify-content:center;
}
.title img{
    width: 0.5rem;
    height: 0.25rem;
    display: inline;
    line-height: 0.11rem;
    /* position: absolute;
    top: 0;
    left: 0; */
}
.title span{
    color: #ffffff;
    font-size: .18rem;
}
.rule-text{
    width: 88%;
    line-height: .11rem;
    background-color: #b5a897;
    border-radius: 10px;
    margin: 0 auto;
    padding:.11rem .12rem;
}
.rule-text span{
    /* margin-left: .2rem; */
    line-height: .2rem;
}
.rule-text ol{
    color: #ffffff;
    font-size: .14rem;
    line-height: .2rem;
}

</style>
