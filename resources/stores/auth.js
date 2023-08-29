import {defineStore} from 'pinia'
import axios from '../js/axios.js';
import Cookies from 'js-cookie';
import router from '../js/router.js';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authUser: null,
        isLoggedIn: false
    }),
    getters: {
        user: (state) => state.authUser
    },
    actions: {
        async getToken() {
            Cookies.get('access_token');
        },
        async login(username, password) {
            this.isLoggedIn = true,
            await axios.post('/login', {
                username: username,
                password: password
            }).then((data) => {
                Cookies.set('access_token', data.data.access_token)
                
            })
            router.push('/')
        },
        async getUser() {
            if(this.isLoggedIn) {
                const data = await axios.get('/user');
                this.authUser = data.data
            }
           
        },
        setLoggedInStatus(status) { // Thêm action để cập nhật trạng thái đăng nhập
            this.isLoggedIn = status;
        },
        async logout() {
            this.isLoggedIn = false;
            this.authUser = null;
            await axios.post('/logout');
            Cookies.remove("access_token")
        }
    }
})