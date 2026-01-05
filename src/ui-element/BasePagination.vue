<template>
    <div class="base-pagination">
        <div class="info">
            Page 6 of 6
        </div>
        <div class="button-container">
            <base-button>
                <i class="fas fa-angle-double-left"></i>
                <span>First</span>
            </base-button>
            <base-button>
                5
            </base-button>
            <base-button>
                6
            </base-button>
        </div>
    </div>
</template>

<script setup>

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