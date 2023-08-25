<template>
    <div class="header">
        <div class="container">
            <div class="header-row">
                <div class="logo col-2 col-md-2">
                    <RouterLink to="/"><img class="header-image" src="./../../static/images/logo.png" /></RouterLink>
                </div>
                <div class="header-search col-3">
                    <form action="#">
                        <input type="text" placeholder="Search" class="search-input"/>
                        <button class="search-button" type="submit"><font-awesome-icon icon="fa-solid fa-search" /></button>
                    </form>
                </div>
                <div class="header-account col-7"> <RouterLink to="/login"><font-awesome-icon icon="fa-regular fa-user" /></RouterLink></div>
            </div>
        </div>
    </div>
    <RouterView></RouterView>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>