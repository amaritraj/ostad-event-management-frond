import axios from "axios";

const apiUrl = "http://localhost:3000";

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const publicApi = ["/events"];

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && !publicApi.includes(config.url)) {
    config.headers.Authorization = {
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
});

export default api;
