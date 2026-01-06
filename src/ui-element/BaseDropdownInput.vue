<template>
   <div class="row">
        <div class="label">{{ label  }}</div>
        <div class="value">
           <select 
                v-model=model 
                class="base-dropbox" 
                @change="changeEvent"
            >
                <option value=""></option>
                <option 
                    v-for="option of options"
                    :value="option.value"
                    :key="option.value"
                >{{ option.text  }}</option>
           </select>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';

let model = defineModel()
let props = defineProps([
    'label',
    'options',
    'changeEvent'
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

.base-dropbox {
    width: 206px;
    height: 26px;
    border: solid #95a5a6 1px;
    border-radius: 4px;
}

@media screen and (max-width: 440px) {
    .base-dropbox{
        width: 166px;
    }
}
</style>