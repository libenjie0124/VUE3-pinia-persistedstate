// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/route";
import { createPinia } from "pinia";
import createPersistedState from "vue-persistedstate";
import "@/utils/resize";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(createPersistedState());

app.mount("#app");
