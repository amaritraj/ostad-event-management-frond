import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import Login from "@/views/LoginView.vue";
import MemberRegistration from "@/views/MemberRegistration.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/registration",
    name: "MemberRegistration",
    component: MemberRegistration,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
