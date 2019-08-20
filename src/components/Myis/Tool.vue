<template>
    <div class="tool">
			<div class="tool-1">
				<p class="card">常用工具</p>
			</div>
			<div class="module-1">
				<div class="module-line">
					<div class="module-1-1">
						<router-link to="/Location">
						<img src="../../assets/imgs/Myis/t1.png" alt="">
						<p class="collect">我的地址</p>
						</router-link>
					</div>
					<div class="module-1-1">
						<router-link to="/Evaluate">	
						<img src="../../assets/imgs/Myis/t2.png" alt="">
						<p class="collect">我的评价</p>
						</router-link>	
					</div>
					<div class="module-1-1">
						<router-link to="/Service">							
						<img src="../../assets/imgs/Myis/t3.png" alt="">
						<p class="collect">我的客服</p>
						</router-link>
					</div>
				</div>
			</div>
		</div>
</template>
<script>
export default {
    name:"Tool",
}
</script>



<style scoped>

</style>
    
