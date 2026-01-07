import axios from "axios";

export default {
    async refreshGrid(){

        let response = await axios.get('/passenger',{
            params:{
                firstName: this.filter.firstName,
                lastName: this.filter.lastName,
                page : this.pagination.page
            }
        })
        this.grid = response.data.content
        this.pagination.totalPages = response.data.pageable.pageSize
    },
    async upsert({payload, keyName}){
        let method = "post";
        if (payload[keyName]) {
            method = "put";
        }
        let response = await axios[method]("/passenger", payload);
        return response;
    },

    async findById(username){
        let response = await axios.get(`/passenger/one${username?`/${username}`:''}`)
        return response.data
    },

    async deleteById(username){
        debugger
        let response = await axios.delete(`/passenger/${username}`)
        return response
    }
}