<template>
    <base-dialog>
        <base-dropdown-input
            :label="'Train *'"
            :options="train"
        ></base-dropdown-input>
         <base-dropdown-input
            :label="'Class *'"
            :options="train"
        ></base-dropdown-input>
         <base-dropdown-input
            :label="'Dept. Station *'"
            :options="train"
        ></base-dropdown-input>
         <base-dropdown-input
            :label="'Arr. Station *'"
            :options="train"
        ></base-dropdown-input>
        <base-date-input
            :label="'Dept. Time *'"
            :modelBinder="'date'"
        ></base-date-input>
        <base-text-input
            :label="'Cost'"
            :modelBinder="'cost'"
        ></base-text-input>
    </base-dialog>
</template>

<script setup>
import { ref } from 'vue';

let train = ref([
    {
        value: 'ANJ',
        text: 'Anjasmara'
    }
])
</script>

<style scoped>

</style>