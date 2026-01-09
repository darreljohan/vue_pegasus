import { defineStore } from "pinia";

const useStore = defineStore(
    'logStore',
    {
        state(){
            return{
               log:[]
            }
        },
    }
);

export default useStore