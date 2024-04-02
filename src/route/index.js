import { createRouter, createWebHistory } from "vue-router";
import UserAgent from "useragent";
const userAgent = UserAgent.parse(navigator.userAgent);
const userAgentString = userAgent.toString();

const mobileDeviceRegex = /iPhone|Android|Mobile/i;
const isMobile = mobileDeviceRegex.test(userAgentString);

import WebPage from "@/components/WebPage.vue";
import H5Page from "@/components/H5Page.vue";

const routes = [
  { path: "/", component: isMobile ? H5Page : WebPage },
  { path: "/h5", component: H5Page },
  { path: "/web", component: WebPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
