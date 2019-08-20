<template>
        <!-- 餐饮快送 下午茶送达 -->
        <div class="two-box">
            <p class="p1">餐饮快送</p>
            <p class="p2">下午茶送达</p>
        </div>
</template>

<script>

export default {
  name: "Gtwo",
  components: {
   
  }
};
</script>

<style scoped>
/* 餐饮快送 下午茶送达 */
.two-box{
    width: 100%;
    display: flex;
}
.two-box p{
    font-size: .18rem;
    width: 50%;
    height: .44rem;
    text-align: center;
    line-height: .44rem;
}
.p1{
    background-color: #c46642;
    color: #ffffff;
}
.p2{
    background-color: #f99f7d;
    color: #c06a47;
}
</style>