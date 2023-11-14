// Import necessary modules from vue-router
import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

import DefaultLayout from "../layout/DashboardLayout.vue";
import Guest from "../layout/Guest.vue";
import NotFound from "../view/NotFound.vue";



const routes: Array<RouteRecordRaw> = [
    { path: "/", redirect: "/home" }, // Redirect to home or another default route
    {
      path: "/home",
      component: DefaultLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("../pages/home/Home.vue"),
        },
        {
          path: "/dashboard",
          name: "Dashboard",
          component: () => import("../view/Dashboard.vue"),
        },
        {
          path: "/forms",
          name: "Forms",
          component: () => import("../view/Forms.vue"),
        },
        {
          path: "/cards",
          name: "Cards",
          component: () => import("../view/Card.vue"),
        },
        {
          path: "/tables",
          name: "Tables",
          component: () => import("../view/Tables.vue"),
        },
        {
          path: "/ui-elements",
          name: "UIElements",
          component: () => import("../view/UIElements.vue"),
        },
        {
          path: "/modal",
          name: "Modal",
          component: () => import("../view/Modal.vue"),
        },
        {
          path: "/charts",
          name: "Chart",
          component: () => import("../view/Chart.vue"),
        },
        { path: "/:pathMatch(.*)*", component: NotFound },
        // {
        //   path: "",
        //   name: "Home",
        //   component: () => import("../pages/home/Home.vue"),
        // },
      ],
    },
    {
      path: "/guest",
      component: Guest,
      meta: { isGuest: true },
      children: [
        {
          path: "register",
          name: "Register",
          component: () => import("../pages/auth/Register.vue"),
        },
        {
          path: "login",
          name: "Login",
          component: () => import("../pages/auth/Login.vue"),
        },
        {
          path: "reset-password",
          name: "ResetPassword",
          component: () => import("../pages/auth/ResetPassword.vue"),
        },
        {
          path: "account-recovery",
          name: "AccountRecovery",
          component: () => import("../pages/auth/AccountRecovery.vue"),
        },
      ],
    },
  ];
  

// Create a new VueRouter instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Export the router instance for use in your Vue application
export default router;
