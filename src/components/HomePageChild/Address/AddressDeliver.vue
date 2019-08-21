<template>
	<div class="deliver">
        <div class="dopant">
            <div class="dopantLeft">
                <i>西安市</i><img src="../../../assets/imgs/HomepageChild/Adress/xian.png" alt="">
            </div>
            <div class="dopantRight">
                <input type="text" placeholder="        请输入您的收货地址">
                <img src="../../../assets/imgs/HomepageChild/Adress/search.png" alt="">
            </div>   
        </div>
    </div>
</template>

<script>
export default {
  name: "AddressDeliver"
};
</script>

<style scoped>
.deliver{
	width: 100%;
	background-color:#ffffff;
	margin: .2rem auto;
	}
.dopant{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}

.dopantLeft{
    width: 1.4rem;
    height: .365rem;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    border-top-left-radius: 13px;
    border-bottom-left-radius: 13px;
}
.dopantLeft i{
    font-style: normal;
    font-size: .13rem;
    text-indent: .1rem;
}
.dopantLeft :nth-child(2){
    width: .18rem;
    height: .18rem;
    margin-left: 5px;
}

/* .dopantLeft :nth-child(4){
    width: .18rem;
    height: .18rem;
    margin-left: 5px;
    margin-right: 5px;
} */
.dopantRight{
    width: 2.15rem;
    height: .35rem;
    position: relative;
}
.dopantRight input{
    width: 2.15rem;
    height: .35rem;
    background-color: #f5f5f5;
    border-top-right-radius: 13px;
    border-bottom-right-radius: 13px;
    border-left: none;
    border: 1px solid #f5f5f5;
    display: block;

}
.dopantRight img{
    width: .18rem;
    height: .18rem;
    position: absolute;
    top: .1rem;
    left: 5px;
}
</style>