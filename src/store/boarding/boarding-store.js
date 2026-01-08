import { defineStore } from "pinia";
import actions from "./actions";

const useStore = defineStore(
    'boardingStore',
    {
        state(){
            return{
                grid : [],
                titleDetail:null,
                pagination:{
                    page: 1,
                    totalPages: null,
                },
                filter:{
                    username:null,
                    trainName: null,
                    deptStation: null,
                    deptTime : null,
                    trainClass: null
                }
            }
        },
        actions
    }
);

export default useStore
