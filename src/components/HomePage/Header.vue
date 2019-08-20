<template>
    <!-- header -->
    <header>
        <div class="header_top">
            <router-link to="/Address" class="header_top_left">
                送至:<span>立人科技C座</span>
                <i class='fas fa-angle-down'></i>
            </router-link>
            <router-link to="/Login2" class="header_top_right" >
                <i class='fas fa-shopping-cart'></i>
            </router-link>
        </div>
        <div class="header_search">
            <router-link to="/Search">
                <i class='fas fa-search'></i>
                <span>烧烤</span>
            </router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name:"Sheader"
    }
</script>

<style scoped>

</style>