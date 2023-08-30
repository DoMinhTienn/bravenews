<template>
    <div class="container">
        <div class="login-container">
            <div class="form-login">
                <div class="form-content">
                    <div class="form-content-title">ĐĂNG NHẬP</div>
                    <form @submit.prevent="handleLogin">
                        <div class="field input-field">
                            <input type="text" class="input-login" placeholder="username" v-model="username">
                        </div>
                        <div class="field input-field">
                            <input :type="isPasswordVisible ? 'text' : 'password'" class="input-login"
                                placeholder="password" v-model="password">
                            <font-awesome-icon :icon="isPasswordVisible ? ['far', 'eye-slash'] : ['far', 'eye']"
                                class="eye-icon" @click="isPasswordVisible = !isPasswordVisible" />
                        </div>
                        <div class="field input-field">
                            <button type="submit" @click="isLoading = true">Đăng nhập</button>
                        </div>
                        <loading :active="isLoading" :is-full-page="fullPage"></loading>
                    </form>
                    <div class="form-link">
                        <span>Bạn chưa có tài khoản? </span>
                        <RouterLink to="/register">Đăng ký</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '../router';
import Cookies from 'js-cookie';
import axios from '../axios';
import Loading from "vue-loading-overlay";
import { useAuthStore } from '../../stores/auth';
import 'vue-loading-overlay/dist/css/index.css';

const isPasswordVisible = ref(false);
const username = ref();
const password = ref();
const authStore = useAuthStore();
const isLoading = ref(false);
const fullPage = ref(true);

const handleLogin = async () => {
    try {
        const res = await axios.post('/login', {
            username: username.value,
            password: password.value
        })

        authStore.isLoggedIn = true;
        Cookies.set('access_token', res.data.access_token);
        router.push('/')
    } catch {
        console.log(1)
    }
    finally {
        setTimeout(() => {
            isLoading.value = false;
        }, 1000)
    }


}


</script>