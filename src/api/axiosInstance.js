import axios from "axios"

const axiosInstance = axios.create({ 
  baseURL: process.env.REACT_APP_API_URL || "https://subscription-server-rp.herokuapp.com/api/" 
});

axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default axiosInstance;