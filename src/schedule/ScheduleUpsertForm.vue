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
        <div class="form-button-container">
            <base-button>
                <i class="fas fa-save"></i>
                <span>Save</span>
            </base-button>
            <base-button
                :isLink="true"
                :link="'/schedule'"
            >
                <i class="fas fa-times"></i>
                <span>Cancel</span>
            </base-button>
        </div>
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
.form-button-container {
    text-align: right;
}
</style>