<template>
    <a href="#">
        <div class="shop-bottom  minshop">
            <img src="../../../assets/imgs/HomepageChild/Finess/img/top.jpg" alt="">
            <ul class="shop-list">
                <li class="li-one">轻食Π(高新店)</li>
                <li><em>5分</em><span>起送￥15</span><span class="ts">配送￥2</span><span>53分钟</span><span>月售</span></li>
            </ul>
        </div>
    </a>
</template>

<script>

export default {
  name: "ThreeBox",
  components: {
   
  }
};
</script>

<style scoped>
.BigBox{
    width: 100%;
    background-color: #c1111e;
}
.shop{
    width: 93%;
    margin: 14px auto;
    background-color: #ffffff;
    border-radius: 8px;
}
.shop-top{
    margin: 10px;
}
.shop-img{
    display: flex;
    background-color: #ffffff;
    position: relative;
}
.shop-img img{
    width: 1.1rem;
    height: 1.1rem;
    margin: 10px 0;
    border-radius: 10px;
}
.shop-img span{
    font-size: .16rem;
    color: #333333;
    top: .14rem;
    left: 1.2rem;
    position: absolute;
    font-weight: 600;
}
.shop-img h4{
    font-size: .16rem;
    color: #dd3538;
    position: absolute;
    top: .77rem;
    left: 1.2rem;
}
.shop-img p{
    color: #ffffff;
    font-size: .15rem;
    width: .74rem;
    height: .32rem;
    border: 1px solid #dd3538;
    background-color: #dd3538;
    border-radius: 4px;
    text-align: center;
    line-height: .32rem;
    position: absolute;
    top: .74rem;
    right: .05rem;
}

.shop-bottom{
    width: 93%;
    background-color: #fafafa;
    margin: 0 auto;
    padding: 10px 5px;
    display: flex;
}
.shop-bottom img{
    width: .5rem;
    height: .5rem;
    border-radius: 7px;
}
.shop-bottom ul{
    font-size: .11rem;
    color: #393939;
    position: relative;
    margin: 0 10px;
    line-height: .17rem;
}
.shop-bottom>ul>li>img{
    width: .15rem;
    height: .15rem;
    position: absolute;
    top: .34rem;
    right: -.3rem;
}
.shop-list em{
    font-style: normal;
    color: #dd3538;
    border-right: 1px solid #999999;
    padding-right: 5px;
}
.shop-list span{
    color: #999999;
    padding: 0 5px;
}
.shop-list i{
    font-style: normal;
    border: 1px solid #999999;
    height: .15rem;
    text-align: center;
    margin-left: 3px;
    margin-right: 3px;
}
.shop-list .ts{
    border-left: 1px solid #999999;
    border-right: 1px solid #999999;
}
/* 小商铺 */
.minshop{
    width: 90%;
    border-radius: 10px;
    margin: 10px auto;
}
.minshop img{
    width: .84rem;
    height: .84rem;
}
.minshop .shop-list{
    padding-top: .15rem;
}
.li-one{
    font-size: .15rem;
    font-weight: 600;
    line-height: .3rem;
}
</style>