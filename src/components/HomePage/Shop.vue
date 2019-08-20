<template>
   <div class="ShopDet" >
    <div class="ShopDet_left">
      <span>星选好店</span>
      <img src="../../assets/imgs/Homepage/Shop_logo/小六汤包(高新南路).png" />
    </div>

    <div class="ShopDet_content">
      <div class="name">小六汤包(高新路店)</div>
      <div class="mid">
        <div class="mid_right">
          <span class="f1">{{data.nearbyShop.nearbyShopStar}}</span>
          <span class="count f1">| 月售:{{data.nearbyShop.nearbyShopSale}}</span>
        </div>
        <div class="zhuanSong">
          <span>蜂鸟专送</span>
        </div>
      </div>

      <div class="ShopDet_down">
        <div class="ShopDet_down_left">
          <span>起送 20 |</span>
          <span>配送 20</span>
        </div>
        <div class="ShopDet_down_right">
          <span class="time f1">{{data.nearbyShop.nearbyShopTime}} 分钟 |</span>
          <span class="distance f1">{{data.nearbyShop.nearbyShopDistance}}</span>
        </div>
      </div>

      <div class="ShopDet_type">
        <a href="javaScript:;">
          <img src="../../assets/imgs/Homepage/Shop_logo/Shop-1.png" />
          <span>包子</span>
        </a>
        <span>好吃到哭的黑椒蜜豆炒牛柳</span>
      </div>

      <ul class="activety">
        <!-- <li>首单减17</li> -->
        <li>{{data.nearbyShopMitig[0].full}}减{{data.nearbyShopMitig[0].minus}}</li>
        <li>{{data.nearbyShopMitig[1].full}}减{{data.nearbyShopMitig[1].minus}}</li>
        <li>{{data.nearbyShopMitig[2].full}}减{{data.nearbyShopMitig[2].minus}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
  props:["data","id"]
 }
</script>

<style scoped>
.ShopDet{
  margin-top: 15px;
}

</style>