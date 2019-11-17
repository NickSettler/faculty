<template>
    <header class="header">
        <router-link class="header-title" to="/">
            Faculty
        </router-link>
        <nav class="header-nav">
            <router-link class="header-link" to="/topics">Темы</router-link>
            <router-link class="header-link" to="/students">Студенты</router-link>
            <router-link class="header-link" to="/auth">Авторизация</router-link>
        </nav>
    </header>
</template>

<script src="./header.ts" lang="ts"></script>
<style src="./header.scss"></style>