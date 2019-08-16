<template>
  <!-- 文字 -->
    <div class="text">
        <img src="../../../assets/imgs/HomepageChild/Finess/img/Gleft.png" alt="">
        <div class="txt">
            <p>饿了么星选X宋祖儿</p>
            <p>[ 健身小课堂 ]</p>
        </div>
        <img src="../../../assets/imgs/HomepageChild/Finess/img/Gright.png" alt="">
    </div>

</template>

<script>

export default {
  name: "Ftext",
  components: {
   
  }
};
</script>

<style scoped>
/* 文字 */
.text{
    width: 100%;
    height: .5rem;
    display: flex;
}
.text img{
    width: 1.07rem;
    height: .5rem;
}
.txt{
    width: 1.61rem;
    height: .5rem;
    background-color: #eecfd4;
}
.txt p{
    font-size: .18rem;
    color: #7e2e51;
    text-align: center;
}
</style>