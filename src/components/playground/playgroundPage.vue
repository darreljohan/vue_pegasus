<template>
    <base-card v-for="bit of data">{{ bit }}</base-card>
</template>

<script setup>

const data = JSON.parse(localStorage.getItem('dataCache'))

</script>

<style scoped>

</style>