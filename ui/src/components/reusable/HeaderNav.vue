<script setup>
import MainNavBar from "@/components/reusable/navbar/MainNavBar.vue";
import NonAdminNavbar from "@/components/reusable/navbar/NonAdminNavbar.vue";
import AdminNavbar from "@/components/reusable/navbar/AdminNavbar.vue";
</script>
<template>
  <div class="container-fluid banner">
    <br />
    <MainNavBar />
    <NonAdminNavbar v-if="admin == false" />
    <AdminNavbar v-else />
    <div class="jumbotron text-center pt-5 pb-3">
      <div class="mt-5">
        <h1 class="mb-0" style="font-size: 45px">Chook</h1>
        <p style="font-size: 25px; font-weight: lighter">
          Check real time queue & book your next visit anytime, anywhere
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "@/assets/main.css";
</style>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    return {
      admin: false,
    };
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user.getIdTokenResult().then((idTokenResult) => {
          console.log(idTokenResult);
          if (idTokenResult.claims.role === "admin") {
            this.admin = true;
          } else {
            this.admin = false;
          }
        });
      }
    });
    document.addEventListener("click", this.navbarListener);
  },
  methods: {
    navbarListener() {
      if (
        document.getElementById("mySidenav").style.width == "250px" &&
        !document.getElementById("mySidenav").contains(event.target) &&
        !document.getElementById("navbarIcon").contains(event.target)
      ) {
        document.getElementById("mySidenav").style.width = "0px";
      }
    },
  },
};
</script>
