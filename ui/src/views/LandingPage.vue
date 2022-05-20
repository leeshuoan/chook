<script setup>
import ShopCard from "@/components/reusable/ShopCard.vue";
import LandingNavbar from "@/components/reusable/LandingNavbar.vue";
</script>

<template>
  <div>
    <div class="container px-5">
      <LandingNavbar />

      <div class="my-4 position-relative w-100">
        <div class="btn-group">
          <button
            class="btn rounded-pill btn-outline-dark"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="font-size: smaller; margin-right: 10px"
          >
            Sort &nbsp;
            <font-awesome-icon :icon="['fa', 'sort']" />
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Most Popular</a></li>
            <li><a class="dropdown-item" href="#">Price (low to high)</a></li>
            <li><a class="dropdown-item" href="#">Price (high to low)</a></li>
          </ul>
        </div>
        <div class="btn-group position-absolute" style="right: 0%">
          <button
            class="btn rounded-pill btn-outline-dark"
            style="font-size: smaller"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Filter &nbsp;<font-awesome-icon :icon="['fa', 'filter']" />
          </button>
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" style="top: 150px">
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title mx-auto" id="staticBackdropLabel">
                    Filter
                  </h6>
                </div>

                <div class="modal-body px-5">
                  <label for="basic-url" class="form-label">Price Range</label>
                  <div class="input-group mb-4">
                    <input
                      id="pricerange"
                      type="range"
                      min="1"
                      max="1000"
                      value="500"
                      class="slider rounded-pill"
                      @input="slider($event)"
                    /><br />
                    <h6 class="values">S$0 - S$<span ref="max">$500</span></h6>
                  </div>
                  <label for="basic-url" class="form-label">Location</label>
                  <br />
                  <div
                    class="btn-group mb-4 w-100"
                    role="group"
                    aria-label="Basic checkbox toggle button group"
                  >
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="north"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-dark" for="north"
                      >North</label
                    >

                    <input
                      type="checkbox"
                      class="btn-check"
                      id="south"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-dark" for="south"
                      >South</label
                    >

                    <input
                      type="checkbox"
                      class="btn-check"
                      id="east"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-dark" for="east">East</label>

                    <input
                      type="checkbox"
                      class="btn-check"
                      id="west"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-dark" for="west">West</label>
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="central"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-dark" for="central"
                      >Central</label
                    >
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    style="font-size: smaller"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    style="font-size: smaller"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4 mb-5">
        <ShopCard
          v-for="shop in shops"
          :shopName="shop.name"
          :shopid="shop.shop_id"
          :key="shop.shop_id"
        />
        <!-- <ShopCard
          shopName="Alan Barber Shop"
          imageURL="/src/assets/images/DeepCutsSG.jpg"
        />
        <ShopCard
          shopName="Alan Barber Shop"
          imageURL="/src/assets/images/DeepCutsSG.jpg"
        />
        <ShopCard
          shopName="Alan Barber Shop"
          imageURL="/src/assets/images/DeepCutsSG.jpg"
        />
        <ShopCard
          shopName="Alan Barber Shop"
          imageURL="/src/assets/images/DeepCutsSG.jpg"
        />
        <ShopCard
          shopName="Alan Barber Shop"
          imageURL="/src/assets/images/DeepCutsSG.jpg"
        />
        <ShopCard
          shopName="Alan Barber Shop"
          imageURL="/src/assets/images/DeepCutsSG.jpg"
        />
        <ShopCard
          shopName="Alan Barber Shop"
          imageURL="/src/assets/images/DeepCutsSG.jpg"
        />
        <ShopCard
          shopName="Alan Barber Shop"
          imageURL="/src/assets/images/DeepCutsSG.jpg"
        /> -->
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
      shops: [],
    };
  },
  mounted() {
    // replace number with user number
    //   make api call
    this.getShops();
    this.shops = [];
  },
  methods: {
    slider(event) {
      this.$refs.max.innerText = event.target.value;
    },

    async getShops() {
      var URL = "http://127.0.0.1:5005/allShops";
      this.shops = [];
      await this.axios.get(URL).then((response) => {
        var res = response.data;
        this.shops = res;
      });
    },
  },
};
</script>

<style scoped>
@import "@/assets/landingPage.css";
</style>