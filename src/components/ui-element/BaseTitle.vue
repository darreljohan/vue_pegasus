<template>
    <h1>
        {{ title }}
    </h1>
</template>

<script setup>
let props = defineProps(['title'])
</script>

<style  scoped>
h1 {
    color: #006266;
    text-align: center;
    display: block;
    margin: 30px 0;
}
</style>