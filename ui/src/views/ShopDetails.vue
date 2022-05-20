<script setup>
import LandingNavbar from "@/components/reusable/LandingNavbar.vue";
</script>
<template>
  <div>
    <div class="container px-5">
      <LandingNavbar />
    </div>

    <div class="mt-4">
      <h5 class="text-center shopname">{{ shopname }}</h5>
      <div style="width: 100%; height: 250px">
        <img
          src="/src/assets/images/DeepCutsSG.jpg"
          class="w-100 h-100"
          style="object-fit: cover"
        />
      </div>
    </div>
    <span
      class="position-fixed border py-2 px-3 telebotlink mt-3"
      style="left: 0%"
    >
      Use our
      <a href="https://t.me/ESDg3t1_Queue_bot" id="telebotlink">Telegram Bot</a>
      to check queue & make appointments!</span
    >

    <div class="container w-75 mt-5">
      <div class="container w-100 position-relative mb-2">
        <br />
        <button
          class="btn btn-sm rounded-pill refresh position-absolute"
          style="right: 0; z-index: 99"
        >
          <!-- <small>Refresh</small> &nbsp; -->
          <font-awesome-icon :icon="['fa', 'arrows-rotate']" />
        </button>
      </div>
      <div class="border text-center qinfo pt-3">
        <div class="row">
          <div class="col-sm-4">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th>Serving</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ qs }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-sm-4">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th>Walk-in Queue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-sm-4">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th>Avg Serving Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 mins</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button
          class="btn btn-dark rounded-pill px-4 mt-3 mx-auto"
          style="font-size: smaller"
        >
          JOIN QUEUE
        </button>
      </div>

      <div class="my-5">
        <h5 class="text-center">Book an Appointment</h5>
        <div class="container w-sm-50 mt-4" style="max-width: max-content">
          <div
            v-for="i in service"
            :key="i.service_id"
            class="bg-light p-3 services mb-3 row"
          >
            <h6 class="col-6 my-auto">
              {{ i.name }} - {{ i.duration + " mins" }}
            </h6>
            <span class="col text-end my-auto price">${{ i.price }}</span>
            <button
              class="btn book col-sm-3 mx-auto"
              style="max-width: 100px"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              @click="bookfunc($event, i.service_id, i.duration)"
            >
              BOOK
            </button>
          </div>
          <!-- <div class="bg-light p-3 services mb-3 row">
            <h6 class="col-6 my-auto">Hair Rebonding/Perming - 2 hours</h6>
            <span class="col text-end my-auto price">S$159</span>
            <button
              class="btn book col-sm-3 mx-auto"
              style="max-width: 100px"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              @click="bookfunc($event)"
            >
              BOOK
            </button>
          </div>
          <div class="bg-light p-3 services mb-3 row">
            <h6 class="col-6 my-auto">
              Hair Coloring without bleaching - 2 hours
            </h6>
            <span class="col text-end my-auto price">S$89</span>
            <button
              class="btn book col-sm-3 mx-auto"
              style="max-width: 100px"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              @click="bookfunc($event)"
            >
              BOOK
            </button>
          </div>
          <div class="bg-light p-3 services mb-3 row">
            <h6 class="col-6 my-auto">
              Hair Coloring with bleaching - 4 hours
            </h6>
            <span class="col text-end my-auto price">S$300</span>
            <button
              class="btn book col-sm-3 mx-auto"
              style="max-width: 100px"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              @click="bookfunc($event)"
            >
              BOOK
            </button>
          </div>
          <div class="bg-light p-3 services mb-3 row">
            <h6 class="col-6 my-auto">Wash & Treatment - 1 hour</h6>
            <span class="col text-end my-auto price">S$40</span>
            <button
              class="btn book col-sm-3 mx-auto"
              style="max-width: 100px"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              @click="bookfunc($event)"
            >
              BOOK
            </button>
          </div> -->
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Title</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body text-center">
                  <h6>Choose a timeslot</h6>
                  <div class="container mt-4">
                    <div class="row">
                      <div class="col-sm mb-3">
                        Date &nbsp;
                        <select
                          v-model="date"
                          name="date"
                          id="date"
                          class="rounded-pill bg-light p-2 btn"
                        >
                          <option value="07/04/22">07/04/22</option>
                          <option value="08/04/22">08/04/22</option>
                          <option value="09/04/22">09/04/22</option>
                          <option value="10/04/22">10/04/22</option>
                          <option value="11/04/22">11/04/22</option>
                          <option value="12/04/22">12/04/22</option>
                          <option value="13/04/22">13/04/22</option>
                          <option value="14/04/22">14/04/22</option>
                          <option value="15/04/22">15/04/22</option>
                          <option value="16/04/22">16/04/22</option>
                        </select>
                      </div>
                      <div class="col-sm mb-3">
                        Time &nbsp;
                        <select
                          v-model="time"
                          name="date"
                          id="date"
                          class="rounded-pill bg-light p-2 btn"
                        >
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="10:30 AM">10:30 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="11:30 AM">11:30 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="12:30 PM">12:30 PM</option>
                          <option value="01:00 PM">01:00 PM</option>
                          <option value="01:30 PM">01:30 PM</option>
                          <option value="02:00 PM">02:00 PM</option>
                          <option value="02:30 PM">02:30 PM</option>
                          <option value="03:00 PM">03:00 PM</option>
                          <option value="03:30 PM">03:30 PM</option>
                          <option value="04:00 PM">04:00 PM</option>
                          <option value="04:30 PM">04:30 PM</option>
                          <option value="05:00 PM">05:00 PM</option>
                          <option value="05:30 PM">05:30 PM</option>
                          <option value="06:00 PM">06:00 PM</option>
                          <option value="06:30 PM">06:30 PM</option>
                          <option value="07:00 PM">07:00 PM</option>
                          <option value="07:30 PM">07:30 PM</option>
                          <option value="08:00 PM">08:00 PM</option>
                          <option value="08:30 PM">08:30 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer" data-bs-dismiss="modal">
                  <button
                    type="button"
                    class="btn mx-auto book px-4 rounded-pill"
                    @click="book(selectedid, date, time)"
                  >
                    CONFIRM
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- <div
            class="modal fade"
            id="confirmation"
            aria-hidden="true"
            aria-labelledby="confirmation"
            tabindex="-1"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="confirmationlabel">
                    Booking Successful
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body my-4 mx-auto">
                  The shop will be processing your booking shortly.
                </div>
                <div class="modal-footer">
                  <button
                    @click="redirect()"
                    type="button"
                    class="btn btn-primary mx-auto book px-4 rounded-pill"
                  >
                    VIEW APPOINTMENTS
                  </button>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default {
  data() {
    return {
      shopname: "",
      shopid: "",
      selectedid: "",
      selectedDuration: "",
      service: [],
      date: "02/03/22",
      time: "09:00 AM",
      qs: 0,
      phoneNum: null,
    };
  },
  mounted() {
    const auth = getAuth();
    const db = getFirestore();

    this.getShop();
    this.getQueue();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        getDocs(q).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            let phoneNum = doc.data()["phoneNumber"];
            this.phoneNum = phoneNum;
          });
        });
      } else {
      }
    });
  },
  methods: {
    bookfunc(event, id, duration) {
      var title = event.target.parentElement.children[0].innerText;
      document.getElementById("staticBackdropLabel").innerText = title;
      this.selectedid = id;
      this.selectedDuration = duration;
    },
    book(id, date, time) {
      //Format eg : 02/03/22 to 2022-03-02
      var date_formatted =
        "20" + date.slice(6) + "-" + date.slice(3, 5) + "-" + date.slice(0, 2);
      // Format eg: 09:00 AM to 09:00:00
      var h;
      if (time.slice(6) == "AM") {
        h = time.slice(0, 2);
      } 
      else if (parseInt(time.slice(0, 2)) == 12){
        h = time.slice(0, 2);
      }
      else {
        h = (parseInt(time.slice(0, 2)) + 12).toString();
      }

      var time_formatted = h + ":" + time.slice(3, 5) + ":00";
      // Format same as database
      var date_time_formatted = date_formatted + " " + time_formatted;
      console.log(date_time_formatted);
      this.process_book(date_time_formatted);
    },
    async process_book(date) {
      const auth = getAuth();
      const token = auth.currentUser.accessToken;
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Allow_headers: ["X-Custom-Auth", "Content-Type", "Authorization"],
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          Authorization: `Bearer ${token}`,
        },
      };
      var URL = "http://127.0.0.1:5100/book_appointment/" + this.phoneNum;
      await this.axios
        .post(
          URL,
          {
            date_time: date,
            shop_shop_id: this.shopid,
            service_service_id: this.selectedid,
            duration: this.selectedDuration,
          },
          config
        )

        .then((response) => {
          console.log(response.data);
          alert("Your booking has been confirmed on " + date);
        })
        .catch((error) => {
          alert(
            "You booking has failed due to a schedule conflict! Please book for another timeslot!"
          );
        });
    },

    redirect() {
      // Put the full page URL including the protocol http(s) below
      window.location.replace("http://localhost:3000/appointment");
    },

    getShop() {
      this.shopid = this.$route.params.shopid;
      this.shopname = this.$route.params.shopname;

      var URL = "http://127.0.0.1:5003/services/" + this.shopid;
      this.display_detail(URL);
    },
    async display_detail(url) {
      this.apts = [];
      await this.axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }}).then((response) => {
        console.log(response.data.data);
        this.service = response.data.data;
      });
    },

    async getQueue() {
      var URL = "http://127.0.0.1:5002/queue/1";
      this.queue = [];
      await this.axios.get(URL, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }}).then((response) => {
        var res = response.data.data;
        this.qs = res.length;
      });
    },
  },
};
</script>

<style>
</style>