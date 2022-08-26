import { createRouter, createWebHistory } from "vue-router";
import { isAuthenticated } from "@/router/guards.js";

import Login from "@/views/Login.vue"
import Register from "@/views/Register.vue"
import Home from "@/views/Home.vue";
import Messenger from "@/views/Messenger.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home, name: "home", beforeEnter: [isAuthenticated]},
        { path: "/login", component: Login, name: "login" },
        { path: "/register", component: Register, name: "register" },
        { path: "/messenger", component: Messenger, name: "register" },
    ],
});

export default router;