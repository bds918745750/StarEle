<template>
  <div class="shopingBox">
    <ele-Shopping-ShoppingTOP @empty="empty"></ele-Shopping-ShoppingTOP>
    <div class="car">
      <img src="../../assets/imgs/Shopping/car.jpg" />
      <p>配送至立人科技园c座立人科技园</p>
    </div>
    
    <div v-if="goods.length>0">
      <div class="wrap" v-for="(item, index) in goods" :key="index">
        <div class="title">
          <input type="checkbox" v-model="item.shop_is_select" @change="handChangeInput(index)" />
          <p>{{item.shop_name}}</p>
        </div>
        <div class="goods_record" v-for="(list, idx) in item.shop_goods" :key="idx">
          <input
            type="checkbox"
            v-model="list.goods_is_select"
            @change="handleChildrenChangeInput(index)"
          />
          <img class="goods_img" :src="list.goods_img" />
          <div class="goods_text">
            <p class="goods_name">{{list.goods_name}}</p>
            <div class="goods_num">
              <p class="border" @click="handleClickAdd(index, idx)">+</p>
              <span class="goods_num_text">{{list.goods_num}}</span>
              <p class="border" @click="handleClickOdd(index, idx)">-</p>
            </div>
          </div>
          <div class="PD">
            <p class="goods_price">￥{{list.goods_num * list.presentPrice}}</p>
            <img
              class="goods_delete"
              src="../../assets/imgs/Shopping/waste-50.png"
              @click="handleClickDelete(index, idx)"
            />
          </div>
        </div>
        <div class="goods_packing">
          <p>配送费</p>
          <p></p>
          ￥{{item.shop_Send_price}}
        </div>
        <div class="goods_packing">
          <p>立减优惠</p>
          <p></p>-￥15
        </div>
        <div class="discount">
          <div class="discount_msg">
            满
            <span>30</span>减
            <span>15</span>
          </div>
          <div class="discount_msg">
            满
            <span>20</span>减
            <span>8</span>
          </div>
          <div class="discount_msg">
            满
            <span>15</span>减
            <span>5</span>
          </div>
        </div>
        <div class="handle">
          <div class="price_all">
            总计
            <span class="price_all_text">￥{{item.shop_allPrice}}</span>
          </div>
          <div class="button">去结算</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ShoppingTOP from '../../components/common/Shopping/ShoppingTOP'
import aaa from '../../apis/HomePage'
export default {
  name: 'Shopping',
  components: {
    'ele-Shopping-ShoppingTOP': ShoppingTOP
  },
  data() {
    return {
      goods: [],
      userId:1
    }
  },
  created() {
    // this.getDeviceList()
    this._getShoppingCar()
  },
  methods: {
    // getDeviceList() {
    //   this.axios.post('http://39.100.63.237:8000/api/cart/cartlist/add_cart').then(res => {
    //     this.goods = res.data.data.carts
    //   })
    // },
    _getShoppingCar(){
      aaa.shoppingCart(data=>{
        console.log(data)
        this.goods = data.shop_info
      })
    },
    count(sum, num) {
      if (sum >= 30) return (sum = sum - 15 + Number(num))
        
      if (sum >= 20) return (sum = sum - 8 + Number(num))
        
      if (sum >= 15) return (sum = sum - 5 + Number(num))
        
      if (sum == 0) return (sum = 0)

    },
    price(arr, type) {
      let sum = 0
      arr.forEach(item => {
        if(type) item.goods_is_select = true
        item.goods_price = item.presentPrice * item.goods_num
        sum += item.goods_price
      })
      return sum
    },
    handChangeInput(index) {
      if (this.goods[index].shop_is_select) {
        this.goods[index].shop_allPrice = this.count(this.price(this.goods[index].shop_goods, true), this.goods[index].shop_Send_price)
      } else {
        this.goods[index].shop_goods.forEach(item => (item.goods_is_select = false))
        this.goods[index].shop_allPrice = 0
      }
    },
    handleChildrenChangeInput(index) {
      if (this.goods[index].shop_goods.filter(item => item.goods_is_select == false).length == 0) {
        this.goods[index].shop_is_select = true
        this.goods[index].shop_allPrice = this.count(this.price(this.goods[index].shop_goods), this.goods[index].shop_Send_price)
      } else {
        this.goods[index].shop_is_select = false
        let arr = this.goods[index].shop_goods.filter(item => item.goods_is_select == true)
        this.goods[index].shop_allPrice = this.count(this.price(arr), this.goods[index].shop_Send_price)
      }
    },
    handleClickAdd(index, idx) {
      this.goods[index].shop_goods[idx].goods_num++
      if(this.goods[index].shop_is_select) this.goods[index].shop_allPrice = this.count(this.price(this.goods[index].shop_goods), this.goods[index].shop_Send_price)
      if(this.goods[index].shop_goods[idx].goods_is_select) {
        let arr = this.goods[index].shop_goods.filter(item => item.goods_is_select == true)
        if(arr.length == 1){
          this.goods[index].shop_allPrice = arr[0].presentPrice * arr[0].goods_num
          this.goods[index].shop_allPrice = this.count(this.goods[index].shop_allPrice, this.goods[index].shop_Send_price)
        }
      }
    },
    handleClickOdd(index, idx) {
      if (this.goods[index].shop_goods[idx].goods_num == 1) return
      this.goods[index].shop_goods[idx].goods_num--
      if(this.goods[index].shop_is_select) this.goods[index].shop_allPrice = this.count(this.price(this.goods[index].shop_goods), this.goods[index].shop_Send_price)
      if(this.goods[index].shop_goods[idx].goods_is_select) {
        let arr = this.goods[index].shop_goods.filter(item => item.goods_is_select == true)
        if(arr.length == 1){
          this.goods[index].shop_allPrice = arr[0].presentPrice * arr[0].goods_num
          this.goods[index].shop_allPrice = this.count(this.goods[index].shop_allPrice, this.goods[index].shop_Send_price)
        }
      }
    },
    handleClickDelete(index, idx) {
			this.goods[index].shop_goods.splice(idx, 1)
			if(this.goods[index].shop_goods.length == 0){
				this.goods.splice(index, 1)
			}
    },
    empty(){
      this.goods = []
    }
  }
}
</script>

<style scoped>
.shopingBox {
  padding: 0 0.15rem;
}
/* 购物车 */
.car {
  height: 0.3rem;
  display: flex;
  align-items: center;
}
.car img {
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.12rem;
}
.car p {
  font-size: 0.13rem;
}

.wrap {
  margin-bottom: 0.2rem;
  margin-top: 0.1rem;
}
.title {
  display: flex;
  align-items: center;
  font-size: 12px;
  text-indent: 0.15rem;
  font-size: 0.16rem;
  font-weight: 600;
  height: 0.33rem;
}
.checkbox {
  width: 0.15rem;
  height: 0.15rem;
}
.goods_record {
  display: flex;
  margin-bottom: 0.2rem;
  margin-left: 0.2rem;
}
.goods_img {
  width: 0.56rem;
  height: 0.56rem;
  margin-left: 0.1rem;
}
.goods_text {
  margin-left: 0.1rem;
}
.goods_name {
  font-size: 0.12rem;
  font-weight: 400;
}
.goods_num {
  display: flex;
  font-size: 0.15rem;
  margin-top: 0.07rem;
}
.border {
  width: 0.15rem;
  height: 0.15rem;
  border: 1px solid red;
  font-size: 0.17rem;
  text-align: center;
  color: red;
  border-radius: 50%;
  line-height: 0.12rem;
}
.goods_price {
  font-size: 0.14rem;
  margin-left: 0.9rem;
  margin-top: 0.22rem;
}
.goods_num_text {
  margin: 0 0.1rem;
  font-size: 0.15rem;
}
.goods_delete {
  width: 0.16rem;
  height: 0.16rem;
  margin-left: 0.1rem;
  margin-top: 0.25rem;
}
.goods_packing {
  padding: 0 0.35rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.12rem;
}
.discount_msg {
  width: 0.6rem;
  height: 0.17rem;
  font-size: 0.1rem;
  border: 1px solid red;
  color: red;
  text-align: center;
  line-height: 0.17rem;
  margin-right: 0.1rem;
  text-align: center;
}
.discount {
  display: flex;
  margin-top: 0.1rem;
  padding: 0 0.35rem;
}
.discount_msg span {
  font-size: 0.12rem;
}
.price_all {
	margin-right: .2rem;
  font-size: 0.15rem;
}
.price_all_text {
  color: red;
  font-size: 0.15rem;
}
.handle {
  display: flex;
  align-items: center;
  margin-left: 1.86rem;
  font-size: 0.14rem;
	justify-content: flex-end;
  line-height: 0.66rem;
}
.button {
  width: 0.6rem;
  height: 0.25rem;
  border-radius: 8px;
  background: red;
  color: white;
  font-size: 0.14rem;
  line-height: 0.25rem;
  text-align: center;
  margin-left: 0.1rem;
}
.PD{
	display: flex;
	width: 2rem;
    justify-content: flex-end;
}
</style>
