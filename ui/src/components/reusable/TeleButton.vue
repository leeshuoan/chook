<script setup>
  import {
    getAuth
  } from '@firebase/auth';
</script>
<template>
  <div class="text-center mb-5">
    <button class="btn btn-dark rounded-pill px-5 mt-3 mx-auto;" @click="pushNotification()">
      Push notification to Telebot
    </button>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      pushNotification() {
        console.log('run api for notification');
        this.process_book();
      },
      async process_book() {
        var URL = "http://localhost:5101/telebot";
        const auth = getAuth();
        const token = auth.currentUser.accessToken;
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
            'Allow_headers': ['X-Custom-Auth', 'Content-Type', 'Authorization'],
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Authorization': `Bearer ${token}`
          }
        };
        await this.axios
          .post(URL, "",config)
          .then((response) => {
            console.log(response.data);
            alert("Your push notifications has been sent out to the users!")
          })
          .catch((error) => {
            alert("Your push notifications has been sent out to the users!")
            console.log(error)
          })
      },


    }
  };
</script>