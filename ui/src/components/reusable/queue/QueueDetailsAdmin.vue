<template>
  <tr>
    <td>
      <div class="bg-light p-3 services mb-3 row">
        <span
          class="col-sm-3 text-start my-auto"
          style="color: #196e63"
          id="qnumber"
        >
          {{q.queue_number}}
          <br/>
          {{q.phone_number}}
        </span>

        <span
          class="col-6 col-sm-9 text-start text-sm-end mt-3 my-sm-auto"
          id="timeslot"
          >Date: {{q.time_created.split(" ")[0]}}, <br/>  Time: {{q.time_created.split(" ")[1]}}</span
        >

        <!-- <div class="col-sm-6 m-sm-auto mt-4 text-center text-sm-end">
          <button
            class="btn accept mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#serve"
            style="min-width: max-content"
            @click="serveQ"
          >
            SERVE
          </button> 
          &nbsp;
          
        </div> -->
      </div>
    </td>
  </tr>
</template>
<script>
export default {
  // props: ["service_name", "duration", "shop_name", "time", "status"],
  props: {
    q: {
      type: Object,
    },
  },
  computed: {},
  data() {
    return {};
  },
  methods: {
    async serveQ() {
      // shop next
      var URL = "http://127.0.0.1:5002/queue/1"  ;
      this.queue = [];
      await this.axios.get(URL, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }}).then((response) => {
        var res = response.data.data;
        console.log(res)
        this.qs = res;
      });
    },

  },
};
</script>
<style>
.accept, .servebtn {
    background-color: #196e63;
    color: white !important;
    border-radius: 15px;
}

</style>