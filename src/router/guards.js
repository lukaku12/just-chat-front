import { token } from "@/config/axios/index.js";

export function isAuthenticated() {
    if (!token) {
        return "/login";
    }
    if (token.expires_in < new Date().getTime()) {
        localStorage.removeItem("jwt_token");
        return "/login";
    }
}
