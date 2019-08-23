<template>
    <router-link to="/Login">
      <div class="top">
        <img src="../../assets/imgs/Order/login.png" />
        <p>登录后才能看到订单哟</p>
        <button>注册/登陆</button>
      </div>
    </router-link>
</template>

<script>
export default {
  name: "Log"
}
</script>

<style scoped>
.top img{
  width: 2rem;
  height: 2rem;
}
</style>