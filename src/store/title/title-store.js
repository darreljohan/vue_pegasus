import { defineStore } from "pinia";

const useStore = defineStore(
    'titleStore',
    {
        state(){
            return{
               title: null,
               detail: null
            }
        },
    }
);

export default useStore