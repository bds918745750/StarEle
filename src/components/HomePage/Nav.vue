<template>
  <nav>
    <div class="manu" v-for="(menu,id) in data" :key="id" @click="Flag(id)">
      <a >
        <img :src="'../../assets/imgs/Homepage/nav-icon/'+menu.menuPic" />
        <span>{{menu.menuName}}</span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: ["data"], //菜单
  data() {
  },
  methods: {
    Flag: function(tat) {
      console.log(tat);
      if (tat == 9) {
        this.$router.push("/Classify");
      } else if (tat == 0) {
        this.$router.push("/Login");
      } else {
        this.$router.push("/ShopStory");
      }
    }
  }
};
</script>

<style scoped>
.manu {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>