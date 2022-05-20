<template>
  <div>
    <transition name="popup">
      <div v-if="showP" class="popup">
        Verification email has been sent to your inbox.<br />
        Please verify to log in!
      </div>
    </transition>
    <div class="container mt-5" style="max-width: 400px">
      <form>
        <div class="mb-4">
          <label for="username" class="form-label">Username</label>
          <input
            type="text"
            class="form-control border-top-0 border-start-0 border-end-0"
            id="username"
            v-model="username"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control border-top-0 border-start-0 border-end-0"
            id="email"
            v-model="email"
          />
        </div>
        <div class="mb-4">
          <label for="phoneNum" class="form-label">Phone Number</label>
          <input
            type="text"
            class="form-control border-top-0 border-start-0 border-end-0"
            id="phoneNum"
            v-model="phoneNum"
          />
        </div>
        <div class="mb-4">
          <label for="pw" class="form-label">Password</label>
          <input
            type="password"
            class="form-control border-top-0 border-start-0 border-end-0"
            id="pw"
            v-model="password"
          />
        </div>
        <div class="mb-4">
          <label for="cfmpw" class="form-label">Confirm Password</label>
          <input
            type="password"
            class="form-control border-top-0 border-start-0 border-end-0"
            id="cfmpw"
            v-model="confirmPassword"
          />
        </div>
        <div class="error">
          <p v-if="error" class="text-center text-danger">{{ error }}</p>
        </div>
        <div class="text-center mt-2 mb-5">
          <button class="btn btn-dark rounded-pill px-5" @click="signUp()">
            SIGN UP
          </button>
        </div>
        <div class="text-center">
          Have an account?
          <RouterLink to="/login" style="color: #196e63" class="fw-bolder"
            >LOG IN</RouterLink
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      phoneNum: "",
      email: "",
      error: "",
      showP: false,
    };
  },
  methods: {
    signUp() {
      event.preventDefault();
      const auth = getAuth();
      const db = getFirestore();

      this.error = "";
      if (this.username == "") {
        this.error = "Please enter a username";
        return;
      }
      if (this.password == this.confirmPassword) {
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            console.log(this.phoneNum);
            updateProfile(auth.currentUser, {
              displayName: this.username,
            });
            addDoc(collection(db, "users"), {
              uid: user.uid,
              phoneNumber: this.phoneNum,
            })
            sendEmailVerification(auth.currentUser).then(() => {
              this.setupPopup();
            });
            signOut(auth).then(() => {});
          })
          .catch((error) => {
            console.log(error);
            if (error.code == "auth/weak-password") {
              this.error = "The password you entered is too weak";
            } else if (error.code == "auth/email-already-in-use") {
              this.error = "The email you entered is already in use";
            } else if (error.code == "auth/invalid-email") {
              this.error = "The email you entered is invalid";
            } else {
              this.error = error.code;
            }
          });
      } else {
        this.error = "Your passwords do not match!";
      }
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
  background-color: #5cb85c;
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