<template>
   <div class="validation-message">{{ message }}</div>
</template>

<script setup>
const props = defineProps(['message'])
</script>

<style scoped>
.validation-message {
    background-color: #e74c3c;
    color: white;
    margin: 5px 0;
    padding: 6px;
    border-radius: 4px;
    font-size: 12px;
}
</style>