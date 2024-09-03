import { createRouter } from "vue-router"
import { createWebHistory } from "vue-router"

import NotFound from "@/components/NotFound.vue"
import HomePage from "@/components/HomePage.vue"
import PortfolioPage from "@/components/PortfolioPage.vue"
import ContactPage from "@/components/ContactPage.vue"

const routes = [
    {
        path: '/',
        name: "Home",
        component: HomePage
    },
    {
        path: '/creation',
        name: "Creation",
        component: PortfolioPage
    },
    {
        path: '/contact',
        name: "Contact",
        component: ContactPage
    },
    {
        path: '/:notFound',
        component: NotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition;
        }
        if (to.hash) {
          return { el: to.hash };
        }
        return { x: 0, y: 0 };
      }
});

export default router