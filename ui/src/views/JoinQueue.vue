<script setup>
import BlackButton from "@/components/reusable/BlackButton.vue";
</script>
<template>
  <div class="section">
    <h3 class="text-center">Choose a shop</h3>
    <select class="form-select shop-select" aria-label="Default select example" v-model="shop_id">
      <option v-for="shop in shops" :value="shop.shop_id" :key="shop.shop_id">{{shop.name}}</option>
    </select>
    <RouterLink :to="'/queue/'+shop_id">
    <BlackButton label="Select a shop" />
    </RouterLink>
  </div>
</template>
<script></script>
<style scoped>
@import "@/assets/main.css";
.section {
  padding-top: 50px;
  padding-bottom: 50px;
}
.shop-select {
  max-width: 300px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      joinView: false,
      phone_number: null,
      shops :[],
      shop_id:null
    };
  },
  mounted(){
      this.getShops();
  },
  methods: {
    async getShops() {
      var URL = "http://127.0.0.1:5005/allShops";
      this.shops = [];
      await this.axios.get(URL).then((response) => {
        var res = response.data;
        this.shops = res;
      });
    },
  },
};
</script>
