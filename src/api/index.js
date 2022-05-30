import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/search',
})

export default axiosInstance;