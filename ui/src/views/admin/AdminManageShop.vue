<script setup>
import AdminShopService from "@/components/reusable/AdminShopService.vue";
import { getAuth } from "@firebase/auth";
</script>

<template>
  <div>
    <div class="container text-center mt-5" id="page">
      <h4 class="mb-5">My Shop</h4>
      <div
        class="w-75"
        style="max-height: 400px; overflow-y: scroll; display: inline-block"
      >
        <table class="table table-borderless mx-auto">
          <tbody>
            <AdminShopService
              v-for="service in services"
              :key="service.service_id"
              :service="service"
              @EditService="EditService(service)"
            />
          </tbody>
        </table>
        <div
          class="modal fade"
          id="edititem"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="edititemlabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="edititemlabel">Edit Item</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-center my-5">
                <div class="container mt-4">
                  <div class="col-sm mb-3">
                    <div class="input-group mb-3">
                      <input
                        id="title"
                        type="text"
                        class="form-control"
                        placeholder="Title"
                        aria-label="Title"
                        v-model="serviceToEdit.description"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm mb-3">
                      <div class="input-group">
                        <input
                          id="duration"
                          type="text"
                          class="form-control"
                          placeholder="Duration"
                          aria-label="Title"
                          v-model="serviceToEdit.duration"
                        />
                      </div>
                    </div>
                    <div class="col-sm mb-3">
                      <div class="input-group">
                        <span class="input-group-text" id="pricelabel">S$</span>
                        <input
                          id="amt"
                          type="text"
                          class="form-control"
                          placeholder="Amount"
                          aria-label="Title"
                          aria-labelledby="pricelabel"
                          v-model="serviceToEdit.price"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn mx-auto saveitem px-4 rounded-pill"
                  @click="updatingServiceApi"
                  data-bs-dismiss="modal"
                >
                  SAVE ITEM
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="dltitem"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="dltitemlabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="dltitemlabel">Delete Item</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-center my-5">
                <h6>Are you sure you want to delete this item?</h6>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn mx-auto px-4 rounded-pill"
                  data-bs-target="#dltcfm"
                  data-bs-toggle="modal"
                >
                  Yes
                </button>
                <button
                  type="button"
                  class="btn mx-auto px-4 rounded-pill"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="dltcfm"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="dltcfmlabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="dltcfmlabel">Item Deleted</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-center my-5">
                <h6>This item is deleted.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-3 pb-5">
        <button
          class="btn btn-dark rounded-pill px-5 mt-3"
          data-bs-toggle="modal"
          data-bs-target="#additem"
        >
          Add new item
        </button>
      </div>
      <div
        class="modal fade"
        id="additem"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="additemlabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="additemlabel">Add New Item</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-center my-5">
              <div class="container mt-4">
                <div class="col-sm mb-3">
                  <div class="input-group mb-3">
                    <input
                      id="title"
                      type="text"
                      class="form-control"
                      placeholder="Title"
                      aria-label="Title"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm mb-3">
                    <div class="input-group">
                      <input
                        id="duration"
                        type="text"
                        class="form-control"
                        placeholder="Duration"
                        aria-label="Title"
                      />
                    </div>
                  </div>
                  <div class="col-sm mb-3">
                    <div class="input-group">
                      <span class="input-group-text" id="pricelabel">S$</span>
                      <input
                        id="amt"
                        type="text"
                        class="form-control"
                        placeholder="Amount"
                        aria-label="Title"
                        aria-labelledby="pricelabel"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn mx-auto accept px-4 rounded-pill"
              >
                ADD ITEM
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
    computed: {},
    data() {
      return {
        services: [],
        serviceToEdit: {
          id: '',
          title: '',
          duration: '',
          price: ''
        },
      }
    },
    mounted() {
      //   make api call
      this.getShopServices();

    },
    methods: {
      async updatingServiceApi(service) {
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
        // this.serviceToEdit = service;
        var body = {
          "name": this.serviceToEdit.name,
          "description": this.serviceToEdit.description,
          "price": this.serviceToEdit.price,
          "duration":this.serviceToEdit.duration,
        }
        console.log(body)

        var URL = "http://localhost:5003/services/1"
        await this.axios.put(URL, body, config).then((response) => {
          console.log(response)
        });
      },

      EditService(service) {
        this.serviceToEdit = service;
        console.log(service)
      },

      async getShopServices() {
        var URL = "http://localhost:5003/services/1"
        // var URL = "http://localhost:5000/allShopAppointments/1";
        await this.axios.get(URL, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }}).then((response) => {
          var res = response.data.data;
          this.services = res;
          console.log(this.services)
        });
      }

    }
  };
</script>

<style>
</style>