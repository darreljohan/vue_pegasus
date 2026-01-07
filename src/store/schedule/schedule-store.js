import { defineStore } from "pinia";
import actions from "./actions";

const useStore = defineStore(
    'scheduleStore',
    {
        state(){
            return{
                grid : [],
                pagination:{
                    page: 1,
                    totalPages: null,
                },
                filter:{
                    trainName: "",
                    deptStation: "",
                    deptTime : null,
                    trainClass: ""
                }
                
            }
        },
        actions
    }
);

export default useStore