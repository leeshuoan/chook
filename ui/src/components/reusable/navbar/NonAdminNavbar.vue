<template>
    <div id="mySidenav" class="sidenav" style="z-index:2;">
      <a
        style="positive: absolute"
        href="javascript:void(0)"
        class="closebtn"
        @click="closeNav()"
        ><font-awesome-icon :icon="['fa', 'bars']" />
      </a>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/appointment">My Appointments</RouterLink>
      <RouterLink to="/queue/join">My Queue</RouterLink>
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