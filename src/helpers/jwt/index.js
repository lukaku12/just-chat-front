import axios from "@/config/axios/index.js";

/*
 * set new cookie named  'jwt_token' and also append
 * Authentication: Bearer {token} header to our axios instance
 */
export const setJwtToken = (token, expires_in) => {
    let expires = new Date();
    expires.setTime(expires.getTime() + expires_in * 1000);
    document.cookie = `jwt_token=${token}; expires=${expires.toUTCString()}; path=/`;

    axios.defaults.headers["Authorization"] = `Bearer ${token}`;
};
