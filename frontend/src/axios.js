import axios from "axios";

//base_url
const instance = axios.create({
    //baseURL
    baseURL: 'http://localhost:8000/'
    // Header
    // timeout
})
export default instance;