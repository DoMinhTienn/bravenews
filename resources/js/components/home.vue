<template>
    <div>
        Home
        <RouterLink to="/register"><font-awesome-icon icon="fa-regular fa-user" /></RouterLink>
        <button @click="authStore.logout">aaa</button>
        <div v-if="authStore.user">
        <h1> {{authStore.user.name}} </h1>
        </div>
    </div>
</template>
<script setup>
import Cookies from 'js-cookie';
import { useAuthStore } from '../../stores/auth';
import axios from '../axios';

const authStore = useAuthStore()



</script>