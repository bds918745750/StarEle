<template>
  <div class="singleDetails">
    <ele-singleDetails-SingleDetailsBgPic :data="foods"></ele-singleDetails-SingleDetailsBgPic>
    <ele-singleDetails-SingleDetailsBigBox :data="foods"></ele-singleDetails-SingleDetailsBigBox>
  </div>
</template>

<script>
import SingleDetailsBgPic from "../../components/common/singleDetails/SingleDetailsBgPic";
import SingleDetailsBigBox from "../../components/common/singleDetails/SingleDetailsBigBox";

export default {
  name: "singleDetails",
  data(){
	  return{
		 foods: this.$route.query.foods,
	  }
  },
  mounted(){
	  console.log(this.$route.query.foods)
  },
  components: {
    "ele-singleDetails-SingleDetailsBgPic": SingleDetailsBgPic,
    "ele-singleDetails-SingleDetailsBigBox": SingleDetailsBigBox
  },
};
</script>

<style scoped>

</style>