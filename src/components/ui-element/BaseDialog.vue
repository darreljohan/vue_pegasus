<template>
    <div class="base-modal">
        <div class="base-dialog">
            <header>
                <h3>{{ title }}</h3>
                <router-link :to="link" class="close-button" >
                    <i class="fas fa-times"></i>
                </router-link>
            </header>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['link', 'title'])
</script>

<style scoped>
.base-modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
}
.base-dialog {
    display: block;
    background-color: white;
    padding: 15px;
    min-width: 300px;
    border-radius: 6px;
}
.base-dialog header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.base-dialog header > h3 {
    margin: 0;
    color: #006266;
}
.close-button {
    background-color: #c0392b;
    color: white;
    border: none;
    cursor: pointer;
    display: inline-flex;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

</style>