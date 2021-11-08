import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mail from "../views/Mail.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Home",
        },
    },
    {
        path: "/mail",
        name: "Mail",
        component: Mail,
        meta: {
            title: "Mail",
        },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "Login",
        },
    },
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | MailChips`;
    next();
});

export default router;
