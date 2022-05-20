<template>
  <div class="card queuebox-card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title" :style="cssProps">
        <div>{{ title }}</div>
      </h5>
      <p class="card-text">
        <span class="number-text">
          {{ number }}
        </span>
        <br />
        {{ label }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "number", "color", "label"],
  computed: {
    cssProps() {
      return "background-color: " + this.color;
    },
  },
};
</script>
<style scoped>
.queuebox-card {
  background-color: #f3f3f3;
  /* height:250px; */
  border-radius: 20px;
  /* margin: auto; */
  margin:10px;
}
.card-body {
  padding: 0;
  text-align: center;
}
.card-title {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 25px;
  color: white;
  font-weight: bold;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin: 0;
}
.card-text {
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 25px;
  font-weight: bolder;
}
.number-text{
    font-size:1.8em;
}
@media only screen and (max-width: 600px) {
  .queuebox-card{
    margin-left:auto;
    margin-right:auto;
  }
}
</style>
