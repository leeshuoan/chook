<template>
  <div>
    <transition name="popup">
      <div v-if="showP" class="popup">
        Please check your email to reset your password!<br />
      </div>
    </transition>
    <div class="container mt-5" style="max-width: 400px">
      <form>
        <div class="mb-4">
          <label for="email" class="form-label"
            >Please enter your Email address</label
          >
          <input
            type="email"
            class="form-control border-top-0 border-start-0 border-end-0"
            id="email"
            v-model="email"
          />
        </div>
        <div class="error">
          <p v-if="error" class="text-center text-danger">{{ error }}</p>
        </div>
        <div class="text-center mb-5">
          <button
            type="submit"
            class="btn btn-dark rounded-pill px-5"
            @click="sendLink"
          >
            SEND RESET LINK
          </button>
        </div>
        <div class="text-center">
          Back to
          <RouterLink to="/login" style="color: #196e63" class="fw-bolder"
            >LOG IN</RouterLink
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      error: "",
      showP: false
    };
  },
  methods: {
    sendLink() {
      event.preventDefault()
      const auth = getAuth();
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          this.setupPopup();
        })
        .catch((error) => {
          this.error = error;
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