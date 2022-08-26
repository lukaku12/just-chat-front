import App from '@/App.vue';
import { createApp } from 'vue';
import router from '@/router/index';
import store from "@/store";

import FontAwesomeIcon from "@/helpers/font-awesome/index";

import "@/config/vee-validate/rules";
import "@/config/vee-validate/messages";
import '@/index.css';



const app = createApp(App);

app.use(router);
app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
