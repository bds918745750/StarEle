<template>
    <div class="Options-body">
        <ele-Myisbefore-BeforeLogin-Nav></ele-Myisbefore-BeforeLogin-Nav>
        <ele-Myisbefore-BeforeLogin-FourModule></ele-Myisbefore-BeforeLogin-FourModule> 
        <ele-Myisbefore-BeforeLogin-Tool></ele-Myisbefore-BeforeLogin-Tool>   
        <ele-Myisbefore-BeforeLogin-Roule></ele-Myisbefore-BeforeLogin-Roule>
        <!-- <ele-BeforeLogin-Null></ele-BeforeLogin-Null> -->
		<ele-Myisbefore-BeforeLogin-Footer></ele-Myisbefore-BeforeLogin-Footer>
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
    "ele-Myisbefore-BeforeLogin-Nav": Nav,
    "ele-Myisbefore-BeforeLogin-FourModule": FourModule,
    "ele-Myisbefore-BeforeLogin-Roule": Roule,
    "ele-Myisbefore-BeforeLogin-Tool": Tool,
    // "ele-BeforeLogin-Null": Null,
	"ele-Myisbefore-BeforeLogin-Footer": Footer,
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