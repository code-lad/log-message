<template>
  <div id="message">
    <form @submit.prevent="addMessage">
      <label for="new-message">Type Message</label>
      <input type="text" name="new-message" v-model="newMessage" />
      <p v-if="feedback" class="red-text">{{ feedback }}</p>
    </form>
  </div>
</template>
<script>
import db from "@/firebase/init";
export default {
  name: "Message",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      feedback: null,
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        db.collection("messages")
          .add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now(),
          })
          .catch((err) => {
            console.log(err);
          });
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "Please type a message";
      }
    },
  },
};
</script>
<style></style>
