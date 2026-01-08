import axios from "axios";
import router from "../../router";

export default {
  async refreshGrid() {
    console.log("refresh");
    const response = await axios.get(`/schedule`, {
      params: {
        trainName: this.filter.trainName,
        departureStation: this.filter.deptStation,
        departureTime: this.filter.deptTime,
        classCode: this.filter.trainClass,
        page: this.pagination.page,
      },
    });

    // let cleanSchedule = [];
    // for (let schedule of response.data.content) {
    //   let enrichedSchedule = await this.enrichSchedule(schedule)
    //   cleanSchedule.push(enrichedSchedule);
    // }

    let cleanSchedule = await Promise.all(
      response.data.content.map((schedule) => {
        return this.enrichSchedule(schedule);
      })
    );

    this.grid = cleanSchedule;
    this.pagination.totalPages = response.data.totalPages;
  },

  async enrichSchedule(schedule) {
    const [
      trainData,
      trainClass,
      onboardSchedule,
      departureStation,
      arrivalStation,
    ] = await Promise.all([
      this.enrichTrainCode(schedule.trainCode),
      this.enrichTrainClass(schedule.trainClassCode),
      this.enrichOnboardSchedule(schedule.id),
      this.enrichTrainStation(schedule.departureStationId),
      this.enrichTrainStation(schedule.arrivalStationId),
    ]);

    let arrivalTime = new Date(schedule.departureTime);
    arrivalTime = new Date(
      arrivalTime.setMinutes(arrivalTime.getMinutes() + schedule.duration)
    );

    return {
      id: schedule.id,
      trainName: trainData.name,
      class: trainClass.name,
      minPassengers: onboardSchedule.totalElements,
      maxPassengers: trainData.maxPassengers,
      cost: schedule.cost,
      deptStation: departureStation.name,
      deptTime: new Date(schedule.departureTime),
      arrStation: arrivalStation.name,
      arrTime: arrivalTime,
      duration: schedule.duration,
    };
  },

  async upsert({ payload, keyName }) {
    let method = "post";
    if (payload[keyName]) {
      method = "put";
    }

    if (payload.departureTime) {
      payload.departureTime = new Date(payload.departureTime)
        .toISOString()
        .slice(0, 16);
    }

    let response = await axios[method]("/schedule", payload);

    return response;
  },

  async findById(id) {
    let response = await axios.get(`/schedule/one/${id}`);

    if(response.data == ''){
      router.push('/notFound')
      return
    }
    return response.data;
  },

  async deleteById({id}) {
    let response = await axios.delete(`/schedule/${id}`);
    return response;
  },

  async enrichTrainCode(trainCode) {
    let trainCodeResponse = await axios.get(`/train/one/${trainCode}`);
    return trainCodeResponse.data;
  },

  async enrichTrainClass(trainClassCode) {
    let trainClassResponse = await axios.get(`/trainClass/${trainClassCode}`);
    return trainClassResponse.data;
  },
  async enrichOnboardSchedule(scheduleId) {
    let onboardSchedule = await axios.get(`/passenger/onBoard/${scheduleId}`);
    return onboardSchedule.data;
  },
  async enrichTrainStation(trainStation) {
    let trainStationResponse = await axios.get(`/trainStation/${trainStation}`);
    return trainStationResponse.data;
  },
  async getTrainClassDropdown() {
    let trainDropdownResponse = await axios.get("/trainClass");
    return trainDropdownResponse.data;
  },
};
