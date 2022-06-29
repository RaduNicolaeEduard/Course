import Vue from "vue";
import VueRouter from "vue-router";
import app from "../views/app.vue";
import about from "../views/AboutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: app,
  },
  {
    path: "/login",
    name: "login",
    component: about,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => { 
  if (to.name !== 'login' && Vue.$cookies.get("machineId") == null) next({ name: 'login' })
  else next()
})
export default router;
