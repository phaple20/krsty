import Vue from "vue";
import Router from "vue-router";
import home from "./Home";
import mandMobile from 'mand-mobile';

Vue.use(mandMobile)
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: home
        }
    ]
});