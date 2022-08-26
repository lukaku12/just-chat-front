<template>
  <div
    class="absolute w-[200px] h-[150px] border rounded bottom-9 bg-white flex justify-between items-center shadow page-transition"
  >
    <div class="flex flex-col justify-between items-center gap-[32px] pl-5">
      <router-link to="/profile">
        <div class="flex items-center justify-between gap-[32px]">
          <font-awesome-icon icon="fa-solid fa-user" />
          <span class="text-2xl">Profile</span>
        </div>
      </router-link>
      <button
        @click="logout"
        class="flex items-center justify-between gap-[32px]"
      >
        <font-awesome-icon icon="fa-solid fa-sign-out-alt" />
        <span class="text-2xl">Logout</span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "@/config/axios/index.js";
export default {
  name: "SettingOptions",
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
