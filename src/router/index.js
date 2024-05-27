import { createWebHistory, createRouter } from "vue-router";
import Main from "@/views/Main.vue";
import Coffies from "@/views/Coffies.vue";
import About from "@/views/About.vue";

const routes = [
    {
        path: "/main",
        name: "Main",
        component: Main,
    },
    {
        path: "/coffies",
        name: "Coffies",
        component: Coffies,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;