// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/route";
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist"; //pinia持久化

import "@/assets/css/index.scss";
import "@/assets/css/help.css";
import "@/utils/atropos/atropos.css";
import "@/utils/resize";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersist);

app.use(router);
app.use(pinia);

app.mount("#app");
