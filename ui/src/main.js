import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
// fontawesome icons 
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate, faCheck, faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "redacted",
  authDomain: "redacted",
  projectId: "redacted",
  storageBucket: "redacted",
  messagingSenderId: "redacted",
  appId: "redacted"
};

initializeApp(firebaseConfig);

library.add(faMagnifyingGlass);
library.add(faSort);
library.add(faFilter);
library.add(faBars);
library.add(faArrowRightFromBracket);
library.add(faArrowsRotate);
library.add(faArrowsRotate, faCheck, faBan);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon)

// vuex
const store = createStore({
    state () {
      return {
        userToken:"test"
      }
    },
    mutations: {
    //   increment (state) {
    //     state.count++
    //   }
    }
  })

app.use(VueAxios, axios) // 👈
app.use(router)
app.use(store)
app.mount('#app')


