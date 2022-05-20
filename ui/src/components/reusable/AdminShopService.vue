<template>
  <tr>
    <td>
      <div class="bg-light p-3 services mb-3 row g-0">
        <div class="col-sm-3 text-start">
          <h6 class="my-auto">{{ service.name }} - {{ service.duration }} hours</h6>
        </div>

        <span
          class="col-6 col-sm-3 text-start text-sm-end mt-3 my-sm-auto"
          style="color: #196e63; font-size: larger"
          id="timeslot"
          >${{ service.price }}</span
        >

        <div class="col-sm-6 m-sm-auto mt-4 text-center text-sm-end">
          <button
            class="btn edit mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#edititem"
            style="min-width: max-content"
            @click="EditService()"
          >
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          &nbsp;
          <button
            class="btn cancel mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#dltitem"
            style="min-width: max-content"
          >
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
    },
  },
  methods: {
    EditService() {
      this.$emit("EditService", this.service);
    },
  }
};
</script>

<style>
</style>