
import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import App from './App.vue'
import Dashboard from './components/Dashboard.vue'
import Day1 from './components/Day1.vue'

const routes = [
    { path: '/', component: Dashboard },
    { path: '/home', component: Dashboard },
    { path: '/day1', component: Day1 }
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes // short for `routes: routes`
})
const app = Vue.createApp(App)
app.use(router)
app.mount('#app')
