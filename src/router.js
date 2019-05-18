import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/camera",
      name: "camera",
      component: () =>
        import(/* webpackChunkName: "camera" */ "./views/Camera.vue")
    },
    {
      path: "/picture",
      name: "picture",
      props: true,
      component: () =>
        import(/* webpackChunkName: "post" */ "./views/Picture.vue")
    },
    {
      path: "/search",
      name: "search",
      props: true,
      component: () =>
        import(/* webpackChunkName: "post" */ "./views/ProductSearch.vue")
    },
    {
      path: "/detail",
      name: "detail",
      component: () =>
        import(/* webpackChunkName: "camera" */ "./views/ProductDetail.vue")
    }
  ]
});
