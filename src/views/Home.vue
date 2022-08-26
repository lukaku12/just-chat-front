<template>
  <div>THIS IS HOME PAGE</div>
  <button @click="logout">Logout</button>
</template>

<script>
import axios from "@/config/axios/index.js";

export default {
  name: "Home",
  components: {},
  methods: {
    logout() {
      axios.post("logout").then(() => {
        localStorage.removeItem("jwt_token");
        this.$router.push("/login");
      });
    },
  },
};
</script>