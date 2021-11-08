import Vue from "vue";
import router from "./vue/router";
import App from "./vue/app.vue";

const app = new Vue({
    router,
    el: "#app",
    components: {
        App,
    },
});
