import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CeeVeeView from "@/views/CeeVeeView.vue";
import TestView from "@/views/TestView.vue";
import LatinView from "@/views/LatinView.vue";
import WritersView from "@/views/WritersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/ceevee",
      name: "ceevee",
      component: CeeVeeView
    },
    {
      path: "/test",
      name: "test",
      component: TestView
    },
    {
      path: "/latin",
      name: "latin",
      component: LatinView
    },
    {
      path: "/writer",
      name: "writer",
      component: WritersView
    }
  ]
})

export default router;