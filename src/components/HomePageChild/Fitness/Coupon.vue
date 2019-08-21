<template>
    <!-- 代金券 -->
    <div class="coupon">
        <div class="coupon-box">
            <div class="box-left">
                <span>连续下三单，领 8 元代金券</span>
                <a href="#">立即查看</a>
            </div>
            <div class="box-right">
                <img src="../../../assets/imgs/HomepageChild/Finess/img/quan.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: "Coupon",
  components: {
   
  }
};
</script>

<style scoped>
/* 代金券 */
.coupon{
    width: 100%;
    background-color: #eecdd4;
}
.coupon-box{
    width: 3.5rem;
    height: .8rem;
    background-color:#be8669;
    margin: 0 auto;
    border: 3px solid #e8bba4;
    border-radius: 11px;
    position: relative;
    padding: 8px 0;
}
.box-left span{
    font-size: .18rem;
    color: #ffffff;
    font-weight: 540;
    position: absolute;
    top: .1rem;
    left: .15rem
}
.box-left a{
    font-size: .13rem;
    width: .82rem;
    height: .22rem;
    color: #000000;
    font-weight: 600;
    background-color: #fbe7b4;
    border: 1px solid #fbe7b4;
    border-radius: 14px;
    text-align: center;
    line-height: .22rem;
    position: absolute;
    top: .4rem;
    left: .15rem;
}
.box-right img{
    width: .74rem;
    height: .74rem;
    position: absolute;
    top: 0.05rem;
    right: .2rem;
}
</style>