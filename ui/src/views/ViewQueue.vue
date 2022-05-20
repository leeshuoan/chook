<script setup>
import QueueBox from "@/components/reusable/QueueBox.vue";
import BlackButton from "@/components/reusable/BlackButton.vue";
</script>
<template>
  <div>
    <br /><br /><br />
    <div class="container text-center" v-if="joinView">
      <div class="row">
        <div
          class="col"
          style="color: #626262; font-weight: bolder; font-size: 25px"
        >
          Jason's Hair Studio
        </div>
      </div>
      <div class="row">
        <div class="col" style="font-size: 30px">JOIN THE QUEUE</div>
      </div>

      <div class="row mt-5">
        <div class="col">Enter Phone Number</div>
      </div>
      <div class="row">
        <div class="col">
          <div
            class="input-group input-group-sm mb-3 m-auto mt-1"
            style="width: 300px"
          >
            <span
              class="text-white rounded-start p-2"
              style="background-color: #196e63"
              id="inputGroup-sizing-sm"
              >+65</span
            >
            <input
              type="text"
              class="form-control p-2"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              v-model="phone_number"
            />
          </div>
        </div>
      </div>
      <br /><br /><br />
      <BlackButton @click="joinQueue" label="JOIN" />
      <BlackButton @click="leaveJoinView" label="BACK" />
    </div>
    <div class="default-section" v-if="joinView == false">
      <div class="queuebox-container">
        <QueueBox
          color="#49C06A"
          title="Now Serving"
          label="Customers"
          number="5"
        />
        <QueueBox
          color="#196E63"
          title="# People in queue"
          label="Customers"
          :number="queue.length"
        />
      </div>
      <br /><br /><br />
      <BlackButton @click="enterJoinView" label="JOIN THE QUEUE" v-if="$store.state.phone_number == null" />
      <RouterLink  v-else :to="'/queue/'+$route.params.shop_id+'/'+$store.state.phone_number" style="color: #196e63" class="fw-bolder"
            ><BlackButton label="VIEW YOUR QUEUE"/></RouterLink>
    </div>
    <br><br>
  </div>
</template>
<script></script>
<style scoped>
@import "@/assets/main.css";
.queuebox-container {
  display: flex;
  justify-content: center;
}
@media only screen and (max-width: 600px) {
  .queuebox-container {
    flex-direction: column;
    align-content: center;
  }
}
</style>
<script>
import { useToast } from "vue-toastification";
export default {
  props: ["title", "number", "color", "label"],
  computed: {
    cssProps() {
      return "background-color: " + this.color;
    },
  },
  data() {
    return {
      joinView: false,
      phone_number: null,
      queue: [],
      queue_number: 0,
    };
  },
  mounted() {
    console.log(this.$store.state.phone_number)
    // console.log(this.$route.params.shop_id);
    this.getQueue();
  },
  methods: {
    async joinQueue() {
      const toast = useToast();
      //   call the damn api
      console.log(this.phone_number);
      var URL = "http://127.0.0.1:5101/queue";
      this.queue = [];
      await this.axios
        .post(URL, {
          shop_id: this.$route.params.shop_id,
          phone_number: this.phone_number,
        },{
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          alert(response.data.msg +"- Click ok to view Queue Number")
          // console.log(response.data.msg +"-"+response.data.queue_number)
          // saving inside session
          this.$store.state.phone_number = this.phone_number;
          this.$router.push({ path: '/queue/'+this.$route.params.shop_id+"/"+this.phone_number })
        })
        .catch((error) => {
          this.getQueueByNumber()
        });
    },
    enterJoinView() {
      this.joinView = true;
    },
    leaveJoinView() {
      this.joinView = false;
    },
    async getQueue() {
      var URL = "http://127.0.0.1:5002/queue/" + this.$route.params.shop_id;
      this.queue = [];
      await this.axios.get(URL, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }}).then((response) => {
        var res = response.data.data;
        this.queue = res;
      });
    },
    async getQueueByNumber(){
      await this.axios.get("http://127.0.0.1:5002/queue/"+this.$route.params.shop_id +"/"+this.phone_number, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }}).then((response) => {
        alert("Your queue number is " + response.data.queue_number)
        this.queue_number= response.data.queue_number;
        this.$router.push({ path: '/queue/'+this.$route.params.shop_id+"/"+this.phone_number })
      });
    }
  },
};
</script>
