import { defineStore } from "pinia";
import actions from "./actions";

const useStore = defineStore(
    'passengerOnBoardStore',
    {
        state(){
            return{
                grid : [],
                titleDetail : "", 
                pagination:{
                    page: 1,
                    totalPages: null,
                },
                filter:{
                    scheduleId: null
                }
            }
        },
        actions
    }
);

export default useStore
