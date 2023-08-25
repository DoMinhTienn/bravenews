<template>
    <div>
        Home
        <button @click="handle">aaa</button>
        <div v-if="authStore.user">
        <h1> {{authStore.user.name}} </h1>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';
import axios from '../axios';

const authStore = useAuthStore()

const handle  = async () => {
    console.log(1123)
    await axios.post('/logout').then((res) => {console.log(res)})
   Cookies.remove("access_token")
    

}



onMounted(async () => {
    await authStore.getUser();

})
</script>