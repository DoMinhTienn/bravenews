<template>
    <div>
        Home
    </div>
</template>
<script setup>
import Cookies from 'js-cookie';
import { useAuthStore } from '../../stores/auth';
import axios from '../axios';

const authStore = useAuthStore()

</script> 