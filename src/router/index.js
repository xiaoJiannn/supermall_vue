import Vue from "vue";
import VueRouter from "vue-router";

const home = () => import("../views/home/home.vue");
const cart = () => import("../views/cart/cart.vue");
const category = () => import("../views/category/category.vue");
const profile = () => import("../views/profile/profile.vue");

Vue.use(VueRouter);
const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: home,
  },
  {
    path: "/profile",
    component: profile,
  },
  {
    path: "/cart",
    component: cart,
  },
  {
    path: "/category",
    component: category,
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
