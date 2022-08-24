import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login.vue"
import Register from "@/views/Register.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/login" }, // change
        { path: "/login", component: Login, name: "login" },
        { path: "/register", component: Register, name: "register" },
    ],
});

export default router;