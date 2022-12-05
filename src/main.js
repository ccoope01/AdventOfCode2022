
import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import App from './App.vue'
import Dashboard from './components/Dashboard.vue'
import Day1 from './components/Day1.vue'
import Day2 from './components/Day2.vue'
import Day3 from './components/Day3.vue'
import Day4 from './components/Day4.vue'

const routes = [
    { path: '/', component: Dashboard },
    { path: '/home', component: Dashboard },
    { path: '/day1', component: Day1 },
    { path: '/day2', component: Day2 },
    { path: '/day3', component: Day3 },
    { path: '/day4', component: Day4 }
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes // short for `routes: routes`
})
const app = Vue.createApp(App)
app.use(router)
app.mount('#app')
