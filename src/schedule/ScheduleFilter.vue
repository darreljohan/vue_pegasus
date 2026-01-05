<template>
    <base-card>
        <div class="filter-container">
            <h2>Filter By</h2>
            <base-text-input 
                :label="'Train Name'" 
                :modelBinder="'Put Model Here'"
            ></base-text-input>
            <base-text-input 
                :label="'Dept Station'" 
                :modelBinder="'Put Model Here'"
            ></base-text-input>
            <base-date-picker
                :label="'Dept. Time'"
                :modelBinder="'Put Model Here'"
            ></base-date-picker>
            <base-dropdown-input
                :label="'Class'"
                :options="options"
            ></base-dropdown-input>
        </div>
    </base-card>
</template>

<script setup>
import {onBeforeMount, ref} from 'vue'

let options = ref([
    {
        value: 'ECO',
        text: 'Economy Class'
    },
    {
        value : 'BU',
        text: 'Business Class'
    },
    {
        value : "FC",
        text: 'FirstClass'
    }
])


</script>

<style scoped>
:deep(.base-card) {
    margin-top: 15px;
}

.filter-container > h2 {
    font-size: 14px;
    font-style: italic;
    color: #006266;
    margin: 10px 0 20px 0;
}

</style>