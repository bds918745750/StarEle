<template>
<div>
   <div class="ShopDet" v-for="(item,key) in data.nearbyShop" :key="key" @click="HomePageShop(key)">
    <div class="ShopDet_left">
      <span v-if="item.nearbyShopAdvtange == 1">星选好店</span>
      <img :src="item.nearbyShopPic" />
    </div>

    <div class="ShopDet_content">
      <div class="name">{{item.nearbyShopName}}</div>
      <div class="mid">
        <div class="mid_right">
          <span class="f1">{{item.nearbyShopStar}}</span>
          <span class="count f1">| 月售:{{item.nearbyShopSale}}</span>
        </div>
        <div class="zhuanSong">
          <span v-if="item.nearbyShopAdvtange == 1" >蜂鸟专送</span>
          <span v-if="item.nearbyShopAdvtange == 2" style="color:yellow;border:1px solid yellow"  >美团专送</span>
        </div>
      </div>

      <div class="ShopDet_down">
        <div class="ShopDet_down_left">
          <span>起送 20 |</span>
          <span>配送 {{item.nearbyShopTime}}</span>
        </div>
        <div class="ShopDet_down_right">
          <span class="time f1">{{item.nearbyShopTime}} 分钟 |</span>
          <span class="distance f1">{{item.nearbyShopDistance}}</span>
        </div>
      </div>

      <div class="ShopDet_type">
        <a href="javaScript:;">
          <img src="../../assets/imgs/Homepage/Shop_logo/Shop-1.png" />
          <span>{{item.nearbyShopType}}</span>
        </a>
        <span>好吃到哭的黑椒蜜豆炒牛柳</span>
      </div>

      <ul class="activety">
        <!-- <li>首单减17</li> -->
        <li></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Shop",
  props:["data","id"],
  methods:{
    HomePageShop(item){
      this.$router.push({
        path:"/Menu",query:{
          shopid:item+1
        }
      });
      console.log(item)
    }  
  },
 }
</script>

<style scoped>
.ShopDet{
  margin-top: 15px;
}

</style>