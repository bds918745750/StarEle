<template>
    <!-- header -->
    <header>
        <div class="header_top">
            <router-link to="/Address" class="header_top_left">
                送至:<span>立人科技C座</span>
                <i class='fas fa-angle-down'></i>
            </router-link>
            <a class="header_top_right" href="javaScript:;">
                <i class='fas fa-shopping-cart'></i>
            </a>
        </div>
        <div class="header_search">
            <a href="javaScript:;">
                <i class='fas fa-search'></i>
                <span>烧烤</span>
            </a>
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