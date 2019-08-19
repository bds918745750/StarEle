<template>
  <div class="singleDetails">
    <ele-singleDetails-SingleDetailsBgPic></ele-singleDetails-SingleDetailsBgPic>
    <ele-singleDetails-SingleDetailsBigBox></ele-singleDetails-SingleDetailsBigBox>
  </div>
</template>

<script>
import SingleDetailsBgPic from "../../components/common/singleDetails/SingleDetailsBgPic";
import SingleDetailsBigBox from "../../components/common/singleDetails/SingleDetailsBigBox";

export default {
  name: "singleDetails",
  components: {
    "ele-singleDetails-SingleDetailsBgPic": SingleDetailsBgPic,
    "ele-singleDetails-SingleDetailsBigBox": SingleDetailsBigBox,
  }
};
</script>

<style scoped>

</style>