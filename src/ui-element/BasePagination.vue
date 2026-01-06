<template>
    <div class="base-pagination">
        <div class="info">
            {{`Page ${page} of ${totalPages}`}}
        </div>
        <div class="button-container">
            <base-button :event="()=>{firstPage()}" :isActive="page == 1">
                <i class="fas fa-angle-double-left"></i>
                <span>First</span>
            </base-button>
            <base-button v-if="page - 1 > 1" :event="()=>{page-1}">
                {{ page -1 }}
            </base-button>
            <base-button v-if="page != 1":event="()=>{selectPage(page)}" :isActive="true">
                {{ page }}
            </base-button>
            <base-button v-if="page + 1 <= totalPages" :event="()=>{selectPage(page+1)}">
                {{ page + 1 }}
            </base-button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['page', 'totalPages', 'selectPage', 'firstPage', 'lastPage']);
</script>

<style scoped>
.base-pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.base-pagination > .info {
    color: #006266;
    font-weight: bold;
}
</style>