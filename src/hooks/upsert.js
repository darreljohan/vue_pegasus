import { ref } from "vue";
import router from "../router";

export default ({
    store, idKey, closeLink
})=>{
    const input = ref({});
    const validation = ref({});

    const emptyFieldChecker = ()=>{
        for( const [key, value] of  Object.entries(input.value)){
            if(value == null){
                debugger
                validation.value[key]??= [];
                validation.value[key].push("Cannot be empty")
            }
        }
        return Object.keys(validation.value).lenght > 0 ||  Object.keys(validation.value).lenght == undefined
    }

    const submit = async()=>{
        debugger;
        validation.value = {};
        if(!emptyFieldChecker()){
            return
        };
        let response = await store.upsert({
            payload: {...input.value},
            keyName: idKey
        })

        if (response.status == 422) {
            for (let validate of response.data) {
                if (validate.field == null) {
                    validation.value.otherMessages ??= [];
                    validation.value.otherMessages.push(validate.defaultMessage);
                }
                validation.value[validate.field] ??= [];
                validation.value[validate.field].push(validate.defaultMessage);
            }
        }else if(response.status == 200 || response.status == 201){
            router.push(closeLink)
        }

        store.refreshGrid();
    }

    return{
        input,
        validation,
        submit
    }
}