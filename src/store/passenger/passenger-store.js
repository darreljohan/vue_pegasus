import { defineStore } from "pinia";
import actions from "./actions";

const useStore = defineStore(
    'passengerStore',
    {
        state(){
            return{
                grid : [],
                pagination:{
                    page: 1,
                    totalPages: null,
                },
                filter:{
                    firstName:null,
                    lastName:null
                }
            }
        },
        actions
    }
);

export default useStore
