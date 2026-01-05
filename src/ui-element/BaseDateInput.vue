<template>
     <div class="row">
        <div class="label">{{ label  }}</div>
        <div class="value">
            <input :value="modelBinder" class="base-datepicker" type="date">
        </div>
    </div>
</template>

<script setup>
const props = defineProps([
    'label',
    'modelBinder'
])
</script>

<style scoped>
.row {
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}


.row > .label {
    color: #16a085;
    font-weight: bold;
    min-width: 110px;
    padding-right: 15px;
}

.base-datepicker {
    width: 203px;
    height: 24px;
    border: solid #95a5a6 1px;
    border-radius: 4px;
}

@media screen and (max-width: 440px) {
    .base-datepicker{
        width: 160px;
    }
}
</style>