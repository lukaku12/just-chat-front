import { createStore } from "vuex";
import user from "@/store/user-store/user.js";

const store = createStore({
    modules: {
        user,
    },
});

export default store;