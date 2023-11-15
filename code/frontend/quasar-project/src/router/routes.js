const routes = [
  {
    path: "/main",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/workslot",
        component: () => import("pages/WorkSlotList.vue"),
      },
      {
        path: "/userPage",
        component: () => import("pages/UserPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [{ path: "/", component: () => import("pages/LoginPage.vue") }],
  },
  {
    path: "/signup",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      { path: "/signup", component: () => import("pages/SignupPage.vue") },
    ],
  },
  {
    path: "/profile",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ProfilePage.vue") }],
  },
 
  {
    path: "/slotForm",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/SlotForm.vue") },
    ],
  },
  {
    path: "/student",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Home.vue") }],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
