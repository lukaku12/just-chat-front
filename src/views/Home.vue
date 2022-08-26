<template>
  <section class="w-full h-full bg-white">
    <Sidebar></Sidebar>
  </section>

</template>

<script>
import axios from "@/config/axios/index.js";
import Sidebar from "@/components/Layout/Sidebar.vue";

export default {
  name: "Home",
  components: {Sidebar},
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