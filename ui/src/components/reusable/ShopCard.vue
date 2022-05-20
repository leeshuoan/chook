<template>
  <div class="col">
    <div class="card">
      <RouterLink :to="{ name: 'shopdetails', params: { shopname:shopName, shopid:shopid}}" >
        <img
          src="@/assets/images/DeepCutsSG.jpg"
          class="card-img-top w-100"
          alt="..."
        />
      </RouterLink>
      <div class="card-body">
        <h5 class="card-title">{{ shopName }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["shopName", "shopid"]
}
</script>

<style scoped>
@import "@/assets/landingPage.css";
</style>