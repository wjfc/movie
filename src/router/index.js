import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
let routes = [
    {
        path: "/",
        component:  resolve => require(["../components/Home.vue"], resolve),
        children: [
            {
              path: "/in_theaters", name: "in_theaters", component: resolve => require(["../views/in_theaters.vue"], resolve)
            },
            {
              path: "/new_movies", name: "new_movies", component: resolve => require(["../views/new_movies.vue"], resolve)
            },
             {
              path: "/top250", name: "top250", component: resolve => require(["../views/top250.vue"], resolve)
            },
             {
              path: "/weekly", name: "weekly", component: resolve => require(["../views/weekly.vue"], resolve)
            },
             {
              path: "/coming_soon", name: "coming_soon", component: resolve => require(["../views/coming_soon.vue"], resolve)
            },
        ]
    }
];
const router = new Router({
    mode: "history",
    routes: routes
});
export default router;