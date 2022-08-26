import { createRouter, createWebHistory } from "vue-router";
import { isAuthenticated } from "@/router/guards.js";

import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Home from "@/views/Home.vue";
import Messenger from "@/views/Messenger.vue";
import Statistics from "@/views/Statistics.vue";
import Search from "@/views/Search.vue";
import Calendar from "@/views/Calendar.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
      beforeEnter: [isAuthenticated],
    },
    { path: "/login", component: Login, name: "login" },
    { path: "/register", component: Register, name: "register" },
    { path: "/messenger", component: Messenger, name: "messenger" },
    { path: "/statistics", component: Statistics, name: "statistics" },
    { path: "/search", component: Search, name: "search" },
    { path: "/calendar", component: Calendar, name: "calendar" },
    {
      path: "/:notFound(.*)",
      redirect: { name: "home" },
    },
  ],
});

export default router;
