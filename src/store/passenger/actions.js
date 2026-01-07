import axios from "axios";

export default {
    async refreshGrid(){
        let response = await axios.get('/passenger',{
            params:{
                firstName: this.firstName,
                lastName: this.lastName,
                page : this.pagination.page
            }
        })
        this.grid = response.data.content
        this.pagination.totalPages = response.data.pageable.pageSize
        debugger
    }
}