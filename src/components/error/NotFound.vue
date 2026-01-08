<template>
    <div class="not-found">
        <base-card>
            <div class="logo">
                <img src="../../assets/logo.png" alt="pegasus">
                <span>PEGASUS</span>
            </div>
            <h1>404 Page Not Found</h1>
            <p>The Page you are looking for doesn't exist or another error occured.</p>
            <base-button :isLink="true" :link="'/'">Go Back To Landing Page</base-button>
        </base-card>
    </div>
</template>

<script setup>

</script>

<style scoped>
.not-found {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

.not-found .base-card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.logo {
    color: #006266;
    font-weight: bold;
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo img {
    height: 40px;
}

.not-found h1 {
    color: #006266;
    font-size: 20px;
    margin: 40px 0 10px 0;
}

.not-found p {
    color: #006266;
    font-size: 16px;
    margin: 0 0 40px 0;
}
</style>