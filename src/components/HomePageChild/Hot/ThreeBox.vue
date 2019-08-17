<template>
    <div class="three-box">
        <p class="p1">口味</p>
        <p>折扣</p>
        <p>人气</p>
    </div>
</template>

<script>

export default {
  name: "ThreeBox",
  components: {
   
  }
};
</script>

<style scoped>
.three-box{
    width: 100%;
    display: flex;
    background-color: #c1111e;
}
.three-box p{
    width: 24%;
    height: .5rem;
    border: 3px solid #ec782b;
    border-radius: 14px;
    font-size: .28rem;
    font-weight: 600;
    color: #d4511d;
    text-align: center;
    line-height: .5rem;
    margin-left: .22rem;
    margin-top: .13rem;
    margin-bottom: .13rem;
    background-color:#fdb293;
}
.three-box .p1{
    color: #fad1b3;  
    text-shadow: 3px -3px 3px #880912;
    box-shadow: 3px -3px 3px #470a12;
}

</style>