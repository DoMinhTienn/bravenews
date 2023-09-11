/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import { createPinia } from 'pinia'
import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import router from './router.js';
import App from './layouts/App.vue'
import './../sass/app.scss'
import Cookies from 'js-cookie';
import { useAuthStore } from '../stores/auth';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faEye, faCircleUser, faEyeSlash} from '@fortawesome/free-regular-svg-icons'
import { faSearch, faChevronDown, faGear, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faSearch, faEye, faChevronDown, faCircleUser, faGear, faArrowRightFromBracket, faEyeSlash)
const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(createPinia())

    
const authStore = useAuthStore();

if (Cookies.get('access_token')){
    authStore.setLoggedInStatus(true);
    authStore.getUser();
}

app.mount('#app')
