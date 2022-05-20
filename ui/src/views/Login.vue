<template>
  <div>
    <transition name="popup">
      <div v-if="showP" class="popup">
        Please verify your email to login!<br />
      </div>
    </transition>
    <div class="container mt-5" style="max-width: 400px">
      <div class="mb-4">
        <label for="email" class="form-label">Email</label>
        <input
          type="username"
          class="form-control border-top-0 border-start-0 border-end-0"
          id="email"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control border-top-0 border-start-0 border-end-0"
          id="password"
          aria-describedby="forgetpw"
          v-model="password"
        />
        <div id="forgetpw" class="form-text">
          <RouterLink
            to="/forgetpassword"
            style="color: #818181"
            class="text-decoration-none"
            >Forget Password?</RouterLink
          >
        </div>
      </div>
      <div class="error">
        <p v-if="error" class="text-center text-danger">{{ error }}</p>
      </div>
      <div class="text-center mt-2 mb-2">
        <button class="btn btn-dark rounded-pill px-5" @click="logIn()">
          LOG IN
        </button>
      </div>
      <div class="text-center">
        New user?
        <RouterLink to="/signup" style="color: #196e63" class="fw-bolder"
          >SIGN UP</RouterLink
        >
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      showP: false,
    };
  },
  methods: {
    async logIn() {
      event.preventDefault();

      this.error = "";
      const auth = getAuth();

      if (this.email == "") {
        this.error = "Please enter your email";
        return;
      }
      if (this.password == "") {
        this.error = "Please enter your password";
        return;
      }

      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          const user = auth.currentUser;
          const emailVerified = user.emailVerified;
          if (!emailVerified) {
            this.setupPopup();
            signOut(auth).then(() => {});
          } else {
            user.getIdTokenResult().then((idTokenResult) => {
              console.log(idTokenResult);
              if (idTokenResult.claims.role === "admin") {
                this.$router.push("/admin");
              } else {
                this.$router.push("/");
              }
            });
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.code == "auth/invalid-email") {
            this.error = "The email you entered is invalid";
          } else if (error.code == "auth/user-not-found") {
            this.error = "User not found with the given email address";
          } else if (error.code == "auth/wrong-password") {
            this.error = "Wrong Password";
          } else if (error.code == "auth/too-many-requests") {
            this.error =
              "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later";
          } else {
            this.error = error.message;
          }
        });
    },
    setupPopup() {
      this.showP = true;
      setTimeout(() => (this.showP = false), 3000);
    },
  },
};
</script>

<style scoped>
.popup {
  color: white;
  background-color: #d9534f;
  padding: 10px;
  text-align: center;
  position: absolute;
  width: 30%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  left: 35%;
  z-index: 1;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.popup-enter-active,
.popup-leave-active {
  transition: 0.3s ease all;
}
</style>