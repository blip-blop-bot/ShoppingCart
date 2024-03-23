import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Login from "./views/Login.vue";
import Cart from "./views/Cart.vue";

const routes = [
  { path: "/Login", name: "login", default: "login", component: Login },
  { path: "/Cart", name: "cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
