<template>
    <div class="Hotheader">
        <img class="Hotimg1" src="../../../assets/imgs/HomepageChild/Finess/img/eat.jpg" >
        <router-link to="/">
        <img class="Hotimg2" src="../../../assets/imgs/HomepageChild/Finess/img/fanhui.jpg"> 
        </router-link>
    </div>
</template>

<script>

export default {
  name: "HotHeader",
  components: {
   
  }
};
</script>

<style scoped>
.Hotheader{
    width: 100%;
}
.Hotheader .Hotimg1{
    width: 100%;
	height: 2.8rem;
}
.Hotheader .Hotimg2{
	display: block;
    width: .35rem;
    height: .35rem;
    opacity: .1;
    border-radius: 12px;
    position: absolute;
    top: .355rem;
    left: .062rem;
}
</style>