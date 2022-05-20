<template>
  <div>
    <div
      class="container px-2 mt-5 w-100"
      style="z-index: 2; left: 0; right: 0; color: white !important"
      ref="navbar"
    >
      <span
        style="font-size: 30px; cursor: pointer"
        @click="openNav()"
        id="navbarIcon"
        ><font-awesome-icon :icon="['fa', 'bars']" />
      </span>

      <button
        v-if="LoggedIn"
        class="btn"
        style="position: absolute; right: 0%; color: white !important"
        ref="navbarBtn"
        @click="logout()"
      >
        Sign Out &nbsp;
        <font-awesome-icon
          :icon="['fa', 'arrow-right-from-bracket']"
          style="font-size: larger"
        />
      </button>
      <button
        v-else
        class="btn"
        style="position: absolute; right: 0%; color: white !important"
        ref="navbarBtn"
        @click="login()"
      >
        Log In &nbsp;
        <font-awesome-icon
          :icon="['fa', 'arrow-right-from-bracket']"
          style="font-size: larger"
        />
      </button>
    </div>
  </div>
</template>
<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  data() {
    return {
      LoggedIn: false,
    };
  },
  computed: {
    cssProps() {},
  },
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
    login() {
      this.$router.push("/login");
      return;
    },
    logout() {
      console.log("logout");
      var logout = confirm("Are you sure to logout?");
      if (logout) {
        var auth = getAuth();
        signOut(auth).then(() => {
          location.reload();
          this.$router.push("/");
          alert("Logout Successfully");
        });
      }
    },
    // checkNav(){
    //   const el = this.$refs.navbar;
    //   const buttonEl = this.$refs.navbarBtn;
    //   const rect = el.getBoundingClientRect();
    //   let top = rect.top + window.scrollY
    //   if(top < 238){
    //     el.style.color = "white";
    //     buttonEl.style.color = "white";
    //   }
    //   else{
    //     el.style.color = "black";
    //     buttonEl.style.color = "black";
    //   }
    // },
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.LoggedIn = true;
      } else {
        this.LoggedIn = false;
      }
    });
  },
};
</script>
<style>
@import "@/assets/index.css";
</style>
