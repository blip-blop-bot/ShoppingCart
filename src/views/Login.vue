<template>
  <div class="login">
    <div class="inner">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          v-model="username"
          required
        />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          v-model="password"
          required
        />
        <button class="loginBtn" type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Perform login logic here
      // For simplicity, just log the credentials
      console.log("Logging in...", this.username, this.password);
      this.$router.push({ name: "cart" });

      // Here, you would typically send a request to your backend for authentication
      // If authentication is successful, redirect the user to another page
    },
  },
};
</script>

<style scoped>
.productList {
  display: none;
}
.login {
  display: flex;
  justify-content: center;
}
.inner {
  padding: 32px;
  border: 2px solid blue;
}
h2 {
  margin-bottom: 16px;
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin: 8px 0;
}
input {
  padding: 8px 16px;
}
button {
  color: white;
  border-radius: 20px;
  background: blue;
  margin-top: 16px;
  padding: 8px 16px;
  border: 0;
  cursor: pointer;
}
</style>
