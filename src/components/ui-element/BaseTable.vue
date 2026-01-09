<template>
   <table class="base-table">
        <thead>
            <tr>
                <slot name="customHeader"></slot>
                <th v-for="header of headerList" :key="header.key">{{ header.label }}</th>
            </tr>
        </thead>
        <tbody >
            <tr v-for="data in datas">
                <slot name="customCell" :data="data"></slot>
                <td 
                    v-for="header of headerList"
                    :key="header.key"    
                >{{ data[header.key] }}</td>
            </tr>
        </tbody>    
    </table>
</template>

<script setup>
    const props = defineProps(['headerList', 'datas'])
</script>

<style  scoped>
.base-table {
    width: 100%;
    border-collapse: collapse;
}

.base-table thead th, :deep(th) {
    text-align: left;
    padding: 10px;
    color: #16a085;
}

.base-table tbody td, :deep(td) {
    padding: 10px;
    border-bottom: #16a085 solid 1px;
}

.base-table tbody td:first-child {
    border-bottom: none;
}
</style>