<template>
    <div class="header">
        <div class="container">
            <div class="header-row">
                <div class="logo col-6 col-sm-4 col-lg-2">
                    <!-- <RouterLink to="/"><img class="header-image" src="./../../static/images/logo.png" /></RouterLink> -->
                </div>
                <div class="header-search col-sm-4 col-lg-3">
                    <form action="#">
                        <input type="text" placeholder="Search" class="search-input" />
                        <button class="search-button" type="submit"><font-awesome-icon :icon="['fas', 'search']" /></button>
                    </form>
                </div>
                <div v-if="!authStore.isLoggedIn" class="header-account col-6 col-sm-4 col-lg-7">
                    <RouterLink to="/login"><font-awesome-icon icon="fa-regular fa-user" /></RouterLink>
                </div>
                <div v-else class="header-account col-6 col-sm-4 col-lg-7">
                    <div class="dropdown" @click="toggleDropdown"><font-awesome-icon icon="fa-regular fa-user" />
                        <font-awesome-icon :icon="['fas', 'chevron-down']" /></div>
                </div>
            </div>
        </div>
        <div class="dropdown_menu" v-if="isDropdownOpen">
                <ul>
                    <li class="dropdown_item" @click="toggleDropdown">
                        <RouterLink to="/"><font-awesome-icon :icon="['far', 'circle-user']" />Thông tin cá nhân
                        </RouterLink>
                    </li>
                    <li class="dropdown_item" @click="toggleDropdown">
                        <RouterLink to="/"><font-awesome-icon :icon="['fas', 'gear']" /> Cài đặt</RouterLink>
                    </li>
                    <li class="dropdown_item" @click="toggleDropdown"><button @click="authStore.logout"><font-awesome-icon
                                :icon="['fas', 'arrow-right-from-bracket']" />Đăng xuất</button></li>
                </ul>
            </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();
const isDropdownOpen = ref(false)

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
}


</script>