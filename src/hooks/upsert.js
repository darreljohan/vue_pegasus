import { ref } from "vue";
import router from "../router";

export default ({
    store, idKey, closeLink
})=>{
    const input = ref({});
    const validation = ref({});

    const submit = async()=>{
        validation.value = {};
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