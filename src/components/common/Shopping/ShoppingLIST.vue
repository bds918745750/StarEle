<template>
		<div class="shopList">
            <ele-Shopping-ShoppingMES></ele-Shopping-ShoppingMES>
            <ele-Shopping-ShoppingMenus></ele-Shopping-ShoppingMenus>
            <ele-Shopping-ShoppingACT></ele-Shopping-ShoppingACT>
            <ele-Shopping-shopTotalPrice></ele-Shopping-shopTotalPrice>
        </div>
</template>
<script>
import ShoppingMES from "./ShoppingMES"
import ShoppingMenus from "./ShoppingMenus"
import ShoppingACT from "./ShoppingACT"
import shopTotalPrice from "./shopTotalPrice"

export default {
	name:"ShoppingLIST",
	components:{
	"ele-Shopping-ShoppingMES":ShoppingMES,
	"ele-Shopping-ShoppingMenus":ShoppingMenus,
	"ele-Shopping-ShoppingACT":ShoppingACT,
	"ele-Shopping-shopTotalPrice":shopTotalPrice,
}
}

</script>

<style scoped>
.shopList{
	border-bottom: 1px solid gray;
	margin-top: .15rem;
}
</style>
    
