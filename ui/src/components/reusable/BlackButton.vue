<template>
  <div style="display:flex">
    <button
      type="button"
      style="width: 250px; background-color: black"
      class="mt-1 btn text-white black-button"
    >
    
      {{label}}
    </button>
  </div>
</template>
<script>
export default {
  props: ["label"],
  computed: {
    cssProps() {
      return "background-color: " + this.color;
    },
  },
};
</script>
<style scoped>
.black-button{
    font-size:1.5em;
    font-weight:bolder;
    border-radius:20px;
    padding:10px;
    margin:auto;
}
</style>


