<template>
    <base-title :title="'Train'"></base-title>
    <main>
        <base-button :isLink="true" , :link="'/train/form'">
            <i class="fas fa-plus"></i>
            <span>Insert New</span>
        </base-button>
        <train-filter></train-filter>
        <base-card>
            <base-table
                :headerList="headerList"
                :datas="grid"
            >
                <template v-slot:customHeader>
                    <th>Action</th>
                    <th>Code</th>
                </template>
                <template v-slot:customCell="slotProps">
                    <td>
                      <base-button :isLink="true" :link="`/train/form/s${slotProps.data.code}`">Update</base-button>
                      <base-button :isLink="true" :link="`/train/delete/${slotProps.data.code}`">Remove</base-button>
                    </td>
                    <td @click="()=>{storeInLocal(slotProps.data)}">{{ slotProps.data.code }}</td>
                </template>
            </base-table>
        </base-card>
        <base-card>
            <base-pagination
                :page="pagination.page"
                :totalPages="pagination.totalPages"
                :selectPage="selectPage"
                :firstPage="firstPage"
                :lastPage="lastPage"
            ></base-pagination>
        </base-card>
    </main>
    <teleport to="body">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
  </teleport>
</template>

<script setup>
import TrainFilter from './TrainFilter.vue';
import { onBeforeMount, ref } from 'vue';
import useTrainStore from '../../store/train/train-store';
import { storeToRefs } from 'pinia';
import usePagination from '../../hooks/pagination'

const trainStore = useTrainStore()
const headerList = ref([
    {key: 'code', label: 'Code'},
    {key: 'name', label: 'Name'},
    {key: 'maxPassengers', label: 'Max Passengers'},
    {key: 'description', label: 'Description'}
])

let {grid, pagination} = storeToRefs(trainStore)
const { selectPage, firstPage, lastPage } = usePagination(trainStore);

const storeInLocal = (data)=>{
  let dataCache = localStorage.getItem('dataCache')
  dataCache = JSON.parse(dataCache)
  dataCache??=[]
  dataCache.push(JSON.stringify(data))
  localStorage.setItem('dataCache', JSON.stringify(dataCache))
}

onBeforeMount(async ()=>{
    await trainStore.refreshGrid()
})

</script>

<style  scoped>
main {
  width: 65%;
  margin: 20px auto;
}

main > * {
  margin-top: 15px;
}

@media screen and (max-width: 1300px) {
  main {
    width: 90%;
    margin: 10px auto;
  }
}

@media screen and (max-width: 1024px) {
  main {
    width: 100%;
  }
}
</style>