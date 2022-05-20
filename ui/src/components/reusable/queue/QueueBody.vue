<script setup>
  import QueueDetailsAdmin from "@/components/reusable/queue/QueueDetailsAdmin.vue";
  import {
    getAuth
  } from '@firebase/auth';
</script>
<template>
  <div class="container text-center mt-5" id="page">
    <h4 class="mb-3">Current Queue</h4>
    Number of pax:
    <b>{{qs.length}}</b>
    <br/>
    <br/>

    <div class="w-75" style="display: inline-block">
      <button class="btn accept mx-auto" data-bs-toggle="modal" data-bs-target="#serve" style="min-width: max-content"
        @click="serveQ">
        Serve Next
      </button>

      <table class="table table-borderless mx-auto" style="max-width:800px;">
        <tbody>
          <QueueDetailsAdmin v-for="q in qs" :key="q.queue_id" :q="q" />
        </tbody>
      </table>
      <div class="modal fade" id="serve" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="servelabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="servelabel">Serving</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center my-5">
              <h6>The customer is being served now.</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="removeq" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="removeqlabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="removeqlabel">Remove Queue</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center my-5">
              <h6>Are you sure you want to remove this queue number? </h6>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn mx-auto px-4 rounded-pill" data-bs-target="#cfmremove"
                data-bs-toggle="modal">
                Yes
              </button>
              <button type="button" class="btn mx-auto px-4 rounded-pill" data-bs-dismiss="modal">
                No
              </button>
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
        qs: [],
        qToServe: null,
      };
    },
    mounted() {
      //   make api call
      this.getQueue();
    },
    methods: {
      async getQueue() {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Allow_headers': ['X-Custom-Auth', 'Content-Type', 'Authorization'],
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }
        };
        // call simple queue service to get queue
        var URL = "http://127.0.0.1:5002/queue/1";
        this.queue = [];
        await this.axios.get(URL, config).then((response) => {
          var res = response.data.data;
          console.log(res);
          this.qs = res;
        });
      },
      async serveQ() {
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
        // call complex service to serve next
        var URL = "http://127.0.0.1:5101/shop/next";
        this.queue = [];
        var body = {
          shop_id: 1,
        };
        await this.axios.post(URL, body, config).then((response) => {
          alert(response.data.msg);
          this.getQueue();
        });
      },
    },
  };
</script>