import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/HomeView.vue";
import CounterComponent from "@/components/CounterComponent.vue";

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
    }
  ]
})

export default router;