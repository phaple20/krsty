import Vue from "vue";
import Router from "vue-router";
import home from "./Home";

Vue.use(Router);
console.log(2)
export default new Router({
    routes: [
        {
            path: "/",
            component: home
        }
    ]
});