<template>
  <div id="mySidenav" class="sidenav" style="z-index: 2">
    <a
      style="positive: absolute"
      href="javascript:void(0)"
      class="closebtn"
      @click="closeNav()"
      ><font-awesome-icon :icon="['fa', 'bars']" />
    </a>
    <RouterLink to="/admin">Home</RouterLink>
    <RouterLink to="/admin/appointment">Upcoming Appointments</RouterLink>
    <RouterLink to="/admin/shop">Manage Shop</RouterLink>
  </div>
</template>
<script>
export default {
  computed: {
    cssProps() {},
  },
  methods: {
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
  },
};
</script>
<style>
@import "@/assets/index.css";
</style>