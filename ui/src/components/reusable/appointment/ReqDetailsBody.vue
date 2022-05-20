<script setup>
  import AptDetailsReq from "@/components/reusable/appointment/AptDetailsReq.vue";
  import {
    getAuth
  } from '@firebase/auth';
</script>
<template>
  <div>
    <div class="container text-center mt-5" id="page">
      <h4 class="mb-5">Appointment Requests</h4>
      <div class="w-75" style="display: inline-block">
        <table class="table table-borderless mx-auto">
          <tbody>
            <AptDetailsReq v-for="apt in apts" :key="apt.apt_id" :appointment="apt" @cancelApt="cancelApt"
              @acceptApt="acceptApt" />
          </tbody>
        </table>
        <div class="modal fade" id="acceptappt" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
          aria-labelledby="acceptlabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="acceptlabel">Booking Accepted</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-center my-5">
                <span>The appointment is confirmed.</span>
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
                  Reject Appointment
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-center my-5">
                <span>Are you sure you want to reject appointment for
                  <span id="servicename"></span> for
                  <span id="shopname"></span>?</span>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn mx-auto px-4 rounded-pill" data-bs-target="#cancelcfm"
                  data-bs-toggle="modal" @click="confirmCancel()">
                  Yes
                </button>
                <button type="button" class="btn mx-auto px-4 rounded-pill" data-bs-dismiss="modal">
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
                  Appointment Rejected
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-center my-5">
                <span>The appointment is rejected.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: [],
    computed: {},
    data() {
      return {
        apts: [],
        aptToCancel: {
          apt_id: 1,
          date_time: "12/2/22, 12:00PM",
          description: "Hair Coloring with bleaching",
          duration: 4,
          status: "Booking processing",
          shop_name: "Jason's Hair Studio"

        }
      }
    },
    // async mounted() {
    //   //   make api call
    //   // this.axios
    //   //   .get("http://localhost:5000/allShopAppointments/1")
    //   //   .then(response => (this.apts=response));

    //   //  test() {
    //     console.log('axios test')
    //     await this.axios.get('http://localhost:5000/allShopAppointments/1').then((response) => {
    //       console.log(response.data);
    //       this.apts=response.data
    //     })
    //   },
    // =========static data=========
    mounted() {
      this.getAllApt();
      // this.apts = [{
      //     apt_id: 1,
      //     date: "12/2/22",
      //     time: "12:00PM",
      //     description: "Hair Coloring with bleaching",
      //     duration: 4,
      //     status: "Booking processing",
      //     shop_name: "Jason's Hair Studio",
      //     display_name: "Greg"

      //   },
      //   {
      //     apt_id: 2,
      //     date: "12/2/22",
      //     time: "12:30PM",
      //     description: "Hair Coloring with bleaching",
      //     duration: 4,
      //     status: "Booking processing",
      //     shop_name: "Jason's Hair Studio",
      //     display_name: "Jethro"

      //   },
      //   {
      //     apt_id: 3,
      //     date: "12/2/22",
      //     time: "12:45PM",
      //     description: "Hair Coloring with bleaching",
      //     duration: 4,
      //     status: "Booking processing",
      //     shop_name: "Jason's Hair Studio",
      //     display_name: "Greg"

      //   },
      //   {
      //     apt_id: 4,
      //     date: "12/2/22",
      //     time: "1:00PM",
      //     description: "Hair Coloring with bleaching",
      //     duration: 4,
      //     status: "Booking processing",
      //     shop_name: "Jason's Hair Studio",
      //     display_name: "Jethro"

      //   }
      // ]
    },
    // =========static data=========

    methods: {
      // ======================================= Accept Appointment Request =======================================
      async acceptApt(apt) {
        console.log(apt)
        const auth = getAuth();
        const token = auth.currentUser.accessToken;
        let aptData = JSON.parse(JSON.stringify(apt));
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Allow_headers': ['X-Custom-Auth', 'Content-Type', 'Authorization'],
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Authorization': `Bearer ${token}`
          }
        };
        const bodyParams = {
          "approvalCode": 1,
          "userName": aptData.display_name
        };
        const apiEndpoint = "http://127.0.0.1:5100/manage_appointment/" + aptData.apt_id;
        await this.axios.post(apiEndpoint,
            bodyParams,
            config)
          .then((response) => {
            if (response.data.code == 200){
              this.getAllApt()
              // toggle card that says appointment confirmed
            }
          })
          .catch(error => {
            console.log(error.message)
          });
      },
      cancelApt(apt) {
        this.aptToCancel = apt
        // opens 
      },
      // ======================================= Confirm Cancel Appointment Request - runs script after confirming deletion ======================================
      async confirmCancel() {
        const auth = getAuth();
        const token = auth.currentUser.accessToken;
        let aptData = JSON.parse(JSON.stringify(this.aptToCancel));
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Allow_headers': ['X-Custom-Auth', 'Content-Type', 'Authorization'],
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Authorization': `Bearer ${token}`
          }
        };
        const bodyParams = {
          "approvalCode": 2,
          "userName": aptData.display_name
        };
        const apiEndpoint = "http://127.0.0.1:5100/manage_appointment/" + aptData.apt_id;
        await this.axios.post(apiEndpoint,
            bodyParams,
            config)
          .then((response) => {
            if (response.data.code == 200){
              // toggle card that says appointment rejected
            }
          })
          .catch(error => {
            console.log(error.message)
          });
      },
      async getAllApt() {
      var URL = "http://localhost:5100/getPendingAppt/1"
      // var URL = "http://localhost:5000/allShopAppointments/1";
      this.apts = [];
      await this.axios.get(URL, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }}).then((response) => {  // response.data is the response from the server
        var res = response.data.data.list_of_pending_appt;
        this.apts = res;
      });
    },
    

    }
  };
</script>