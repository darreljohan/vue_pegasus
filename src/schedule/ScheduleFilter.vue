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
        </div>
    </base-card>
</template>

<script setup>

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