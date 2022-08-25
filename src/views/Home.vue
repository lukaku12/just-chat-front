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
        document.cookie =
            "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        this.$router.push("/login");
      });
    },
  },
};
</script>