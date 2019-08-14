<template>
    <div class="Myis">
        <ele-My-Mherader></ele-My-Mherader>
        <ele-My-Menu></ele-My-Menu> 
        <ele-My-RedPacket></ele-My-RedPacket>   
        <ele-My-Tool></ele-My-Tool>
        <ele-My-Regular></ele-My-Regular>
        <ele-My-Footer></ele-My-Footer>
    </div>
</template>

<script>
    import Mherader from "../components/My/Mheader";
    import Menu from "../components/My/Menu";
    import RedPacket from "../components/My/RedPacket";
    import Tool from "../components/My/Tool";
    import Regular from "../components/My/Regular";
    import Footer from "../components/common/Footer";



export default {
    name:"Myis",
    components: {
    "ele-My-Mherader": Mherader,
    "ele-My-Menu": Menu,
    "ele-My-RedPacket": RedPacket,
    "ele-My-Tool": Tool,
    "ele-My-Regular": Regular,
    "ele-My-Footer": Footer,
  },
}
</script>

<style scoped>
    @import "../assets/Myis.css";
    .Myis{
        height: 100%;
    }

</style>