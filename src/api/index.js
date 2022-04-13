import axiosInstance from "./axiosInstance"

export const RegisterSubscription = (body) => axiosInstance.post(`/subscription/`, body);

const api = {
  RegisterSubscription
}

export default api;