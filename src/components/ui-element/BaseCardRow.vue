<template>
    <base-card class="base-card">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </base-card>
</template>

<script setup>

</script>

<style scoped>

.base-card {
    display: flex;
    justify-content: flex-start;
}

div{
    flex-grow: 1;
}

:deep(.row) {
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}

:deep(.row > .label){
    color: #16a085;
    font-weight: bold;
    min-width: 110px;
    padding-right: 15px;
}

:deep(.row > .value){
    padding: 0 15px;
    min-width: 150px;
}
</style>