import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PageNotFroundview from "@/views/PageNotFroundview.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";

const routes = [
  {
    name: "homepage",
    path: "/",
    component: HomeView,
  },
  {
    name: "not-found",
    path: "/:pathMatch(.*)*",
    component: PageNotFroundview
  },
  
  {
    name: "about",
    path: "/about",
    component: AboutView
  },

  {
    name: "projects",
    path: "/projects",
    component: ProjectsView
  }
];


export const router = createRouter({
  history: createWebHistory(),
  routes,
});