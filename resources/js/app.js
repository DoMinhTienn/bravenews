/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createPinia } from 'pinia'
import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css'
import router from './router.js';
import App from './layouts/App.vue'
import './../sass/app.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faEye} from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faSearch, faEye)

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(createPinia())
    .mount('#app')
