<template>
  <div class="plate">
    <h2>吃货种草机</h2>
    <div class="plate_one">
      <a class="plate_one_right" href="javaScript:;">
        <img src="../../assets/imgs/Homepage/plate/one-1.png" />
      </a>
      <a href="javaScript:;">
        <img src="../../assets/imgs/Homepage/plate/one-2.png" />
      </a>
    </div>
    <div class="plate_two">
      <router-link to="/Fitness" class="margin_right">
        <img src="../../assets/imgs/Homepage/plate/two-1.png" />
      </router-link>
      <router-link to="/MoneyOff" class="margin_right">
        <img src="../../assets/imgs/Homepage/plate/two-2.png" />
      </router-link>
      <router-link to="/Live" class="margin_right">
        <img src="../../assets/imgs/Homepage/plate/two-3.png" />
      </router-link>
      <router-link to="/Gsou">
        <img src="../../assets/imgs/Homepage/plate/two-4.png" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "EatGrass"
};
</script>

<style scoped>
</style>