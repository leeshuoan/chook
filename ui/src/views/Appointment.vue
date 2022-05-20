<script setup>
  import AptDetails from "@/components/reusable/appointment/AptDetails.vue";
</script>
<template>
  <div class="container text-center mt-5">
    <h4 class="mb-5">My Appointments</h4>
    <div class="w-75" style="max-height overflow-y: scroll; display: inline-block">
      <table class="table table-borderless mx-auto">
        <tbody>
          <AptDetails v-for="apt in apts" :key="apt.apt_id" :appointment="apt" @EditApt="EditApt(apt)"
            @DeleteApt="DeleteApt(apt)" />
        </tbody>
      </table>
      <!-- edit appointment -->
      <div class="modal fade" id="changeappt" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="changeapptlabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="changeapptlabel">
                Change Appointment
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- edit apt -->
            <div class="modal-body text-center">
              <h6>Choose a timeslot</h6>
              <div class="container mt-4">
                <div class="row">
                  <div class="col-sm mb-3">
                    Date &nbsp;
                    <select name="date" id="date" class="rounded-pill bg-light p-2 btn" v-model=aptToEdit.date>
                      <option :value="aptToEdit.date">
                        {{ aptToEdit.date }}
                      </option>
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
                    <select name="date" id="date" class="rounded-pill bg-light p-2 btn" v-model=aptToEdit.time>
                      <option :value="aptToEdit.time">
                        {{ aptToEdit.time }}
                      </option>
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
            <div class="modal-footer">
              <button @click="confirmEdit(aptToEdit)" type="button" class="btn mx-auto rebook px-4 rounded-pill"
                data-bs-target="#confirmation" data-bs-dismiss="modal">
                CONFIRM
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="confirmation" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="confirmationlabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="confirmationlabel">
                Appointment Changed Successfully
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center my-5">
              <h6>Your appointment has been changed. The shop will be processing
                your booking shortly.</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="cancelappt" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="cancelapptlabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="cancelapptlabel">
                Cancel Appointment
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center my-5">
              <h6>Are you sure you want to cancel appointment for
                <span id="service_name">{{ aptToDelete.service_name }}</span> at
                <span id="shopname">{{ aptToDelete.shop_name }}</span>?</h6>
            </div>
            <div class="modal-footer" data-bs-dismiss="modal">
              <button data-bs-dismiss="#cancelappt" @click="confirmDelete(aptToDelete.apt_id)" type="button"
                class="btn mx-auto px-4 rounded-pill">
                Yes
              </button>
              <button type="button" class="btn mx-auto px-4 rounded-pill" data-bs-dismiss="#cancelappt">
                No
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="cancelcfm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="cancellabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="cancellabel">
                Appointment Cancelled Successfully
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center my-5">
              <h6>Your appointment is cancelled.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    getAuth,
    onAuthStateChanged
  } from "firebase/auth";
  import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
  } from "firebase/firestore";

  export default {
    props: [],
    computed: {},
    data() {
      return {
        apts: [],
        aptToEdit: {
          apt_id: 1,
          date_time: "12/2/22, 12:00PM",
          date:"",
          time:"",
          service_name: "Hair Coloring with bleaching",
          duration: 4,
          status: "Booking processing",
          shop_name: "Red Head Salon",
        },
        aptToDelete: {
          apt_id: 1,
          date_time: "12/2/22, 12:00PM",
          service_name: "Hair Coloring with bleaching",
          duration: 4,
          status: "Booking processing",
          shop_name: "Red Head Salon",
        },
        phoneNum: "",
      };
    },
    mounted() {
      const auth = getAuth();
      const db = getFirestore();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          const q = query(collection(db, "users"), where("uid", "==", user.uid));
          getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(doc.id, " => ", doc.data());
              let phoneNum = doc.data()["phoneNumber"];
              this.phoneNum = phoneNum;
              this.get_appt(this.phoneNum);
            });
          });
        } else {}
      });

      // this.get_appt(this.phoneNum);
    },
    methods: {
      EditApt(apt) {
        // console.log(apt);
        // need to do some date formating
        this.aptToEdit = apt;
      },

      async confirmEdit(apt) {
        const auth = getAuth();
        const token = auth.currentUser.accessToken;
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Allow_headers': ['X-Custom-Auth', 'Content-Type', 'Authorization'],
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Authorization': "Bearer " +token,
          }
        };
        let cleanDate = "20"+apt.date.split("/").reverse().join("-");
        let cleanTime= ""
        if (apt.time.slice(-2) == "PM"){
          if (apt.time.slice(0,2) == "12"){
            cleanTime = apt.time.slice(0,5) +":00";
          }
          else{
            cleanTime = 12+ parseInt(apt.time.slice(0,2)) + apt.time.slice(2,5) +":00";
          }
        }
        else{
          cleanTime = apt.time.slice(0,5) +":00";
        }

        const bodyParams = {
          "date_time": cleanDate +   " "   + cleanTime,
          "duration": apt.duration,
          "service_service_id" : apt.service_service_id,
          "user_phone_number" : apt.user_phone_number        
        };
        console.log(bodyParams)
        const apiEndPt = "http://localhost:5000/allAppointments/" + apt.apt_id;
        console.log(apiEndPt)
        await this.axios
          .put(apiEndPt, bodyParams, config)
          .then((response) => {
            // console.log(response);
            alert("Your booking has been modified successfully to " + apt.date_time);
          })
          .catch(error => {
            // console.log(error);
            alert("This timeslot clashes with another booking, please select another timeslot!")
          });
      },

      DeleteApt(apt) {
        this.aptToDelete = apt;
        //  this.get_appt(this.phoneNum);
        // need to do some date formating
        // this.aptToEdit = apt;
      },
      confirmDelete(apptID) {
        var URL = "http://127.0.0.1:5000/allAppointments/" + apptID;
        this.axios.delete(URL, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }});
        //replace with number
        location.reload();
        this.get_appt(this.phoneNum);
      },

      async get_appt(number) {
        this.apts = [];
        const auth = getAuth();
        const token = auth.currentUser.accessToken;
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Allow_headers': ['X-Custom-Auth', 'Content-Type', 'Authorization'],
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Authorization': `Bearer ${token}`
          }
        };
        await this.axios
          .get("http://127.0.0.1:5100/view_appointment/" + number, config)
          .then((response) => {
            // console.log(response);
            this.apts = [];
            var res = response.data.data.list_of_appt.data;
            for (var j of res) {
              // console.log(j);
              if (j.vendor_confirm == 0) {
                j["status"] = "Booking Processing";
              } else if (j.vendor_confirm == 1) {
                j["status"] = "Booking Confirmed";
              } else {
                j["status"] = "Rejected";
              }
              var date = j.date_time.slice(0, 11);
              var time = j.date_time.slice(11, 16);
              if (parseInt(time.slice(0, 2)) >= 12) {
                time += "pm";
              } else {
                time += "am";
              }
              j["date"] = date;
              j["time"] = time;
              this.apts.push(j);
            }
          })
      },
    },
  };
</script>
<style>
  @import "@/assets/index.css";
</style>