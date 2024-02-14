import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CounterComponent from "@/views/CounterComponent.vue";
import CeeVeeView from "@/views/CeeVeeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/counter",
      name: "counter",
      component: CounterComponent
    },
    {
      path: "/ceevee",
      name: "ceevee",
      component: CeeVeeView
    },
  ]
})

export default router;