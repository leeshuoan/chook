<template>
    <div
          class="modal fade"
          id="changeappt"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="changeapptlabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="changeapptlabel">
                  Change Appointment
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <!-- edit apt -->
              <div class="modal-body text-center">
                <h6>Choose a timeslot</h6>
                <div class="container mt-4">
                  <div class="row">
                    <div class="col-sm mb-3">
                      Date &nbsp;
                      <select
                        name="date"
                        id="date"
                        class="rounded-pill bg-light p-2 btn"
                      >
                        <option value="02/03/22">{Today, 02/03/22}</option>
                        <option value="03/03/22">03/03/22</option>
                        <option value="04/03/22">04/03/22</option>
                        <option value="05/03/22">05/03/22</option>
                      </select>
                    </div>
                    <div class="col-sm mb-3">
                      Time &nbsp;
                      <select
                        name="date"
                        id="date"
                        class="rounded-pill bg-light p-2 btn"
                      >
                        <option value="today">09:00 AM</option>
                        <option value="today">09:15 AM</option>
                        <option value="today">09:30 AM</option>
                        <option value="today">09:45 AM</option>
                        <option value="today">10:00 AM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn mx-auto rebook px-4 rounded-pill"
                  data-bs-target="#confirmation"
                  data-bs-toggle="modal"
                >
                  CONFIRM
                </button>
              </div>
            </div>
          </div>
        </div>
</template>
<script>
export default ({
    props:[]
})
</script>
