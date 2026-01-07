<template>
    <div class="base-card">
        <slot></slot>
    </div>
</template>

<style scoped>
.base-card{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-color: white;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 8px;
}
.base-card:first-child{
    margin-top: 0;
}
.base-card:last-child{
    margin-bottom: 0;
}
</style>