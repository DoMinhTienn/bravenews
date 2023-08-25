import {createRouter, createWebHistory } from 'vue-router';
import home from './components/home.vue'
import login from './components/login.vue'
import register from './components/register.vue'


const routes = [
    {
        path: '/',
        component: home,
        name: 'Home',
    },
    {
        path: '/login',
        component: login,
        name: 'Login',
    },
    {
        path: '/register',
        component: register,
        name: 'Register',
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;