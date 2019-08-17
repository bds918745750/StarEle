<template>
	<div class="Gps">
        <div class="gpsTop">
            <img src="../../../assets/imgs/HomepageChild/Adress/dingwei.png" alt=""><span>当前定位地址</span>         
        </div>

        <div class="gpsBottom">
            <p>丈八北路永和-璞玉</p>
            <div class="gr">
                <img src="../../../assets/imgs/HomepageChild/Adress/feiji.png" alt=""><span>重新定位</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: "AddressGps"
};
</script>

<style scoped>
	.Gps{
    width: 100%;
    background-color:#ffffff;
 
}
.gpsTop{
    width: 100%;
    margin-top: .2rem;
    margin-bottom: .2rem;
    display: flex;
    margin-left: .31rem;
}
.gpsTop img{
    width: .18rem;
    height: .18rem; 
    margin-right: 10px;
}
.gpsTop span{
    font-size: .13rem;
    color: #a8a8a8;
}
.gpsBottom{
    display: flex;
    justify-content: space-between;

}
.gpsBottom p{
    font-size: .15rem;
    color: #4d4d4d;
    margin-left: .58rem;
}
.gr{
    display: flex;
    margin-right: .2rem;
}
.gr img{
    width: .18rem;
    height: .18rem;
    margin-right: 10px;
}
.gr span{
    color:#dc3538;
    font-size: .15rem;
}
</style>