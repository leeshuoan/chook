<script setup>
import UpcomingApt from "@/components/reusable/appointment/UpcomingApt.vue"
</script>

<template>
    <div class="container text-center mt-5">
      <h4 class="mb-5">Upcoming Appointments</h4>
      <div
        class="w-75"
        style="display: inline-block"
      >
        <table class="table table-borderless mx-auto">
          <tbody>
              <UpcomingApt v-for="apt in apts" :key="apt.apt_id" :appointment="apt" @serveApt="serveApt"/>
          </tbody>
        </table>
        <div
          class="modal fade"
          id="serve"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="servelabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="servelabel">Serving</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-center my-5">
                <h6>The customer is being served now.</h6>
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
     return{
          apts:[],
      }
  },
  mounted(){
    this.getAllApt()
    //   make api call
    // this.apts = [
    //     {
    //         apt_id:1,
    //         date:"12/2/22",
    //         time:"12:00PM",
    //         description:"Hair Coloring with bleaching",
    //         duration:4,
    //         display_name:"Jethro"

    //     },
    //     {
    //         apt_id:2,
    //         date:"12/2/22",
    //         time:"12:30PM",
    //         description:"Hair Coloring with bleaching",
    //         duration:4,
    //         display_name:"Jethro"

    //     },
    //     {
    //         apt_id:3,
    //         date:"12/2/22",
    //         time:"12:45PM",
    //         description:"Hair Coloring with bleaching",
    //         duration:4,
    //         display_name:"Jethro"

    //     },
    //     {
    //         apt_id:4,
    //         date:"12/2/22",
    //         time:"1:00PM",
    //         description:"Hair Coloring with bleaching",
    //         duration:4,
    //         display_name:"Jethro"

    //     }
    // ]
  },
  methods: {
      serveApt(apt){
          console.log(apt)
          // make api call
          
      },
      async getAllApt() {
      var URL = "http://localhost:5100/getUpcomingAppointment/1";
      this.apts = [];
      await this.axios.get(URL, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }}).then((response) => {
        var res = response.data.data.list_of_upcoming_appt;
        this.apts = res;
      });
      }



  },
};
</script>