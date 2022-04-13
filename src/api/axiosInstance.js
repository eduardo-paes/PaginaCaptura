import axios from "axios"

const axiosInstance = axios.create({ 
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api/" 
});

axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default axiosInstance;