<template>
    <div class="Options-body">
        <ele-BeforeLogin-Nav></ele-BeforeLogin-Nav>
        <ele-BeforeLogin-FourModule></ele-BeforeLogin-FourModule> 
        <ele-BeforeLogin-Tool></ele-BeforeLogin-Tool>   
        <ele-BeforeLogin-Roule></ele-BeforeLogin-Roule>
        <!-- <ele-BeforeLogin-Null></ele-BeforeLogin-Null> -->
		<ele-BeforeLogin-Footer></ele-BeforeLogin-Footer>
    </div>
</template>

<script>
    import Nav from "../../components/Myisbefore/BeforeLogin/Nav";
    import FourModule from "../../components/Myisbefore/BeforeLogin/FourModule";
    import Roule from "../../components/Myisbefore/BeforeLogin/Roule";
    import Tool from "../../components/Myisbefore/BeforeLogin/Tool";
    // import Null from "../../components/Myisbefore/BeforeLogin/Null";
	import Footer from "../../components/common/Footer";




export default {
    name:"BeforeLogin",
    components: {
    "ele-BeforeLogin-Nav": Nav,
    "ele-BeforeLogin-FourModule": FourModule,
    "ele-BeforeLogin-Roule": Roule,
    "ele-BeforeLogin-Tool": Tool,
    // "ele-BeforeLogin-Null": Null,
	"ele-BeforeLogin-Footer": Footer,
  },
}
</script>

<style scoped>
	.Options-body{
		background: #FFFFFF;
		width: 100%;
		height: 100%;
	} 

</style>