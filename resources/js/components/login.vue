<template>
    <div class="container">
        <div class="login-container">
            <div class="form-login">
                <div class="form-content">
                    <div class="form-content-title">ĐĂNG NHẬP</div>
                    <form @submit.prevent="Login">
                        <div class="field input-field">
                            <input type="text" class="input-login" placeholder="username" v-model="username">
                        </div>
                        <div class="field input-field">
                            <input type="password" class="input-login" placeholder="password" v-model="password">
                            <font-awesome-icon icon="fa-regular fa-eye" class="eye-icon"/>
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
import router from './../router.js'
import Cookies from 'js-cookie';
import axios from '../axios.js';
import { ref } from 'vue';

const username = ref()
const password = ref()

const Login = async () => {
    await axios.post('/login', {
        username: username.value,
        password: password.value
    }).then((data) => {
        console.log(data.data)
        Cookies.set('access_token', data.data.access_token)

        console.log(Cookies.get('access_token'))
    })
    const data2 = await axios.get('/user');
    console.log(data2)
    
}


</script>