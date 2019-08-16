<template>
    <div class="Myis">
        <ele-Myis-Mherader></ele-Myis-Mherader>
        <ele-Myis-Menu></ele-Myis-Menu> 
        <ele-Myis-RedPacket></ele-Myis-RedPacket>   
        <ele-Myis-Tool></ele-Myis-Tool>
        <ele-Myis-Regular></ele-Myis-Regular>
        <ele-Myis-Footer></ele-Myis-Footer>
    </div>
</template>

<script>
    import Mherader from "../components/Myis/Mheader";
    import Menu from "../components/Myis/Menu";
    import RedPacket from "../components/Myis/RedPacket";
    import Tool from "../components/Myis/Tool";
    import Regular from "../components/Myis/Regular";
    import Footer from "../components/common/Footer";



export default {
    name:"Myis",
    components: {
    "ele-Myis-Mherader": Mherader,
    "ele-Myis-Menu": Menu,
    "ele-Myis-RedPacket": RedPacket,
    "ele-Myis-Tool": Tool,
    "ele-Myis-Regular": Regular,
    "ele-Myis-Footer": Footer,
  },
}
</script>

<style scoped>
    @import "../assets/Myis.css";
    .Myis{
        height: 100%;
    }

</style>