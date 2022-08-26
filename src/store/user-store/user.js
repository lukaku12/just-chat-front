export default {
    namespaced: true,
    state() {
        return {
            user: {},
        };
    },
    getters: {
        getUserInfo(state) {
            return {
                user: state.user
            }
        },
    },
    mutations: {
        updateUserInfo(state, payload) {
            state.user = payload;
        },
    },
};