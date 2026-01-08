import axios from "axios";

export default {
   async refreshGrid(){
      let response = await axios.get(`/passenger/onBoard/${this.filter.scheduleId}`,{
      params:{
         page: this.pagination.page
      }
      })
      this.grid = response.data.content
      this.pagination.totalPages = response.data.pageable.pageSize
   },

   async refreshTitleDetail(){
      let response = await axios.get(`/schedule/one/${this.filter.scheduleId}`)
      
      let [train, trainStation] = await Promise.all([
         this.enrichTrainCode(response.data.trainCode),
         this.enrichTrainStation(response.data.arrivalStationId)
      ])
      
      this.titleDetail = `${train.name} to ${trainStation.name}`
   },

   async deleteById({scheduleId, username}){
       const response = await axios.delete(`/board`,{
            params:{
                scheduleId : scheduleId,
                username : username
            }
        })
   },
   async enrichTrainCode(trainCode) {
      let trainCodeResponse = await axios.get(`/train/one/${trainCode}`);
      return trainCodeResponse.data;
   },

     async enrichTrainStation(trainStation) {
    let trainStationResponse = await axios.get(`/trainStation/${trainStation}`);
    return trainStationResponse.data;
  },
}