<template>
    <div class="the-layout">
        <the-header></the-header>
        <base-title :title="titleStore.title" :detail="titleStore.detail"></base-title>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import TheHeader from './TheHeader.vue'
import { useRoute } from 'vue-router';
import useStore from '../../store/title/title-store';

const titleStore = useStore()
const route = useRoute()

</script>

<style lang="scss" scoped>

</style>