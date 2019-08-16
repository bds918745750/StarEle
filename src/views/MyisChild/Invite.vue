<template >
	<div class="Options-body">
      <ele-Invite-Top5></ele-Invite-Top5>
	  <ele-Invite-InviteName></ele-Invite-InviteName>
	  <ele-Invite-InviteBanner></ele-Invite-InviteBanner>
	  <ele-Invite-InviteBtn></ele-Invite-InviteBtn>
	</div>
</template>

<script>
	import Swiper from "swiper"; //模块化引入
	
	import Top5 from "../../components/MyisChild/Invite/Top5.vue";
	import InviteName from "../../components/MyisChild/Invite/InviteName.vue";
	import InviteBanner from "../../components/MyisChild/Invite/InviteBanner.vue";
	import InviteBtn from "../../components/MyisChild/Invite/InviteBtn.vue";

	export default {
	  name:"Invite",
	  components: {
		"ele-Invite-Top5":Top5,
		"ele-Invite-InviteName":InviteName,
		"ele-Invite-InviteBanner":InviteBanner,
		"ele-Invite-InviteBtn":InviteBtn,
	},
	mounted(){
	var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });		
	}
}


</script>

<style scoped="scoped">
	.Options-body{
		background: linear-gradient(to bottom,#fa6c5e 10%,#f0a059 100%,#fa6c5e 10%);;
		width: 100%;
		height: 100%;
	}
</style>
