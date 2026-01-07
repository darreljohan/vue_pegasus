<template>
    <button 
        v-if="!isLink" 
        @click="event" 
        class="base-button"
        :class="{active : isActive}"
    >
        <slot></slot>
    </button>
    <router-link v-else :to="link" class="base-button">
        <slot></slot>
    </router-link>
</template>

<script setup>
const props = defineProps({
    isLink: {default: false},
    link: {default: "javascript:;"},
    event: {required: false},
    isActive: {required: false}
})
</script>

<style scoped>
.base-button{
    display: inline-flex;
    background-color: var(--primary-color);
    color: var(--light-color);
    text-decoration: none;
    height: 32px;
    align-items: center;
    padding: 0 12px;
    border-radius: 6px;
    cursor: pointer;
    box-sizing: border-box;
    border: solid 1px #006266;
}

.base-button:hover, .base-button.active{
    color: var(--primary-color);
    background-color: white;
}

:deep(i:first-child) {
    margin-right: 10px;
}
</style>