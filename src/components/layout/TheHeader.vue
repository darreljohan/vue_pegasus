<template>
     <base-header>
          <template v-slot:label :class="logo">
               <img src="../../assets/logo.png" alt="logo" class="logo">
               <span>PEGASUS</span>
          </template>
          <template v-slot:value>
               <base-button :isLink="true" :link="'/schedule'" >Schedules</base-button>
               <base-button :isLink="true" :link="'/passenger'" >Passengers</base-button>
               <base-button :isLink="true" :event="()=>{}" >Train</base-button>
          </template>
     </base-header>  
</template>

<script setup>

</script>

<style scoped>
:deep(.label){
    color: var(--primary-color);
    font-weight: bold;
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo{
     height: 40px;
}


</style>