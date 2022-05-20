<template>
  <tr>
    <td>
      <div class="bg-light p-3 services mb-3 row">
        <div class="col-sm-3 text-start">
          <h6 class="mb-1" style="color: #196e63">
            {{ appointment.service_name }} - {{ appointment.duration }} minutes
          </h6>
          <span style="font-size: smaller">{{ appointment.shop_name }}</span>
        </div>

        <span
          class="col-6 col-sm-3 text-start text-sm-end mt-3 my-sm-auto"
          id="timeslot"
          >{{ appointment.date }}, {{ appointment.time }}</span
        >
        <span class="col-6 col-sm-3 text-end mt-3 my-sm-auto" id="status">{{
          appointment.status
        }}</span>
        <div class="col-sm-3 m-sm-auto mt-4 text-center text-sm-end">
          <button
            class="btn edit col-sm-3 mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#changeappt"
            style="min-width: max-content"
            @click="EditApt"
          >
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          &nbsp;
          <button
            class="btn cancel col-sm-3 mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#cancelappt"
            @click="DeleteApt"
            style="min-width: max-content"
          >
            <font-awesome-icon :icon="['fas', 'ban']" />
          </button>
        </div>
      </div>
    </td>
  </tr>
</template>
<script>
export default {
  // props: ["service_name", "duration", "shop_name", "time", "status"],
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
    EditApt() {
      this.$emit("EditApt", this.appointment);
    },
        DeleteApt() {
      this.$emit("DeleteApt", this.appointment);
    },
  },
};
</script>
