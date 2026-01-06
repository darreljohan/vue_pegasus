<template>
    <div class="row">
        <div class="label">{{ label  }}</div>
        <div class="value">
            <input
                v-model="model" 
                class="base-textbox" 
                type="text" 
                @change="changeEvent"    
            >
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';

const props = defineProps([
    'label',
    'modelValue',
    'changeEvent'
])

const model = defineModel()


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

.base-textbox {
    width: 200px;
    height: 22px;
    border: solid #95a5a6 1px;
    border-radius: 4px;
}

@media screen and (max-width: 440px) {
    .base-textbox{
        width: 160px;
    }
}
</style>