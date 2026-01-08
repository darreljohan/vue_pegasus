<template>
    <h1>
        {{ title }}
        <span class="header">{{ detail }}</span>
    </h1>
</template>

<script setup>
let props = defineProps(['title', 'detail'])
</script>

<style  scoped>
h1 {
    color: #006266;
    text-align: center;
    display: block;
    margin: 30px 0;
}

.header {
    color: #EE5A24;
}
</style>