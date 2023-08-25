import {defineStore} from 'pinia'
import axios from '../js/axios.js';
import Cookies from 'js-cookie';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authUser: null
    }),
    getters: {
        user: (state) => state.authUser
    },
    actions: {
        async getToken() {
            Cookies.get('access_token');
        },
        async getUser() {
            const data = await axios.get('/user');
            this.authUser = data.data


            
        }
    }
})