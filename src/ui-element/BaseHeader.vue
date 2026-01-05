<template>
    <div class="base-header">
        <div class="label">
            <slot name="label"></slot>
        </div>
        <div class="value">
            <slot name="value"></slot>
        </div>
    </div>
</template>

<style scoped>
.base-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;
    margin: 20px auto;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-color: white;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 8px;
}

@media screen and (max-width: 1300px) {
    .base-header {
        width: 90%;
        margin: 10px auto;
    }
}

@media screen and (max-width: 1024px) {
    .base-header{
        width: 100%;
        margin-top: 0;
        border-bottom:solid 1px #bdc3c7;
    }
}

@media screen and (max-width: 840px) {
    .base-header{
        flex-direction: column;
        row-gap: 10px;
    }
}
</style>