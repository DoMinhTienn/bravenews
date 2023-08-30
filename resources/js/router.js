import {createRouter, createWebHistory } from 'vue-router';
import home from './components/home.vue'
import login from './components/login.vue'
import register from './components/register.vue'
import { useAuthStore } from '../stores/auth';

const isAuth = async (to, from, next) => {
    const authStore = useAuthStore();
    if(authStore.isLoggedIn) {
        next('/');
    } else{
        next();
    }
    
}


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
        beforeEnter: isAuth,
    },
    {
        path: '/register',
        component: register,
        name: 'Register',
        beforeEnter: isAuth,
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async(to, from, next) => {
    const authStore = useAuthStore();
    await authStore.getUser();
    next();
   
});



export default router;