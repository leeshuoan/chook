<template>
  <tr>
    <td>
      <div class="bg-light p-3 services mb-3 row">
        <div class="col-sm-3 text-start">
          <h6 class="mb-1" style="color: #196e63">
            {{appointment.service_name}} - {{appointment.duration}} hours
          </h6>
          <span style="font-size: smaller">{{appointment.user_phone_number}}</span>
        </div>

        <!-- <span
          class="col-6 col-sm-3 text-start text-sm-end mt-3 my-sm-auto"
          id="timeslot"
          >{{appointment.date_time.split(" ")[0] }}, {{ appointment.date_time.split(" ")[1]}}</span
        > -->

        <div class="col-sm-6 m-sm-auto mt-4 text-center text-sm-end">
          <button
            class="btn servebtn col-sm-3 mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#serve"
            style="min-width: max-content"
            @click="serveApt"
          >
            SERVE
          </button>
        </div>
      </div>
    </td>
  </tr>
</template>
<script>
export default {
  props: {
    appointment: {
      type: Object,
    },
  },
  computed: {},
  data() {
    return {};
  },
  methods: {
    serveApt() {
      this.$emit("serveApt", this.appointment);
    },
  },
};
</script>
