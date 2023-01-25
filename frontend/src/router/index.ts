// Composables
import { createRouter, createWebHistory } from "vue-router";
//pages
import HomeVue from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
