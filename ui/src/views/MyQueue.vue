<script setup>
import QueueBox from "@/components/reusable/QueueBox.vue";
import BlackButton from "@/components/reusable/BlackButton.vue";
</script>
<template>
    <div class ="section p-5">
        <div class="success" v-if="queue_number!= null">
            <QueueBox style="margin:auto;"
          color="#49C06A"
        title="Queue Number"
          :number="queue_number"
        />
        <br/><br/>
        <h3 class="text-center">
            Number of people infront of you is:
        </h3>
        <h1 class="text-center">
            {{queue_length}}
        </h1>
        </div>
        <div v-else>
            <h3 class="text-center">Something went wrong</h3>
        </div>
        <RouterLink :to="'/queue/'+ this.$route.params.shop_id">
        <BlackButton @click="leaveJoinView" label="BACK" />
        </RouterLink>
    </div>
</template>
<script>
export default {
  data() {
    return {
      queue_number:null,
      queue_length:0
    };
  },
  mounted(){
      this.getMyQueue();
  },
  methods: {
    async getMyQueue() {
      var URL = "http://127.0.0.1:5002/queue/"+ this.$route.params.shop_id +"/" + this.$route.params.phone_number;
      this.shops = [];
      await this.axios.get(URL, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }}).then((response) => {
        console.log(response)
        this.queue_number= response.data.queue_number;
        var count = 0;
        for (var queue of response.data.data){
            if (queue.queue_number != this.queue_number){
                count++;
            }else{
                break;
            }
        }
        this.queue_length = count;
      }).then(error=>{
          
          
      })
    },
    
  },
};
</script>