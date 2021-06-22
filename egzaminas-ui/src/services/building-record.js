import axios from "axios";

const API_URL = "http://localhost:8080/api/record/";

class BuildingRecordService {
    createBuildingRecord(body) {
        return axios.post(API_URL + "create", body);
    }

    getAllBuildingRecords() {
        return axios.get(API_URL + "getrecords");
    }

    deleteBuildingRecordById(id) {
        return axios.delete(API_URL + "delete/" + id);
    }

    calculateOwnersTax(personalNumber) {
        return axios.post(API_URL + "getownerstax/" + personalNumber);
    }

    updateBuildingRecord(id, body) {
        return axios.put(API_URL + "update/" + id, body);
    }

    getBuildingById(id) {
        return axios.get(API_URL + "building/" + id);
    }
}

export default new BuildingRecordService();
