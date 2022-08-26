<template>
  <div
    class="absolute w-[200px] h-[150px] border rounded bottom-9 bg-white flex justify-between items-center shadow auth-wrapper"
  >
    <div class="flex flex-col justify-between items-center gap-[32px] pl-5">
      <router-link to="/profile">
        <div class="flex items-center justify-between gap-[32px]">
          <font-awesome-icon icon="fa-solid fa-user" />
          <span class="text-2xl">Profile</span>
        </div>
      </router-link>
      <div class="flex items-center justify-between gap-[32px]">
        <font-awesome-icon icon="fa-solid fa-sign-out-alt" />
        <button @click="logout" class="text-2xl">Logout</button>
      </div>
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
