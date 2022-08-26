import axios from "axios";

const value = localStorage.getItem("jwt_token");
const parts = JSON.parse(value);
export const token = parts ? parts.token : null;

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + token,
    },
});

// axiosInstance.interceptors.response.use(
//     function (response) {
//         return response;
//     },
//     function (error) {
//         if (error.response.status === 404) {
//             window.location.href = "/404";
//         }
//         if (error.response.status === 403) {
//             window.location.href = "/forbidden";
//         }
//         return Promise.reject(error);
//     }
// );

export default axiosInstance;
