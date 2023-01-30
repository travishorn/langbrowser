import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LanguageView from "@/views/LanguageView.vue";
import ParadigmView from "@/views/ParadigmView.vue";
import PurposeView from "@/views/PurposeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/language/:name",
      name: "language",
      component: LanguageView,
    },
    {
      path: "/paradigm/:name",
      name: "paradigm",
      component: ParadigmView,
    },
    {
      path: "/purpose/:name",
      name: "purpose",
      component: PurposeView,
    },
  ],
});

export default router;
