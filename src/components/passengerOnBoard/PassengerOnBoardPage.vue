<template>
    <base-title :title="'Passenger of'" :detail="titleDetail"></base-title>
    <main>
        <base-card>
            <base-table
                :headerList="headerList"
                :datas="formattedGrid"
            >
                <template v-slot:customHeader>
                    <th>Action</th>
                </template>
                <template v-slot:customCell="slotProps">
                    <base-button :event="()=>deleteHandler({scheduleId: id, username: slotProps.data.username})">Remove</base-button>
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
</template>

<script setup>
import { computed, onBeforeMount, onBeforeUpdate, ref } from 'vue';
import usePassengerOnBoardStore from '../../store/passengerOnBoard/passengerOnBoard-store';
import { storeToRefs } from 'pinia';
import usePagination from '../../hooks/pagination'
import useDelete from '../../hooks/delete'
import useScheduleStore from '../../store/schedule/schedule-store';

const passengerOnBoardStore = usePassengerOnBoardStore()
const scheduleStore = useScheduleStore()
const props = defineProps(['id'])
let {grid, pagination, titleDetail} = storeToRefs(passengerOnBoardStore)

const headerList = ref([
    {key: 'username', label: 'Username'},
    {key: 'fullname', label: 'Full Name'},
])

const { selectPage, firstPage, lastPage } = usePagination(passengerOnBoardStore);


const { deleteHandler } = useDelete({
  store: passengerOnBoardStore,
  closeLink: "/passengerOnBoard",
})


const formattedGrid = computed(()=>{
    return grid.value.map(user=>{
        return {
            username : user.username,
            fullname : `${user.firstName} ${user.lastName}`
        }
    })
})

onBeforeMount(async ()=>{
    scheduleStore.findById(props.id)
    
    passengerOnBoardStore.filter.scheduleId = props.id
    await passengerOnBoardStore.refreshTitleDetail()
    await passengerOnBoardStore.refreshGrid()
})
</script>

<style scoped>
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