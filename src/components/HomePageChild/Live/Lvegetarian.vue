<template>
    <!-- 无肉不欢 素食主义 -->
    <div class="two-box">
        <p class="p1">无肉不欢</p>
        <p class="p2">素食主义</p>
    </div>
</template>

<script>

export default {
  name: "Lvegetarian",
  components: {
   
  }
};
</script>

<style scoped>
/* 无肉不欢 素食主义 */
.two-box{
    width: 100%;
    display: flex;
}
.two-box p{
    color: #0999d5;
    font-size: .18rem;
    width: 50%;
    height: .44rem;
    text-align: center;
    line-height: .44rem;
}
.p1{
    background-color: #9cddfb;
}
.p2{
    background-color: #41c0f5;
}
</style>