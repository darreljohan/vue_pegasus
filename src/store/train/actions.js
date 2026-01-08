import axios from "axios";
import Swal from "sweetalert2";
export default {
    async getTrainDropdown(){
        let trainDropdownResponse = await axios.get(`/train/dropdown`)
        return trainDropdownResponse.data
    },
    async refreshGrid(){
        let response = await axios.get('/train',{
            params:{
                page: this.pagination.page,
                name : this.filter.name
            }
        })
        this.grid = response.data.content
        this.pagination.totalPages = response.data.pageable.pageSize 
    },
    async findById(id){
        let response = await axios.get(`/train/one/${id}`)
        if(response.data == ''){
            router.push('/notFound')
            return
        }
        return response.data
    },
    async upsert({ payload, keyName }) {
        let method = "post";
        
        if (payload[keyName]) {
            method = "put";
        }

        let response = await axios[method]("/train", payload);

        return response;
    },
    async deleteById({code}){
        let response = await axios.delete(`/train/${code}`)

        if(response.status == 409){
            Swal.fire({
                title:'Conflict Error',
                text:'Train still have one or more schedule exist',
                allowOutsideClick:false,
                confirmButtonColor:  '#006266'
            });
        }
        
        return response
    }
}