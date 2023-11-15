<template>
    <div>
      <h1>Bid for Work Slot</h1>
      <select v-model="selectedWorkSlot">
        <option v-for="workSlot in workSlots" :value="workSlot.id">{{ workSlot.time }} - {{ workSlot.role }}</option>
      </select>
      <button @click="submitBid">Submit Bid</button>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        selectedWorkSlot: null,
        workSlots: [] // Assume workSlots are fetched from the backend
      };
    },
    methods: {
      async submitBid() {
        try {
          const response = await axios.post("/api/bids", {
            workSlotId: this.selectedWorkSlot,
            staffId: this.$store.state.staffId // Assuming you have staff ID stored in Vuex state
          });
          console.log("Bid submitted successfully:", response.data);
        } catch (error) {
          console.error("Error submitting bid: ", error);
        }
      }
    }
  };
  </script>
  