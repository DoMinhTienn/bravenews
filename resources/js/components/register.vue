<template>
    <div class="container">
        <div class="login-container">
            <div class="form-login">
                <div class="form-content">
                    <div class="form-content-title">ĐĂNG KÝ</div>
                    <form @submit.prevent="authStore.login(username, password)">
                        <div class="field input-field">
                            <input type="text" class="input-login" placeholder="username" v-model="username">
                        </div>
                        <div class="field input-field">
                            <input :type="isPasswordVisible ? 'text' : 'password'" class="input-login" placeholder="password" v-model="password">
                            <font-awesome-icon :icon="isPasswordVisible ? ['far', 'eye-slash'] : ['far', 'eye']" class="eye-icon" @click="isPasswordVisible = !isPasswordVisible"/>
                        </div>
                        <div class="field input-field">
                            <input :type="isPasswordVisible ? 'text' : 'password'" class="input-login" placeholder="password" v-model="password">
                            <font-awesome-icon :icon="isPasswordVisible ? ['far', 'eye-slash'] : ['far', 'eye']" class="eye-icon" @click="isPasswordVisible = !isPasswordVisible"/>
                        </div>
                        <div class="field input-field">
                            <button type="submit">Đăng nhập</button>
                        </div>
                        
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
import { useAuthStore } from '../../stores/auth';

const isPasswordVisible = ref(false);
const authStore = useAuthStore();


</script>