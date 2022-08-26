import { createRouter, createWebHistory } from "vue-router";
import { isAuthenticated } from "@/router/guards.js";

import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Home from "@/views/Home.vue";
import Messenger from "@/views/Messenger.vue";
import Statistics from "@/views/Statistics.vue";
import Search from "@/views/Search.vue";
import Calendar from "@/views/Calendar.vue";
import Profile from "@/views/Profile.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: Login, name: "login" },
    { path: "/register", component: Register, name: "register" },
    {
      path: "/",
      component: Home,
      name: "home",
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/profile",
      component: Profile,
      name: "profile",
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/messenger",
      component: Messenger,
      name: "messenger",
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/statistics",
      component: Statistics,
      name: "statistics",
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/search",
      component: Search,
      name: "search",
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/calendar",
      component: Calendar,
      name: "calendar",
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/:notFound(.*)",
      redirect: { name: "home" },
    },
  ],
});

export default router;
