<template>
  <div id="chat">
    <div class="container">
      <h4 class="center">Welcome {{ name }}</h4>
      <div class="card">
        <div class="card-content">
          <ul class="messages" v-chat-scroll>
            <li v-for="message in messages" :key="message.id">
              <span class="teal-text">{{ message.name }}</span>
              <span class="grey-text darken-3">{{ message.content }}</span>
              <span class="grey-text time">{{ message.timestamp }}</span>
            </li>
          </ul>
        </div>
        <div class="card-action">
          <Message :name="name" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Message from "@/components/Message";
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "Chat",
  props: ["name"],
  data() {
    return {
      messages: [],
    };
  },
  components: {
    Message,
  },
  created() {
    let ref = db.collection("messages").orderBy("timestamp");
    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll"),
          });
        }
      });
    });
  },
};
</script>
<style>
#chat span {
  font-size: 1.6em;
  padding: 5px;
}
#chat .time {
  display: block;
  font-size: 1em;
}
</style>
