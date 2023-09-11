<template>
    <div class="container">
        <div class="login-container">
            <div class="form-login">
                <div class="form-content">
                    <div class="form-content-title">ĐĂNG KÝ</div>
                    <form @submit.prevent="handleRegister" @click="err = false">
                        <div class="field input-field">
                            <input type="text" placeholder="name" v-model="name">
                        </div>
                        <div class="field input-field">
                            <input type="text" placeholder="username" v-model="username">
                        </div>
                        <div class="field input-field">
                            <input :type="isPasswordVisible ? 'text' : 'password'" class="input-login"
                                placeholder="password" v-model="password">
                            <font-awesome-icon :icon="isPasswordVisible ? ['far', 'eye-slash'] : ['far', 'eye']"
                                class="eye-icon" @click="isPasswordVisible = !isPasswordVisible" />
                        </div>
                        <div class="field input-field">
                            <input :type="isPasswordVisible1 ? 'text' : 'password'" placeholder="confirm password"
                                v-model="confirm_password">
                            <font-awesome-icon :icon="isPasswordVisible1 ? ['far', 'eye-slash'] : ['far', 'eye']"
                                class="eye-icon" @click="isPasswordVisible1 = !isPasswordVisible1" />
                        </div>
                        <div class="field input-field">
                            <button type="submit" @click="isLoading = true">Đăng ký</button>
                        </div>
                        <loading :active="isLoading" :is-full-page="fullPage"></loading>
                    </form>
                    <div class="eror-message" v-if="err"> {{ errMsg }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';
import router from '../router';
import Loading from "vue-loading-overlay";
import 'vue-loading-overlay/dist/css/index.css';


import axios from '../axios';
const name = ref();
const username = ref();
const password = ref();
const confirm_password = ref();
const isPasswordVisible = ref(false);
const isPasswordVisible1 = ref(false);
const isLoading = ref(false);
const fullPage = ref(true);
const authStore = useAuthStore();
const err = ref(false);
const errMsg = ref();

const handleRegister = async () => {
    try {

        if (username.value === confirm_password.value) {
            const res = await axios.post('/register', {
                name: name.value,
                username: username.value,
                password: password.value
            })
            router.push('/login')
        }
        else {
            throw new Error("Mật khẩu không giống. Vui lòng kiểm tra lại ");
        }

    } catch (error) {
        err.value = true;
        errMsg.value = error;
    }
    finally {
        isLoading.value = false;
        // setTimeout(() => {
        //     isLoading.value = false;
        // }, 1000)
    }
}


</script>