<template>
<div class="Week">
     <ele-homepage-Week-HeaderImg></ele-homepage-Week-HeaderImg>
      <ele-homepage-Week-WeekTitle></ele-homepage-Week-WeekTitle>
      <ele-homepage-moneyoff-MshopList></ele-homepage-moneyoff-MshopList>
      <ele-homepage-Week-WeekMore></ele-homepage-Week-WeekMore>
      <ele-homepage-Week-WeekRule></ele-homepage-Week-WeekRule>


</div>
</template>

<script>
    import HeaderImg from "../../components/HomePageChild/Week/HeaderImg";
    import WeekTitle from "../../components/HomePageChild/Week/WeekTitle";
    import MshopList from "../../components/HomePageChild/MoneyOff/MshopList";
    import WeekMore from "../../components/HomePageChild/Week/WeekMore";
    import WeekRule from "../../components/HomePageChild/Week/WeekRule";
export default {
  name: "Week",
  components: {
    "ele-homepage-Week-HeaderImg":HeaderImg,
    "ele-homepage-Week-WeekTitle":WeekTitle,
    "ele-homepage-moneyoff-MshopList": MshopList,
    "ele-homepage-Week-WeekMore":WeekMore,
    "ele-homepage-Week-WeekRule":WeekRule,
  }
};
</script>

<style scoped>
.Week{
  background:#50cea2;
}
</style>