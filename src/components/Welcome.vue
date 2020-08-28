<template>
  <div id="welcome">
    <div class="container">
      <div class="card welcome-card">
        <div class="card-content">
          <h4 class="center">WELCOME</h4>
          <form @submit.prevent="enterChat">
            <div class="field">
              <label for="name">Enter your Name:</label>
              <input
                type="text"
                autocomplete="off"
                name="name"
                v-model="name"
              />
            </div>
            <p v-if="feedback" class="red-text center">{{ feedback }}</p>
            <div class="field center">
              <button class="btn btn-primary">Enter Chat</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: null,
      feedback: null,
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.feedback = "Please enter name or alias to join";
      }
    },
  },
};
</script>
<style>
#welcome .container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
#welcome .welcome-card {
  width: 50%;
}
</style>
