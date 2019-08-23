<template>
    <router-link to="/Login">
      <div class="top">
        <img src="../../assets/imgs/Order/login.png" />
        <router-link to="/Xq">
        <p>登录后才能看到订单哟</p>
        </router-link>
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
</style>