import Vue from "vue";
import VueRouter from "vue-router";

const home = () => import("../views/home/home.vue");
const cart = () => import("../views/cart/cart.vue");
const category = () => import("../views/category/category.vue");
const profile = () => import("../views/profile/profile.vue");
const detail = () => import("views/Detail/Detail.vue")
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
  {
    path: "/detail/:iid",
    component: detail,
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});
export default router;
