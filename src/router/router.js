import { createRouter } from "vue-router"
import { createWebHistory } from "vue-router"

import HomePage from "@/views/HomePage.vue"
import PortfolioPage from "@/views/PortfolioPage.vue"
import ContactPage from "@/views/ContactPage.vue"
import NotFound from "@/views/NotFound.vue"

const routes = [
    {
        path: '/',
        name: "Home",
        component: HomePage
    },
    {
        path: '/creations',
        name: "Créations",
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
    routes
})

export default router