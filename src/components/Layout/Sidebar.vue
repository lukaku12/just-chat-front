<template>
  <keep-alive>
    <div
      class="min-w-[88px] w-[88px] h-full flex flex-col justify-between items-center pt-5 pb-8 sidebar-custom-box-shadow"
    >
      <div class="w-[56px] h-auto">
        <!-- CHANGE DIV WITH IMG HERE   -->
        <router-link to="/profile">
          <div
            class="w-[56px] h-[56px] rounded-[14px] bg-[#615EF0] flex items-center justify-center text-2xl font-bold text-white select-none"
          >
            {{ usernameFirstLetter }}
          </div>
        </router-link>
        <!-- CHANGE DIV WITH IMG HERE   -->

        <!--  NAVIGATION LINKS   -->
        <nav class="w-auto h-auto mt-16">
          <ul class="flex flex-col justify-between items-center gap-[32px]">
            <li class="flex items-center">
              <router-link
                to="/"
                class="text-2xl"
                :class="{'text-purple-500': routePath === '/'}"
              >
                <font-awesome-icon icon="fa-solid fa-house-chimney" />
              </router-link>
            </li>
            <li class="flex items-center">
              <router-link
                to="/messenger"
                class="text-2xl"
                :class="{'text-purple-500': routePath === '/messenger'}"
              >
                <font-awesome-icon icon="fa-solid fa-message" />
              </router-link>
            </li>
            <li class="flex items-center">
              <router-link
                to="/statistics"
                class="text-2xl"
                :class="{'text-purple-500': routePath === '/statistics'}"
              >
                <font-awesome-icon icon="fa-solid fa-chart-pie" />
              </router-link>
            </li>
            <li class="flex items-center">
              <router-link
                to="/search"
                class="text-2xl"
                :class="{'text-purple-500': routePath === '/search'}"
              >
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              </router-link>
            </li>
            <li class="flex items-center">
              <router-link
                to="/calendar"
                class="text-2xl"
                :class="{'text-purple-500': routePath === '/calendar'}"
              >
                <font-awesome-icon icon="fa-solid fa-calendar-day" />
              </router-link>
            </li>
          </ul>
        </nav>
        <!--  NAVIGATION LINKS   -->
      </div>
      <!--   SETTINGS HERE   -->
      <div class="text-2xl">
        <button @click="toggleSettings">
          <font-awesome-icon icon="fa-solid fa-gear" :class="settingIsOpen ? '-rotate-90 transition' : 'rotate-90 transition'"/>
        </button>
      </div>
      <!--   SETTINGS HERE   -->
    </div>
  </keep-alive>
</template>

<script>
import { mapState } from "vuex";
import axios from "@/config/axios/index.js";
export default {
  name: "Sidebar",
  data() {
    return {
      settingIsOpen: false,
    };
  },
  computed: {
    ...mapState({ user: (state) => state.user }),
    routePath() {
      return this.$route.path;
    },
    usernameFirstLetter() {
      return this.user.user.username
        ? this.user.user.username.charAt(0).toUpperCase()
        : "";
    },
  },
  mounted() {
    if (this.user.username) return;
    axios.get("/user").then((response) => {
      this.$store.commit("user/updateUserInfo", response.data);
    });
  },
  methods: {
    toggleSettings() {
      this.settingIsOpen = !this.settingIsOpen;
    },
  },
};
</script>
