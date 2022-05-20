<script setup>
import ReqDetailsBody from "@/components/reusable/appointment/ReqDetailsBody.vue";
import QueueBody from "@/components/reusable/queue/QueueBody.vue";
import TeleButton from "@/components/reusable/TeleButton.vue";
</script>
<template>
  <div>
    <div>
      <ul class="nav nav-pills nav-fill w-50 mx-auto mt-5">
        <li class="nav-item">
          <a
            id="queueSelection"
            class="nav-link active"
            aria-current="page"
            href="#"
            @click="changeToQueue"
            >Queue</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            aria-current="page"
            @click="changeToApt"
            id="aptSelection"
            >Appointments</a
          >
        </li>
      </ul>
    </div>

    <ReqDetailsBody v-if="aptDisplay" />
    <QueueBody v-else />

    <TeleButton />
  </div>
</template>
<script>
export default {
  props: [],
  computed: {},
  data() {
    return {
      aptDisplay: false,
    };
  },
  mounted() {
    //   make api call
  },
  methods: {
    changeToQueue() {
      document.getElementById("aptSelection").classList.remove("active");
      document.getElementById("queueSelection").classList.add("active");
      this.aptDisplay =false;
    },
    changeToApt() {
      document.getElementById("aptSelection").classList.add("active");
      document.getElementById("queueSelection").classList.remove("active");
      this.aptDisplay =true;
    },
  },
};
</script>
