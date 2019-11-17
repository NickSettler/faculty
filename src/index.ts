import "./index.scss";

import Vue from "vue";
import VueRouter from "vue-router";
import MainComponent from "./components/main/main.vue";
import TopicsComponent from "./components/topics/topics.vue";
import AppComponent from "./components/app/app.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: MainComponent },
    { path: "/topics", component: TopicsComponent },
];

const router = new VueRouter({
    mode: "history",
    routes
});

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/service-worker.js')
//         .then(function (registration) {
//             console.log('Registration successful, scope is:', registration.scope);
//         })
//         .catch(function (error) {
//             console.log('Service worker registration failed, error:', error);
//         });
// }


// router.

// class App{
//     private instance: Vue;
//     private routes = [
//         {path: "/", component: MainComponent},
//         {path: "/topics", component: MainComponent}
//     ]
//     private router: VueRouter;

//     private init(){
//         this.router = new VueRouter({
//             routes: this.routes
//         });
//         this.instance = new Vue({
//             router: this.router
//         }).$mount("#app");
//     }

//     constructor(){
//         this.init();
//     }
// }

// new App();



const app = new Vue({
    render: h => h(AppComponent),
    router: router
}).$mount("#app");